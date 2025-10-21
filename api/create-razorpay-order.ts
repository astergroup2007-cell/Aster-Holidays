import type { VercelRequest, VercelResponse } from '@vercel/node';
// FIX: Changed import to a namespace import and used a type assertion to handle the CommonJS module.
import * as Razorpay from 'razorpay';
import crypto from 'crypto';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const razorpay = new (Razorpay as any)({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });

    const { amount } = req.body;

    if (!amount || typeof amount !== 'number') {
        return res.status(400).json({ error: 'Amount is required and must be a number.' });
    }

    const options = {
      amount, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `receipt_order_${crypto.randomBytes(4).toString('hex')}`,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).json({ error: 'Failed to create order' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
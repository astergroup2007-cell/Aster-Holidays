import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // This is a placeholder to allow deployment without the Razorpay dependency.
  // It simulates a successful order creation.
  const { amount } = req.body;
  const mockOrder = {
    id: `mock_order_${Date.now()}`,
    entity: 'order',
    amount: amount || 50000, // Default amount in paise
    amount_paid: 0,
    amount_due: amount || 50000,
    currency: 'INR',
    receipt: `mock_receipt_${Date.now()}`,
    status: 'created',
    attempts: 0,
    notes: [],
    created_at: Math.floor(Date.now() / 1000),
  };

  res.status(200).json(mockOrder);
}

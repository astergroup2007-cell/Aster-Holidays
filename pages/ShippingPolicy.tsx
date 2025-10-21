import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Shipping / Booking Delivery Policy — Aster Holidays</h1>
        <p><strong>Last updated: October 2025</strong></p>

        <p>Aster Holidays operates entirely online. We do not ship physical products. All travel documents are delivered digitally.</p>

        <h2>1. Digital Delivery</h2>
        <p>Once your booking is confirmed and full payment is received:</p>
        <ul>
            <li>You will receive a booking confirmation email and/or WhatsApp message within 24–48 hours.</li>
            <li>All documents such as e-tickets, hotel vouchers, itineraries, and receipts will be shared electronically.</li>
        </ul>

        <h2>2. Contact Details</h2>
        <p>It is the customer’s responsibility to provide accurate email address and phone number at the time of booking. Aster Holidays will not be responsible for undelivered documents due to incorrect contact information.</p>

        <h2>3. Delivery Timeline</h2>
        <ul>
            <li>Domestic packages: usually delivered within 24 hours of booking confirmation.</li>
            <li>International packages: within 48 hours of booking confirmation.</li>
            <li>In rare cases, delays may occur due to airline or hotel system updates.</li>
        </ul>
        
        <h2>4. Non-Receipt of Documents</h2>
        <p>If you have not received your booking confirmation or vouchers within the stated time, please contact our support team at:</p>
        <ul>
            <li>📧 Email: <a href="mailto:reservation@asterholidays.in">reservation@asterholidays.in</a></li>
            <li>📞 Phone: <a href="tel:+917047514663">+91 7047514663</a></li>
        </ul>
        <p>We will re-send your documents promptly.</p>

        <h2>5. No Physical Shipping</h2>
        <p>We do not provide physical tickets, brochures, or documents. All deliveries are handled digitally for convenience and eco-friendliness.</p>

        <h2>6. Policy Updates</h2>
        <p>Aster Holidays reserves the right to amend this Shipping/Booking Delivery Policy from time to time. Updates will be posted on this page.</p>

      </div>
    </div>
  );
};

export default ShippingPolicy;
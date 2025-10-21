import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Cancellation &amp; Refund Policy — Aster Holidays</h1>
        <p><strong>Last updated: October 2025</strong></p>

        <p>At Aster Holidays, we value your trust and are committed to providing transparent, fair, and customer-friendly policies. Please read the following carefully before making any booking.</p>

        <h2>1. General Policy</h2>
        <p>All bookings made through Aster Holidays are subject to our terms and conditions. By confirming a booking, you acknowledge and agree to our cancellation and refund policy.</p>

        <h2>2. Cancellation by the Customer</h2>
        <p>If you wish to cancel your booking, please notify us in writing via email or through our customer support contact form. The following charges will apply:</p>
        <ul>
          <li>30 days or more before departure: ₹500 per person or 10% of total booking amount (whichever is higher).</li>
          <li>15–29 days before departure: 25% of the total booking cost.</li>
          <li>7–14 days before departure: 50% of the total booking cost.</li>
          <li>Less than 7 days before departure: 100% cancellation charge (no refund).</li>
        </ul>
        <p><strong>Note:</strong> Certain services such as flight tickets, visa fees, or hotel bookings with “non-refundable” terms are fully non-refundable regardless of the cancellation date.</p>

        <h2>3. Cancellation by Aster Holidays</h2>
        <p>Aster Holidays reserves the right to cancel or modify any tour or service due to unforeseen circumstances such as natural disasters, government restrictions, strikes, or technical issues. In such cases, we will:</p>
        <ul>
          <li>Offer an alternate tour/date, or</li>
          <li>Provide a refund, deducting only unavoidable expenses (if any).</li>
        </ul>
        
        <h2>4. Refund Process</h2>
        <p>Refunds (if applicable) will be processed within 10–15 working days from the date of cancellation approval.</p>
        <p>Refunds will be credited to the original payment method used during booking.</p>
        <p>Aster Holidays is not responsible for delays caused by the customer’s bank, payment gateway, or other intermediaries.</p>

        <h2>5. No-Show Policy</h2>
        <p>Failure to show up on the day of travel without prior notice will result in no refund.</p>

        <h2>6. Contact for Cancellations &amp; Refunds</h2>
        <p>For cancellation requests or refund inquiries, please contact:</p>
        <ul>
            <li>📧 Email: <a href="mailto:reservation@asterholidays.in">reservation@asterholidays.in</a></li>
            <li>📞 Phone: <a href="tel:+917047514663">+91 7047514663</a></li>
            <li>🕒 Working hours: Monday–Saturday, 10 AM – 6 PM (IST)</li>
        </ul>

        <h2>7. Policy Updates</h2>
        <p>Aster Holidays reserves the right to modify or update this policy at any time without prior notice. Please review this page periodically for changes.</p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
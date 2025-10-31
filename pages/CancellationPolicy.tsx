import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Cancellation &amp; Refund Policy</h1>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>1. Overview</h2>
        <p>
          At Aster Holidays.in, we strive to provide a transparent and fair booking experience. This policy outlines the terms for cancellations and refunds for all tour packages, hotel bookings, and other services purchased on our website. By making a booking with us, you agree to this Cancellation &amp; Refund Policy.
        </p>
        <p>
          All payments are processed through Razorpay, and our refund process is aligned with their guidelines to ensure a secure and reliable transaction.
        </p>

        <h2>2. Cancellation Policy</h2>
        <p>
          To cancel your booking, you must submit a cancellation request in writing. Please email us at <a href="mailto:reservation@asterholidays.in">reservation@asterholidays.in</a> or call our support team at <a href="tel:+917047514663">+91 7047514663</a> with your booking details.
        </p>
        <p>
          Cancellation charges are applied based on the number of days before your scheduled departure date:
        </p>
        <ul>
          <li><strong>30 days or more before departure:</strong> A cancellation fee of ₹500 per person or 10% of the total booking amount (whichever is higher) will be charged.</li>
          <li><strong>15 to 29 days before departure:</strong> 25% of the total booking cost will be charged as a cancellation fee.</li>
          <li><strong>7 to 14 days before departure:</strong> 50% of the total booking cost will be charged as a cancellation fee.</li>
          <li><strong>Less than 7 days before departure:</strong> 100% of the booking cost will be charged (no refund).</li>
        </ul>

        <h2>3. Refund Policy</h2>
        <p>
          Once we receive and approve your cancellation request, any applicable refund will be processed.
        </p>
        <ul>
          <li><strong>Refund Method:</strong> All refunds will be credited back to the original payment method used at the time of booking via Razorpay (e.g., credit card, debit card, NetBanking, UPI). We do not provide cash refunds.</li>
          <li><strong>Processing Timelines:</strong> Refunds will be initiated from our end within <strong>5–10 business days</strong> of the cancellation approval. Please note that it may take additional time for the funds to reflect in your account, depending on your bank or card issuer's policies.</li>
          <li><strong>Partial Refunds:</strong> In cases of partial cancellations or modifications, the refund amount will be calculated based on the policy above and the value of the services cancelled.</li>
        </ul>

        <h2>4. Non-Refundable Items/Services</h2>
        <p>
          Please be aware that certain services are non-refundable, regardless of when you cancel. These include, but are not limited to:
        </p>
        <ul>
          <li><strong>Flight Tickets:</strong> Airline tickets are subject to the carrier's own cancellation and refund policies. Many promotional or economy fares are strictly non-refundable.</li>
          <li><strong>Visa Fees:</strong> Any fees paid for visa processing are non-refundable.</li>
          <li><strong>Non-Refundable Hotel Bookings:</strong> Bookings for hotels that are explicitly marked as "non-refundable" at the time of reservation.</li>
          <li><strong>Services Already Used:</strong> No refunds will be provided for any services that have already been delivered or utilized, such as a completed hotel night or a tour that has already taken place.</li>
          <li><strong>Processing &amp; Convenience Fees:</strong> Any convenience or processing fees charged at the time of booking are non-refundable.</li>
        </ul>
        
        <h2>5. Cancellation by Aster Holidays</h2>
        <p>
          In the rare event that we have to cancel a tour or service due to unforeseen circumstances (e.g., natural disasters, political instability, or operational issues), we will provide you with two options:
        </p>
        <ol>
            <li>A full refund of the amount you have paid.</li>
            <li>An alternative tour package of a similar standard. If the new package is of lower value, we will refund the difference.</li>
        </ol>

        <h2>6. Disputes</h2>
         <p>
            We encourage you to contact us directly to resolve any issues before raising a dispute with Razorpay. Our team is dedicated to finding a fair solution.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          For any questions regarding cancellations and refunds, please do not hesitate to contact our customer support team:
        </p>
        <ul>
            <li><strong>Email:</strong> <a href="mailto:reservation@asterholidays.in">reservation@asterholidays.in</a></li>
            <li><strong>Phone:</strong> <a href="tel:+917047514663">+91 7047514663</a></li>
            <li><strong>Working Hours:</strong> Monday – Saturday, 10:00 AM to 6:00 PM (IST)</li>
        </ul>
      </div>
    </div>
  );
};

export default CancellationPolicy;

import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Terms & Conditions</h1>
        
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Aster Holidays.in. By accessing or using our website/mobile application to book travel services (flights, hotels, properties), you agree to be bound by these Terms and Conditions. If you do not agree, please do not proceed.
        </p>

        <h2>2. Services Offered</h2>
        <p>
          Aster Holidays.in provides travel services including, but not limited to:
        </p>
        <ul>
          <li>Flight booking (via third-party APIs such as Cleartrip)</li>
          <li>Hotel and property reservations</li>
          <li>Travel packages</li>
        </ul>
        <p>All services are subject to availability and confirmation.</p>

        <h2>3. Payments & Razorpay Gateway</h2>
        <p>
          We use Razorpay for secure online payments. By completing a booking, you authorize Aster Holidays.in to charge your payment method via Razorpay. Razorpay uses secure SSL encryption and PCI-DSS compliant technology to ensure safe transactions.
        </p>
        <p><strong>Accepted Payment Methods:</strong></p>
        <ul>
          <li>Credit/Debit Cards</li>
          <li>UPI</li>
          <li>Net Banking</li>
          <li>Wallets (as supported by Razorpay)</li>
        </ul>

        <h2>4. Booking Confirmation</h2>
        <p>
          All bookings are subject to confirmation via email or SMS. For flight bookings, confirmation is based on data retrieved from Cleartrip’s API. Hotel/property bookings are confirmed only after successful payment.
        </p>

        <h2>5. Cancellation & Refund Policy</h2>
        <p>
          Cancellations must be made through our platform or customer service. Refund eligibility depends on the specific airline or property policy. Aster Holidays.in may deduct applicable service charges or non-refundable fees. Refunds will be processed through Razorpay within 7–10 business days.
        </p>

        <h2>6. Data Privacy</h2>
        <p>
          We collect personal data like name, contact details, and travel preferences to fulfill your bookings. Payment details are handled securely via Razorpay and are not stored on our servers. For more information, please refer to our <Link to="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Aster Holidays.in is not responsible for delays, cancellations, or service issues from third-party providers (like airlines or hotels). We act as an intermediary platform and cannot be held liable for issues beyond our control.
        </p>

        <h2>8. Dispute Resolution</h2>
        <p>
          In case of disputes related to payments or bookings, please contact us at <a href="mailto:asterhpolidays2007@gmail.com">asterhpolidays2007@gmail.com</a>. We will coordinate with Razorpay or the respective service provider to resolve the issue.
        </p>
        
        <h2>Contact Information</h2>
        <p>For any questions or concerns regarding these terms or your bookings, please contact us:</p>
        <ul>
            <li><strong>Company Name:</strong> Aster Holidays.in</li>
            <li><strong>Phone:</strong> <a href="tel:+917047514663">+91 7047514663</a></li>
            <li><strong>Email:</strong> <a href="mailto:asterhpolidays2007@gmail.com">asterhpolidays2007@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
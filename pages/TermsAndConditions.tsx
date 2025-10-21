import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Terms and Conditions</h1>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Bookings and Payments</h2>
        <p>
          All bookings are subject to availability. Prices are subject to change without notice. Full payment is required at the time of booking to confirm your reservation. We accept payments through Razorpay, a third-party payment gateway. Your payment information is processed securely.
        </p>

        <h2>3. Cancellations and Refunds</h2>
        <p>
          Cancellation policies vary depending on the hotel or airline. Please review the specific cancellation policy for your booking at the time of reservation. Refunds, if applicable, will be processed according to the provider's policy.
        </p>

        <h2>4. User Responsibilities</h2>
        <p>
          You are responsible for providing accurate and complete information for all bookings. You must also ensure that you have all necessary travel documents, such as passports and visas. Aster Holidays.in is not responsible for any issues arising from incorrect information or lack of proper documentation.
        </p>
        
        <h2>5. Limitation of Liability</h2>
        <p>
          Aster Holidays.in acts as an intermediary between you and the travel service providers (e.g., hotels, airlines). We are not liable for any errors, omissions, injuries, losses, or damages arising from the services provided by these third parties.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
        </p>
        
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:asterhpolidays2007@gmail.com">asterhpolidays2007@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-xl">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Aster Holidays.in ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.asterholidays.in and our mobile application.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information that you provide to us directly, such as your name, email address, phone number, and travel preferences when you create an account, make a booking, or contact us for support. We also collect payment information, which is processed securely by our third-party payment gateway, Razorpay.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Process and manage your bookings and payments.</li>
          <li>Communicate with you about your reservations and inquiries.</li>
          <li>Send you marketing and promotional communications, with your consent.</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <ul>
            <li><strong>Service Providers:</strong> Hotels, airlines, and other travel partners to fulfill your booking.</li>
            <li><strong>Payment Processors:</strong> Razorpay processes your payment information securely. We do not store your full credit card details.</li>
            <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
        </p>

        <h2>6. Your Data Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can update your account information by logging into your account or by contacting us directly.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us:
        </p>
        <ul>
            <li><strong>Company Name:</strong> Aster Holidays.in</li>
            <li><strong>Phone:</strong> <a href="tel:+917047514663">+91 7047514663</a></li>
            <li><strong>Email:</strong> <a href="mailto:reservation@asterholidays.in">reservation@asterholidays.in</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
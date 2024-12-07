import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) =>
    setExpandedSection(expandedSection === section ? null : section);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Page Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Effective Date: January 1st, 2025</p>
        </header>

        {/* Intro Section */}
        <section className="mb-8">
          <p className="text-gray-700 leading-7">
            At Fitfusion, we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, disclose, and protect the
            information you provide when using our app. By using Fitfusion, you agree to the terms
            of this Privacy Policy.
          </p>
        </section>

        {/* Expandable Sections */}
        {[
          {
            id: 1,
            title: "1. Information We Collect",
            content: (
              <>
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>1.1 Personal Information:</strong> Name, email address, phone number,
                    and other contact details. Body measurements, body shape, clothing preferences,
                    and style preferences provided during profile setup.
                  </li>
                  <li>
                    <strong>1.2 Usage Data:</strong> Details about how you use the app, such as
                    search history, interactions, and preferences. Device information (e.g., IP
                    address, device type, operating system).
                  </li>
                  <li>
                    <strong>1.3 Payment Information:</strong> If you make purchases through
                    Fitfusion, we collect payment details like credit/debit card information through
                    secure payment gateways.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 2,
            title: "2. How We Use Your Information",
            content: (
              <>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>To personalize your experience and provide tailored clothing recommendations.</li>
                  <li>To facilitate Virtual Try-On features using your body profile.</li>
                  <li>To process transactions and manage your purchases.</li>
                  <li>To provide customer support and respond to inquiries.</li>
                  <li>To send updates about new features, collections, or promotional offers.</li>
                  <li>To improve our app by analyzing usage trends and feedback.</li>
                  <li>To ensure compliance with legal and regulatory requirements.</li>
                </ul>
              </>
            ),
          },
          {
            id: 3,
            title: "3. Sharing Your Information",
            content: (
              <>
                <p>We may share your information in the following scenarios:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>3.1 With Designers and Retailers:</strong> When you interact with
                    designers or retailers through the app, we share relevant details to fulfill
                    your request.
                  </li>
                  <li>
                    <strong>3.2 With Third-Party Service Providers:</strong> For payment processing,
                    analytics, customer support, or other operational functions.
                  </li>
                  <li>
                    <strong>3.3 Legal Compliance and Protection:</strong> If required by law, court
                    order, or to protect the rights, property, or safety of Fitfusion, our users, or
                    others.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 4,
            title: "4. Data Security",
            content: (
              <>
                <p>We take reasonable precautions to protect your information:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Encryption of sensitive data during transmission and storage.</li>
                  <li>Regular security audits and monitoring.</li>
                  <li>
                    Restricted access to personal data by authorized personnel only.
                  </li>
                </ul>
                <p className="mt-2">
                  However, no method of transmission over the Internet or electronic storage is
                  100% secure. We cannot guarantee absolute security but strive to maintain the
                  highest standards.
                </p>
              </>
            ),
          },
          // Additional sections can follow in the same format
        ].map((section) => (
          <section key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex justify-between items-center text-left text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {section.title}
              <span className="text-gray-500">{expandedSection === section.id ? "-" : "+"}</span>
            </button>
            {expandedSection === section.id && (
              <div className="mt-4 px-6 text-gray-700 leading-7">{section.content}</div>
            )}
          </section>
        ))}

        {/* Contact Section */}
        <footer className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-blue-500 underline mt-2">
            <a href="mailto:getfitfusion@gmail.com">getfitfusion@gmail.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

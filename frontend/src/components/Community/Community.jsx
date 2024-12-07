import React, { useState } from "react";

const sections = [
  {
    id: 1,
    title: "1. Be Respectful",
    content: (
      <>
        <p>
          Treat other users with kindness and respect. We are committed to fostering a positive and
          supportive environment, especially for body positivity and inclusivity.
        </p>
        <p className="mt-2">
          Harassment, hate speech, or discriminatory language is not tolerated. This includes
          comments or behavior targeting others based on race, gender, body type, age, religion, or
          other personal characteristics.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "2. No Offensive or Inappropriate Content",
    content: (
      <>
        <p>
          Do not post or share any content that is obscene, sexually explicit, violent, or
          otherwise inappropriate.
        </p>
        <p className="mt-2">
          Avoid posting false information or misleading content, particularly regarding clothing,
          sizing, or the capabilities of Fitfusion's features (e.g., virtual try-on accuracy).
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "3. Protect Personal Information",
    content: (
      <>
        <p>
          For your safety and privacy, do not share personal information (such as full name,
          address, phone number) in public forums or discussions.
        </p>
        <p className="mt-2">
          Respect the privacy of other users. Never share another user’s personal details or content
          without their consent.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "4. No Spam or Advertising",
    content: (
      <>
        <p>
          Refrain from spamming or using the app to promote products, services, or personal brands
          unless you are an official partner or have permission from Fitfusion.
        </p>
        <p className="mt-2">
          Any posts intended solely for self-promotion, irrelevant advertisements, or selling
          products outside of Fitfusion's intended marketplace will be removed.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "5. Focus on Constructive Feedback",
    content: (
      <>
        <p>
          Engage in discussions in a constructive manner. Offer helpful feedback when commenting on
          clothing items or offering advice to other users.
        </p>
        <p className="mt-2">
          Avoid bullying, trolling, or intentionally disruptive behavior. Users who consistently
          engage in disruptive behavior may have their accounts suspended or banned.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "6. Respect Intellectual Property",
    content: (
      <>
        <p>
          Only post content (photos, videos, etc.) that you own or have the right to share. Do not
          infringe on copyright, trademarks, or any intellectual property rights.
        </p>
        <p className="mt-2">
          If you share your personal looks or outfit creations, please ensure the content is
          original and not taken from other creators or brands without permission.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "7. Report Violations",
    content: (
      <>
        <p>
          If you come across content or behavior that violates these guidelines, please report it to
          us via the “Report” feature available on the app. We will review the issue and take
          necessary actions, which may include removing content, issuing warnings, or suspending
          accounts.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "8. Positive and Inclusive Community",
    content: (
      <>
        <p>
          We encourage discussions around body positivity, fashion inclusivity, and self-expression.
          Share your fashion tips, body positivity stories, and styling advice to inspire others.
        </p>
        <p className="mt-2">
          Be supportive of other users, regardless of their body type or fashion preferences.
          Fitfusion is a place for everyone, and we celebrate diversity in all its forms.
        </p>
      </>
    ),
  },
];

const Community = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">Community Guidelines</h1>
          <p className="text-gray-600 text-lg">Effective Date: January 1st, 2025</p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`bg-gradient-to-r p-6 rounded-lg transition-all ${
                selectedSection === section.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl"
                  : "bg-gradient-to-r from-gray-400 to-gray-500 text-gray-800 hover:shadow-lg"
              } cursor-pointer`}
              onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
            >
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <div className="mt-4 text-lg">
                {selectedSection === section.id && section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

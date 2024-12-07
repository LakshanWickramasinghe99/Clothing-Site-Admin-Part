import React, { useState } from "react";

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      {/* Hero Header */}
      <header className="bg-gray-800 text-white py-12">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="mt-4 text-lg">Effective Date: January 1st, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-10 px-6 lg:px-16">
        <div className="bg-white shadow-lg rounded-lg w-full p-8">
          {/* Accordion Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <section>
              <button
                onClick={() => toggleSection(1)}
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                1. Acceptance of Terms
                <span className="text-gray-500">{activeSection === 1 ? "-" : "+"}</span>
              </button>
              {activeSection === 1 && (
                <div className="mt-3 px-6">
                  <p>
                    By creating an account, downloading, or using Fitfusion, you confirm that you:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Are at least 18 years old or have parental/guardian consent if under 18.</li>
                    <li>Agree to abide by these Terms of Use and any applicable laws.</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Section 2 */}
            <section>
              <button
                onClick={() => toggleSection(2)}
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                2. Description of Services
                <span className="text-gray-500">{activeSection === 2 ? "-" : "+"}</span>
              </button>
              {activeSection === 2 && (
                <div className="mt-3 px-6">
                  <p>Fitfusion provides tools and services to enhance your fashion experience, including:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Personalized fit recommendations.</li>
                    <li>Virtual try-on functionality.</li>
                    <li>Customized style suggestions.</li>
                    <li>Access to stores, designers, and sustainable fashion options.</li>
                    <li>Community features for sharing reviews and feedback.</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Section 3 */}
            <section>
              <button
                onClick={() => toggleSection(3)}
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                3. User Account
                <span className="text-gray-500">{activeSection === 3 ? "-" : "+"}</span>
              </button>
              {activeSection === 3 && (
                <div className="mt-3 px-6">
                  <h3 className="font-medium text-lg">3.1 Registration:</h3>
                  <p>
                    You must create an account to access personalized features. When registering, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Provide accurate and complete information.</li>
                    <li>Keep your login credentials confidential and secure.</li>
                  </ul>
                  <h3 className="font-medium text-lg mt-4">3.2 Account Usage:</h3>
                  <p>
                    You are responsible for all activity under your account. Notify us immediately of unauthorized access or breaches.
                  </p>
                </div>
              )}
            </section>

            {/* Section 4 */}
            <section>
              <button
                onClick={() => toggleSection(4)}
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                4. Use of the App
                <span className="text-gray-500">{activeSection === 4 ? "-" : "+"}</span>
              </button>
              {activeSection === 4 && (
                <div className="mt-3 px-6">
                  <h3 className="font-medium text-lg">4.1 Permitted Use:</h3>
                  <p>You may use Fitfusion for personal, non-commercial purposes.</p>
                  <h3 className="font-medium text-lg mt-4">4.2 Prohibited Use:</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Violate any applicable laws or regulations.</li>
                    <li>Post harmful, obscene, or abusive content in the community sections.</li>
                    <li>Use automated tools (bots, scrapers, etc.) to extract app content.</li>
                    <li>Reverse-engineer, decompile, or attempt to access the app’s source code.</li>
                  </ul>
                </div>
              )}
            </section>

            <section>
  <button
    onClick={() => toggleSection(5)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    5. Intellectual Property
    <span className="text-gray-500">{activeSection === 5 ? "-" : "+"}</span>
  </button>
  {activeSection === 5 && (
    <div className="mt-3 px-6">
      <p>
        All content, design, logos, trademarks, and software within Fitfusion are the exclusive property of
        Fitfusion or its licensors. You may not reproduce, distribute, or modify any part of the app without prior
        permission.
      </p>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(6)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    6. Privacy and Data Protection
    <span className="text-gray-500">{activeSection === 6 ? "-" : "+"}</span>
  </button>
  {activeSection === 6 && (
    <div className="mt-3 px-6">
      <p>
        Our Privacy Policy governs the collection, use, and storage of your data. By using Fitfusion, you consent to
        our practices outlined in the policy. Key highlights include:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Secure storage of body measurements and preferences.</li>
        <li>Transparency in data-sharing with third-party partners for app functionality.</li>
        <li>Your right to control how your data is used or shared.</li>
      </ul>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(7)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    7. Virtual Try-On and Fit Recommendations
    <span className="text-gray-500">{activeSection === 7 ? "-" : "+"}</span>
  </button>
  {activeSection === 7 && (
    <div className="mt-3 px-6">
      <p>Fitfusion’s virtual try-on and fit recommendations are tools to enhance your shopping experience. However:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>These features are estimates and may not guarantee an exact fit.</li>
        <li>Fitfusion is not liable for discrepancies between virtual results and actual garment fit.</li>
      </ul>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(8)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    8. User-Generated Content
    <span className="text-gray-500">{activeSection === 8 ? "-" : "+"}</span>
  </button>
  {activeSection === 8 && (
    <div className="mt-3 px-6">
      <h3 className="font-medium text-lg">8.1 Responsibility:</h3>
      <p>
        You retain ownership of the content you post in the community sections (reviews, comments, etc.), but you
        grant Fitfusion a non-exclusive license to use, reproduce, and distribute your content.
      </p>
      <h3 className="font-medium text-lg mt-4">8.2 Prohibited Content:</h3>
      <p>
        You may not post content that is illegal, defamatory, obscene, or infringes on intellectual property rights.
        Fitfusion reserves the right to remove such content.
      </p>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(9)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    9. Purchases and Payments
    <span className="text-gray-500">{activeSection === 9 ? "-" : "+"}</span>
  </button>
  {activeSection === 9 && (
    <div className="mt-3 px-6">
      <p>If you purchase items or services through Fitfusion:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>You agree to provide accurate payment information.</li>
        <li>
          Fitfusion is not responsible for third-party payment issues, delivery, or quality of purchased items.
        </li>
      </ul>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(10)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    10. Premium Features and Subscriptions
    <span className="text-gray-500">{activeSection === 10 ? "-" : "+"}</span>
  </button>
  {activeSection === 10 && (
    <div className="mt-3 px-6">
      <h3 className="font-medium text-lg">10.1 Subscriptions:</h3>
      <p>
        Payments are billed periodically as per the chosen plan. You may cancel your subscription at any time, but
        fees already paid are non-refundable.
      </p>
      <h3 className="font-medium text-lg mt-4">10.2 Free Trials:</h3>
      <p>
        Certain features may be offered as free trials. Fitfusion reserves the right to end or modify trial
        offerings without prior notice.
      </p>
    </div>
  )}
</section>


<section>
  <button
    onClick={() => toggleSection(11)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    11. Sustainability Features
    <span className="text-gray-500">{activeSection === 11 ? "-" : "+"}</span>
  </button>
  {activeSection === 11 && (
    <div className="mt-3 px-6">
      <p>Green Points and sustainability rewards are provided as part of Fitfusion’s initiatives. These rewards:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Hold no monetary value.</li>
        <li>Are subject to change or cancellation without prior notice.</li>
      </ul>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(12)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    12. Limitations of Liability
    <span className="text-gray-500">{activeSection === 12 ? "-" : "+"}</span>
  </button>
  {activeSection === 12 && (
    <div className="mt-3 px-6">
      <p>Fitfusion is provided "as is" without warranties of any kind:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>We are not liable for technical issues, service interruptions, or inaccuracies in recommendations.</li>
        <li>Fitfusion is not responsible for user interactions with designers, retailers, or third parties.</li>
      </ul>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(13)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    13. Termination of Use
    <span className="text-gray-500">{activeSection === 13 ? "-" : "+"}</span>
  </button>
  {activeSection === 13 && (
    <div className="mt-3 px-6">
      <p>
        Fitfusion reserves the right to suspend or terminate your account if you violate these Terms of Use or engage
        in harmful behavior.
      </p>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(14)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    14. Changes to the Terms
    <span className="text-gray-500">{activeSection === 14 ? "-" : "+"}</span>
  </button>
  {activeSection === 14 && (
    <div className="mt-3 px-6">
      <p>
        Fitfusion may update these terms at any time. We will notify users of significant changes, and continued use
        of the app after such updates constitutes your acceptance of the revised terms.
      </p>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(15)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    15. Governing Law
    <span className="text-gray-500">{activeSection === 15 ? "-" : "+"}</span>
  </button>
  {activeSection === 15 && (
    <div className="mt-3 px-6">
      <p>
        All users, manufacturers, designers, and retailers using Fitfusion must comply with applicable consumer
        protection laws, including:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Accurate labeling and price marking.</li>
        <li>Selling goods at or below marked prices.</li>
        <li>Honoring warranties or guarantees on goods and services.</li>
        <li>Providing clear and truthful descriptions of goods and services, including their quality, style, or model.</li>
        <li>Issuing receipts or proof of purchase upon request.</li>
        <li>Avoiding misleading or deceptive practices in promoting, marketing, or selling goods.</li>
      </ul>
      <p className="mt-4">
        Failure to comply with these obligations may result in the suspension or termination of accounts, removal of
        listed goods, and potential reporting to regulatory authorities.
      </p>
    </div>
  )}
</section>

<section>
  <button
    onClick={() => toggleSection(16)}
    className="w-full text-left flex justify-between items-center text-xl font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg"
  >
    16. Contact Us
    <span className="text-gray-500">{activeSection === 16 ? "-" : "+"}</span>
  </button>
  {activeSection === 16 && (
    <div className="mt-3 px-6">
      <p>For questions or concerns about these Terms of Use, please contact us at:</p>
      <p>Email: <a href="mailto:getfitfusion@gmail.com" className="text-blue-500 underline">getfitfusion@gmail.com</a></p>
    </div>
  )}
</section>

          </div>

          {/* Go Back Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; 2025 Fitfusion. All rights reserved.</p>
          <p>
            <a href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-blue-400 hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;

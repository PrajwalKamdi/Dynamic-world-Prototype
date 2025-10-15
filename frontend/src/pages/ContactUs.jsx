import React from "react";
import ContactUs1 from "../components/ContactUs1.jsx";
import ContactUs2 from "../components/ContactUs2.jsx";
import ContactUs3 from "../components/ContactUs3.jsx";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full text-gray-900 text-sm">
      <main className="w-full px-6 py-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <ContactUs1 />
          <ContactUs2 />
          <ContactUs3 />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;

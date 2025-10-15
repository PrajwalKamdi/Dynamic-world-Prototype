import React, { useEffect, useMemo, useState } from "react";
import DynamicForm from "./DynamicForm";

/**
 * InquiryDetails.jsx (Responsive polish)
 * - Compact mobile typography & spacing
 * - Scales up progressively at sm / lg
 * - Same functionality & validation
 */
const title = "Admission Inquiry Form";
const InquiryDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
        {/* Left Section - Info */}
        <div className="bg-blue-600 text-white flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-prose text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Get Expert Admission Guidance
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
              Complete Your Education Online Anytime, Anywhere, and at Any Age!
              <br className="hidden sm:block" />
              Find{" "}
              <span className="font-semibold">
                50+ Online Universities
              </span>{" "}
              across India and secure your admission with expert help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6 justify-center">
              <a
                href="tel:+917887881060"
                className="bg-white text-blue-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-blue-100 transition-all duration-300 text-sm sm:text-base"
              >
                📞 Quick Call
              </a>
              <a
                href={`https://wa.me/917887881060?text=${encodeURIComponent(
                  "Hi, I’m interested in online admissions. Please guide me."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base text-center"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="mt-5 sm:mt-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                +91 788 788 1060
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Mon–Sat, 9:00 AM–7:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}

        <DynamicForm title={title} />
      </div>
    </div>
  );
};

export default InquiryDetails;

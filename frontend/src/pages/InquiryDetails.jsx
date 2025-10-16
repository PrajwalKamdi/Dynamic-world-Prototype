import React, { useEffect, useMemo, useState } from "react";
import DynamicForm from "./DynamicForm";
import { MessageCircle, Phone } from "lucide-react";

/**
 * InquiryDetails.jsx (Responsive polish)
 * - Compact mobile typography & spacing
 * - Scales up progressively at sm / lg
 * - Same functionality & validation
 */
const title = "Admission Inquiry Form";
const InquiryDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 sm:py-10 lg:py-12 px-2 md::px-6 flex items-center justify-center">
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5 sm:mt-6 justify-center items-center">
              {/* Quick Call Button */}
              <a
                href="tel:+917887881060"
                className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-white text-[#3E96F4] font-semibold text-sm sm:text-base shadow-md ring-1 ring-gray-200 hover:ring-[#3E96F4]/40 hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center bg-[#3E96F4]/10 p-1.5 rounded-full">
                  <Phone
                    size={18}
                    className="text-[#3E96F4] group-hover:rotate-12 transition-transform duration-200"
                  />
                </span>
                Quick Call
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/917887881060?text=${encodeURIComponent(
                  "Hi, I’m interested in online admissions. Please guide me."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#22c55e] hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center bg-white/20 p-1.5 rounded-full">
                  <MessageCircle
                    size={18}
                    className="group-hover:rotate-6 transition-transform duration-200"
                  />
                </span>
                WhatsApp
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

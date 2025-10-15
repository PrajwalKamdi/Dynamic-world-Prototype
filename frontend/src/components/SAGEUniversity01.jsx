import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const SAGEUniversity01 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919779/SAGE_University_-Regular_Admission_dnkhag.svg"
                alt="SAGE University Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain bg-white rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Title + subtitle */}
              <div className="">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                  SAGE University
                </h1>
                <p className="mt-1 text-sm sm:text-[15px] text-white/80">
                  Admission 2025 - About, Courses & Ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="px-8 py-5 text-base">
            {/* Info badges */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Indore
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 2017
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">SAGE University</span>, located in
              Indore and Bhopal, Madhya Pradesh, India, is accredited by NAAC,
              with the Indore campus receiving an A+ grade. It is recognized by
              the University Grants Commission (UGC) and the All India Council
              for Technical Education (AICTE), ensuring the quality and
              legitimacy of its programs. Additionally, the Indore campus is
              approved by the Bar Council of India (BCI), Pharmacy Council of
              India (PCI), and Council of Architecture (COA). This highlights
              the university’s strong academic foundation and diverse
              recognition across various fields.
            </p>
            {/* Calendy Button Placeholder */}
           <CalendyButton/>
          </div>

          {/* RIGHT SECTION - FORM PLACEHOLDER */}
         <DynamicForm title={"Receive expert college counseling at no cost"}/>
        </div>
      </div>
    </div>
  );
};

export default SAGEUniversity01;

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
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919789/Yenepoya_Deemed_to_be_University_-Regular_Admission_y40wjk.svg"
                alt="SAGE University Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain bg-white rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Title + subtitle */}
              <div className="">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Yenepoya University
                </h1>
                <p className="mt-1 text-base  lg:text-xl text-white/80 font-semibold">
                  Admission {new Date().getFullYear()} - About, Courses &
                  Ranking
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
                Mangalore
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 2008
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold"> Yenepoya University</span>,
              located in Mangalore, Karnataka, holds an A+ grade accreditation
              from the National Assessment and Accreditation Council (NAAC) with
              a CGPA of 3.47 (valid from August 2022). The Yenepoya Medical
              College Hospital is NABH-accredited for patient safety and quality
              care, while its labs are certified by NABL and AHA. Ranked 85th in
              the NIRF 2023 rankings, the university was also recognized as the
              4th best Young University in Karnataka by K-SURF in 2019.
            </p>
            {/* Calendy Button Placeholder */}
            <CalendyButton />
          </div>

          {/* RIGHT SECTION - FORM PLACEHOLDER */}
          <DynamicForm title={"Receive expert college counseling at no cost"} />
        </div>
      </div>
    </div>
  );
};

export default SAGEUniversity01;

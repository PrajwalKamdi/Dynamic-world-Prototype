import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const DrAPJAbdulKalamUniversity01 = () => {
  return (
    <div className="min-h-screen w-full bg-white ">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919762/Dr._A.P.J._Abdul_Kalam_University-Regular_Admission_ypz6cc.svg"
                alt="Dr. A.P.J. Abdul Kalam University Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain"
              />
            </div>

            {/* Title + subtitle */}
            <div className="mt-3">
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                Dr. A.P.J. Abdul Kalam University:
              </h1>
              <p className="mt-1 text-lg lg:text-xl text-white/80 font-semibold">
                Admission {new Date().getFullYear()} - About, Courses & Ranking
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="px-8 py-5 text-base">
            {/* Info badges */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
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
                ESTD. 2016
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">
                Dr. APJ Abdul Kalam University
              </span>{" "}
              (APJAKU) in Indore, India, is accredited and approved by esteemed
              organizations like AICTE, PCI, and COA. Its engineering, pharmacy,
              and architecture programs are AICTE, PCI, and COA-certified,
              respectively. The university's B.Ed. program is NCTE-approved,
              while AYUSH accredits its homeopathic and ayurvedic medical
              colleges. APJAKU is also a proud member of AUAP and AIU,
              reflecting its global and national academic affiliations.
            </p>
            {/* Calendy Button Placeholder */}
           <CalendyButton/>
          </div>

          {/* RIGHT SECTION - FORM PLACEHOLDER */}
          <DynamicForm />
        </div>
      </div>
    </div>
  );
};

export default DrAPJAbdulKalamUniversity01;

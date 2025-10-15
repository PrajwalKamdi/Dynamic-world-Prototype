import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Vishweshraiya01 = () => {
  return (
    <div className="text-[#31393C] ">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919786/Vishveshwarya_Group_of_Institutions-Regular_Admission_nzwhe8.svg" // replace with VGI logo URL when available
                alt="Vishweshraiya Group of Institutions Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain bg-white rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
             
              {/* Title + subtitle */}
              <div className="mt-3">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Vishweshraiya Group of Institutions:
                </h1>
                <p className="font-semibold text-sm lg:text-xl text-white/80">
                  Admission {new Date().getFullYear()} - About, Courses &
                  Ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="py-5 text-base">
      
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
                Noida
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 2000
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <strong>Vishveshwarya Group of Institutions (VGI)</strong> in
              Greater Noida, Uttar Pradesh, is accredited by AICTE and
              affiliated with Dr. A.P.J. Abdul Kalam Technical University
              (AKTU). It offers a wide range of courses across various
              disciplines, including Beauty and Fitness, Business, Engineering,
              Law, IT, and more. VGI is approved by several councils such as
              BTEUP, BCI, PCI, and NCTE, ensuring high-quality education. The
              institution is associated with UPTU in Lucknow. VGI aims to
              provide comprehensive education to prepare students for dynamic
              careers.
            </p>

            {/* Calendy Button Placeholder */}
            <CalendyButton />
          </div>

          <DynamicForm />
        </div>
      </div>
    </div>
  );
};

export default Vishweshraiya01;

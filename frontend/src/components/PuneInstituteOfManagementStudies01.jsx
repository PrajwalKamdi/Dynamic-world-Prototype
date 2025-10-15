import React from "react";
import CalendyButton from './CalendyButton'
import DynamicForm from '../pages/DynamicForm'
const PuneInstituteOfManagementStudies01 = () => {
  return (
    <div className="w-full bg-white ">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col justify-start items-center md:flex-row gap-6  md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919774/pune_institute_of_management_studies-Regular_Admission_fxfthv.svg"
                alt="Pune Institute Of Management Studies Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Title + subtitle */}
              <div className="mt-3">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Pune Institute Of Management Studies
                </h1>
                <p className="mt-1 text-sm sm:text-[15px] text-white/80">
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
                Pune
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 2007
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              The{" "}
              <span className="font-semibold">
                Pune Institute of Business Management (PIBM)
              </span>{" "}
              is a prestigious private institution established in 2007 and is
              affiliated with Savitribai Phule Pune University. PIBM offers MBA
              and PGDM courses and is accredited by NAAC and NBA, while also
              being approved by AICTE. The institute is ranked among the top 100
              B-schools in India by NIRF and is recognized as one of the top
              private B-schools by Business Today and Times B-School. With a
              strong academic foundation, PIBM continues to lead in business
              education.
            </p>
           <CalendyButton/>
          </div>

          {/* RIGHT SECTION - FORM PLACEHOLDER */}
          <DynamicForm/>
        </div>
      </div>
    </div>
  );
};

export default PuneInstituteOfManagementStudies01;

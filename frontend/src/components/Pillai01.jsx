import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";
const Pillai01 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]  rounded-lg">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919773/Pillai_College_of_Engineering-Regular_Admission_k6uv8b.svg" // replace with PCE logo URL when available
                alt="Pillai College Of Engineering Logo"
                className="h-20 w-20 lg:w-50"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Title + subtitle */}
              <div className="mt-3 flex">
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Pillai College Of Engineering:{" "}
                  <p className=" text-white/80 text-xl">
                    Admission {new Date().getFullYear()} - About, Courses &
                    Ranking
                  </p>
                </h1>
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
                Navi Mumbai
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 1999
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <strong> Pillai College of Engineering (PCE)</strong>, New Panvel,
              is UGC-approved with autonomous status since 2021–2022.
              Established in 1999, PCE is affiliated with the University of
              Mumbai and AICTE-approved. Recognized by the Government of
              Maharashtra, the college excels in quality education. Accredited
              by NAAC with an A+ grade, PCE is a premier private engineering
              institution.
            </p>
            <CalendyButton />
          </div>
          <DynamicForm/>
        </div>
      </div>
    </div>
  );
};

export default Pillai01;

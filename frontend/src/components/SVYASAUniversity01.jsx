import React from "react";
import CalendyButton from './CalendyButton'
import DynamicForm from '../pages/DynamicForm'
const SVYASAUniversity01 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919780/S-VYASA-Regular_Admission_kxacsi.svg"
                alt="S-VYASA University Logo"
                className="w-20 h-20 md:w-50 md:h-20 object-contain bg-white rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
             

              {/* Title + subtitle */}
              <div className="mt-3">
                <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                  S-VYASA University
                </h1>
                <p className="mt-1 text-base lg:text-xl text-white/80 font-semibold">
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
                Karnataka
              </div>
              <span className="text-black text-sm">|</span>
              <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
                ESTD. 2002
              </div>
              <span className="text-black text-sm">|</span>
               <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                  Regular Admission
                </span>
            </div>
           
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">S-VYASA University</span> in
              Bangalore, India, is a highly accredited institution recognized by
              the <span className="font-semibold">UGC, NAAC</span> (A+ grade),
              and the <span className="font-semibold">Ministry of AYUSH</span>{" "}
              for its programs in Yoga and Naturopathy. It is also approved by
              the <span className="font-semibold">AICTE</span> and holds a{" "}
              <span className="font-semibold">4-star rating by KSURF</span>. The
              university's degrees are internationally recognized, ensuring
              quality education that meets national and global standards.
              Additionally, it has earned the{" "}
              <span className="font-semibold">Centre for Excellence</span>{" "}
              designation from the Ministry of AYUSH. These accreditations
              highlight the university's commitment to providing superior
              education.
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

export default SVYASAUniversity01;

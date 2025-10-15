import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const OrientalUniversity01 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919769/Oriental_University-Regular_Admission_esn4wh.svg"
                className="w-20 h-20 md:w-50 md:h-20 object-contain bg-white rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              {/* Title + subtitle */}
              <div className="">
                <h1 className="text-xl lg:text-3xl font-bold leading-tight">
                  Oriental University:
                </h1>
                <p className="mt-1 text-xl  text-white/80">
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
          <div className="px-8  text-base">
            <div className="flex flex-wrap items-center gap-3 mt-3 mb-2">
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
                ESTD. 2011
              </div>
              <span className="text-black text-sm">|</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">
                Oriental University Indore (OUI)
              </span>{" "}
              is a self-financed private institution established in 2011. It is
              accredited by several prestigious bodies, including the All India
              Council for Technical Education (AICTE), University Grants
              Commission (UGC), Pharmacy Council of India (PCI), National
              Council for Teacher Education (NCTE), and Bar Council of India
              (BCI). Additionally, the university holds ISO certification and
              accreditation from MPPURC. OUI was granted university status under
              Section 2(f) of the UGC Act, 1956.
            </p>
            <CalendyButton />
          </div>
          <DynamicForm />
        </div>
      </div>
    </div>
  );
};

export default OrientalUniversity01;

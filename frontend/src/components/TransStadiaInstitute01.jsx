import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";
import { MapPin } from "lucide-react";
const TransStadiaInstitute01 = () => {
  return (
    <div className="min-h-screen w-full bg-white ">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Logo */}
            <img
              alt="TransStadia Institute Logo"
              className="w-20 h-20 lg:w-50 object-contain"
              src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919785/TransStadia_Institute_Mumbai-Regular_Admission_clhapd.svg"
            />

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
            
          
              {/* Title + subtitle */}
              <div className="mt-3">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  TransStadia Institute Programs:
                </h1>
                <p className="mt-1 text-base  lg:text-xl text-white/80 font-semibold">
                  Admission {new Date().getFullYear()}  — 
                  About, Courses & Ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          <div className=" py-2 sm:py-5 text-base px-5 lg:px-8">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4  text-sm font-medium mb-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <span>Mumbai</span>
                <span>
                  <MapPin size={16} />
                </span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-400"></div>
              <span>ESTD. 1857</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-base leading-relaxed">
              <strong>TransStadia Institute in Mumbai</strong>, India, is
              accredited by the All India Council for Technical Education
              (AICTE), ensuring high-quality technical education. The institute
              offers undergraduate programs in Business & Management Studies,
              Engineering, IT & Software, and Science. With a focus on
              innovation, it combines theoretical knowledge with practical
              applications to meet industry demands. Its modern campus supports
              academic and extracurricular growth. TransStadia Institute
              emphasizes ethical practices, skill development, and leadership,
              preparing students for global opportunities.
            </p>
            <CalendyButton />
          </div>
          <DynamicForm title={"Receive expert college counseling at no cos"} />
        </div>
      </div>
    </div>
  );
};

export default TransStadiaInstitute01;

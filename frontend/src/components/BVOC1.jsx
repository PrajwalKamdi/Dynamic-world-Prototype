import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const BVOC1 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C] shadow-xl">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            BVOC • India
          </span>

          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Bachelor of Vocation Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top Bachelor of Vocation programs across India and get
              admission done.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="text-sm px-4 lg:px-8 py-5 lg:text-base">
            <p className="leading-relaxed">
              The <strong>Bachelor of Vocation (BVoc)</strong> is an
              undergraduate program focused on <strong>practical skills</strong>{" "}
              and vocational training. BVoc emphasizes
              <strong> hands-on learning</strong>, industry projects, and
              internships, preparing students for employment or
              entrepreneurship. Specializations span retail, healthcare,
              hospitality, IT, and more. Programs use a modular structure with
              flexible exit points (Diploma / Advanced Diploma), aligning with
              modern workforce demands.
            </p>
            <CalendyButton />
          </div>

          {/* RIGHT SECTION - FORM PLACEHOLDER */}
          <DynamicForm title={"Receive expert college counseling at no cos"} />
        </div>
      </div>
    </div>
  );
};

export default BVOC1;

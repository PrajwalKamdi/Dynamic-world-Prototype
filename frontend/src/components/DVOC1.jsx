import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";
const DVOC1 = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            DVOC • India
          </span>

          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Diploma of Vocation Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top Diploma of Vocation programs across India and get
              admission done.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  border border-gray-200 shadow-sm bg-white">
          {/* Left: Content */}
          <div className="px-4 lg:px-8 py-5 text-base">
            <div className="text-sm lg:text-base space-y-3  leading-relaxed text-[#31393C]">
              <p>
                A{" "}
                <span className="font-semibold">
                  Diploma in Vocation (D.Voc)
                </span>{" "}
                is a specialized program that imparts practical skills required
                for specific trades or occupations. This course focuses on
                equipping students with industry-relevant knowledge that is
                essential in today’s job market. D.Voc courses aim to develop
                key competencies like critical thinking, problem-solving,
                collaboration, and communication skills.
              </p>

              <p>
                Examples include{" "}
                <span className="font-semibold">Production Engineering</span>{" "}
                (engineering drawing, manufacturing processes),{" "}
                <span className="font-semibold">Public Administration</span>{" "}
                (governance & policy),
                <span className="font-semibold"> Psychology</span> (human
                behaviour),{" "}
                <span className="font-semibold">Retail Management</span>{" "}
                (category management, marketing),
                <span className="font-semibold"> Library Science</span>{" "}
                (librarian/archivist), and{" "}
                <span className="font-semibold">Fashion Designing</span>{" "}
                (garment construction, pattern making, illustration).
              </p>

              {/* Quick bullets */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3E96F4]" />
                  Industry tools & techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3E96F4]" />
                  Project-based assessments
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3E96F4]" />
                  Internships / OJT support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3E96F4]" />
                  Career counselling
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="">
              <CalendyButton />
            </div>
          </div>

          <DynamicForm title={"Receive expert college counseling at no cost"} />
        </div>
      </div>
    </div>
  );
};

export default DVOC1;

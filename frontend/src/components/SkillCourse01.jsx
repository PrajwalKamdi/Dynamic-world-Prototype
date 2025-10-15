import React from "react";
import { PhoneForwarded, Video } from "lucide-react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const SkillCourse01 = () => {
  
  return (
    <section className="">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            Skill Course • India
          </span>
          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Skill Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top Skill Courses programs across India and get admission
              done.
            </p>
          </div>
        </div>
      </div>
      {/* Left Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-left space-y-6 text-black">
        <div className="p-5 flex-col">
          <p className="">
            Skill courses are short, focused programs designed to enhance
            practical abilities and industry-specific knowledge. Unlike
            traditional degrees, they emphasize hands-on training to make
            students job-ready. These courses are available in various fields
            like technology, healthcare, business, and digital marketing. They
            offer flexibility (often online or hybrid) and provide certificates
            upon completion to boost employability.
          </p>
         <CalendyButton/>
        </div>
        <div>
          <DynamicForm />
        </div>
      </div>
    </section>
  );
};

export default SkillCourse01;

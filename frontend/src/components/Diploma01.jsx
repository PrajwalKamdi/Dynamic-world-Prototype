import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Diploma01 = () => {
  const isMobile = /Android|iPhone/i.test(navigator.userAgent);

  return (
    <div className="min-h-screen w-full bg-white  shadow-xl">
      {/* Top ribbon (same shell as DVOC) */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            Diploma • India
          </span>

          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Diploma Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top diploma programs across India and get admission done.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* LEFT: Content Card */}

          <div className="px-8 py-5 text-base">
            {/* Duration pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#3E96F4] border border-[#3E96F4]/20">
                Duration
              </span>
              {["3 Months", "6 Months", "12 Months"].map((d) => (
                <span
                  key={d}
                  className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-[#EDEEEB] text-[#31393C]"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mt-4  space-y-3 text-sm lg:text-base">
              <p>
                A <span className="font-semibold">Diploma</span> is a short-term
                training program focused on developing{" "}
                <span className="font-semibold">Practical Skills</span> for a
                specific job or career—ideal after 10th or 12th for a quicker
                pathway to employment. These programs help learners enter the
                workforce fast, master specialized skills, or act as a stepping
                stone to further education. Popular examples include Digital
                Marketing, Data Science, Web Development, and Cyber Security.
              </p>
              <p className="mb-2">
                Diplomas also span engineering, nursing, hospitality management,
                and renewable energy technology. Compared with a degree, a
                diploma is shorter and more focused; it’s awarded after
                completing a specific curriculum and exam, while degrees are
                broader credentials requiring longer study at colleges or
                universities.
              </p>
            </div>
            <CalendyButton />
          </div>
          <DynamicForm title={"Receive expert college counseling at no cost"} />
        </div>
      </div>
    </div>
  );
};

export default Diploma01;

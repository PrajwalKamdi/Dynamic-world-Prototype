import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const MBBSIndia01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">
            MBBS IN INDIA
          </h1>
          <h3 className="text-white/80 text-base lg:text-xl font-semibold">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="my-3 px-5 lg:px-8 text-sm lg:text-base text-balance">
          <div className="">
            <p className="text-[#31393C]">
              MBBS is a 5-year undergraduate medical degree followed by a 1-year
              internship, combining medicine and surgery. It is the first step
              to becoming a practicing medical professional. Apart from MBBS,
              India offers various other medical courses, both undergraduate and
              postgraduate. To pursue MBBS, candidates need at least 50% in 10+2
              with Physics, Biology, and Chemistry, along with a cleared NEET
              exam. NEET is mandatory for both undergraduate (NEET UG) and
              postgraduate (NEET PG) medical courses.
            </p>
            <CalendyButton />
          </div>
          <div className="my-3 rounded-2xl">
            <img src="https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/12/College-Admission-CTA.webp?resize=1536%2C448&ssl=1"
            className="rounded-2xl"
            ></img>
          </div>
        </section>
        <section>
          <DynamicForm
            title={"100% Certified Education Counselors in Just One Click"}
          />
        </section>
      </section>
    </div>
  );
};

export default MBBSIndia01;

import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const PHD01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">
            PHD (Doctor of Philosophy)
          </h1>
          <h3 className="text-white/80 text-base lg:text-xl font-semibold">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="my-3 px-5 lg:px-8 text-sm lg:text-base text-balance">
          <div className="">
            <p className="text-[#31393C] mb-2">
              PhD courses in India provide advanced research opportunities in
              various fields, allowing students to explore topics deeply and
              contribute new ideas to their area of study. To pursue a PhD,
              candidates usually need a Master’s degree with good grades and
              must clear entrance exams like UGC-NET, CSIR-NET, or
              university-specific tests, followed by an interview. The duration
              of a PhD typically ranges from three to six years and includes
              coursework, research work, and thesis submission.
            </p>
            <p className="text-[#31393C]">
              Top universities like IITs, JNU, DU, and BHU offer PhD programs in
              disciplines such as science, engineering, management, and
              humanities. After completing a PhD, graduates can work as
              professors, researchers, or experts in industries and
              organizations, making it a respected and rewarding academic path.
            </p>
          </div>
          <CalendyButton/>
          <div className="my-3 rounded-2xl">
            <img
              src="https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/12/College-Admission-CTA.webp?resize=1536%2C448&ssl=1"
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

export default PHD01;

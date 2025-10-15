import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Engineering01 = () => {
  return (
     <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">
           B.Tech in India
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
              Engineering is more than just a career—it’s a field of expertise that combines creativity and science to design, build, and innovate machines, engines, and structures. After completing 12th grade, students can pursue a four-year undergraduate degree in Engineering (B.Tech), which opens up diverse and exciting career opportunities in various industries.
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

export default Engineering01;

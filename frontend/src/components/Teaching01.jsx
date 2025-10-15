import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Teaching01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">
            Teaching (B.ED | BP.ED | M.ED)
          </h1>
          <h3 className="text-white/80 text-base lg:text-xl font-semibold">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="my-3 px-5 lg:px-8 text-sm lg:text-base text-balance">
          <div className="text-balance">
            <p className="text-[#31393C] mb-3">
              In India, teaching is one of the most respected and rewarding
              professions that offers both personal satisfaction and career
              stability. It allows individuals to shape young minds, inspire
              future generations, and play a vital role in nation-building.
              Teachers enjoy secure jobs, steady income, and opportunities for
              growth across schools, colleges, and online education platforms,
              along with a healthy work-life balance.
            </p>
            <p className="text-[#31393C]">
              To build a career in this field, you can pursue specialized
              courses such as the Bachelor of Education (B.Ed.) for general
              teaching or Bachelor of Physical Education (B.P.Ed.) for sports
              and physical education. Those aiming for advanced expertise can
              opt for a Master of Education (M.Ed.), which provides deeper
              knowledge of educational methods and leadership, opening doors to
              higher academic or administrative roles.
            </p>
            <CalendyButton />
          </div>
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

export default Teaching01;

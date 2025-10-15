import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Law01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">LAW</h1>
          <h3 className="text-white/80 text-base lg:text-xl font-semibold">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="my-3 px-5 lg:px-8 text-sm lg:text-base text-balance">
          <div className="">
            <p className="text-[#31393C] mb-3">
              If you’re looking to build a career in law, you can choose from a
              variety of undergraduate LLB programs such as BA LLB, BBA LLB,
              BLS-LLB, BSc LLB, or BCom LLB. These courses are designed to
              provide a strong foundation in legal studies, and their duration
              typically spans five years. 
            </p>
            <p className="text-[#31393C]">During the program, students gain an
              in-depth understanding of constitutional law, criminal law,
              corporate law, and international legal systems, along with
              practical training through moot courts, legal aid camps, and
              internships. Graduates can pursue careers as advocates, legal
              advisors, corporate counsels, or judicial officers, or continue
              their education with specialized LLM or diploma programs in fields
              like intellectual property law, cyber law, or human rights.</p>
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

export default Law01;

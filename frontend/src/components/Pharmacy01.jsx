import React from "react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Pharmacy01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold text-left">
            Pharmacy (D.Pharm | B.Pharm | M.Pharm)
          </h1>
          <h3 className="text-white/80 text-base lg:text-xl font-semibold text-left">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="my-3 px-5 lg:px-8 text-sm lg:text-base text-balance">
          <div className="">
            <div className="text-[#31393C] ">
              <p className="text-[#31393C] text-left">
                To pursue a Pharmacy course, students must have completed Class
                12 in the Science stream, with subjects like Physics, Chemistry,
                and Biology or Mathematics (PCMB/PCM). Studying Pharmacy
                (D.Pharm | B.Pharm | M.Pharm) offers a wide range of academic,
                professional, and personal benefits. It provides students with a
                strong foundation in science—combining chemistry, biology, and
                medicine—to understand how drugs are developed, tested, and used
                to treat diseases. Pharmacy graduates enjoy diverse career
                opportunities across healthcare, research, the pharmaceutical
                industry, and regulatory bodies.
              </p>
              <p className="text-left mb-2">
                The demand for skilled pharmacists continues to rise globally,
                offering excellent job stability and growth. Beyond employment,
                pharmacy education also opens doors to entrepreneurship,
                allowing professionals to establish their own pharmacies or
                pharmaceutical ventures. Moreover, the field contributes
                directly to public health and patient safety, making it both a
                respected and rewarding profession. With international
                recognition and opportunities for higher studies or work abroad,
                pursuing pharmacy ensures a meaningful and future-proof career
                in the ever-evolving healthcare sector.
              </p>
            </div>
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

export default Pharmacy01;

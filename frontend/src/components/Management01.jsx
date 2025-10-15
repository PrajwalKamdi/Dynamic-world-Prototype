import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Management01 = () => {
  return (
    <div className="">
      <header className="bg-[#3E96F4] px-5 lg:px-8 py-5">
        <div className="my-2">
          <h1 className=" text-white text-xl lg:text-4xl font-bold">
            MANAGEMENT (MBA | BBA | PGDM | BMS)
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
              Business Management courses equip individuals with the skills
              needed to successfully manage and operate a business. These
              programs cover areas such as finance, human resources, marketing,
              administration, and production. Eligibility typically requires
              completing Class 12 from a recognized board. Popular entrance
              exams for admission include CAT, MAT, CMAT, MAH CET, and TISS NET.
            </p>
            <CalendyButton />
          </div>
          <div className="my-3 rounded-2xl">
            <img
              src="https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/12/College-Admission-CTA.webp?resize=1536%2C448&ssl=1"
              className="rounded-2xl w-full h-auto"
              alt="College Admission CTA"
            />
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

export default Management01;

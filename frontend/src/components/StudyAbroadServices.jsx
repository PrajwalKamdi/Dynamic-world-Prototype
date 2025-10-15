import React from "react";

const services = [
  {
    title: "Career Counselling Call From Our Experts",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434163/Career-Counselling-Call-From-Our-Experts_undxs0.webp",
    info: "Talk to our experts for a 30-minute one-on-one session where they understand your profile, goals, and aspirations, explain our guidance process, and focus entirely on ensuring your academic and career success.",
  },
  {
    title: "School Fitment Session",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434214/School-Fitment-Session_lvwwvz.webp",
    info: "Your dedicated coach will discuss with you the universities you should apply to, in order to achieve your career goals. Our AI powered course finder will help you to shortlist the right mix of universities.",
  },
  {
    title: "SOP Writing: Make Yourself Stand Out",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434221/SOP-Writing-Make-Yourself-Stand-Out_df57gb.webp",
    info: "Our editorial team will assist you in writing convincing ‘Statement Of Purpose’ to make your application stand out.",
  },
  {
    title: "Getting The Most Promising Recommendation Letters",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434178/Getting-The-Most-Promising-Recommendation-Letters_k7vreg.webp",
    info: "At this stage, you will acquire the 'Letter Of Recommendation' that will make your profile all the more credible. Our coaches will guide you through this step",
  },
  {
    title: "Interview Preparation: Decoding The Perfect Strategy",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434192/Interview-Preparation-Decoding-The-Perfect-Strategy_xolcvp.webp",
    info: "Once you get an offer from your desired university, your coach help you with mock interviews that are going to get you ready for the final hurdle.",
  },
  {
    title: "Scholarship Assistance & Other Post-Admission Assistance",
    img: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760434204/Scholarship-Assistance-Other-Post-Admission-Assistance_lwajfv.webp",
    info: "We help you find and apply for the best scholarship options available. We also help you with educational loans, accommodations and much more.",
  },
];

const ServiceCard = ({ title, img, info }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    {/* image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* subtle gradient at bottom for text legibility if needed later */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>

    {/* content */}
    <div className="p-4">
      <h3 className="mt-3 text-base font-semibold leading-snug text-[#31393C]">
        {title}
      </h3>
      <p className="text-xs">{info}</p>
    </div>

    {/* focus/hover outline */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-[#3E96F4]/40" />
  </div>
);

const StudyAbroadServices = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 bg-gray-100">
      {/* header */}
      <header className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-semibold text-[#31393C]">
          OUR SERVICES
        </div>
        <div className="flex justify-between items-center">
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#31393C] lg:text-3xl">
            End-to-End Guidance for Your Study Abroad Journey
          </h1>
          <button className="bg-[#3E96F4] p-2 rounded-xl text-white font-semibold hover:scale-105 transition ease-in-out duration-300 hover:cursor-pointer">
            Download Brochure
          </button>
        </div>

        <div className="mt-3 h-1 w-28 rounded-full bg-[#3E96F4]" />
      </header>

      {/* grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            img={s.img}
            info={s.info}
          />
        ))}
      </div>

      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#3E96F4]/5" />
    </section>
  );
};

export default StudyAbroadServices;

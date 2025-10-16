import React from "react";

const ExpertGuidance = () => {
  const experts = [
    {
      name: "Priyesh",
      experience: "15+ Years Experience",
      phone: "7738846286",
    },
    {
      name: "Amit",
      experience: "10+ Years Experience",
      phone: "7887881060",
    },
    {
      name: "Supriya",
      experience: "11+ Years Experience",
      phone: "976965807",
    },
    {
      name: "Amar",
      experience: "12+ Years Experience",
      phone: "7887881060",
    },
  ];

  return (
    <div className="bg-[#EDEEEB] py-12 px-2 lg:px-6">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-xl lg:text-2xl md:text-3xl font-semibold text-[#31393c]">
          Receive Expert Guidance To Make Right Decisions.
        </h2>
        <p className="text-[#31393c] mt-2 text-base md:text-lg">
          We are a team of top leading education counseling experts.
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-[#CCC7BF] rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3E96F4] flex items-center justify-center text-white text-2xl font-semibold">
              {expert.name[0]}
            </div>
            <h3 className="text-xl font-semibold text-[#31393c]">
              {expert.name}
            </h3>
            <p className="text-[#31393c] text-sm mb-4">{expert.experience}</p>
            <a
              href={`tel:+91${expert.phone}`}
              className="bg-[#3E96F4] text-white px-5 py-2 rounded-lg hover:bg-[#31393c] transition"
            >
              Consult Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertGuidance;

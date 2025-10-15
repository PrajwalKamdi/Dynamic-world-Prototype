import React from "react";
import CurrentYear from "./CurrentYear";
import Niilm from "../assets/Niilm.png";
import UniversityStrip from "./UniversitityStrip";
const DVOC2 = () => {
  const programs = [
    {
      category: "Technician",
      programs:
        "Print Technology, Web Technologies, Data Analytics, Green House Technology, Fashion Technology, etc.",
    },
    {
      category: "Assistantship",
      programs:
        "Nutrition and Health Management, Nutrition and Dietetics, Old Age Care, Export and Import Management, etc.",
    },
    {
      category: "Agriculture",
      programs:
        "Agriculture and Entrepreneurship, Agriculture Farming Technology",
    },
    {
      category: "Sports & Fitness",
      programs:
        "Sports Management, Sports Nutrition and Physiotherapy, Physical Education, Fitness, Sports",
    },
    {
      category: "Aerospace & Aviation",
      programs: "Airport and Aviation Management, Airport Operations",
    },
    {
      category: "Media & Entertainment",
      programs:
        "Digital Film Production, Audio Technology and Sound Engineering, Digital Marketing, etc.",
    },
    {
      category: "Green Jobs & Energy",
      programs:
        "Green House Technology, Renewable Energy, Industrial Waste Management",
    },
    {
      category: "Automotive",
      programs: "Automobile, Automotive Manufacturing, Automotive Skills",
    },
    {
      category: "Construction & Engineering",
      programs:
        "Construction Technology, Building Construction, Civil Engineering Technology, etc.",
    },
    { category: "Water Management & Plumbing", programs: "Plumbing Skills" },
    {
      category: "Electronics",
      programs:
        "Electronic Manufacturing Service, Electrical and Electronics Technology, Computer Hardware, etc.",
    },
    {
      category: "Healthcare",
      programs:
        "Operation Theatre Technician, Hospital Management, Healthcare Management, Paramedical, etc.",
    },
    { category: "Gem & Jewellery", programs: "Jewellery Design" },
    {
      category: "BFSI",
      programs: "Insurance & Financial Marketing, Banking & Financial Services",
    },
    {
      category: "Assistantship (Additional)",
      programs:
        "Geriatric Aid, Early Childhood Care and Education, Health Quality Management Skill, etc.",
    },
    {
      category: "Sports & Games",
      programs:
        "Karate, Kabaddi, Kho-Kho, Boxing, Cricket, Wrestling, Kickboxing, Volleyball, etc.",
    },
    {
      category: "Rubber, Chemical & Petrochemical",
      programs:
        "Chemical and Petrochemical Engineering, Rubber Technology, Industrial Chemistry, etc.",
    },
    {
      category: "Food Industry",
      programs:
        "Food Processing & Preservation, Food Technology, Food Processing & Quality",
    },
    { category: "Retail", programs: "Retail Management" },
    {
      category: "Apparel Made-ups & Home Furnishing Sector",
      programs:
        "Textile Design & Apparel Technology, Fashion Technology & Apparel Design, etc.",
    },
    {
      category: "Capital Goods",
      programs:
        "Industrial Tool Manufacturing, Manufacturing (Welding & Fabricating), Foundry Technology, etc.",
    },
    {
      category: "Telecom",
      programs:
        "Telecom & Electronics, Telecommunication, Mobile Communication, etc.",
    },
    { category: "Leather", programs: "Footwear & Accessories" },
    {
      category: "Logistics",
      programs:
        "Logistics Management, Logistics & Supply Chain Management, etc.",
    },
    {
      category: "Courses of MEPSC",
      programs:
        "Operations, Textile Technology, Printing Technology, Paint & Coating, Mining, etc.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Header */}
      <UniversityStrip />

      {/* Main Content */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 md:p-6">
            {/* University Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
              <img
                src={Niilm}
                alt="NIILM University Logo"
                className="object-contain h-20  w-20 lg:w-50"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-[#3E96F4]">
                  NIILM University
                </h1>
                <p className="text-md text-gray-600">
                  UGC, BCI, NCTE, AICTE-approved • Haryana • Quality education
                  aligned with international standards.
                </p>
              </div>
            </div>

            {/* Section Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-[#3E96F4]"></div>
              <span className="px-3 text-xl font-semibold text-[#3E96F4] bg-white">
                Specializations
              </span>
              <div className="flex-grow border-t border-[#3E96F4]"></div>
            </div>

            {/* Programs Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse text-base">
                <thead className="bg-[#EDEEEB] text-[#31393C]">
                  <tr>
                    <th className="text-left text-base py-2 px-3  font-semibold border border-gray-300 w-1/4">
                      Category
                    </th>
                    <th className="text-left py-2 px-3 text-base font-semibold border border-gray-300">
                      Programs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors border-b border-gray-200"
                    >
                      <td className="py-2 px-3 text-[15px] font-semibold border border-gray-200 align-top">
                        {item.category}
                      </td>
                      <td className="py-2 px-3 text-[15px] text-gray-700 border border-gray-200">
                        {item.programs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Note */}
            <p className="mt-4 text-xs text-gray-500 text-center">
              <CurrentYear /> Admissions Open • Apply now for DVOC & Skill-Based
              Programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DVOC2;

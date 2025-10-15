import React from "react";

// Data (unchanged)
const programData = [
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
    programs: "Logistics Management, Logistics & Supply Chain Management, etc.",
  },
  {
    category: "Courses of MEPSC",
    programs:
      "Operations, Textile Technology, Printing Technology, Paint & Coating, Mining, etc.",
  },
];
import Niilm from "../assets/Niilm.png";
import UniversityStrip from "./UniversitityStrip";
const MVOC02 = () => {
  return (
    <div className="min-h-screen w-full  text-white">
      <UniversityStrip />

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        {/* Primary card */}
        <section
          className="
            relative rounded-2xl bg-white text-neutral-800 shadow-xl
            ring-1 ring-black/5
            backdrop-blur supports-backdrop-blur
            "
        >
          {/* Card header */}
          <div className="flex flex-col gap-5 border-b border-neutral-100 p-5 md:flex-row md:items-center md:gap-6 md:p-6">
            {/* Logo placeholder */}
            <img
              src={Niilm}
              alt="NIILM University Logo"
              className="object-contain h-20  w-20 lg:w-50"
            />

            <div className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight text-[#3E96F4] md:text-2xl">
                NIILM UNIVERSITY
              </h3>
              <p className="mt-1 max-w-3xl text-sm text-neutral-600">
                UGC, BCI, NCTE, AICTE-accredited, Haryana-approved, aligned to
                international standards with quality education programs.
              </p>
            </div>
          </div>

          {/* Divider with “Specialization” */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-[#3E96F4]"></div>
            <span className="px-3 text-xl font-semibold text-[#3E96F4] bg-white">
              Specializations
            </span>
            <div className="flex-grow border-t border-[#3E96F4]"></div>
          </div>

          {/* Table wrapper */}
          <div className="p-5 md:p-6">
            {/* Mobile: cards */}
            <ul className="space-y-3 md:hidden">
              {programData.map((row, idx) => (
                <li
                  key={idx}
                  className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="text-sm lg:text-base bfont-semibold text-neutral-900">
                    {row.category}
                  </div>
                  <div className="mt-1 text-sm lg:text-base text-neutral-700">
                    {row.programs}
                  </div>
                </li>
              ))}
            </ul>

            {/* Desktop: table */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left  font-semibold  w-[28%]"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold"
                      >
                        Programs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 bg-white">
                    {programData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-neutral-50/60 transition-colors"
                      >
                        <td className="px-4 py-3">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 ">
                          {row.programs}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subtle footer note */}
            <p className="mt-4 text-xs text-neutral-500">
              * Program availability may vary by intake and university. Please
              confirm current offerings during counselling.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MVOC02;

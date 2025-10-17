import React, { useState } from "react";
import UniversityStrip from "./UniversitityStrip";
import globalUniversity from "../assets/globalUniversity.jpg";
import Niilm from "../assets/Niilm.png";
import Kalinga from "../assets/Kalinga.png";
import DRRaman from "../assets/DRRaman.jpg";



const BVOC2 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Top header strip */}
      <UniversityStrip />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* ---------- GLOCAL UNIVERSITY ---------- */}
        <UniversityCard
          name="GLOCAL UNIVERSITY"
          logo={globalUniversity}
          desc="Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
          programs={[
            "B.Voc in Multimedia",
            "B.Voc in Web Technologies",
            "B.Voc in Hospital Administration",
            "B.Voc in Tea Husbandry & Technology",
            "B.Voc in Agriculture & Rural Development",
            "B.Voc in Software Development and System Administration",
            "B.Voc in Business and Data Analytics",
            "B.Voc in Management & Entrepreneurship",
            "B.Voc in Cyber Crime",
            "B.Voc in Textile Design",
            "B.Voc in Food Processing",
            "B.Voc in Automobiles",
            "B.Voc in Fire Safety",
            "B.Voc in Journalism and Mass Communication",
            "B.Voc in Interior Designing",
            "B.Voc in Paramedical and Health Administration",
            "B.Voc in Physiotherapy",
            "B.Voc in Medical Laboratory Technology",
            "B.Voc in Pharmaceutical Chemistry",
            "B.Voc in Critical Care Technology",
            "B.Voc in Medical Image Technology",
            "B.Voc in Patient Care Technology",
            "B.Voc in CMSED",
            "B.Voc in Dental Hygiene",
            "B.Voc in Operation Theatre",
            "B.Voc in Dialysis Technology",
            "B.Voc in Optometry",
            "B.Voc in Hospital Sterilization Technology",
            "B.Voc in Cardiac Care Technology",
            "B.Voc in Hospital Management",
            "B.Voc in Management and Entrepreneurship",
            "B.Voc in Retail Management",
            "B.Voc in Banking, Financial Services & Insurance Skills",
            "B.Voc in E-Commerce & Digital Marketing Skills",
            "B.Voc in Entrepreneurship Skills",
            "B.Voc in Fire Technology and Industrial Safety Management",
            "B.Voc in Graphic Designing",
            "B.Voc in Internet of Things Programming and Big Data",
            "B.Voc in Manufacturing Skills",
            "B.Voc in Accounting & Business",
            "B.Voc in Visual Communication",
            "B.Voc in Hotel Management and Catering Science",
            "B.Voc in Airport and Airline Management",
            "B.Voc in Robotics and Artificial Intelligence",
            "B.Voc in Childhood Care and Education",
            "B.Voc in Computer Science",
            "B.Voc in Fashion Designing",
            "B.Voc in Gaming",
            "B.Voc in IT/ITes/Software Development",
            "B.Voc in Jewellery Design and Management",
            "B.Voc in Logistics Management",
            "B.Voc in Machine Learning and Artificial Intelligence",
            "B.Voc in Media and Entertainment",
            "B.Voc in Refrigeration and Air Conditioning",
            "B.Voc in Power/Renewable Energy Technology & Management",
            "B.Voc in Yoga and Naturopathy",
            "B.Voc in Information Technology",
            "B.Voc in Information Technology and Android Technology",
            "B.Voc in IT/Networking",
            "B.Voc in Tourism and Hospitality",
            "B.Voc in Beauty & Wellness",
            "B.Voc in Software Development",
            "B.Voc in Animation",
            "B.Voc in Hospitality & Hotel Management",
            "B.Voc in Applied Computer Technology",
            "B.Voc in Electrical Skills",
            "B.Voc in Health Care",
            "B.Voc in 3D Animation & VFX",
            "B.Voc in Automotive Skills",
            "B.Voc in Food Processing & Quality Management",
          ]}
        />

        {/* ---------- KALINGA UNIVERSITY ---------- */}
        <UniversityCard
          name="KALINGA UNIVERSITY"
          logo={Kalinga}
          desc="Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
          programs={[
            "B.Voc in Automobile",
            "B.Voc in Banking & Financial Service",
            "B.Voc in Beauty & Wellness",
            "B.Voc in Building Construction",
            "B.Voc in Computer Application & I.T",
            "B.Voc in Data Science",
            "B.Voc in Electronics Manufacturing Services",
            "B.Voc in Engine Testing",
            "B.Voc in Farm Equipment & Machinery",
            "B.Voc in Fashion Technology",
            "B.Voc in Herbal Beauty Care",
            "B.Voc in Hospital Administration",
            "B.Voc in Hospitality & Tourism",
            "B.Voc in Interior Design",
            "B.Voc in Building Technology",
            "B.Voc in Jewellery Design",
            "B.Voc in Mobile Application Development",
            "B.Voc in Mobile Communication",
            "B.Voc in Multimedia",
            "B.Voc in Printing Technology",
            "B.Voc in Refrigeration & Air Conditioning",
            "B.Voc in Renewable Energy",
            "B.Voc in Retail",
            "B.Voc in Retail & Logistics Management",
            "B.Voc in Software Development",
            "B.Voc in Sports",
            "B.Voc in Tourism & Service Industry",
            "B.Voc in Web Technology",
            "B.Voc in Yoga",
            "B.Voc in Hotel Management",
          ]}
        />

        {/* ---------- NIILM UNIVERSITY ---------- */}
        <UniversityCard
          name="NIILM UNIVERSITY"
          logo={Niilm}
          desc="Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
          programs={[
            "B.Voc in Web Technologies",
            "B.Voc in Hospital Administration",
            "B.Voc in Tea Husbandry & Technology",
            "B.Voc in Agriculture & Rural Development",
            "B.Voc in Software Development and System Administration",
            "B.Voc in Business and Data Analytics",
            "B.Voc in Management & Entrepreneurship",
            "B.Voc in Cyber Crime",
            "B.Voc in Textile Design",
            "B.Voc in Food Processing",
            "B.Voc in Automobiles",
            "B.Voc in Fire Safety",
            "B.Voc in Journalism and Mass Communication",
            "B.Voc in Interior Designing",
            "B.Voc in Paramedical and Health Administration",
            "B.Voc in Physiotherapy",
            "B.Voc in Medical Laboratory Technology",
            "B.Voc in Pharmaceutical Chemistry",
            "B.Voc in Critical Care Technology",
            "B.Voc in Medical Image Technology",
            "B.Voc in Patient Care Technology",
            "B.Voc in CMSED",
            "B.Voc in Dental Hygiene",
            "B.Voc in Operation Theatre",
            "B.Voc in Dialysis Technology",
            "B.Voc in Optometry",
            "B.Voc in Hospital Sterilization Technology",
            "B.Voc in Cardiac Care Technology",
            "B.Voc in Hospital Management",
            "B.Voc in Management and Entrepreneurship",
            "B.Voc in (Retail Management)",
            "B.Voc in Banking, Financial Services & Insurance Skills",
            "B.Voc in E-Commerce & Digital Marketing Skills",
            "B.Voc in Entrepreneurship Skills",
            "B.Voc in Fire Technology and Industrial Safety Management",
            "B.Voc in Graphic Designing",
            "B.Voc in Internet of Things Programming and Big Data",
            "B.Voc in Manufacturing Skill",
            "B.Voc in Accounting & Business",
            "B.Voc in Visual Communication",
            "B.Voc in Hotel Management and Catering Science",
            "B.Voc in Airport and Airline Management",
            "B.Voc in Robotics and Artificial Intelligence",
            "B.Voc in Childhood Care and Education",
            "B.Voc in Computer Science",
            "B.Voc in Fashion Designing",
            "B.Voc in Gaming",
            "B.Voc in IT/ITes/Software Development",
            "B.Voc in Jewellery Design and Management",
          ]}
        />

        {/* ---------- DR. C. V. RAMAN UNIVERSITY ---------- */}
        <UniversityCard
          name="DR. C. V. RAMAN UNIVERSITY, BIHAR"
          logo={DRRaman}
           desc="Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
          programs={[
            "B.Voc In Automible Production (Machining)",
            "B.Voc In Automible Production (Welding)",
            "B.Voc In Electrical & Electronics Assembly",
            "B.Voc In Interior Design",
            "B.Voc In IT Application Development",
            "B.Voc In Plumbing Skills",
            "B.Voc In Production",
            "B.Voc In Refrigeration & Air Conditioning",
            "B.Voc In Retail Management",
            "B.Voc In Accounts & Taxation",
            "B.Voc In Agriculture",
            "B.Voc In Automobile Servicing",
            "B.Voc In Banking, Financial Services & Insurance",
            "B.Voc In Computer Hardware & Networking",
            "B.Voc In Electronics Manufacturing Services",
            "B.Voc In Fashion Designing",
            "B.Voc In Food Processing",
            "B.Voc In Life Science",
            "B.Voc In Manufacturing",
            "B.Voc In Mining",
            "B.Voc In Patient Care Management",
            "B.Voc In Renewable Energy",
            "B.Voc In Hotel Management",
            "B.Voc In Telecommunication",
            "B.Voc In Logistics Operation Management",
            "B.Voc In Textile Technology",
          ]}
        />
      </div>
    </div>
  );
};

const UniversityCard = ({ name, logo, desc, programs }) => {
  // collapse long lists by default for cleaner UI
  const [expanded, setExpanded] = useState(false);
  const VISIBLE_COUNT = 12;
  const visiblePrograms = expanded
    ? programs
    : programs.slice(0, VISIBLE_COUNT);
  const hasMore = programs.length > VISIBLE_COUNT;

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
      {/* Header */}
      <div className="lg:flex items-center ">
        <div className="">
          <img
            src={logo}
            alt={name}
            className="object-contain w-30 lg:w-50  "
            loading="lazy"
          />
        </div>
        <div className="lg:pl-10 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#3E96F4] leading-snug">
            {name}
          </h3>
          <p className="mt-1 text-xs sm:text-[13px] text-gray-600">{desc}</p>
        </div>
      </div>

      {/* Section label */}
      <div className="flex items-center justify-center my-4">
        <div className="flex-grow border-t border-[#3E96F4]"></div>
        <span className="px-3 text-sm lg:text-xl font-semibold text-[#3E96F4] bg-white">
          Specializations
        </span>
        <div className="flex-grow border-t border-[#3E96F4]"></div>
      </div>

      {/* Programs table (with borders) */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-[#EDEEEB]">
            <tr>
              <th className="border border-gray-300 py-2 px-3 text-sm lg:text-base font-semibold text-[#31393C] text-center">
                Program Name
              </th>
            </tr>
          </thead>
          <tbody>
            {visiblePrograms.map((program, idx) => (
              <tr key={idx} className="hover:bg-blue-50/60 transition-colors">
                <td className="border border-gray-300 py-2 px-3  text-gray-800 text-sm">
                  {program}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show more/less */}
      {hasMore && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border border-[#3E96F4]/40 text-[#3E96F4] hover:bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold transition"
            aria-expanded={expanded}
          >
            {expanded
              ? "Show less"
              : `Show ${programs.length - VISIBLE_COUNT} more`}
            <svg
              className={`h-3.5 w-3.5 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default BVOC2;

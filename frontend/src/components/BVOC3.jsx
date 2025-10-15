import React from "react";

const BVOCInfo = () => {
  return (
    <div className="min-h-screen bg-white text-[#31393C] py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3E96F4]">
            Bachelor of Vocation (B.Voc)
          </h1>
          <p className="mt-1 text-sm md:text-base text-gray-600">
            Skill-based undergraduate degree program for hands-on,
            industry-ready learning.
          </p>
        </div>

        {/* ----- Introduction Section ----- */}
        <div className="bg-[#EDEEEB]/60 rounded-xl shadow-sm p-6 md:p-8 mb-8 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            The <strong>Bachelor of Vocational Education (B.Voc)</strong> is a
            three-year undergraduate program designed to equip students with
            <strong> industry-relevant skills</strong> through hands-on
            learning. Unlike traditional degree courses, B.Voc focuses on
            practical applications to make graduates job-ready, even during the
            course. Introduced by the University Grants Commission (UGC), it is
            aligned with the{" "}
            <strong>National Skills Qualification Framework (NSQF)</strong>,
            ensuring employability at every stage. The course is available in a
            variety of fields such as <strong>food technology</strong>,
            <strong> beauty and wellness</strong>,{" "}
            <strong>graphic design</strong>, and <strong>hospitality</strong>,
            offering flexibility and exposure to industry demand.
          </p>

          <p>
            Students can opt for B.Voc after completing their 10+2 education,
            and the curriculum emphasizes <strong>skill development</strong>.
            The course includes internships and work experience, which
            significantly enhance employability. It also offers multiple exit
            points — with a<strong> Certificate</strong> after 6 months, a{" "}
            <strong>Diploma</strong> after 1 year, an{" "}
            <strong>Advanced Diploma</strong> after 2 years, and a{" "}
            <strong>Degree</strong> after completing 3 years. Graduates are
            in-demand across sectors like <strong>IT</strong>,
            <strong> manufacturing</strong>, <strong>automobile</strong>, and{" "}
            <strong>commercial industries</strong>, earning average packages
            between ₹3–₹7 LPA.
          </p>

          <p>
            Eligibility for B.Voc includes a <strong>10+2 qualification</strong>{" "}
            with at least <strong>50%–55%</strong> aggregate marks or a{" "}
            <strong>diploma after 10th</strong>. Some institutions may conduct
            an entrance exam, while others admit on a merit basis. Admission
            usually begins in <strong>May–June</strong> after 12th board
            results. This makes B.Voc a top choice for students aiming for early
            career success, with
            <strong> abundant job opportunities</strong> and stable pay across
            multiple industries.
          </p>
        </div>

        {/* ----- Table Section ----- */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm md:text-base rounded-lg overflow-hidden">
            <thead className="bg-[#3E96F4]/10">
              <tr>
                <th className="text-left px-4 py-3 border border-gray-300 font-semibold text-[#3E96F4]">
                  Aspect
                </th>
                <th className="text-left px-4 py-3 border border-gray-300 font-semibold text-[#3E96F4]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50/50 transition">
                <td className="px-4 py-2 border border-gray-300 border-l border-r font-semibold">
                  Eligibility
                </td>
                <td className="px-4 py-2 border border-gray-300 border-l border-r">
                  10+2 (50%–55% aggregate), Diploma, or NSQF Level 3
                  Certification
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition">
                <td className="px-4 py-2 border border-gray-300 border-l border-r font-semibold">
                  Selection Methods
                </td>
                <td className="px-4 py-2 border border-gray-300 border-l border-r">
                  Merit-based or Entrance Exam
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition">
                <td className="px-4 py-2 border border-gray-300 border-l border-r font-semibold">
                  Admission Start
                </td>
                <td className="px-4 py-2 border border-gray-300 border-l border-r">
                  May–June
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition">
                <td className="px-4 py-2 border border-gray-300 border-l border-r font-semibold">
                  Notification Release
                </td>
                <td className="px-4 py-2 border border-gray-300 border-l border-r">
                  After 12th Board Results
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition">
                <td className="px-4 py-2 border border-gray-300 border-l border-r font-semibold">
                  Process
                </td>
                <td className="px-4 py-2 border border-gray-300 border-l border-r">
                  Merit evaluation or entrance test conducted by the institution
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="mt-4 text-xs text-gray-500 text-center">
          *Information subject to change depending on university guidelines and
          UGC updates.
        </p>
      </div>
    </div>
  );
};

export default BVOCInfo;

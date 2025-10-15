import React from "react";

export default function ISMSGroupOfInstitutions04() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="w-full px-5 lg:px-8 py-5 bg-gray-100">
        <h2 className="text-xl lg:text-2xl font-semibold text-[#3E96F4] mb-3">
          All Courses
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Course Name</th>
                <th className="px-5 py-3 text-left font-semibold">Tuition Fees</th>
                <th className="px-5 py-3 text-left font-semibold">Eligibility</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Selection Criteria
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MBA/PGDM</td>
                <td className="px-5 py-3">7.4 L – 16 L</td>
                <td className="px-5 py-3">Graduation with 50%, Exams: CAT, CMAT + 4 more</td>
                <td className="px-5 py-3">CAT, CMAT + 4 other exams</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">M.Sc.</td>
                <td className="px-5 py-3">14.5 L</td>
                <td className="px-5 py-3">Graduation with 50%, Exams: CAT, CMAT + 1 more</td>
                <td className="px-5 py-3">CAT, CMAT + 1 other exam</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">PG Diploma</td>
                <td className="px-5 py-3">14.5 L</td>
                <td className="px-5 py-3">Graduation with 50%, Exams: CAT, CMAT + 1 more</td>
                <td className="px-5 py-3">CAT, CMAT + 1 other exam</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4">
          ISMS Group of Institutions Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          The International School of Management Studies (ISMS) in Pune, India, is a leading educational institution
          accredited by the All India Council for Technical Education (AICTE) and affiliated with Savitribai Phule Pune
          University (UNIPUNE). ISMS offers a variety of MBA programs, including Full-time MBA/PGDM, MBA International,
          PGP MBA (Triple Certification), and MBA in Sports Business Management. The institute is known for its academic
          excellence and industry-relevant curriculum, providing students with a solid foundation for their careers.
          Admission to these programs is based on national-level exams, with candidates required to secure valid scores
          in the qualifying exams. ISMS emphasizes practical learning, global exposure, and leadership development.
          Students benefit from a collaborative environment, strong industry connections, and opportunities for internships
          and placements. The institution aims to foster innovative thinking and strategic decision-making in business management.
        </p>
      </div>
    </div>
  );
}

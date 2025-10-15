import React from "react";

export default function PuneInstituteOfManagementStudies04() {
  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="bg-gray-100 rounded-2xl shadow px-5 lg:px-8 py-5">
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          All Courses
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">
                  Course Name
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Tuition Fees
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Selection Criteria
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MBA/PGDM (6 courses)</td>
                <td className="px-5 py-3">INR 2.5 L – 50.4 L</td>
                <td className="px-5 py-3">10+2: 50%, Graduation: 50–60%</td>
                <td className="px-5 py-3">CMAT, MAT, and 3 other exams</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4">
          Pune Institute Of Management Studies Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          The Pune Institute of Business Management (PIBM), established in 2007,
          is a private university affiliated with Savitribai Phule Pune
          University. It offers MBA and PGDM courses and is accredited by the
          National Assessment and Accreditation Council (NAAC) and the National
          Board of Accreditation (NBA). PIBM is also approved by the All India
          Council for Technical Education (AICTE). The institute has been ranked
          among the top 100 B-schools in India. PIBM places a strong emphasis on
          corporate exposure, with training from corporate panellists and heads,
          providing students with valuable industry insights. PIBM's robust
          placement records reflect its commitment to offering quality
          education.
        </p>
      </div>
    </div>
  );
}

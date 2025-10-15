import React from "react";

export default function ISMSGroupOfInstitutions03() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-3">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            International School of Management Studies (ISMS), Pune, has opened
            admissions for the year 2025. The institute offers a variety of
            PG-level courses in Business and Management, including PGDM, PGP-MBA
            (Triple Certification), International MBA, and Masters in Sports
            Business Management. The application process is entirely online, and
            the institute is affiliated with Savitribai Phule Pune University.
            Students interested in these programs must secure valid scores in
            national-level entrance exams such as CAT, CMAT, MAH-CET, and
            others.
          </p>

          <p>
            To be eligible for admission to ISMS Pune’s MBA/PGDM courses,
            candidates need to have a graduation degree with a 50% aggregate
            (45% for SC/ST candidates from Maharashtra). The selection process
            includes group discussions (GD) and personal interviews (PI),
            following the entrance exam results. For the MSc(International)
            program, the eligibility criteria are similar, requiring a 50%
            aggregate in graduation. Candidates must also appear for one of the
            national-level exams like CAT, CMAT, or MAH CET.
          </p>

          <p>
            The admission process at ISMS Pune involves several steps. First,
            candidates need to submit their online application along with the
            application fee. After the application scrutiny, shortlisted
            candidates will be invited for GD and PI sessions. The final merit
            list will be released based on the selection rounds, and candidates
            who are allotted a seat must pay the application fee to confirm
            their admission.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Course</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility Criteria
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Selection Process
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MBA/PGDM</td>
                <td className="px-5 py-3">
                  Graduation with 50% aggregate (45% for SC/ST candidates from
                  Maharashtra)
                </td>
                <td className="px-5 py-3">
                  CAT / CMAT / MAH-CET etc. + GD + PI
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">MSc(International)</td>
                <td className="px-5 py-3">Graduation with 50% aggregate</td>
                <td className="px-5 py-3">CAT / CMAT / MAH CET</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

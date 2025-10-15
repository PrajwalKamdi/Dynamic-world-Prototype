import React from "react";

export default function PuneInstituteOfManagementStudies03() {
  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="bg-gray-100 rounded-2xl shadow px-5 lg:px-8 py-5">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            PIBM Pune offers a comprehensive admission process for its Management
            courses, where students are required to qualify through one of the
            accepted entrance exams, such as PMAT (PIBM Management Aptitude
            Test), CAT, XAT, CMAT, MAT, or ATMA, with a valid score. The institute
            provides various PG courses, including MBA (General), MBA in FinTech,
            MBA in Project Management, and PGDM, with a focus on high academic
            standards. The final admission process involves a series of selection
            rounds, including a written test, Group Discussion (GD), and Personal
            Interview (PI), all conducted by PIBM Pune. Additionally, candidates
            with relevant work experience receive extra weightage in the selection
            process.
          </p>

          <p>
            The eligibility for these courses requires candidates to have completed
            Class 12 and a graduate degree with a minimum of 50% aggregate. The
            selection process further includes an evaluation of the candidate’s
            entrance exam scores, along with their performance in the written test
            and GD-PI rounds. For specific programs like the Joint Degree Program
            (PIBM Global) and PGDM Hybrid (Blended Learning Program), the selection
            criteria may also involve MAT, CAT, CMAT, GMAT, and additional
            components such as TOEFL, IELTS, and a Statement of Purpose (SOP). This
            ensures that the candidates selected meet the highest standards for
            admission to PIBM Pune.
          </p>

          <p>
            The PIBM Pune admission process is structured into three clear steps.
            First, candidates must complete the online application form and pay an
            application fee of INR 1,000. Second, they must clear the entrance exams
            followed by the written test, GD, and PI rounds. Finally, once the
            selection process is complete, the selected candidates are required to
            pay the course fees to confirm their admission.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">
                  Course Name
                </th>
                <th className="px-5 py-3 text-left font-semibold">Eligibility</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Selection Criteria
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">
                  PGDM, MBA (General), MBA (FinTech), MBA (Project Management)
                </td>
                <td className="px-5 py-3">
                  Class 12 + Graduate with 50% aggregate
                </td>
                <td className="px-5 py-3">
                  CAT / XAT / CMAT / MAT / ATMA / PMAT (PIBM’s Online Aptitude
                  Test) + Written Test + GD-PI
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">
                  Joint Degree Program (PIBM Global)
                </td>
                <td className="px-5 py-3">
                  Class 12 + Graduate with 50% aggregate
                </td>
                <td className="px-5 py-3">
                  MAT / CAT / CMAT / GMAT, SOP, TOEFL, IELTS
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">
                  PGDM Hybrid (Blended Learning Program)
                </td>
                <td className="px-5 py-3">
                  Class 12 + Graduate with 50% aggregate
                </td>
                <td className="px-5 py-3">
                  CAT / XAT / MAT / CMAT / ATMA / PMAT (PIBM’s Online Aptitude
                  Test) + Written Test + GD-PI
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

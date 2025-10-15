import React from "react";

export default function SVYASAUniversity03() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl ">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            S-Vyasa University admission for 2025 is <span className="font-semibold">merit-based</span> for all courses offered by the university. The university provides a range of undergraduate, postgraduate, and diploma courses in diverse fields such as <span className="font-semibold">Commerce, Management, Science, Yoga</span>, and <span className="font-semibold">Computer Applications</span>. All courses at S-VYASA are approved by <span className="font-semibold">AICTE</span>, ensuring the quality and validity of the education provided. Candidates interested in pursuing their desired courses must apply online through the official website of the university, adhering to the deadlines set for each course.
          </p>

          <p>
            To gain admission, candidates must meet the eligibility criteria for their chosen program. The selection process is entirely <span className="font-semibold">merit-based</span>, and applicants will be shortlisted according to their performance in the qualifying examinations. The eligibility for various courses includes specific academic requirements, such as having a minimum percentage in Class 12 or a relevant undergraduate degree for postgraduate courses. Once the candidates meet the eligibility criteria, they can proceed with the <span className="font-semibold">application process</span> through the university's official website.
          </p>

          <p>
            The <span className="font-semibold">admission process</span> for S-Vyasa University follows a structured, multi-step procedure. The first step involves the submission of the <span className="font-semibold">application form</span> through the official website. After this, candidates are shortlisted based on merit. The final step includes the announcement of the results, where selected candidates are asked to pay the <span className="font-semibold">admission fees</span> and undergo a <span className="font-semibold">document verification</span> round to confirm their seats.
          </p>
        </div>

        {/* Eligibility and Selection Criteria Table */}
        <h3 className="text-xl font-bold text-[#31393C] mb-4">
          S-Vyasa University Admission Eligibility and Selection Criteria
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Courses</th>
                <th className="px-5 py-3 text-left font-semibold">Tuition Fees</th>
                <th className="px-5 py-3 text-left font-semibold">Eligibility</th>
                <th className="px-5 py-3 text-left font-semibold">Selection Criteria</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MBA/PGDM</td>
                <td className="px-5 py-3">–</td>
                <td className="px-5 py-3">Graduation in any stream with a minimum of 50% marks</td>
                <td className="px-5 py-3">Merit-based</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BSc</td>
                <td className="px-5 py-3">–</td>
                <td className="px-5 py-3">Class 12 in Science stream with a minimum 55% marks (State board) / 50% (CBSE/ICSE)</td>
                <td className="px-5 py-3">Merit-based</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">B.E./B.Tech</td>
                <td className="px-5 py-3">–</td>
                <td className="px-5 py-3">Class 12 in Science stream with a minimum 55% marks (State board) / 50% (CBSE/ICSE)</td>
                <td className="px-5 py-3">Merit-based</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">MSc</td>
                <td className="px-5 py-3">–</td>
                <td className="px-5 py-3">Any BSc/BCA/BE/BTech with Computers/Mathematics/Statistics with a minimum of 50%</td>
                <td className="px-5 py-3">Merit-based</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BCom</td>
                <td className="px-5 py-3">–</td>
                <td className="px-5 py-3">Class 12 in Science stream with a minimum 55% marks (State board) / 50% (CBSE/ICSE)</td>
                <td className="px-5 py-3">Merit-based</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
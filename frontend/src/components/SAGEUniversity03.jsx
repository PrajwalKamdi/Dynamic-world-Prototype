import React from "react";

export default function SAGEUniversity03() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="w-full px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl ">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            SAGE University Indore offers admissions based on merit in the last qualifying examination or through the university’s entrance exam, SAGE-JEE (SEE). The university provides a wide range of undergraduate, postgraduate, doctoral, diploma, and certificate courses across 14 multi-disciplinary institutes. These institutes offer programs in Engineering, Science, Management, Arts, Allied Health Sciences, Design, and Computer Applications, among other fields. The application process at SAGE University is available both online and offline, with a prescribed application fee of INR 1,600. Admission is offered to eligible candidates based on the course-specific selection criteria.
          </p>

          <p>
            The eligibility and selection criteria for various courses at SAGE University are outlined in the table below, highlighting requirements for popular courses such as BTech, BSc, MBA, BBA, MSc, and more. For undergraduate programs like BTech, candidates must have completed Class 12 with Mathematics, Physics, and Chemistry and at least 50% aggregate marks. Entrance exams like SAGE-JEE or other recognized tests like NATA or JEE Paper-2 are required for admission. Similarly, for postgraduate courses like MBA, candidates need to have a bachelor’s degree and clear SAGE-JEE, CAT, MAT, or other national entrance exams.
          </p>

          <p>
            The admission process at SAGE University involves three major steps: First, candidates submit the application form either online or offline. Second, the university shortlists candidates based on merit or entrance exam results. Finally, selected candidates are required to pay the admission fee and confirm their admission to the university.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Course Name</th>
                <th className="px-5 py-3 text-left font-semibold">Eligibility</th>
                <th className="px-5 py-3 text-left font-semibold">Selection Criteria</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BTech</td>
                <td className="px-5 py-3">Class 12 with Maths, Physics & Chemistry, minimum 50% aggregate</td>
                <td className="px-5 py-3">SAGE JEE (SAGE University Entrance Exam)</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BSc</td>
                <td className="px-5 py-3">Class 12 with 50% aggregate</td>
                <td className="px-5 py-3">SEE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BPharma</td>
                <td className="px-5 py-3">Class 12 with 50% aggregate</td>
                <td className="px-5 py-3">SEE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BBA</td>
                <td className="px-5 py-3">Class 12 with 50% aggregate</td>
                <td className="px-5 py-3">SEE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BArch</td>
                <td className="px-5 py-3">Class 12 with 50% aggregate in Physics, Chemistry & Mathematics/Biology</td>
                <td className="px-5 py-3">NATA/JEE Paper-2 (Architecture)/SAGE JEE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">MBA</td>
                <td className="px-5 py-3">Bachelor’s degree</td>
                <td className="px-5 py-3">SAGE JEE/CAT/MAT/CMAT/XAT</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MSc</td>
                <td className="px-5 py-3">Bachelor’s degree</td>
                <td className="px-5 py-3">SEE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">MTech</td>
                <td className="px-5 py-3">Bachelor’s degree</td>
                <td className="px-5 py-3">SEE/GATE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MCA</td>
                <td className="px-5 py-3">Bachelor’s degree</td>
                <td className="px-5 py-3">SEE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">PhD</td>
                <td className="px-5 py-3">Master’s degree</td>
                <td className="px-5 py-3">GATE/NET/SAGE PhD Entrance Test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

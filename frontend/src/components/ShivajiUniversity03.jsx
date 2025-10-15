import React from 'react'

function ShivajiUniversity03() {
     const admissionProcess = [
    { process: 'Primary Admission Test', details: 'CSMU Entrance Exam (CSMUUEE)' },
    { process: 'National-Level Scores Accepted', details: 'JEE (B.Tech), MHT CET (B.Tech), CAT (MBA), MAT (MBA), NATA (B.Arch), CUET (UG Courses)' },
    { process: 'Eligibility Based on Class 12 Marks', details: 'Direct admission for candidates with 80% or higher marks in Class 12 exams' },
    { process: 'Other Admission Criteria', details: 'Interviews, group discussions, and other assessments for candidates with below 80% marks' },
  ];
  return (
        <div className="max-w-7xl m-5 px-5 lg:px-8 py-5 rounded-2xl bg-gray-100">
          {/* Section Title (from the image: "Admission Process") */}
          <h2 className="text-xl lg:text-2xl font-bold text-[#3e96f4]  pb-2">
            Admission Process
          </h2>
          {/* Detailed Description Paragraphs (matching the image text) */}
          <p className=" text-gray-700 leading-relaxed mb-4">
            Chhatrapati Shivaji Maharaj University (CSMU), located on the outskirts of Mumbai, is a private institution founded in 2018. It is approved by the University Grants Commission (UGC) and aims to produce graduates who are equipped to seize global opportunities while adhering to ethical and moral principles. The university provides an environment conducive to personal growth and academic excellence, focusing on the holistic development of students.
          </p>
          <p className=" text-gray-700 leading-relaxed mb-8">
            The admission process at CSMU is primarily based on **Class 12 marks**, where candidates with a score of 80% or higher are eligible for direct admission. Those with marks below 80% are required to undergo a series of assessments, including entrance exams, interviews, group discussions, and other selection procedures. In addition to Class 12 marks, candidates may need to meet specific English proficiency requirements and admission exam cut-offs, depending on the course.
          </p>
          <p className=" text-gray-700 leading-relaxed mb-8">
            For courses like B.Tech, MBA, B.Arch, and others, CSMU accepts national-level exam scores such as JEE, MHT CET, CAT, MAT, NATA, and CUET, along with its own entrance exam, CSMUEE. The university provides a comprehensive selection process to ensure the admission of well-rounded and capable candidates.
          </p>

          {/* Admission Process Table */}
          <h3 className="text-lg font-bold text-gray-700 mb-4 pt-4 border-t border-gray-100">
            Chhatrapati Shivaji Maharaj University Admission Process:
          </h3>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/3">
                    Admission Process
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-2/3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admissionProcess.map((item, index) => (
                  <tr key={index} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.process}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default ShivajiUniversity03
import React from "react";
import BorderBottom from "./BorderBottom";

function ShivajiUniversity04() {
  const allCourses = [
    {
      course_highlights: "Primary Admission Test",
      details: "CSMU Entrance Exam (CSMUUEE)",
    },
    {
      course_highlights: "National-Level Scores Accepted",
      details:
        "JEE (B.Tech), MHT CET (B.Tech), CAT (MBA), MAT (MBA), NATA (B.Arch), CUET (UG Courses)",
    },
    {
      course_highlights: "Eligibility Based on Class 12 Marks",
      details:
        "Direct admission for candidates with 80% or higher marks in Class 12 exams",
    },
    {
      course_highlights: "Other Admission Criteria",
      details:
        "Interviews, group discussions, and other assessments for candidates with below 80% marks",
    },
  ];
  return (
    <div className="m-5 max-w-7xl px-5 lg:px-8 py-5 rounded-2xl bg-gray-100">
      {/* Section Title (from the image: "Admission Process") */}
      <h2 className="text-xl lg:text-2xl font-bold text-[#3e96f4] mb-3">
        All Courses
      </h2>
      
      {/* Detailed Description Paragraphs (matching the image text) */}
      <p className=" text-gray-700 leading-relaxed mb-4">
        Chhatrapati Shivaji Maharaj University (CSMU) offers a range of courses
        with fees varying from Rs 40,000 to Rs 1,75,000 per year, depending on
        the degree level, course duration, and specialization. The university
        provides 227 courses across PG, UG, Ph.D., Diploma, and Certificate
        programs, with a wide array of options such as 26 B.Tech courses and 21
        BSc courses at the UG level. At the PG level, students can choose from
        16 MSc and 11 MA specializations. Admissions for the academic year
        2024-25 are open, with CSMU conducting the CLAT for certain programs.
        Additionally, the university accepts scores from various national-level
        entrance exams including CET, MAT, JEE Main, NEET, CAT, and many others.
        CSMU offers popular programs in Engineering, Commerce, Management, Law,
        Education, IT, Pharmacy, Hotel Management, Media & Mass Communication,
        Liberal Arts, Biotechnology, and Fashion Technology.
      </p>

      <div className="overflow-x-auto border border-gray-200 rounded-lg mb-5">
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
            {allCourses.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.course_highlights}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {item.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl lg:text-2xl font-bold text-[#3e96f4]">
          Chhatrapati Shivaji Maharaj University Ranking
        </h2>
        <p className=" text-gray-700 leading-relaxed mb-4">
          Chhatrapati Shivaji Maharaj University (CSMU), located in Navi Mumbai,
          Maharashtra, is a private university established in 2018. It is
          accredited by the University Grants Commission (UGC), Council of
          Architecture (COA), Pharmacy Council of India (PCI), and the Bar
          Council of India (BCI). The university offers a diverse range of
          programs at the undergraduate, postgraduate, diploma, and PhD levels.
          CSMU is committed to providing a holistic learning experience that
          blends both theoretical and practical knowledge. The campus is
          equipped with state-of-the-art facilities, including well-designed
          laboratories, classrooms, a comprehensive library, and sports
          facilities. The university aims to foster an environment that nurtures
          academic excellence and prepares students for global opportunities
          while emphasizing ethical and moral values.
        </p>
      </div>
    </div>
  );
}

export default ShivajiUniversity04;

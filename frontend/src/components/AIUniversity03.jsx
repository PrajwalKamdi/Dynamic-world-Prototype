import React from "react";

function AI_University_3() {
  const admissionProcess = [
    {
      courses: "B.Tech in Sound Engineering",
      criteria:
        "Class 12 with 50% marks (Physics, Mathematics & English compulsory with Chemistry or Technical Vocational courses) + JEE/MHTCET/CUET/PERA",
    },
    {
      courses: "B.A. Music & Audio Production",
      criteria: "Class 12 (any stream)",
    },
    {
      courses: "B.Tech (CS)",
      criteria:
        "Class 10 and Class 12 with 65% / Diploma or Certificate holder – 24 points / Cambridge – minimum of 2 subjects + Universal AI Entrance Test / SAT / ACT / PEARSON / CUET / UGAT / JEE / MHTCET / PERA / NIFT / CEED / NID",
    },
    { courses: "BA (Hons)", criteria: "Class 12 (any stream)" },
    { courses: "B.Des", criteria: "Class 12 (any stream)" },
    {
      courses: "Global BBA + Sail & Learn Leadership Programme",
      criteria: "Class 12 with 50% marks + Universal AI Entrance Test",
    },
    {
      courses: "Global BBA",
      criteria: "Class 12 with 50% marks + Universal AI Entrance Test",
    },
    {
      courses: "BBA (Indian)",
      criteria: "Class 12 with 50% marks + Universal AI Entrance Test",
    },
    {
      courses:
        "Global BBA + Global MBA + Sail & Learn Leadership Programme + MBA",
      criteria: "Graduation + Universal AI Entrance Test",
    },
    {
      courses: "Global BBA + Global MBA",
      criteria: "Graduation + Universal AI Entrance Test",
    },
    {
      courses: "Lateral Entry into Global BBA or BBA + MBA",
      criteria: "Graduation with 50% marks",
    },
    {
      courses: "MBA (Single and Dual Specialization)",
      criteria: "Graduation + CAT/GMAT/CMAT/CET/NMAT",
    },
    {
      courses: "MBA + GMP from Cardiff Met, UK",
      criteria: "Graduation + CAT/GMAT/CMAT/CET/NMAT",
    },
    {
      courses:
        "MBA + GMP – International Business and Economics at the University of Economics, Bulgaria",
      criteria: "Graduation + CAT/GMAT/CMAT/CET/NMAT",
    },
    {
      courses: "MBA + GMP – Northeastern Illinois University, USA",
      criteria: "Graduation + CAT/GMAT/CMAT/CET/NMAT",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      <div className="px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <h2 className="text-xl lg:text-2xl text-left font-bold text-[#3e96f4] mb-3">
          Admission Process
        </h2>
        <div className="text-sm lg:text-base text-left text-gray-700 leading-relaxed">
          <p className=" mb-4">
            <span className="font-semibold"> Universal AI University</span> is
            now open for admissions for the academic year 2025-26, offering a
            wide range of undergraduate, postgraduate, and doctoral programs.
            Admission to the university is based on entrance examination scores
            conducted at university, national, and international levels. In
            addition, candidates’ marks in Class 12 are considered for
            undergraduate courses, and bachelor’s degree marks are required for
            postgraduate course eligibility. Applicants can apply through the
            official website or offline by filling out the application form. The
            university offers a variety of courses in fields like Engineering,
            Music, Business, Design, and more, ensuring that there are options
            to suit a range of academic interests.
          </p>
          <p className="mb-8">
            The university offers specialized programs such as the B.Tech in
            Sound Engineering and B.A. in Music & Audio Production for
            undergraduate students, with eligibility criteria based on specific
            subjects like Physics, Mathematics, and Chemistry for B.Tech
            students. For postgraduate programs, applicants can pursue MBA
            programs with various specializations, including single and dual
            specializations, and also have options to pursue international
            collaborations like the MBA + GMP from Cardiff Metropolitan
            University, UK, or international business programs with universities
            in Bulgaria and the USA. Lateral entry options are also available
            for the Global BBA and BBA+MBA programs.
          </p>
          <p className="mb-8">
            Candidates seeking admission into Universal AI University are
            expected to meet specific eligibility criteria, which include class
            12 marks for undergraduate courses and a bachelor’s degree for
            postgraduate admissions. A variety of entrance exams are accepted
            for different courses, including JEE, CUET, SAT, ACT, CAT, GMAT, and
            others, ensuring a flexible admission process. The university’s
            diverse range of programs, both domestic and international, makes it
            an attractive option for students looking to pursue a wide array of
            careers.
          </p>
        </div>

        <h3 className="text-lg lg:text-2xl text-left font-bold text-[#3e96f4] mb-3">
          AI University Admission Process:
        </h3>
         <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/3">
                Courses
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-2/3">
                Eligibility Criteria
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admissionProcess.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-left font-medium text-gray-900">
                  {item.courses}
                </td>
                <td className="px-6 py-4 text-sm text-left text-gray-700">
                  {item.criteria}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default AI_University_3;

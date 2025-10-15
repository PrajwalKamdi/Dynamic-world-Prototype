import React from "react";

function NavSahyadri04() {
  const coursesOffered = [
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered:
        "B.E./B.Tech (Civil, Electrical, Mechanical, Computer Science, Electronics Engineering)",
      specializations: "Engineering disciplines",
      approval: "AICTE",
    },
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered: "B.Sc.",
      specializations: "Science",
      approval: "–",
    },
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered: "B.Com.",
      specializations: "Commerce",
      approval: "–",
    },
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered: "BBA",
      specializations: "Business Administration",
      approval: "–",
    },
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered: "BCA",
      specializations: "Computer Applications",
      approval: "–",
    },
    {
      courseLevel: "Undergraduate (UG)",
      coursesOffered: "B.Pharma",
      specializations: "Pharmacy",
      approval: "PCI, AICTE",
    },
    {
      courseLevel: "Postgraduate (PG)",
      coursesOffered: "MBA/PGDM",
      specializations:
        "Business Administration, Rural Management, Sales & Marketing",
      approval: "AICTE",
    },
    {
      courseLevel: "Postgraduate (PG)",
      coursesOffered: "MCA",
      specializations: "Computer Applications",
      approval: "AICTE",
    },
    {
      courseLevel: "Postgraduate (PG)",
      coursesOffered: "M.Pharma",
      specializations: "Pharmacy",
      approval: "PCI, AICTE",
    },
    {
      courseLevel: "After 10th",
      coursesOffered: "Diploma",
      specializations: "Technical and Vocational",
      approval: "AICTE",
    },
    {
      courseLevel: "Specializations",
      coursesOffered: "Various Fields",
      specializations:
        "Pharmaceutical, Pharmacology, Rural Management, Sales & Marketing, Supply Chain, Telecommunication Engineering, Travel & Tourism Management",
      approval: "–",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      <div className="px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <h2 className="text-xl lg:text-2xl text-left font-bold text-[#3e96f4] mb-3">
          All Courses
        </h2>
        <div className="text-sm lg:text-base ">
          <p className="text-left text-gray-700 leading-relaxed mb-4">
            <span className="font-bold">
              Navsahyadri Education Group of Institutions (NEGI)
            </span>{" "}
            in Pune, Maharashtra, offers a wide range of undergraduate,
            postgraduate, and diploma courses across various disciplines.
            Undergraduate programs include{" "}
            <span className="font-bold">B.E./B.Tech</span> in Civil, Electrical,
            Mechanical, Computer Science, and Electronics Engineering, as well
            as <span className="font-bold">B.Sc., B.Com, BBA, BCA</span>, and{" "}
            <span className="font-bold">B.Pharma</span> courses. These programs
            aim to provide students with industry-relevant knowledge and skills
            in their respective fields.
          </p>
          <p className=" text-left text-gray-700 leading-relaxed mb-4">
            At the postgraduate level, NESGI offers programs such as{" "}
            <span className="font-bold">MBA/PGDM, MCA</span>, and{" "}
            <span className="font-bold">M.Pharma</span>. These courses focus on
            advanced learning in business administration, computer applications,
            and pharmacy, equipping students with the expertise needed to excel
            in their careers. Additionally, NESGI provides{" "}
            <span className="font-bold">Diploma courses</span> for students who
            have completed the 10th standard, offering foundational training in
            technical and vocational fields.
          </p>
          <p className=" text-left text-gray-700 leading-relaxed mb-4">
            The institute also offers specialized programs in areas such as{" "}
            <span className="font-bold">
              Pharmaceutical, Pharmacology, Rural Management, Sales and
              Marketing, Supply Chain, Telecommunication Engineering
            </span>
            , and{" "}
            <span className="font-bold">Travel and Tourism Management</span>.
            NESGI is a private institution, with all its courses approved by the{" "}
            <span className="font-bold">Pharmacy Council of India (PCI)</span>{" "}
            and the{" "}
            <span className="font-bold">
              All India Council for Technical Education (AICTE)
            </span>
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">
                    Course Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">
                    Courses Offered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">
                    Specializations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/4">
                    Approval
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {coursesOffered.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left font-medium text-gray-900">
                      {item.courseLevel}
                    </td>
                    <td className="px-6 py-4 text-sm text-left text-gray-700">
                      {item.coursesOffered}
                    </td>
                    <td className="px-6 py-4 text-sm text-left text-gray-700">
                      {item.specializations}
                    </td>
                    <td className="px-6 py-4 text-sm text-left text-gray-700">
                      {item.approval}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl lg:text-2xl font-bold text-left text-[#3e96f4] my-3">
          Navsahyadri Group of Institutes Ranking
        </h2>

        <p className="text-sm lg:text-base text-left text-gray-700 leading-relaxed mb-4">
          The{" "}
          <span className="font-bold">
            Navsahyadri Group of Institutes (NGI)
          </span>
          , located in Pune, India, is a prestigious institution known for its
          academic excellence. Accredited by the{" "}
          <span className="font-bold">
            National Assessment and Accreditation Council (NAAC)
          </span>{" "}
          with an <span className="font-bold">“A” grade</span>, NGI consistently
          delivers quality education. It is also approved by the{" "}
          <span className="font-bold">
            All India Council for Technical Education (AICTE)
          </span>
          , ensuring adherence to national standards in technical and
          professional education. The NGI’s polytechnic programs are affiliated
          with the{" "}
          <span className="font-bold">
            Maharashtra State Board of Technical Education (MSBTE)
          </span>
          , providing students with state-approved qualifications. Established
          in <span className="font-bold">2009</span>, the institution is
          recognized by the{" "}
          <span className="font-bold">Government of Maharashtra</span> and is
          affiliated with{" "}
          <span className="font-bold">
            Savitribai Phule Pune University (SPPU)
          </span>
          , adding credibility to its programs. With its robust accreditations
          and affiliations, NGI has emerged as a leading educational institute
          in Maharashtra, offering students a pathway to academic and
          professional success.
        </p>
      </div>

      {/* Detailed Description Paragraphs (matching the image text) */}
    </div>
  );
}

export default NavSahyadri04;

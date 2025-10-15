import React from "react";

export default function DrAPJAbdulKalamUniversity04() {
  const courses = [
    {
      course: "B.E. / B.Tech",
      fee: "INR 3.6 L",
      eligibility: "10+2 with 45% aggregate",
      exams: "JEE Main",
    },
    {
      course: "B.Pharma",
      fee: "INR 1 L",
      eligibility: "10+2 with 45% aggregate",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "B.Sc.",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "D.Pharma",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "BCA",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "After 10th Diploma",
      fee: "– / –",
      eligibility: "10th qualification",
      exams: "CBSE 10th, MPBSE 10th",
    },
    {
      course: "MBA/PGDM",
      fee: "– / –",
      eligibility: "Graduation with 50% aggregate",
      exams: "–",
    },
    {
      course: "B.Com",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "M.Pharma",
      fee: "INR 1 L",
      eligibility: "Graduation with 50% aggregate",
      exams: "GPAT",
    },
    {
      course: "M.E./M.Tech",
      fee: "INR 4 L",
      eligibility: "Graduation with 50% aggregate",
      exams: "GATE",
    },
    {
      course: "B.A.",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "MCA",
      fee: "– / –",
      eligibility: "Graduation with 50% aggregate",
      exams: "–",
    },
    {
      course: "BBA",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "PG Diploma",
      fee: "– / –",
      eligibility: "Graduation with 45% aggregate",
      exams: "–",
    },
    {
      course: "BSW",
      fee: "– / –",
      eligibility: "10+2 qualification",
      exams: "CBSE 12th, MPBSE 12th",
    },
  ];

  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          All Courses
        </h2>

        <p className="text-[#31393C] leading-relaxed mb-6">
          Dr. A.P.J Abdul Kalam University (AKU) offers a comprehensive
          selection of undergraduate, postgraduate, and diploma programs across
          various disciplines. Admission to most courses is based on merit,
          while certain programs require entrance exam scores such as JEE Main,
          GATE, or GPAT. The university provides a robust academic framework
          with programs in Engineering, Pharmacy, Science, Management, and more.
          Below is a detailed table showcasing the courses offered, tuition
          fees, and eligibility criteria for admission.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Courses</th>
                <th className="px-5 py-3 text-left font-semibold">Tuition Fees</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility Criteria
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Accepted Exams
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              {courses.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 ${
                    index % 2 !== 0 ? "bg-[#FAFAFA]" : ""
                  }`}
                >
                  <td className="px-5 py-3 font-medium">{item.course}</td>
                  <td className="px-5 py-3">{item.fee}</td>
                  <td className="px-5 py-3">{item.eligibility}</td>
                  <td className="px-5 py-3">{item.exams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4">
          Dr. A.P.J Abdul Kalam University Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          Dr. APJ Abdul Kalam University (APJAKU), located in Indore, India, is
          a prestigious institution recognized for its diverse academic
          offerings and robust accreditations. The university has received
          approval from esteemed organizations such as the{" "}
          <span className="font-semibold">
            All India Council for Technical Education (AICTE)
          </span>
          , the{" "}
          <span className="font-semibold">Pharmacy Council of India (PCI)</span>
          , and the{" "}
          <span className="font-semibold">Council of Architecture (COA)</span>.
          These accreditations ensure the quality and credibility of its
          programs. <span className="font-semibold">AICTE</span> has approved
          the College of Engineering, School of Engineering, and College of
          Polytechnic Engineering. Similarly,{" "}
          <span className="font-semibold">PCI</span> has accredited the College
          of Pharmacy, School of Pharmacy, and Institute of Pharmacy.{" "}
          <span className="font-semibold">COA</span> has extended its approval
          to the College of Architecture, further solidifying the university's
          reputation in the field of design. Additionally, the{" "}
          <span className="font-semibold">
            National Council for Teacher Education (NCTE)
          </span>{" "}
          has recognized the College of Professional Studies for its B.Ed.
          program. The university's commitment to alternative medicine is
          highlighted through{" "}
          <span className="font-semibold">AYUSH approval</span> for its R N
          Kapoor Memorial Homoeopathic and Ayurvedic Medical Colleges. Moreover,
          APJAKU is an active member of global academic bodies such as the{" "}
          <span className="font-semibold">
            Association of the Universities of Asia and the Pacific (AUAP)
          </span>{" "}
          and the{" "}
          <span className="font-semibold">
            Association of Indian Universities (AIU)
          </span>
          , showcasing its efforts to foster international collaboration and
          academic excellence. These accreditations and memberships underline
          APJAKU's dedication to delivering high-quality education across
          multiple disciplines
        </p>
      </div>
    </div>
  );
}

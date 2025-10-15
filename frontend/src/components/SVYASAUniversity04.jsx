import React from "react";

export default function SVYASAUniversity04() {
  const courses = [
    {
      course: "B.Sc.",
      fee: "1.7 L",
      eligibility: "10+2 : 45-55 %",
      exams: "CBSE 12th, Karnataka 2nd PUC + 2 More",
    },
    {
      course: "B.E. / B.Tech",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "BNYS",
      fee: "2.7 L",
      eligibility: "10+2 : 50 %",
      exams: "KCET, CUET",
    },
    {
      course: "M.Sc.",
      fee: "1.4 L – 1.6 L",
      eligibility: "Graduation : 50 %",
      exams: "–",
    },
    {
      course: "MBA/PGDM",
      fee: "1.2 L",
      eligibility: "Graduation : 50 %",
      exams: "Karnataka PGCET",
    },
    {
      course: "BCA",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "BBA",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "B.O.Th",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "BPT",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "PG Diploma",
      fee: "66 K",
      eligibility: "Graduation : 50 %",
      exams: "–",
    },
    {
      course: "Certificate",
      fee: "– / –",
      eligibility: "–",
      exams: "CBSE 12th, ISC + 1 More",
    },
    {
      course: "B.Com",
      fee: "– / –",
      eligibility: "10+2 : 55 %",
      exams: "CBSE 12th, ISC + 1 More",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="w-full rounded-2xl bg-gray-100 px-5 lg:px-8 py-5">
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          All Courses
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Courses</th>
                <th className="px-5 py-3 text-left font-semibold">Tuition Fees</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Exams
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
          S-VYASA University Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          S-VYASA University, located in Bangalore, India, stands as a leading educational institution, accredited by the{" "}
          <span className="font-semibold">University Grants Commission (UGC)</span> and{" "}
          <span className="font-semibold">NAAC with an A+ grade</span>. It is also recognized by the{" "}
          <span className="font-semibold">Ministry of AYUSH</span> for its Yoga and Naturopathy programs, ensuring alignment with national standards. The university's degrees are validated by the UGC, ensuring global recognition. In addition, S-VYASA holds{" "}
          <span className="font-semibold">AICTE approval</span> and a{" "}
          <span className="font-semibold">4-star rating by KSURF</span>, which demonstrates its excellence in academic and research contributions. Furthermore, it has been awarded the{" "}
          <span className="font-semibold">Centre for Excellence </span>recognition from the Ministry of AYUSH. These accolades highlight the institution's commitment to providing world-class education and holistic learning experiences.
        </p>
      </div>
    </div>
  );
}

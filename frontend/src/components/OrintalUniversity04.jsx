import React from "react";

export default function OrientalUniversity04() {
  const courses = [
    {
      course: "B.Sc. (13 courses)",
      fee: "75 K – 2.6 L",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, MPBSE 12th, others",
    },
    {
      course: "B.E. / B.Tech (19 courses)",
      fee: "1.1 L – 3.2 L",
      eligibility: "10+2: 45%",
      exams: "JEE Main, CBSE 12th, others",
    },
    {
      course: "M.A. (7 courses)",
      fee: "50 K",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "B.Pharma (2 courses)",
      fee: "2.1 L – 3.4 L",
      eligibility: "10+2: 45%",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "B.Ed (2 courses)",
      fee: "1.1 L – 1.2 L",
      eligibility: "–",
      exams: "–",
    },
    {
      course: "BCA (3 courses)",
      fee: "1.4 L",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "B.A. LL.B. (1 course)",
      fee: "3 L",
      eligibility: "10+2: 45%",
      exams: "CLAT",
    },
    {
      course: "BBA (6 courses)",
      fee: "1.1 L – 1.5 L",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "M.Sc. (10 courses)",
      fee: "50 K – 1.3 L",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "MBA/PGDM (7 courses)",
      fee: "80 K – 1.4 L",
      eligibility: "Graduation: 50%",
      exams: "MAT, CAT",
    },
    {
      course: "B.Com (Hons) (2 courses)",
      fee: "66 K",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "B.A. (9 courses)",
      fee: "60 K – 90 K",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, ISC, others",
    },
    {
      course: "LL.M. (1 course)",
      fee: "65 K",
      eligibility: "Graduation: 55%",
      exams: "CLAT",
    },
    {
      course: "M.E./M.Tech (17 courses)",
      fee: "70 K – 1.4 L",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "M.Pharma (4 courses)",
      fee: "1.7 L",
      eligibility: "Graduation: 55%",
      exams: "–",
    },
    {
      course: "MCA (1 course)",
      fee: "1.1 L",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "M.Ed (1 course)",
      fee: "84 K",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "PG Diploma (4 courses)",
      fee: "15.8 K – 22 K",
      eligibility: "Graduation: 45%",
      exams: "–",
    },
    {
      course: "D.Pharma (1 course)",
      fee: "1.5 L",
      eligibility: "CBSE 12th, MPBSE 12th",
      exams: "–",
    },
    {
      course: "B.J.M.C. (1 course)",
      fee: "1.1 L",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, MPBSE 12th",
    },
    {
      course: "B.Lib.I.Sc. (1 course)",
      fee: "23 K",
      eligibility: "–",
      exams: "–",
    },
    {
      course: "LL.B. (1 course)",
      fee: "1.4 L",
      eligibility: "CLAT",
      exams: "CLAT",
    },
    {
      course: "M.Lib.I.Sc. (1 course)",
      fee: "25 K",
      eligibility: "Graduation: 50%",
      exams: "–",
    },
    {
      course: "BPA (3 courses)",
      fee: "90 K",
      eligibility: "10+2: 50%",
      exams: "CBSE 12th, ISC, others",
    },
    {
      course: "M.Com (2 courses)",
      fee: "50 K",
      eligibility: "Graduation: 50%",
      exams: "–",
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
          Oriental University offers a wide range of <span className="font-semibold">undergraduate (UG) and postgraduate (PG) courses</span> across various fields of education. Some of the prominent UG courses include B.Sc. in multiple specializations, B.Ed, B.A. LL.B., BCA, and BBA, with eligibility criteria such as Class 12 with a minimum of 50% marks. The university also offers PG courses in diverse disciplines, such as M.Tech, MBA, M.Sc., M.Com, and LL.M., catering to different educational backgrounds and entrance exams.
        </p>
        <p className="text-[#31393C] leading-relaxed mb-6">
          The institution's offerings also include diploma courses and professional certifications. Admission to some courses is through entrance exams like <span className="font-semibold">JEE Main, MAT, CAT, and CLAT</span>, while others are based on qualifying examinations such as CBSE 12th or MPBSE 12th. Tuition fees for UG courses range from <span className="font-semibold">INR 60,000 to INR 3.0 lakh</span>, while PG courses typically range from <span className="font-semibold">INR 50,000 to INR 1.7 lakh</span>.
        </p>
        <p className="text-[#31393C] leading-relaxed mb-6">
          The table below highlights the course-wise tuition fees, eligibility, and entrance exams for admission:
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
          Oriental University Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          Oriental University, Indore (OUI) is a self-financed private university established in 2011. It is accredited by several prestigious organizations, ensuring its credibility and recognition in the academic world. The university is approved by the{" "}
          <span className="font-semibold">All India Council for Technical Education (AICTE)</span>, the{" "}
          <span className="font-semibold">University Grants Commission (UGC)</span>, and the{" "}
          <span className="font-semibold">Pharmacy Council of India (PCI)</span>. Additionally, it holds approvals from the{" "}
          <span className="font-semibold">National Council for Teacher Education (NCTE)</span> and the{" "}
          <span className="font-semibold">Bar Council of India (BCI)</span>, making it a well-rounded institution across multiple disciplines.
        </p>
        <p className="text-[#31393C] leading-relaxed mt-4">
          OUI's status as a <span className="font-semibold">UGC-recognized University</span> was granted under <span className="font-semibold">Section 2f of the UGC Act, 1956</span>. The university also holds{" "}
          <span className="font-semibold">ISO certification</span> and accreditation from{" "}
          <span className="font-semibold">MPPURC</span>. These recognitions highlight the university's commitment to quality education and standards. With such endorsements, Oriental University is well-equipped to provide students with an education that meets national and international standards.
        </p>

      </div>
    </div>
  );
}

import React from "react";

export default function SAGEUniversity04() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="w-full px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          All Courses
        </h2>

        <p className="text-[#31393C] leading-relaxed mb-6">
          SAGE University Indore offers a broad array of undergraduate (UG),
          postgraduate (PG), and diploma courses across multiple disciplines
          such as Engineering, Management, Science, Arts, and Law. UG courses
          like B.Sc., B.E./B.Tech, and BCA are available, with tuition fees
          ranging from INR 90,000 to INR 20 lakhs. The university also offers
          several PG programs such as M.E./M.Tech, MBA/PGDM, and M.Sc., with
          fees varying between INR 60,000 and INR 17.5 lakhs. The university’s
          diverse curriculum ensures students have access to both traditional
          and modern fields of study. Eligibility criteria for most courses
          require completion of the relevant previous education with a minimum
          aggregate score, and entrance exams like SEE, GATE, NATA, and others
          are typically part of the admission process.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Courses</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Tuition Fees
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              {[
                ["B.Sc. (12 courses)", "90 K – 14 L", "10+2 : 50 % | Exams: SEEC, CBSE 12th+2 More"],
                ["B.E. / B.Tech (19 courses)", "1.5 L – 20 L", "10+2 : 50 % | Exams: CBSE 12th, ISC+2 More"],
                ["M.A. (5 courses)", "60 K – 1 L", "Exams: SEE"],
                ["B.Pharma (2 courses)", "2.7 L – 4.4 L", "10+2 : 45 % | Exams: SEE"],
                ["B.A. (6 courses)", "90 K – 10.5 L", "10+2 : 50 % | Exams: CBSE 12th, ISC+2 More"],
                ["BCA (6 courses)", "2.1 L – 3 L", "10+2 : 60 % | Exams: SEE, CBSE 12th+2 More"],
                ["B.A. LL.B. (1 course)", "3.8 L", "10+2 : 45 % | Exams: SEE"],
                ["B.Com (7 courses)", "1.5 L – 10.5 L", "10+2 : 50 % | Exams: SEE, CBSE 12th+2 More"],
                ["After 10th Diploma (7 courses)", "80 K – 1.2 L", "Exams: SEE"],
                ["M.Sc. (7 courses)", "60 K – 1.2 L", "Graduation : 50 % | Exams: SEE"],
                ["MCA (3 courses)", "1.2 L – 1.6 L", "Exams: CBSE 12th, ISC+2 More"],
                ["BBA (13 courses)", "2.3 L – 15 L", "10+2 : 50 % | Exams: CBSE 12th, ISC+1 More"],
                ["M.E./M.Tech (9 courses)", "80 K – 1.5 L", "Graduation : 50-55 % | Exams: GATE, SEE"],
                ["D.Pharma (1 course)", "1.5 L", "10+2 : 45 % | Exams: SEE"],
                ["UG Diploma (4 courses)", "7.5 K – 80 K", "10+2 : 50 % | Exams: CBSE 12th, ISC+2 More"],
                ["MBA/PGDM (17 courses)", "1.5 L – 17.5 L", "Exams: CBSE 12th, ISC+1 More"],
                ["LL.M. (1 course)", "1.5 L", "Graduation : 55 % | Exams: SEE"],
                ["LL.B. (1 course)", "2.3 L", "Exams: SEE"],
                ["B.Arch (1 course)", "3.5 L", "10+2 : 50 % | Exams: NATA, SEE"],
                ["BBA LL.B. (1 course)", "3.8 L", "10+2 : 45 % | Exams: SEE"],
                ["M.Pharma (2 courses)", "2.2 L", "– / –"],
                ["BPA (3 courses)", "1.5 L – 10.5 L", "10+2 : 50 % | Exams: CBSE 12th, ISC+1 More"],
                ["B.Com (Hons) (1 course)", "1.5 L", "– / –"],
                ["B.Des (4 courses)", "8 L", "10+2 : 50 % | Exams: CBSE 12th, ISC+1 More"],
                ["BVA (2 courses)", "6.8 L", "Exams: CBSE 12th, ISC+1 More"],
                ["Pharm.D (1 course)", "9 L", "Exams: CBSE 12th, ISC+1 More"],
              ].map(([course, fees, eligibility], idx) => (
                <tr
                  key={idx}
                  className={`border-t border-gray-300 ${
                    idx % 2 === 1 ? "bg-[#FAFAFA]" : ""
                  }`}
                >
                  <td className="px-5 py-3 font-medium">{course}</td>
                  <td className="px-5 py-3">{fees}</td>
                  <td className="px-5 py-3">{eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4">
          SAGE University Ranking
        </h2>
        <p className="text-[#31393C] leading-relaxed">
          SAGE University, with campuses in Indore and Bhopal, Madhya Pradesh,
          India, is a leading institution known for its academic excellence and
          diverse accreditation. The Indore campus has received an A+ grade from
          NAAC, making it the youngest private university in India to achieve
          this distinction. The Bhopal campus has also earned an A grade from
          NAAC, reflecting the institution’s commitment to high-quality
          education. SAGE University is approved by the University Grants
          Commission (UGC) and the All India Council for Technical Education
          (AICTE), ensuring that its programs are recognized nationally.
          Furthermore, the Indore campus is approved by several important
          councils, including the Bar Council of India (BCI), Pharmacy Council
          of India (PCI), and Council of Architecture (COA). This robust
          accreditation and approval framework highlights SAGE University’s
          dedication to offering top-tier education across various disciplines.
        </p>
      </div>
    </div>
  );
}

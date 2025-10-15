import React from "react";

const Vishweshraiya04 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C] rounded-lg shadow-lg p-6 md:p-8 m-4 mt-5">
      {/* Heading */}
      <h3 className="text-2xl sm:text-2xl font-bold mb-4 text-[#3E96F4]">
        All Courses
      </h3>
      <h3 className="text-xl font-semibold mb-2">
        Courses and Eligibility at Vishveshwarya Group of Institutions
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Vishveshwarya Group of Institutions (VGI) offers a wide range of After
        10th, UG, and PG courses in fields like Business & Management Studies,
        Science, and Beauty & Fitness. Admission to these programs is based on
        entrance exams such as CAT, MAT, and XAT. Popular courses include
        B.E./B.Tech, MBA/PGDM, B.Ed, and various diplomas. The table below
        provides an overview of the courses offered, along with their
        eligibility criteria and tuition fees.
      </p>

      {/* Courses Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <tbody>
            {[
              ["Course", "Tuition Fees", "Eligibility", "Entrance Exams"], // Header row
              ["B.Sc. (4 courses)", "45 K – 1.2 L", "10+2: 33-45%", "–"],
              [
                "B.E./B.Tech (7 courses)",
                "2.4 L",
                "10+2: Science",
                "UPTAC, JEE Main+1 More",
              ],
              ["B.Pharma (2 courses)", "2.8 L", "10+2: Science", "CUET"],
              [
                "PG Diploma (6 courses)",
                "22.5 K – 45 K",
                "Graduation: 45%",
                "JEECUP",
              ],
              [
                "MBA/PGDM (2 courses)",
                "1.3 L",
                "Graduation: 50%",
                "MAT, XAT+2 More",
              ],
              [
                "After 10th Diploma (6 courses)",
                "50 K – 1 L",
                "10th Pass",
                "CUET, JEECUP",
              ],
              ["LL.B. (1 course)", "90 K", "Graduation", "–"],
              ["B.Voc (1 course)", "89.7 K", "10+2 Pass", "CUET"],
              ["BBA (1 course)", "84 K", "10+2: 55%", "–"],
              ["B.Ed (1 course)", "51.3 K", "Graduation", "–"],
              ["B.J.M.C. (1 course)", "90 K", "10+2: 45%", "–"],
              ["MCA (1 course)", "1.2 L", "Graduation", "CUET-PG"],
              ["D.Pharma (2 courses)", "1 L", "10+2: Science", "JEECUP"],
              ["M.E./M.Tech (4 courses)", "1.3 L", "Graduation: 50%", "–"],
            ].map(([col1, col2, col3, col4], idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="border px-4 py-2 font-medium">{col1}</td>
                <td className="border px-4 py-2">{col2}</td>
                <td className="border px-4 py-2">{col3}</td>
                <td className="border px-4 py-2">{col4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ranking Section */}
      <h3 className="text-xl font-semibold mb-2 text-[#3E96F4]">
        Vishveshwarya Group of Institutions Ranking
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        The Vishveshwarya Group of Institutions (VGI) in Greater Noida, Uttar
        Pradesh, is a renowned institution accredited by the All India Council
        for Technical Education (AICTE). It is affiliated with Dr. A.P.J. Abdul
        Kalam Technical University (AKTU) and holds several prestigious
        approvals, including from the State Board of Technical Education
        (BTEUP), the Bar Council of India (BCI), the Pharmacy Council of India
        (PCI), and the National Council for Teacher Education (NCTE). VGI offers
        a wide range of courses across various fields such as Engineering,
        Business and Management Studies, Law, IT and Software, Design, Mass
        Communication and Media, Medicine and Health Sciences, Beauty and
        Fitness, Science, and Teaching and Education. These courses are designed
        to cater to the diverse academic needs of students. The institution is
        dedicated to providing high-quality education with modern facilities,
        focusing on the holistic development of its students. With a strong
        emphasis on practical knowledge, VGI aims to prepare students for
        successful careers in their chosen fields.
      </p>
    </section>
  );
};

export default Vishweshraiya04;

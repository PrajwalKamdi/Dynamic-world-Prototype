import React from "react";

function AI_University_4() {
  const allCourses = [
    {
      component: "Programs Offered",
      details:
        "Undergraduate, Postgraduate, Doctoral, Certificate, and Diploma programs focused on AI, Data Science, Business, Engineering, Health Sciences, and Design",
    },
    {
      component: "Popular Courses",
      details:
        "B.Tech in Artificial Intelligence, MBA in AI & Analytics, B.Sc in Data Science, M.Sc in AI, PG Diploma in AI and Machine Learning",
    },
    {
      component: "Fee Range",
      details:
        "INR 1,50,000 – INR 3,50,000 annually, depending on the program and specialization",
    },
    {
      component: "International Student Support",
      details:
        "Dedicated support including visa assistance, language support, cultural adaptation sessions, global peer network",
    },
    {
      component: "AI Ethics and Policy Center",
      details:
        "Focus on ethical AI practices, policy development, and training students in the ethical implications of AI",
    },
    {
      component: "Global Exposure",
      details:
        "Partnerships with universities in the US, UK, and Europe for exchange programs, research collaborations, and summer study tours",
    },
    {
      component: "Skill Development Programs",
      details:
        "Certificate programs in Data Analytics, Cloud Computing, Python for AI, Cybersecurity Essentials, Digital Marketing Analytics",
    },
    {
      component: "Curriculum Focus",
      details:
        "Emphasis on AI ethics, critical problem-solving, experiential learning, industry-relevant capstone projects, hands-on labs",
    },
    {
      component: "Student Development",
      details:
        "Soft skills training, leadership workshops, technical certifications, personalized mentoring by faculty and industry experts",
    },
    {
      component: "Digital Learning Environment",
      details:
        "Integrated Learning Management System (LMS), online access to course materials, video lectures, and virtual labs",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      <div className="px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <h2 className="text-xl lg text-blue-400 font-bold ">All Courses</h2>
        <div className="text-sm lg:text-base text-left text-gray-700 leading-relaxed ">
          <p className="mb-4">
            Universal AI University offers a diverse range of undergraduate,
            postgraduate, doctoral, certificate, and diploma programs focusing
            on fields such as AI, Data Science, Business, Engineering, Health
            Sciences, and Design. The fee range for these programs varies from
            INR 1,98,000 to INR 9,48,000, with additional international fees
            between USD 14,500 and EUR 9,000, depending on the degree level,
            duration, and specialization. Popular courses include B.Tech in
            Artificial Intelligence, MBA in AI & Analytics, B.Sc in Data
            Science, M.Sc in AI, and PG Diploma in AI and Machine Learning. The
            university offers 30 courses across Ph.D., PG, and UG levels, with 3
            courses each in B.Des and BA at the UG level. At the PG level,
            students can choose from 7 MBA specializations and 5 PGDM courses.
            Admissions are based on marks secured in the qualifying examination.
            The university also provides extensive international student
            support, AI ethics training, skill development programs, and
            opportunities for global exposure through university partnerships.
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/3">
                    Component
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left  font-medium text-gray-900">
                      {item.component}
                    </td>
                    <td className="px-6 py-4 text-sm text-left text-gray-700">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-left text-[#3e96f4] mb-3">
            AI Universal University Ranking
          </h2>

          <p className="text-sm lg:text-base text-left text-gray-700 leading-relaxed mb-4">
            Universal AI University, located in Karjat, Maharashtra, is a
            prestigious institution accredited by the National Board of
            Accreditation (NBA) and approved by the All India Council for
            Technical Education (AICTE). The university offers a range of
            postgraduate programs, including the PGDM- Single & Dual
            Specialization program, which is accredited by AICTE, AIU, and NBA.
            Additionally, it offers a PGDM + MBA degree in collaboration with
            Cardiff Metropolitan University, UK, accredited by the Quality
            Assurance Agency (QAA), UK. Admission to these programs is
            merit-based, with candidates required to clear entrance exams such
            as CAT, NPAT, or CUET. The university provides undergraduate,
            postgraduate, and doctoral courses across various disciplines,
            ensuring a comprehensive academic experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AI_University_4;

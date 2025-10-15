import React from "react";

const DVOC3 = () => {
  const courseDetails = [
    { aspect: "Program Level", details: "Diploma" },
    { aspect: "Duration", details: "3 Years" },
    {
      aspect: "Key Specializations",
      details:
        "Production Engineering, Automobile Servicing, Industrial Safety, Retail Management, Social Work",
    },
    {
      aspect: "Eligibility Criteria",
      details: "10th/12th pass from a recognized board",
    },
    {
      aspect: "Skill Focus",
      details: "Practical knowledge, critical thinking, communication skills",
    },
    { aspect: "Fee Range", details: "₹20,000 – ₹1,50,000 per year" },
    {
      aspect: "Career Roles",
      details: "Machine Operator, Retail Manager, Safety Officer, Social Worker",
    },
    {
      aspect: "Job Sectors",
      details: "Manufacturing, Automotive, Retail, Public Service",
    },
    { aspect: "Average Salary", details: "₹2 LPA – ₹6 LPA" },
  ];

  return (
    <div
      className="min-h-screen bg-white text-[#31393C]"
   
    >
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 md:px-10">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-5 md:p-8 mb-6">
          <h1 className="text-2xl font-bold text-[#3E96F4] mb-3">
            Diploma in Vocation (D.Voc)
          </h1>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            A <strong>Diploma in Vocation (D.Voc)</strong> is a skill-based
            program that provides students with{" "}
            <strong>hands-on training</strong> and{" "}
            <strong>industry-aligned knowledge</strong> across various trades and
            fields. It prepares learners for{" "}
            <strong>entry-level professional roles</strong> in high-demand
            sectors, ensuring they are job-ready upon completion.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            D.Voc specializations include{" "}
            <strong>Production Engineering</strong> (engineering drawing,
            manufacturing processes), <strong>Automobile Servicing</strong>{" "}
            (vehicle maintenance and repair), and{" "}
            <strong>Industrial Safety</strong> (workplace hazard identification
            and risk prevention). Additional options like{" "}
            <strong>Retail Management</strong> and{" "}
            <strong>Social Work</strong> help develop business, service, and
            community-oriented skills.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            Through this program, students build{" "}
            <strong>critical thinking</strong>,{" "}
            <strong>communication</strong>, and{" "}
            <strong>problem-solving</strong> abilities while gaining exposure to
            modern tools and industry practices. Graduates often secure roles in
            <strong> manufacturing, retail, safety, and social sectors</strong>,
            paving the way for long-term career growth.
          </p>
        </div>

        {/* Course Details */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-5 md:p-8">
          <h2 className="text-lg font-semibold text-[#3E96F4] mb-4">
            D.Voc Course Details
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#EDEEEB] text-[#31393C]">
                  <th className="border border-gray-300 py-2 px-3 font-semibold text-center">
                    Aspect
                  </th>
                  <th className="border border-gray-300 py-2 px-3 font-semibold text-center">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseDetails.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="border border-gray-300 py-2 px-3 font-semibold text-[#31393C]">
                      {row.aspect}
                    </td>
                    <td className="border border-gray-300 py-2 px-3 text-gray-700">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-500 text-center">
            *Fee range and salary are approximate and may vary by institution and
            location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DVOC3;

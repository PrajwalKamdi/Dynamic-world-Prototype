import React from "react";

const Diploma03 = () => {
  const DiplomaCourseInfo = [
    {
      name: "Definition",
      value:
        "Short-term program focused on practical skills for specific careers",
    },
    { name: "Eligibility", value: "After 10th or 12th grade" },
    {
      name: "Purpose",
      value:
        "Prepare for work, gain specific skills, enter the workforce quickly",
    },
    {
      name: "Examples",
      value:
        "Digital Marketing, Cyber Security, Data Science, Engineering, Nursing",
    },
    { name: "Duration", value: "Varies; generally 6 months to 2 years" },
    {
      name: "Awarding Body",
      value: "Educational institutions or vocational training centers",
    },
    {
      name: "Key Benefits",
      value:
        "Practical training, industry-focused skills, faster career opportunities",
    },
    {
      name: "Cost Range",
      value: "₹10,000 – ₹2,00,000 (varies by course and institution)",
    },
    {
      name: "Difference from Degree",
      value:
        "Diplomas focus on skill-based learning; degrees provide a broad academic and theoretical base",
    },
    {
      name: "Common Sectors",
      value: "IT, healthcare, engineering, hospitality, renewable energy",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-white/90" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Diploma Overview
            </span>
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            What is a <span className="opacity-90">Diploma Course?</span>
          </h1>
          <p className="mt-2 text-white/85">
            A concise, skills-first pathway to enter the workforce faster—with
            practical, industry-relevant training.
          </p>
        </div>

        {/* Intro Copy */}
        <div className="rounded-2xl bg-white/95 ring-1 ring-black/5 shadow-xl backdrop-blur p-6 md:p-8 text-gray-800">
          <p className="leading-relaxed">
            Diploma course is a short-term training program focused on equipping
            students with practical skills for a specific job or career. These
            courses are ideal for students after completing their 10th or 12th
            grade, offering a more direct and time-efficient path to enter the
            workforce. Diploma courses emphasize skill-building and
            industry-relevant training, enabling learners to quickly adapt to
            professional environments.
          </p>

          <div className="mt-6">
            <h5 className="text-lg font-semibold text-gray-900">
              Benefits and Examples of Diploma Courses
            </h5>
            <p className="mt-2 leading-relaxed">
              Diploma courses serve various purposes, such as helping
              individuals prepare for work, master specific skills, or serve as
              a stepping stone toward higher education. Examples include Diploma
              in Digital Marketing, Diploma in Cyber Security, and Diploma in
              Data Science, which cater to the booming IT and digital fields.
              Additionally, options like Diploma in Renewable Energy Technology,
              Diploma in Hospitality Management, and Diploma in Nursing allow
              students to gain expertise in specialized industries.
            </p>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold text-gray-900">
              Difference Between Diploma and Degree
            </h5>
            <p className="mt-2 leading-relaxed">
              While both diplomas and degrees are valuable credentials, their
              focus and duration differ. A diploma is typically awarded after
              the completion of a specific course and exam, focusing on
              practical knowledge. In contrast, a degree is a broader
              qualification granted by colleges or universities, involving a
              more extensive curriculum and academic depth. Diplomas are ideal
              for students looking for quick employability, while degrees cater
              to those seeking comprehensive theoretical and professional
              grounding.
            </p>
          </div>

          {/* Table */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Diploma Courses Table
              </h3>
              <span className="text-sm text-gray-600">
                Total Aspects: <strong>{DiplomaCourseInfo.length}</strong>
              </span>
            </div>

            <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 shadow-md">
              <div className="max-h-[60vh] overflow-auto">
                <table className="min-w-full text-left">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-sky-50/95 backdrop-blur supports-[backdrop-filter]:bg-sky-50/75 text-gray-700">
                      <th className="px-5 py-3 text-sm font-semibold">
                        Aspect
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {DiplomaCourseInfo.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/70 hover:bg-gray-100"
                        }
                      >
                        <td className="px-5 py-3 align-top text-gray-900 font-medium">
                          {item.name}
                        </td>
                        <td className="px-5 py-3 align-top text-gray-700">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {DiplomaCourseInfo.length === 0 && (
                  <div className="p-8 text-center text-gray-600">
                    No data available.
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Card View (optional) */}
            <div className="md:hidden mt-4 grid gap-3">
              {DiplomaCourseInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    Aspect
                  </div>
                  <div className="text-gray-900 font-semibold">{item.name}</div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                    Details
                  </div>
                  <div className="text-gray-700">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diploma03;

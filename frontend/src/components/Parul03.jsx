import React from "react";

const admissionHighlightsData = [
  { particular: "Mode of Study", details: "Offline/Online" },
  { particular: "Programmes Offered", details: "200+" },
  { particular: "Admission Status", details: "Ongoing" },
  {
    particular: "How to Apply?",
    details: "Online at Parul University Admissions",
  },
  {
    particular: "Level of Programmes Offered",
    details: "UG, PG, Integrated & PhD",
  },
  { particular: "Popular Programmes", details: "MBA, BTech, BBA, BCA, MCA" },
];

const eligibilityCriteriaData = [
  {
    course: "BTech",
    eligibility:
      "Class 12 in Physics, Chemistry, Maths/Biology (45% aggregate)",
    selection: "JEE Main/ GUJCET + GUJCET Counselling",
  },
  {
    course: "BBA",
    eligibility: "Class 12 in any stream with English",
    selection: "Based on Class 12 Merit",
  },
  {
    course: "MBA",
    eligibility: "Graduation with 50% aggregate (45% for reserved category)",
    selection: "Merit-based",
  },
  {
    course: "BDes",
    eligibility: "Class 12 in any stream with English",
    selection: "Merit-based",
  },
  {
    course: "BCA",
    eligibility: "Class 12 in any stream with English and Maths or Statistics",
    selection: "Merit-based",
  },
  {
    course: "MCA",
    eligibility:
      "Graduation with 50% (45% for reserved category) from a recognized university",
    selection: "Merit-based",
  },
  {
    course: "BAMS",
    eligibility:
      "Class 12 in Science with PCB (50% aggregate for general, 45% for reserved)",
    selection: "NEET UG (General: 50% Reserved: 40% PR)",
  },
];

const Parul03 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-[#31393C] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-gray-100 p-6 md:p-10">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-xl md:text-3xl font-bold text-[#3E96F4]">
            Admission Process
          </h1>
        </header>

        {/* Description */}
        <section className="space-y-4 text-base leading-7 text-gray-700">
          <p>
            Parul University Admission {currentYear} is currently open, offering
            a wide range of programs across various levels, including
            undergraduate, postgraduate, Ph.D., dual degree, and diploma
            courses. The university accepts applications for over 200 courses in
            multiple disciplines such as Engineering, Management, Law, Design,
            and more.
          </p>
          <p>
            Admission to these programs is primarily merit-based, with some
            courses also requiring entrance exam scores, such as JEE Main,
            GUJCET, NATA, and NEET UG. For specific programs like MBBS,
            candidates must submit their NEET UG scores, while BArch candidates
            need to provide their NATA scores.
          </p>
        </section>

        {/* Highlights Table / Cards */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl md:text-2xl font-semibold ">
            Parul University Admission Highlights {currentYear}
          </h2>

          {/* Mobile: stacked cards */}
          <div className="md:hidden divide-y divide-gray-200 rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden">
            {admissionHighlightsData.map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-sm font-semibold text-gray-600">
                  {item.particular}
                </div>
                <div className="mt-1 text-base text-gray-800">
                  {item.details}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden">
            <table className="w-full border-collapse text-[15px]">
              <tbody>
                {admissionHighlightsData.map((row, i) => (
                  <tr key={i} className="even:bg-gray-50/70 hover:bg-gray-50">
                    <td className="w-1/3 p-4 font-semibold text-gray-700 border-b border-gray-200">
                      {row.particular}
                    </td>
                    <td className="p-4 text-gray-800 border-b border-gray-200">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Eligibility & Selection */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl md:text-2xl font-semibold">
            Parul University Admission {currentYear}: Eligibility & Selection
            Criteria
          </h2>

          {/* Mobile: card list (thead hidden) */}
          <div className="md:hidden space-y-4">
            {eligibilityCriteriaData.map((row, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-4">
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Course
                  </span>
                  <span className="text-base text-gray-800">{row.course}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Eligibility
                  </span>
                  <span className="text-base text-gray-800">
                    {row.eligibility}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-600">
                    Selection
                  </span>
                  <span className="text-base text-gray-800">
                    {row.selection}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className="hidden md:block rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                    Course
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                    Eligibility
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                    Selection
                  </th>
                </tr>
              </thead>
              <tbody>
                {eligibilityCriteriaData.map((row, i) => (
                  <tr key={i} className="even:bg-gray-50/70 hover:bg-gray-50">
                    <td className="p-4 text-gray-800 border-b border-gray-200">
                      {row.course}
                    </td>
                    <td className="p-4 text-gray-800 border-b border-gray-200">
                      {row.eligibility}
                    </td>
                    <td className="p-4 text-gray-800 border-b border-gray-200">
                      {row.selection}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Parul03;

// SkillCourse03.jsx
import React from "react";

const SkillCourse03 = () => {
  const rows = [
    ["Focus", "Practical abilities and hands-on training"],
    ["Duration", "Short-term (weeks to months)"],
    ["Fields", "Technology, healthcare, business, creative arts, finance, etc."],
    ["Format", "Online, hybrid, or in-person"],
    ["Outcome", "Certification to enhance resumes and career prospects"],
    ["Key Benefits", "Increased employability, job-readiness, and expertise"],
  ];

  return (
    <section className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Hero */}
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-8 lg:py-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#31393C] shadow-sm">
              Skill Courses
            </span>
          </div>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            What are <span className="opacity-95">Skill Courses?</span>
          </h1>

          <p className="mt-2 text-sm md:text-base text-gray-900/90 max-w-3xl">
            Practical, industry-focused learning designed to make you job-ready—fast.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-6xl   pb-10">
        <div className=" bg-white/95 ring-1 ring-gray-200 shadow-sm p-6 md:p-8">
          {/* Intro Copy */}
          <div className="space-y-6 leading-8">
            <p>
              Skill courses are specialized programs designed to{" "}
              <b>enhance practical abilities</b> and provide{" "}
              <b>industry-relevant knowledge</b> in specific fields. Unlike
              traditional degree programs that emphasize theoretical concepts,
              these courses focus on <b>hands-on training</b> and real-world
              skills, making individuals more competitive in the job market.
              They cater to learners aiming to improve employability, switch
              careers, or gain expertise in a particular domain.
            </p>

            <p>
              These courses are tailored to meet <b>job-market demands</b>,
              offering <b>short durations</b> (weeks to months) so you can
              upskill fast. With <b>flexible</b> modes like online and hybrid,
              you can learn at your own pace. Areas such as{" "}
              <b>technology, healthcare, business, creative arts, and digital marketing</b>{" "}
              offer diverse opportunities. On completion, recognized{" "}
              <b>certifications</b> strengthen your resume and career prospects.
            </p>

            <p className="mb-2">
              Skill courses are essential for <b>upskilling</b> and adapting to
              evolving industry trends. The emphasis on <b>practical training</b>{" "}
              ensures you’re job-ready and confident. These programs help you stay
              relevant in a changing workforce and achieve career goals effectively.
            </p>
          </div>

          {/* Highlight Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Hands-on Learning",
              "Short Duration",
              "Flexible Modes",
              "Industry-Aligned",
              "Certification",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full bg-[#EDEEEB] text-[#31393C] text-xs px-3 py-1 ring-1 ring-gray-200"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#3E96F4] to-transparent" />
            <span className="text-sm font-semibold text-[#3E96F4]">Overview</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#3E96F4] to-transparent" />
          </div>

          {/* Table Header */}
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Skill Courses Table</h3>
            <span className="text-sm text-gray-600">Overview of key attributes</span>
          </div>

          {/* Desktop / Tablet Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
            <div className="max-h-[60vh] overflow-auto">
              <table className="min-w-full text-left">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[#EDEEEB] text-[#31393C]">
                    <th className="px-5 py-3 text-sm font-semibold">Feature</th>
                    <th className="px-5 py-3 text-sm font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rows.map(([feature, details], idx) => (
                    <tr
                      key={feature}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70 hover:bg-gray-100"}
                    >
                      <td className="px-5 py-3 align-top font-medium text-gray-900">
                        {feature}
                      </td>
                      <td className="px-5 py-3 align-top text-gray-700">{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid gap-3">
            {rows.map(([feature, details]) => (
              <div
                key={feature}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="text-[11px] uppercase tracking-wide text-gray-500">
                  Feature
                </div>
                <div className="text-gray-900 font-semibold">{feature}</div>
                <div className="mt-2 text-[11px] uppercase tracking-wide text-gray-500">
                  Details
                </div>
                <div className="text-gray-700">{details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCourse03;

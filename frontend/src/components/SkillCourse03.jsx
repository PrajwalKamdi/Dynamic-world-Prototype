import React from "react";

const SkillCourse03 = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700 px-6 md:px-12 py-12">
      {/* Header */}
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-white/90" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Skill Courses
            </span>
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            What are <span className="opacity-90">Skill Courses?</span>
          </h1>
          <p className="mt-1 text-white/85">
            Practical, industry-focused learning designed to make you
            job-ready—fast.
          </p>
        </div>

        {/* Text block */}
        <div className="rounded-2xl bg-white/95 ring-1 ring-black/5 shadow-xl backdrop-blur p-6 md:p-8 text-gray-800">
          <div className="space-y-6 leading-8">
            <p>
              Skill courses are specialized programs designed to{" "}
              <b>enhance practical abilities</b> and provide{" "}
              <b>industry-relevant knowledge</b> in specific fields. Unlike
              traditional degree programs that emphasize theoretical concepts,
              these courses focus on <b>hands-on training</b> and real-world
              skills, making individuals more competitive in the job market.
              They cater to individuals aiming to enhance employability,
              transition to a new career, or gain expertise in a particular
              domain.
            </p>

            <p>
              These courses are tailored to meet <b>job market demands</b>,
              offering <b>short durations</b> ranging from a few weeks to
              months, allowing students to quickly acquire practical expertise.
              With <b>flexibility</b> in learning modes such as online or hybrid
              formats, skill courses enable students to learn at their own pace.
              Fields like{" "}
              <b>
                technology, healthcare, business, creative arts, digital
                marketing,
              </b>{" "}
              and more offer diverse opportunities for learners. Upon
              completion, students receive <b>certifications</b> that strengthen
              their resumes and boost career prospects.
            </p>

            <p>
              Skill courses are vital for <b>upskilling</b> and adapting to
              evolving industry trends. The focus on <b>practical training</b>{" "}
              ensures students are job-ready and proficient in specialized
              areas. By completing these programs, individuals can stay relevant
              in a rapidly changing workforce and achieve their career goals
              effectively.
            </p>
          </div>

          {/* Table */}
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Skill Courses Table
              </h3>
              <span className="text-sm text-gray-600">
                Overview of key attributes
              </span>
            </div>

            {/* Desktop / Tablet Table */}
            <div className="hidden md:block overflow-hidden rounded-xl ring-1 ring-gray-200 shadow-md">
              <div className="max-h-[60vh] overflow-auto">
                <table className="min-w-full text-left">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-sky-50/95 backdrop-blur supports-[backdrop-filter]:bg-sky-50/75 text-gray-700">
                      <th className="px-5 py-3 text-sm font-semibold">
                        Feature
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Focus", "Practical abilities and hands-on training"],
                      ["Duration", "Short-term (weeks to months)"],
                      [
                        "Fields",
                        "Technology, healthcare, business, creative arts, finance, etc.",
                      ],
                      ["Format", "Online, hybrid, or in-person"],
                      [
                        "Outcome",
                        "Certification to enhance resumes and career prospects",
                      ],
                      [
                        "Key Benefits",
                        "Increased employability, job-readiness, and expertise",
                      ],
                    ].map(([feature, details], idx) => (
                      <tr
                        key={feature}
                        className={
                          idx % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/70 hover:bg-gray-100"
                        }
                      >
                        <td className="px-5 py-3 align-top text-gray-900 font-medium">
                          {feature}
                        </td>
                        <td className="px-5 py-3 align-top text-gray-700">
                          {details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden grid gap-3">
              {[
                ["Focus", "Practical abilities and hands-on training"],
                ["Duration", "Short-term (weeks to months)"],
                [
                  "Fields",
                  "Technology, healthcare, business, creative arts, finance, etc.",
                ],
                ["Format", "Online, hybrid, or in-person"],
                [
                  "Outcome",
                  "Certification to enhance resumes and career prospects",
                ],
                [
                  "Key Benefits",
                  "Increased employability, job-readiness, and expertise",
                ],
              ].map(([feature, details]) => (
                <div
                  key={feature}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    Feature
                  </div>
                  <div className="text-gray-900 font-semibold">{feature}</div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                    Details
                  </div>
                  <div className="text-gray-700">{details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCourse03;

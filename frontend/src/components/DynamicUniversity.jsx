// DynamicUniversity.js
import React from "react";

const DynamicUniversity = ({ university }) => {
  if (!Array.isArray(university) || university.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="rounded-2xl bg-[#EDEEEB] text-[#31393C] ring-1 ring-gray-200 p-6 text-center shadow-sm">
          <p className="text-sm sm:text-base">No university data available.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {university.map((uni, index) => (
        <section key={index} className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <div className="bg-[#FFC067] text-black p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Logo (with safe fallback) */}
                <div className="shrink-0">
                  {uni?.images?.[0] ? (
                    <img
                      src={uni.images[0]}
                      alt={
                        uni?.name || uni?.universityName || "University logo"
                      }
                      className="lg:w-50 h-20 rounded-xl bg-white object-contain p-2 ring-1 ring-white/30"
                    />
                  ) : (
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-white/15 ring-1 ring-white/30" />
                  )}
                </div>

                {/* Title / Desc / CTA */}
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {uni?.universityName || uni?.name || "University"}
                    </h1>

                    {uni?.website && (
                      <a
                        href={uni.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl bg-white/95 text-[#31393C] px-3 py-1.5 text-xs sm:text-sm font-semibold shadow-sm ring-1 ring-white/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3E96F4]"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>

                  <p className="text-sm sm:text-[15px] opacity-95 mt-2">
                    {uni?.description || "Details coming soon."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditation */}
          {Array.isArray(uni?.accreditation) &&
            uni.accreditation.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#31393C] mb-3">
                  Accreditation
                </h2>
                <div className="flex flex-wrap gap-2">
                  {uni.accreditation.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-[#EDEEEB] text-[#31393C] text-xs sm:text-sm px-3 py-1 ring-1 ring-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* Awards */}
          {Array.isArray(uni?.awards) && uni.awards.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-[#31393C] mb-3">
                Awards
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {uni.awards.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-xl bg-[#EDEEEB]/60 text-[#31393C] px-3 py-2 ring-1 ring-gray-200"
                  >
                    <span className="mt-0.5">🏆</span>
                    <span className="text-sm sm:text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Courses */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-4 bg-[#FFC067]">
              <h2 className="text-lg sm:text-xl font-semibold text-black/80 text-center">
                Courses Offered
              </h2>
            </div>

            {!Array.isArray(uni?.courses) || uni.courses.length === 0 ? (
              <div className="px-4 sm:px-6 pb-6 text-sm text-gray-600">
                No courses listed.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm divide-y ">
                  <thead className="bg-[#EDEEEB] sticky top-0">
                    <tr className="text-black">
                      <th className="px-3 sm:px-4 py-3 text-left font-semibold border-b border-gray-200">
                        Program
                      </th>
                      <th className="px-3 sm:px-4 py-3 text-left font-semibold border-b border-gray-200">
                        Specialization
                      </th>
                      {/* <th className="px-3 sm:px-4 py-3 text-left font-semibold border-b border-gray-200">
                        Duration
                      </th> */}
                      <th className="px-3 sm:px-4 py-3 text-left font-semibold border-b border-gray-200">
                        Eligibility
                      </th>
                      <th className="px-3 sm:px-4 py-3  lg:block text-left font-semibold border-b border-gray-200">
                        Mode
                      </th>
                      {/* <th className="px-3 sm:px-4 py-3 text-left font-semibold border-b border-gray-200">
                        Fees
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-black">
                    {uni.courses.map((course, i) => (
                      <tr
                        key={i}
                        className="hover:bg-[#FFC067]/50 transition-colors"
                      >
                        <td className="px-3 sm:px-4 py-2.5 border-b border-gray-100">
                          {course?.courseName || "—"}
                        </td>
                        <td className="px-3 sm:px-4 py-2.5 border-b border-gray-100">
                          {course?.specialization || "—"}
                        </td>
                        {/* <td className="px-3 sm:px-4 py-2.5 border-b border-gray-100">
                          {course?.duration || "—"}
                        </td> */}
                        <td className="px-3 sm:px-4 py-2.5 border-b border-gray-100">
                          {course?.eligibility || "—"}
                        </td>
                        <td className="px-3 sm:px-4  py-2.5 border-b border-gray-100">
                          {course?.mode || "—"}
                        </td>
                        {/* <td className="px-3 sm:px-4 py-2.5 border-b border-gray-100">
                          {typeof course?.fees === "number"
                            ? course.fees > 0
                              ? `₹${new Intl.NumberFormat("en-IN").format(
                                  course.fees
                                )}`
                              : "—"
                            : typeof course?.fees === "string" &&
                              course.fees.trim()
                            ? course.fees
                            : "—"}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default DynamicUniversity;

import React, { Suspense } from "react";
import DynamicWorldInfo from "../pages/DynamicWorldInfo";
import { CourseComponents } from "../pages/VocationalCourses"; // e.g. { DVOC: lazy(...), ... }
import {
  CourseComponentsForRegular,
  normalizeKeyForRegular,
} from "../pages/RegularAdmmision";
import { CourseComponentsForCollege } from "../pages/CollegeAdmission";
import { CourseComponentsStudyAbroad } from "../pages/StudyAbroadSection";
import Country from "../pages/Country";

// Optional: if you have a separate shared details view, import and use it.
// import UniversityDetails from "./UniversityDetails";

const normalizeKey = (s = "") => s.trim().toUpperCase();

const MainContent = ({
  selected,
  universityData,
  isLoading,
  error,
  countryData,
}) => {
  // Global loading / error states from parent
  if (isLoading) {
    return <p className="text-sm sm:text-base text-gray-600">Loading…</p>;
  }
  if (error) {
    return <p className="text-sm sm:text-base text-red-600">{error}</p>;
  }

  // Landing page when nothing selected yet
  if (!selected?.type) {
    return <DynamicWorldInfo />;
  }

  // =========== Vocational Courses ===========
  if (selected.type === "Vocational Courses") {
    const key = normalizeKey(selected.item);
    const Comp = CourseComponents[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<div className="p-6">Loading course…</div>}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  // =========== Regular Courses ===========
  if (selected.type === "Regular Admission") {
    const key = normalizeKeyForRegular(selected.item);
    const Comp = CourseComponentsForRegular[key];
    return Comp ? (
      <Suspense fallback={<div className="p-6">Loading course…</div>}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "College Admission") {
    console.log(selected.item);
    const key = normalizeKey(selected.item);
    console.log(key);
    const Comp = CourseComponentsForCollege[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<div className="p-6">Loading course…</div>}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "Study Abroad") {
    console.log(selected.item);
    const key = normalizeKey(selected.item);
    console.log(key);
    const Comp = CourseComponentsStudyAbroad[key];
    console.log(Comp);
    return Comp ? (
      <Suspense fallback={<div className="p-6">Loading course…</div>}>
        <Comp />
      </Suspense>
    ) : (
      <div className="p-6">Course not found.</div>
    );
  }

  if (selected.type === "Study Abroad Countries") {
    console.log(selected.item);
  }
  if (countryData) {
    return <Country countryData={countryData} />;
  }
  // =========== Universities (Online / Distance) ===========
  // Some APIs return an array, others an object; normalize:
  const data = Array.isArray(universityData)
    ? universityData[0]
    : universityData;

  if (!data) {
    return (
      <p className="text-sm sm:text-base text-gray-600">
        Select a university to see details.
      </p>
    );
  }

  const {
    universityName = "",
    location = "",
    establish = "",
    shortDescription = "",
    about = [],
    onlineEducation = [],
    universityProgram = [],
    image = [],
    universityRanking = [],
  } = data;
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      {/* University Header */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          {image?.[0] && (
            <div className="relative shrink-0">
              <img
                src={image[0]}
                alt={universityName}
                className="w-full sm:w-48 h-28 sm:h-28 object-cover rounded-lg ring-1 ring-gray-200 shadow"
              />
            </div>
          )}
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              {universityName}
            </h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              {location} <span className="mx-2">•</span> Established:{" "}
              {establish}
            </p>

            {shortDescription && (
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                {shortDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      {about?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              About the University
            </h2>
          </header>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            {about.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Online Education */}
      {onlineEducation?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Online Education
            </h2>
          </header>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            {onlineEducation.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Programs */}
      {universityProgram?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4 flex items-center gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Programs
            </h2>
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm px-2.5 py-1 ring-1 ring-indigo-100">
              {universityProgram.length} listed
            </span>
          </header>

          <div className="w-full overflow-x-auto rounded-lg ring-1 ring-gray-200">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-50 sticky top-0">
                <tr className="text-gray-700">
                  <th className="px-3 sm:px-4 py-3 font-semibold">Program</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">
                    Specialization
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {universityProgram.map((program, idx) => (
                  <tr
                    key={program._id ?? `${program.program}-${idx}`}
                    className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50/50"
                  >
                    <td className="px-3 sm:px-4 py-3 text-gray-800">
                      {program.program}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-gray-700">
                      {program.specialization}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Rankings */}
      {universityRanking?.length > 0 && (
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <header className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              University Rankings
            </h2>
          </header>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700">
            {universityRanking.map((rank, index) => (
              <li key={index} className="leading-relaxed">
                {rank}
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
};

export default MainContent;

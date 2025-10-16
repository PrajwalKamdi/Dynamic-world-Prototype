import React from "react";
import {
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  Briefcase,
  Clock,
} from "lucide-react";

const toArr = (x) => (Array.isArray(x) ? x : []);

export default function EducationCountries({ countryData }) {
  // Destructure safely with defaults (prevents "reading 'x' of undefined")
  const {
    countryName = "",

    description = "",
    imageUrl, // optional, if you add this to your data
    education = [],
    listOfUniversity = [],
    educationSystem = [],
    tuitionFeesAndStudyCost = [],
    visaInformation = [],
    careerProspects = [],
    workRights = [],
    createdAt,
    updatedAt,
  } = countryData ?? {};

  // Optional: early return while data is loading

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 lg:px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
            Study Abroad Destinations
          </h1>
          <p className="text-sm lg:text-lg text-gray-600">
            Explore world-class education opportunities
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-[#3e96f4] text-white lg:px-8  px-2 py-6">
              <div className="flex items-center gap-3 mb-2">
                <img src={imageUrl} alt="" className="h-10 w-20" />
                <h2 className="text-3xl font-bold">{countryName}</h2>
              </div>
              {description && <p className="text-blue-50">{description}</p>}

              {/* Key Facts parsed from Education lines like "Capital: Canberra" */}
              {toArr(education).length > 0 && (
                <KeyFacts
                  facts={education}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                />
              )}
            </div>

            {/* Body */}
            <div className="p-2 lg:p-8">
              {/* Education Overview */}
              {toArr(education).length > 0 && (
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Education Overview
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    {toArr(education).map((item, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {String(item)}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {/* Partner Universities */}
              {toArr(listOfUniversity).length > 0 && (
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Partner Universities
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {toArr(listOfUniversity).map((uni, i) => (
                      <div
                        key={`${uni}-${i}`}
                        className="bg-gray-50 rounded px-4 py-3 text-gray-700"
                      >
                        {String(uni)}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Education System */}
              {toArr(educationSystem).length > 0 && (
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Education System
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    {toArr(educationSystem).map((item, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {String(item)}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {/* Tuition & Visa */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {toArr(tuitionFeesAndStudyCost).length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Tuition &amp; Costs
                      </h3>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6 space-y-3">
                      {toArr(tuitionFeesAndStudyCost).map((item, i) => (
                        <p
                          key={i}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          {String(item)}
                        </p>
                      ))}
                    </div>
                  </section>
                )}

                {toArr(visaInformation).length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Visa Information
                      </h3>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 space-y-3">
                      {toArr(visaInformation).map((item, i) => (
                        <p
                          key={i}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          {String(item)}
                        </p>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Career & Work Rights */}
              <div className="grid md:grid-cols-2 gap-6">
                {toArr(careerProspects).length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Career Prospects
                      </h3>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6 space-y-3">
                      {toArr(careerProspects).map((item, i) => (
                        <p
                          key={i}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          {String(item)}
                        </p>
                      ))}
                    </div>
                  </section>
                )}

                {toArr(workRights).length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Work Rights
                      </h3>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6 space-y-3">
                      {toArr(workRights).map((item, i) => (
                        <p
                          key={i}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          {String(item)}
                        </p>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Empty-state fallback */}
              {toArr(education).length === 0 &&
                toArr(listOfUniversity).length === 0 &&
                toArr(educationSystem).length === 0 &&
                toArr(tuitionFeesAndStudyCost).length === 0 &&
                toArr(visaInformation).length === 0 &&
                toArr(careerProspects).length === 0 &&
                toArr(workRights).length === 0 && (
                  <p className="text-sm text-gray-500">
                    No information available for this country yet.
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Helper: render a Key Facts grid parsed from lines like "Capital: Canberra" */
function KeyFacts({ facts, createdAt, updatedAt }) {
  const kv = toArr(facts).reduce((acc, line) => {
    const m = String(line).match(/^([^:]+):\s*(.+)$/); // Label: Value
    if (m) acc[m[1].trim()] = m[2].trim();
    return acc;
  }, {});
  const created =
    createdAt &&
    new Date(createdAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  const updated =
    updatedAt &&
    new Date(updatedAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const order = [
    "Capital",
    "Currency",
    "Population",
    "Area",
    "Students",
    "Academic Year",
    "Languages",
    "Call code",
    "Time Zone",
  ];
  const pairs = order.filter((k) => kv[k]).map((k) => [k, kv[k]]);

  if (pairs.length === 0 && !created && !updated) return null;

  return (
    <div className="mt-5">
      <h4 className="text-white/90 font-semibold mb-3">Key Facts</h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pairs.map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg bg-white/10 border border-white/10 px-4 py-3"
          >
            <div className="text-white/80 text-xs uppercase tracking-wide">
              {label}
            </div>
            <div className="text-white font-medium">{value}</div>
          </div>
        ))}

        {created && (
          <div className="rounded-lg bg-white/10 border border-white/10 px-4 py-3">
            <div className="text-white/80 text-xs uppercase tracking-wide">
              Created
            </div>
            <div className="text-white font-medium">{created}</div>
          </div>
        )}
        {updated && (
          <div className="rounded-lg bg-white/10 border border-white/10 px-4 py-3">
            <div className="text-white/80 text-xs uppercase tracking-wide">
              Updated
            </div>
            <div className="text-white font-medium">{updated}</div>
          </div>
        )}
      </div>
    </div>
  );
}

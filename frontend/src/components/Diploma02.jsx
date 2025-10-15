import React, { useMemo, useState } from "react";

const Diploma02 = () => {
  const specializations = [
    { university: "Dr. C.V. Raman University", course: "Diploma in Computer Application" },
    { university: "AISECT University", course: "Diploma in Computer Applications" },
    { university: "Dr. C.V. Raman University", course: "Computer Application" },
    { university: "Rabindranath Tagore", course: "Computer Application" },
    { university: "Rabindranath Tagore", course: "Diploma in Computer Applications" },
    { university: "AISECT", course: "Diploma in Big Data Hadoop (DBDH) – 12 Months" },
    { university: "Parul University", course: "Diploma in Aeronautical Engineering" },
    { university: "AISECT", course: "Diploma in Mobile Application Development" },
    { university: "Parul University", course: "Diploma in Biomedical Engineering" },
    { university: "Parul University", course: "Diploma in Chemical Engineering" },
    { university: "AISECT", course: "Diploma in Practice of Insurance Re-insurance (DPIR) – 12 Months" },
    { university: "Tilak Maha Vidyapeeth", course: "Diploma in Yoga & Naturopathy" },
    { university: "AISECT", course: "Diploma in IT Hardware Service Technical Support (DIHSTS) – 12 Months" },
    { university: "AISECT", course: "Diploma in Food & Beverage Service (DFBS) – 2 Months" },
    { university: "AISECT", course: "Diploma in Pharmacy Assistant (DPA) – 12 Months" },
    { university: "AISECT", course: "Diploma in Entrepreneurship Development (DED) – 12 Months" },
    { university: "AISECT", course: "Diploma in Nursery Teachers Training (DNTT) – 12 Months" },
    { university: "AISECT", course: "Diploma in Fashion Designing (DFD) – 12 Months" },
    { university: "AISECT", course: "Diploma in Electrical Technician (DET) – 12 Months" },
    { university: "AISECT", course: "Diploma in Data Analysis (DDA) – 12 Months" },
    { university: "AISECT", course: "Diploma in Career Counselling and Guidance (DCCG) – 12 Months" },
    { university: "AISECT", course: "Diploma in Diesel Engine Repair (DDER) – 12 Months" },
    { university: "Parul University", course: "Diploma in Automobile Engineering" },
    { university: "AISECT University", course: "Diploma in Computer Applications" },
    { university: "AISECT", course: "Diploma in Computer Teacher’s Training (DCTT) – 12 Months" },
    { university: "AISECT", course: "Diploma in Beauty, Personal Care & Hair Styling (DBPCHS) – 12 Months" },
    { university: "AISECT", course: "Diploma in Computer Application (DCA) – 12 Months" },
    { university: "AISECT", course: "Diploma in Refrigeration and Air-Conditioning (DRA) – 12 Months" },
    { university: "Parul University", course: "Diploma in Agricultural Engineering – Android & iPhone (DMADAI) – 12 Months" },
    { university: "Parul University", course: "Diploma in Civil Engineering" },
    { university: "Tilak Maha Vidyapeeth", course: "Diploma in Banking and Finance" },
    { university: "Parul University", course: "Diploma in Biotechnology" },
    { university: "Parul University", course: "Diploma in Electrical Engineering" },
    { university: "Parul University", course: "Diploma in Electronics & Communication Engineering" },
    { university: "Parul University", course: "Diploma in Computer Engineering" },
    { university: "Parul University", course: "Diploma in Mechanical Engineering" },
    { university: "Parul University", course: "Diploma in Petrochemical Engineering" },
    { university: "Parul University", course: "Diploma in Dairy Technology" },
    { university: "Parul University", course: "Diploma in Food Technology" },
    { university: "Parul University", course: "Diploma in Mechatronics Engineering" },
    { university: "Parul University", course: "Diploma in Robotics & Automation Engineering" },
    { university: "Parul University", course: "Diploma in Information Technology" },
    { university: "Yenepoye University", course: "UG Diploma in Hospitality Management (Professional Certification in Aviation/Travel and Tourism)" },
  ];

  const [query, setQuery] = useState("");
  const [uni, setUni] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const universities = useMemo(
    () => ["All", ...Array.from(new Set(specializations.map(s => s.university)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = specializations.filter(({ university, course }) => {
      const matchesQuery =
        !q ||
        university.toLowerCase().includes(q) ||
        course.toLowerCase().includes(q);
      const matchesUni = uni === "All" || university === uni;
      return matchesQuery && matchesUni;
    });
    list.sort((a, b) =>
      sortAsc
        ? a.university.localeCompare(b.university) || a.course.localeCompare(b.course)
        : b.university.localeCompare(a.university) || b.course.localeCompare(a.course)
    );
    return list;
  }, [query, uni, sortAsc]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-white/80"></div>
            <span className="uppercase tracking-widest text-white/90 text-xs font-semibold">
              All Specialization
            </span>
          </div>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold text-white">
            All Diploma Universities in India <span className="opacity-90">2025</span>
          </h1>
          <p className="text-white/80 mt-1">
            Browse, search, and filter diploma programs across Indian universities.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by university or course..."
                className="w-full rounded-xl bg-white/95 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-white/70 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-500"
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
            </div>
          </div>

          <div className="flex gap-2">
            <select
              value={uni}
              onChange={(e) => setUni(e.target.value)}
              className="flex-1 rounded-xl bg-white/95 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-white/70 px-3 py-2.5 text-gray-800 shadow-sm"
            >
              {universities.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>

            <button
              onClick={() => setSortAsc(s => !s)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white/95 ring-1 ring-black/10 px-3 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-white transition"
              title="Toggle sort"
            >
              <svg className="mr-1.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M8 7v10m0 0-3-3m3 3 3-3M16 17V7m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {sortAsc ? "A→Z" : "Z→A"}
            </button>
          </div>
        </div>

        {/* Stats + CTA */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-white/90 text-gray-800 px-3 py-1 text-sm shadow">
            Total Programs: <strong className="ml-1">{filtered.length}</strong>
          </span>
          <a
            href="mailto:support@dynamicworld.in"
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-white text-sky-700 px-4 py-2 text-sm font-semibold shadow hover:bg-white/95 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Us
          </a>
        </div>

        {/* Table Card */}
        <div className="rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/5 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="max-h-[70vh] overflow-auto">
              <table className="min-w-full">
                <thead className="sticky top-0 z-10 bg-sky-50/95 backdrop-blur supports-[backdrop-filter]:bg-sky-50/70">
                  <tr className="text-left text-gray-700">
                    <th className="px-5 py-3 text-sm font-semibold">University/Institute</th>
                    <th className="px-5 py-3 text-sm font-semibold">Course Name</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60 hover:bg-gray-100"}
                    >
                      <td className="px-5 py-3 align-top">
                        <div className="font-medium text-gray-900">{item.university}</div>
                      </td>
                      <td className="px-5 py-3 align-top">
                        <div className="text-gray-700">{item.course}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="p-8 text-center text-gray-600">No results found.</div>
              )}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {filtered.length === 0 && (
              <div className="p-6 text-center text-gray-700">No results found.</div>
            )}
            {filtered.map((item, idx) => (
              <div key={idx} className="p-5 hover:bg-gray-50 transition">
                <div className="text-sm text-gray-500">University/Institute</div>
                <div className="font-semibold text-gray-900">{item.university}</div>
                <div className="mt-3 text-sm text-gray-500">Course Name</div>
                <div className="text-gray-800">{item.course}</div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Diploma02;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// ================================
// Design tokens (saved brand set)
// ================================
const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

// Centralized NAAC badges (extend when you add more)
const NAAC_BADGES = {
  "A+": "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872144/A_plus_mdt6x3.webp",
  "A++":
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760872145/A_plus_plus_krg1rs.webp",
  A: "",
  "B++": "",
};

// -----------------------------
// Utilities
// -----------------------------
const formatINR = (n) => {
  if (n === 0 || n === null || n === undefined || Number.isNaN(Number(n))) return "—";
  if (typeof n === "number") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  }
  return n || "—";
};

const firstNonEmpty = (...vals) => vals.find((v) => Boolean(v && String(v).trim())) ?? "—";

const getNaacGradeFromText = (text = "") => {
  const m = String(text).match(/(A\+\+|A\+|A|B\+\+)/i);
  return m?.[1]?.toUpperCase();
};

const Badge = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1"
    style={{ background: COLORS.chipBg, color: COLORS.text, borderColor: "#dcdcdc" }}
  >
    {children}
  </span>
);

const Section = ({ title, right, children }) => (
  <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
    <header className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
      {right}
    </header>
    {children}
  </section>
);

const TableHeaderCell = ({ children }) => (
  <th className="px-3 sm:px-4 py-3 font-semibold align-middle text-gray-700">{children}</th>
);

const TableCell = ({ children, bold }) => (
  <td className={`px-3 sm:px-4 py-3 align-top ${bold ? "text-gray-900 font-medium" : "text-gray-700"}`}>{children}</td>
);

// ================================
// Component
// ================================
export default function UniversityDetails() {
  const API = import.meta.env.VITE_BACKEND_API;
  const { slug } = useParams();

  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Derive safe fields
  const {
    universityName,
    name,
    location,
    establish,
    description,
    shortDescription,
    accreditation = [],
    awards = [],
    website,
    images = [],
    onlineEducation = [],
    courses = [],
    rankings,
  } = university ?? {};

  const title = useMemo(() => firstNonEmpty(universityName, name, slug), [universityName, name, slug]);

  const universityRanking = useMemo(() => (Array.isArray(rankings) ? rankings : awards), [rankings, awards]);

  const naacLine = useMemo(
    () =>
      (accreditation.find((i) => /NAAC|NBA/i.test(i)) ??
        universityRanking?.find?.((i) => /NAAC|NBA/i.test(i)) ??
        ""),
    [accreditation, universityRanking]
  );

  const naacGrade = useMemo(() => getNaacGradeFromText(naacLine), [naacLine]);
  const naacBadgeUrl = naacGrade ? NAAC_BADGES[naacGrade] : "";

  // -----------------------------
  // Data fetch
  // -----------------------------
  const fetchData = useCallback(async () => {
    if (!API || !slug) return;

    const controller = new AbortController();
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(`${API}/university/${slug}`, { signal: controller.signal });
      setUniversity(data?.data ?? null);
    } catch (e) {
      if (axios.isCancel?.(e)) return; // ignore cancellation
      setError(e?.response?.data?.message || e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
    return () => controller.abort();
  }, [API, slug]);

  useEffect(() => {
    const cancel = fetchData();
    return () => {
      // if fetchData returned a cleanup, call it
      if (typeof cancel === "function") cancel();
    };
  }, [fetchData]);

  // -----------------------------
  // States
  // -----------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDEEEB]">
        <header className="bg-[#FFC067] text-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="h-7 w-64 bg-white/30 rounded animate-pulse" />
            <div className="mt-2 h-4 w-72 bg-white/20 rounded animate-pulse" />
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          <div className="h-40 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
          <div className="h-48 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
          <div className="h-72 bg-white rounded-xl ring-1 ring-gray-200 animate-pulse" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDEEEB] flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white ring-1 ring-red-200 text-red-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p className="mt-2 text-sm">{error}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={fetchData}
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-[#FFC067] text-black"
              >
                Retry
              </button>
              <Link
                to="/services/online-education"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-gray-300 text-[#31393C]"
              >
                Back to list
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!university) return null;

  return (
    <div className=" text-[#31393C]">
      {/* ====== Header / Breadcrumb ====== */}
      <header className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm opacity-95">
            <Link to="/services/online-education" className="hover:underline">Online Education</Link>
            <span>/</span>
            <span className="truncate" title={slug}>{slug}</span>
          </nav>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h1>
        </div>
      </header>

      {/* ====== Main ====== */}
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6 space-y-6 sm:space-y-8">
        {/* Hero Card */}
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row sm:items-center gap-4 sm:gap-6">
            {images?.[0] ? (
              <div className="relative shrink-0 w-full max-w-lg">
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full object-contain rounded-lg ring-1 ring-gray-200 shadow"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                {firstNonEmpty(location)} <span className="mx-2">•</span> Established: {firstNonEmpty(establish)}
              </p>

              {/* Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {naacGrade && (
                  <Badge>
                    NAAC Grade: {naacGrade}
                  </Badge>
                )}
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-[#FFC067] text-black text-xs sm:text-sm px-3 py-1.5 shadow hover:opacity-95"
                  >
                    Visit Website
                  </a>
                )}
              </div>

              {description && (
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">{description}</p>
              )}
            </div>

            {/* NAAC Badge image (if present) */}
            {naacBadgeUrl ? (
              <div className="sm:self-start">
                <img src={naacBadgeUrl} alt="NAAC Accreditation Badge" className="h-12 sm:h-16 object-contain" loading="lazy" />
              </div>
            ) : null}
          </div>
        </div>

        {/* About + Accreditation + Awards + Website */}
        {(shortDescription || description || accreditation.length > 0 || awards.length > 0 || website) && (
          <Section title="About the University">
            {(shortDescription || description) && (
              <p className="text-sm sm:text-base text-gray-700">{shortDescription || description}</p>
            )}

            {!!accreditation.length && (
              <div className="mt-4">
                <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">Accreditation</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  {accreditation.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {!!awards.length && (
              <div className="mt-4">
                <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">Awards</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  {awards.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {website && (
              <div className="mt-4">
                <h3 className="my-3 text-lg sm:text-xl font-semibold text-gray-800">
                  Website: {" "}
                  <a href={website} target="_blank" rel="noopener noreferrer" className="text-[#3E96F4] hover:underline break-all">
                    {website}
                  </a>
                </h3>
              </div>
            )}
          </Section>
        )}

        {/* Online Education */}
        {!!onlineEducation.length && (
          <Section title="Online Education">
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              {onlineEducation.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Courses */}
        {Array.isArray(courses) && courses.length > 0 && (
          <Section title="Programs" right={<Badge>{courses.length} listed</Badge>}>
            <div className="w-full overflow-x-auto rounded-lg ring-1 ring-gray-200">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <TableHeaderCell>Program</TableHeaderCell>
                    <TableHeaderCell>Specialization</TableHeaderCell>
                    <TableHeaderCell>Duration</TableHeaderCell>
                    <TableHeaderCell>Eligibility</TableHeaderCell>
                    <TableHeaderCell>Mode</TableHeaderCell>
                    <TableHeaderCell>Fees</TableHeaderCell>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[...courses]
                    .sort(
                      (a, b) =>
                        (a?.courseName || "").localeCompare(b?.courseName || "") ||
                        (a?.specialization || "").localeCompare(b?.specialization || "")
                    )
                    .map((c, idx) => {
                      const fees = typeof c?.fees === "number" ? (c.fees === 0 ? "—" : formatINR(c.fees)) : c?.fees ?? "—";
                      return (
                        <tr key={`${c?.courseName}-${c?.specialization}-${idx}`} className="odd:bg-white even:bg-gray-50 hover:bg-[#FFC067]/5">
                          <TableCell bold>{firstNonEmpty(c?.courseName)}</TableCell>
                          <TableCell>{firstNonEmpty(c?.specialization)}</TableCell>
                          <TableCell>{firstNonEmpty(c?.duration)}</TableCell>
                          <TableCell>{firstNonEmpty(c?.eligibility)}</TableCell>
                          <TableCell>{firstNonEmpty(c?.mode)}</TableCell>
                          <TableCell bold>{fees}</TableCell>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Accreditation cards + Rankings */}
        {!!(universityRanking?.length) && (
          <>
            {/* NAAC/NBA specific callouts */}
            {universityRanking
              .filter((item) => /NAAC|NBA/i.test(item))
              .map((item, index) => {
                const g = getNaacGradeFromText(item);
                const img = g ? NAAC_BADGES[g] : "";
                return (
                  <div key={index} className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Accreditation Details</h3>
                      <p className="text-sm sm:text-base text-gray-700">{item}</p>
                    </div>
                    {img ? (
                      <img src={img} alt="NAAC Accreditation Badge" className="h-12 sm:h-16 object-contain" loading="lazy" />
                    ) : null}
                  </div>
                );
              })}

            <Section title="University Rankings">
              <ol className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                {universityRanking.map((rank, idx) => (
                  <li key={idx} className="leading-relaxed">{rank}</li>
                ))}
              </ol>
            </Section>
          </>
        )}

        {/* Gallery (if multiple images) */}
        {images?.length > 1 && (
          <Section title="Gallery" right={<Badge>{images.length}</Badge>}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.slice(0, 12).map((src, i) => (
                <img key={i} src={src} alt={`${title} ${i + 1}`} className="w-full h-28 md:h-36 object-cover rounded-lg ring-1 ring-gray-200" loading="lazy" />
              ))}
            </div>
          </Section>
        )}
      </main>
    </div>
  );
}

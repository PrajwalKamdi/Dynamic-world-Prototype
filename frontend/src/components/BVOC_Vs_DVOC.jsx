import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers,
  PhoneCall,
  Target,
  Video,
} from "lucide-react";
import CalendyButton from "./CalendyButton";
import CurrentYear from "./CurrentYear";

export default function BVOCvsMVOC({}) {
  const snapshot = [
    {
      key: "BVOC",
      color: "bg-white",
      icon: <Layers className="h-6 w-6" aria-hidden />,
      points: [
        { label: "Level", value: "Undergraduate (Bachelor of Vocation)" },
        { label: "Duration", value: "3 years (6 semesters)" },
        { label: "Focus", value: "Job‑ready skills, industry projects" },
        {
          label: "Who it's for",
          value: "12th‑pass looking to start careers quickly",
        },
        {
          label: "Outcome",
          value: "Entry‑level roles, higher studies (MVOC/PG)",
        },
      ],
    },
    {
      key: "MVOC",
      color: "bg-white",
      icon: <GraduationCap className="h-6 w-6" aria-hidden />,
      points: [
        { label: "Level", value: "Postgraduate (Master of Vocation)" },
        { label: "Duration", value: "2 years (4 semesters)" },
        { label: "Focus", value: "Advanced specialization, leadership track" },
        {
          label: "Who it's for",
          value: "Graduates seeking managerial/advanced roles",
        },
        {
          label: "Outcome",
          value: "Specialist/lead roles, research, teaching",
        },
      ],
    },
  ];

  const compareRows = [
    {
      attr: "Eligibility",
      bvoc: "10+2 (any recognized board) or equivalent; some streams prefer relevant subjects.",
      mvoc: "Bachelor's degree (preferably BVOC/related) with minimum aggregate per university.",
    },
    {
      attr: "Program Goal",
      bvoc: "Build core technical + employability skills for immediate workforce entry.",
      mvoc: "Deepen specialization, research aptitude, and supervisory/managerial readiness.",
    },
    {
      attr: "Learning Style",
      bvoc: "Hands‑on labs, internships, workshops, certifications.",
      mvoc: "Advanced projects, capstones, thesis/seminars, industry consulting.",
    },
    {
      attr: "Typical Specializations",
      bvoc: "IT, Data Analytics, Digital Marketing, Healthcare, Hospitality, Retail, Banking, Design, Automotive, Electronics, etc.",
      mvoc: "Data Science, Cybersecurity, Supply Chain, Healthcare Mgt, FinTech, UI/UX, Renewable Energy, EdTech, etc.",
    },
    {
      attr: "Career Outcomes (indicative)",
      bvoc: "Junior analyst/technician, coordinator, associate roles; strong pathway to MVOC or lateral entry programs.",
      mvoc: "Specialist/lead, analyst II/III, supervisor, teaching/research assistant, pathway to M.Phil/PhD (where offered).",
    },
    {
      attr: "Work‑Integrated Learning",
      bvoc: "Mandatory internships/ODL projects in most universities.",
      mvoc: "Industry projects, internships or dissertation depending on specialization.",
    },
  ];

  const choose = [
    {
      for: "BVOC",
      text: "You're fresh out of 12th and want job‑ready skills within 3 years.",
    },
    {
      for: "BVOC",
      text: "You prefer practical learning with internships and certifications.",
    },
    {
      for: "BVOC",
      text: "You plan to work first and maybe pursue MVOC later.",
    },
    {
      for: "MVOC",
      text: "You already hold a UG degree (BVOC/BA/BSc/BCom/BE, etc.).",
    },
    {
      for: "MVOC",
      text: "You want advanced specialization or leadership/teaching pathways.",
    },
    {
      for: "MVOC",
      text: "You're targeting roles that prefer a master's credential.",
    },
  ];

  const faqs = [
    {
      q: "Is BVOC recognized like other bachelor's degrees in 2025?",
      a: "BVOC is an undergraduate degree; recognition depends on the university and regulatory approvals. Always verify current approvals, NAAC/NBA status, and UGC/AICTE equivalence as applicable.",
    },
    {
      q: "Can I switch from BVOC to MVOC later?",
      a: "Yes. Many MVOC programs accept BVOC graduates, often with bridge modules depending on specialization and university criteria.",
    },
    {
      q: "Which is better for salaries—BVOC or MVOC?",
      a: "Compensation varies by domain, location, and skills. MVOC can unlock higher‑level roles, but strong internships, projects, and certifications significantly impact outcomes at both levels.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FFC067] text-black">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden
        >
          <svg
            className="absolute -top-10 -right-10 h-64 w-64"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#g1)" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-white/30 backdrop-blur">
            <CheckCircle2 className="h-4 w-4" aria-hidden /> Vocational
            Education • India • <CurrentYear />
          </span>
          <div className="mt-4 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              BVOC vs MVOC: Which is Right for You in <CurrentYear />?
            </h1>
            <p className="mt-3 text-gray-900/90 text-sm sm:text-base md:text-lg">
              Clear, practical guidance to choose between undergraduate BVOC and
              postgraduate MVOC—eligibility, learning style, careers, and more.
            </p>
          </div>
          <CalendyButton />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Snapshot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {snapshot.map((card) => (
              <div
                key={card.key}
                className={`rounded-2xl ${card.color} ring-1 ring-gray-200 shadow-sm p-5 sm:p-6`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#EDEEEB] p-2 ring-1 ring-gray-200">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.key}</h3>
                </div>
                <dl className="mt-3 space-y-2 text-sm sm:text-[15px]">
                  {card.points.map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <dt className="w-28 shrink-0 text-[#31393C]/70">
                        {p.label}
                      </dt>
                      <dd className="flex-1">{p.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 px-5 sm:px-6 py-4">
              <h3 className="text-lg font-semibold">Head‑to‑Head Comparison</h3>
              <p className="text-sm text-[#31393C]/70">
                Key differences that matter in 2025
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#EDEEEB] text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Attribute</th>
                    <th className="px-4 py-3 font-semibold">BVOC</th>
                    <th className="px-4 py-3 font-semibold">MVOC</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 align-top"
                    >
                      <td className="px-4 py-3 whitespace-nowrap font-medium">
                        {row.attr}
                      </td>
                      <td className="px-4 py-3">{row.bvoc}</td>
                      <td className="px-4 py-3">{row.mvoc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admissions & Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <h4 className="text-base sm:text-lg font-semibold">
                  Eligibility & Admissions
                </h4>
              </div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-[15px]">
                <li>
                  <strong>BVOC:</strong> 10+2 with required documents;
                  universities may conduct aptitude/bridge tests.
                </li>
                <li>
                  <strong>MVOC:</strong> Relevant bachelor's with minimum
                  aggregate; domain‑specific prerequisites may apply.
                </li>
                <li>
                  Always check current year (2025) prospectus for exact criteria
                  and important dates.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <h4 className="text-base sm:text-lg font-semibold">
                  Program Structure
                </h4>
              </div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-[15px]">
                <li>Semester‑based curriculum with labs/workshops/projects.</li>
                <li>
                  Work‑integrated learning: internships, fieldwork, industry
                  mentors.
                </li>
                <li>
                  Career services: mock interviews, portfolios, placement
                  support (as offered).
                </li>
              </ul>
            </div>
          </div>

          {/* Careers */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <h4 className="text-base sm:text-lg font-semibold">
                Careers & Progression
              </h4>
            </div>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-[15px]">
              <div className="rounded-xl bg-[#EDEEEB] p-4 ring-1 ring-gray-200">
                <h5 className="font-semibold">After BVOC</h5>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>
                    Associate/Technician/Coordinator roles (domain‑specific).
                  </li>
                  <li>Pathways: MVOC, PG Diplomas, Industry certifications.</li>
                  <li>Grow via internships, projects, and skill stacks.</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#EDEEEB] p-4 ring-1 ring-gray-200">
                <h5 className="font-semibold">After MVOC</h5>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>
                    Specialist/Lead/Supervisor roles; academia/research
                    pathways.
                  </li>
                  <li>
                    Pathways: UGC‑NET (where applicable), research, PhD
                    (eligibility varies).
                  </li>
                  <li>
                    Advance with portfolios, publications, and leadership
                    exposure.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Guide */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              <h4 className="text-base sm:text-lg font-semibold">
                Which should you choose in 2025?
              </h4>
            </div>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              <ul className="rounded-xl bg-[#EDEEEB] p-4 ring-1 ring-gray-200 space-y-2 text-sm sm:text-[15px]">
                {choose
                  .filter((c) => c.for === "BVOC")
                  .map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-1" /> {c.text}
                    </li>
                  ))}
              </ul>
              <ul className="rounded-xl bg-[#EDEEEB] p-4 ring-1 ring-gray-200 space-y-2 text-sm sm:text-[15px]">
                {choose
                  .filter((c) => c.for === "MVOC")
                  .map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-1" /> {c.text}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#form"
                className="inline-flex items-center gap-2 text-[#3E96F4] font-semibold hover:underline"
              >
                Get personalized guidance <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
            <h4 className="text-base sm:text-lg font-semibold">FAQs</h4>
            <div className="mt-3 divide-y divide-gray-200">
              {faqs.map((f, i) => (
                <div key={i} className="py-3">
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-1 text-sm sm:text-[15px] text-[#31393C]/90">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT STICKY FORM */}
        <aside className="lg:col-span-1">
          <div id="form" className="lg:sticky lg:top-6">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold">
                Talk to a Counselor
              </h4>
              <p className="mt-1 text-sm text-[#31393C]/80">
                Unsure between BVOC and MVOC? Get a 1‑on‑1 profile review.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <CalendyButton />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

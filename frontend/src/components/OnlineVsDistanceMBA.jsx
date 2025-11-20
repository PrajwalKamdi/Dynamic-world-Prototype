import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  IndianRupee,
  Timer,
  MonitorPlay,
  Users,
  Building2,
  BookOpenCheck,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function OnlineVsDistanceMBA({ showCTA = true }) {
  const pillars = [
    {
      key: "ugc",
      label: "UGC/Approvals",
      online:
        "UGC-entitled universities + UGC-DEB approval; many NAAC A/A+; AICTE approval when applicable",
      distance:
        "UGC-DEB mandatory for ODL; AICTE approval when applicable; NAAC grade varies by provider",
      note: "Always verify the latest UGC/DEB status and program entitlement before applying.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      key: "flex",
      label: "Flexibility",
      online:
        "Live + recorded lectures, weekend/evening cohorts, mobile LMS, proctored online exams",
      distance:
        "Self-paced content with printed/e-content; PCPs (Personal Contact Programs) on select weekends; exams often at centers",
      icon: <Timer className="h-5 w-5" />,
    },
    {
      key: "pedagogy",
      label: "Pedagogy & Interaction",
      online:
        "Synchronous live classes, breakout rooms, case discussions, industry webinars, doubt-clearing",
      distance:
        "Primarily asynchronous self-study; limited peer interaction; periodic PCP workshops",
      icon: <MonitorPlay className="h-5 w-5" />,
    },
    {
      key: "support",
      label: "Career/Placement Support",
      online:
        "Career services, interview prep, career fairs, alumni & mentor networks (varies by univ)",
      distance:
        "Basic academic support; placement assistance limited and institute-dependent",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      key: "roi",
      label: "Fees & ROI",
      online:
        "₹1.5L–₹4.5L typical; higher for premium brands; ROI driven by brand, cohort, and role-switch support",
      distance:
        "₹40k–₹1.8L typical; best for upskilling without career services premium; ROI via lower opportunity cost",
      icon: <IndianRupee className="h-5 w-5" />,
    },
    {
      key: "assessment",
      label: "Assessment & Exams",
      online:
        "Internal quizzes, case projects, proctored online/center exams; continuous evaluation common",
      distance:
        "Term-end exams at centers; internal assignments; fewer synchronous evaluations",
      icon: <BookOpenCheck className="h-5 w-5" />,
    },
    {
      key: "peer",
      label: "Peer Learning",
      online:
        "Interactive cohorts, group projects, forums, Slack/Teams communities",
      distance: "Solo learning; occasional PCP networking",
      icon: <Users className="h-5 w-5" />,
    },
    {
      key: "infra",
      label: "Learning Infrastructure",
      online: "Modern LMS with recordings, transcripts, mobile apps, analytics",
      distance: "Printed/e-study materials + basic portal; limited analytics",
      icon: <Building2 className="h-5 w-5" />,
    },
  ];

  const whoShouldChoose = [
    {
      title: "Online MBA is better if you…",
      points: [
        "Want live classes and real-time faculty/peer interaction",
        "Plan a role switch or promotion and value career services",
        "Prefer structured cohorts, case pedagogy, and projects",
        "Can commit to weekend/evening live sessions",
      ],
      goodFor: [
        "Working professionals (2–10 yrs exp)",
        "Managers transitioning to leadership",
        "Career switchers",
      ],
      pros: [
        "High engagement & networking",
        "Career & placement support (varies)",
        "Stronger brand signaling for some universities",
      ],
      cons: ["Higher fees than distance", "Live class attendance expectations"],
    },
    {
      title: "Distance MBA is better if you…",
      points: [
        "Need maximum schedule freedom with minimal live sessions",
        "Prefer self-paced study with printed/e-materials",
        "Have tight budgets and seek the most economical credential",
        "Live far from exam centers only a few times a year",
      ],
      goodFor: [
        "Self-motivated learners",
        "Entrepreneurs",
        "Career stabilizers needing academic qualification",
      ],
      pros: [
        "Lowest fee outlay",
        "Study-at-your-pace",
        "Lower bandwidth dependency",
      ],
      cons: ["Lower peer interaction", "Limited structured career services"],
    },
  ];

  const headerChip = (text) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Header */}
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6" aria-hidden />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Online MBA vs Distance MBA: What’s Better?
            </h1>
          </div>
          <p className="mt-1 text-gray-900/90 text-sm sm:text-base">
            UGC approvals, flexibility, pedagogy, and ROI — compared at a
            glance.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Comparison table */}
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <header className="border-b border-gray-100 p-4 sm:p-6 flex items-center justify-between">
              <div className="space-y-1">
                {headerChip("Deep Comparison")}
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                  Major Factors
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="inline-flex items-center gap-1 rounded-full bg-[#EDEEEB] px-3 py-1 text-[#31393C]">
                  <CheckCircle2 className="h-4 w-4" /> Online MBA
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-[#EDEEEB] px-3 py-1 text-[#31393C]">
                  <XCircle className="h-4 w-4" /> Distance MBA
                </div>
              </div>
            </header>

            <div className="divide-y divide-gray-100">
              {pillars.map((p) => (
                <div
                  key={p.key}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6"
                >
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 text-[#31393C]">
                      {p.icon}
                      <h3 className="font-semibold">{p.label}</h3>
                    </div>
                    {p.note && (
                      <p className="mt-1 text-xs text-gray-600">{p.note}</p>
                    )}
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-sm leading-6">
                      <span className="font-medium">Online:</span> {p.online}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-sm leading-6">
                      <span className="font-medium">Distance:</span>{" "}
                      {p.distance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who should choose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoShouldChoose.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5"
              >
                {headerChip(b.title)}
                <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                  {b.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-3 text-xs text-gray-600">
                  <span className="font-medium">Great for:</span>{" "}
                  {b.goodFor.join(" • ")}
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-[#EDEEEB] p-3">
                    <div className="font-semibold mb-1">Pros</div>
                    <ul className="list-disc list-inside space-y-1">
                      {b.pros.map((pr) => (
                        <li key={pr}>{pr}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-[#EDEEEB] p-3">
                    <div className="font-semibold mb-1">Cons</div>
                    <ul className="list-disc list-inside space-y-1">
                      {b.cons.map((cr) => (
                        <li key={cr}>{cr}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick tips */}
          <div className="rounded-2xl bg-[#EDEEEB] p-4 text-sm">
            <p className="font-semibold">Tip</p>
            <ul className="mt-1 list-disc list-inside space-y-1 text-[#31393C]">
              <li>
                Shortlist UGC-entitled universities first; then compare brand
                strength, pedagogy, and career services.
              </li>
              <li>
                Check exam modality (remote vs center), attendance policy, and
                live-class schedule vs work hours.
              </li>
              <li>
                Budget beyond fees: exam proctoring, convocation, alumni access,
                certification add-ons.
              </li>
            </ul>
          </div>
        </section>

        {/* Side CTA */}
        <aside className="lg:col-span-1">
          {showCTA && (
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
                <h3 className="text-lg font-semibold">
                  Get a Personalized MBA Recommendation
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Match your goals, budget, and schedule with the right program.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+917887881060"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FFC067] text-black px-4 py-2 font-semibold shadow-sm hover:bg-[#3187e2]"
                  >
                    <span>Quick Call</span>
                  </a>
                  <a
                    href="https://wa.me/+917887881060"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#31393C] px-4 py-2 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                  >
                    <span>WhatsApp Counselling</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
                <h4 className="font-semibold">Fee Benchmarks (Indicative)</h4>
                <ul className="mt-2 text-sm list-disc list-inside text-[#31393C]">
                  <li>Online MBA: ₹1.5L–₹4.5L (premium brands higher)</li>
                  <li>Distance MBA: ₹40k–₹1.8L</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  *Actuals vary by university and cohort; verify latest
                  prospectus.
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

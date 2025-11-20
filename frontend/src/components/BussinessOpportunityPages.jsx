import React from "react";
import {
  CheckSquare,
  ArrowRight,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Layers,
  Briefcase,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Building2,
  Globe2,
  Handshake,
  Target,
  Users,
  Rocket,
} from "lucide-react";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  white: "#FFFFFF",
  chip: "#EDEEEB",
};

// Reusable Action Button
const ActionButton = ({
  text,
  as: As = "button",
  href,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = "",
}) => {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300/60 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-indigo-400",
    secondary:
      "bg-white text-indigo-700 border border-indigo-200 shadow-md hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:ring-indigo-200",
    ghost:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 focus-visible:ring-white/50",
  };

  const styles = variants[variant] || variants.primary;
  const Content = (
    <>
      <span>{text}</span>
      {Icon ? (
        <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  if (As === "a" && href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {Content}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`}>
      {Content}
    </button>
  );
};

// Reusable Feature Item
const FeatureItem = ({ text }) => (
  <div className="flex items-start text-sm sm:text-base text-[#31393C]">
    <CheckSquare className="w-5 h-5 mr-2 mt-0.5" style={{ color: COLORS.brand }} />
    <span className="font-medium">{text}</span>
  </div>
);

// Reusable Stat Card
const StatCard = ({ count, description }) => (
  <div className="p-4 flex flex-col items-center justify-center text-center rounded-xl">
    <div
      className="text-3xl md:text-4xl lg:text-5xl font-semibold px-6 py-3 rounded-xl mb-2"
      style={{ backgroundColor: COLORS.brand, color: COLORS.white }}
    >
      {count}
    </div>
    <p className="text-xs sm:text-sm md:text-base font-medium leading-tight text-[#31393C]">
      {description}
    </p>
  </div>
);

// === SECTION 1 ===
export const BusinessPartner01 = () => {
  const heroHighlights = [
    {
      icon: Sparkles,
      title: "Launch without upfront investment",
    },
    {
      icon: ShieldCheck,
      title: "Authorised counsellor certification",
    },
    {
      icon: Rocket,
      title: "Start earning within 48 hours",
    },
  ];

  const heroStats = [
    { icon: Handshake, value: "12,000+", label: "Successful admissions powered by our team" },
    { icon: Target, value: "₹10k – ₹50k", label: "Incentive range per admission" },
    { icon: Users, value: "100+", label: "UGC-approved Indian universities onboard" },
    { icon: Globe2, value: "4000+", label: "International university tie-ups" },
  ];

  const servicePillars = [
    {
      icon: Building2,
      title: "Complete Education Portfolio",
      description:
        "Offer online, distance, regular, and global programmes across UG, PG, diploma and professional streams.",
      bullets: ["Engineering, Management, Law, Medical & more", "Boards + Vocational + Skill courses", "Study abroad & immigration services"],
    },
    {
      icon: Layers,
      title: "Ready-to-Use Growth Stack",
      description:
        "We arm you with co-branded collaterals, pricing decks, CRM access, and course finder tools that accelerate conversions.",
      bullets: ["Marketing toolkits & digital creatives", "Course & fee comparison sheets", "Dedicated counsellor dashboard"],
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Partner Support",
      description:
        "From onboarding to ongoing training, our team works with you to close every admission with confidence.",
      bullets: ["24/7 counsellor helpline", "Weekly masterclasses & refresher training", "Workspace access for client meetings"],
    },
  ];

  const courseClusters = [
    {
      title: "Undergraduate & Postgraduate Degrees",
      courses: ["BA", "BCom", "BSc", "BBA", "BCA", "MBA", "MCA", "MSc", "MA", "MCom"],
    },
    {
      title: "Professional & Council Programmes",
      courses: ["BTech / BE", "MTech", "B.Ed", "M.Ed", "LLB", "LLM", "DPharm", "BPharm"],
    },
    {
      title: "Boards, Vocational & Skill Tracks",
      courses: ["10ᵗʰ-12ᵗʰ Boards", "DVoc / BVoc / MVoc", "Diploma & PG Diploma", "Certificate & Skill Courses"],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/90 to-blue-900/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
                Business Partnership Programme
              </span>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Become a Dynamic World Business Partner &amp; unlock premium admission earnings
              </h1>
              <p className="mt-4 text-base sm:text-lg text-indigo-100/90 leading-relaxed">
                Build a thriving education hub in your city with Dynamic World’s 360° portfolio. Formally represent 100+ UGC universities,
                4,000+ international institutions, and offer immigration, visa, and placement services under one trusted brand.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {heroHighlights.map(({ icon: Icon, title }) => (
                  <span
                    key={title}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-blue-200" />
                    {title}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <ActionButton
                  as="a"
                  href="https://wa.me/917887881060"
                  text="Book a discovery call"
                  variant="primary"
                />
                <ActionButton
                  as="a"
                  href="#partner-pillar"
                  text="View business playbook"
                  variant="ghost"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10/5 backdrop-blur px-6 py-7 sm:px-8 sm:py-9 shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                Revenue snapshot
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Earn ₹10,000 – ₹50,000 on every successful admission
              </h3>
              <p className="mt-2 text-sm text-indigo-100/90">
                Drive admissions across online, hybrid, and on-campus programmes with structured incentive slabs
                and marketing budgets designed to scale your centre quickly.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {heroStats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/10/20 px-4 py-4"
                  >
                    <Icon className="h-5 w-5 text-blue-200" />
                    <p className="mt-2 text-lg font-semibold text-gray-900">{value}</p>
                    <p className="text-xs text-indigo-100/90">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/15 bg-slate-900/50 px-4 py-3">
                <Sparkles className="h-5 w-5 text-blue-200" />
                <p className="text-sm text-indigo-100/90">
                  Partners enjoy co-branded positioning on dynamicworld.in, lead routing support,
                  and access to exclusive scholarship campaigns from top universities.
                </p>
              </div>

              <div className="mt-6">
                <ActionButton
                  as="a"
                  href="/What_our_Business_Patner_gets 1-.pdf"
                  text="Download Partner Opportunity Deck"
                  variant="secondary"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Playbook */}
      <div id="partner-pillar" className="relative -mt-12 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 px-6 sm:px-10 py-12">
            <div className="grid gap-10 lg:grid-cols-3">
              {servicePillars.map(({ icon: Icon, title, description, bullets }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC067] text-blue-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                  <ul className="ml-0 space-y-2 text-sm text-slate-600">
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FFC067]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h4 className="text-xl font-semibold text-slate-900">
                Course bandwidth you can offer from day one
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                A curated catalogue that covers every learner journey — from school to higher education,
                professional upgrades, overseas transition, and skill acceleration.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courseClusters.map(({ title, courses }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white bg-white px-5 py-6 shadow-sm"
                  >
                    <h5 className="text-base font-semibold text-slate-900">{title}</h5>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {courses.map((course) => (
                        <li key={course} className="flex items-start gap-2">
                          <CheckSquare className="mt-0.5 h-4 w-4 text-blue-500" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION 2 ===
export const BusinessPartner02 = () => {
  const valuePropositions = [
    {
      icon: Sparkles,
      text: "Authorised access to 100+ UGC-entitled universities across India and 4,000+ global institutions.",
    },
    {
      icon: Globe2,
      text: "Diversified product stack spanning online, distance, regular, immigration, placements, and attestation services.",
    },
    {
      icon: Handshake,
      text: "Dedicated partner success squad that co-sells, co-markets, and co-supports every admission closure.",
    },
    {
      icon: ShieldCheck,
      text: "Transparent commission governance with real-time dashboards, weekly MIS, and guaranteed payouts.",
    },
  ];

  const successPlaybook = [
    {
      icon: GraduationCap,
      title: "Training & Enablement",
      items: [
        "Structured onboarding bootcamp & certification",
        "Product playbooks, objection handling scripts",
        "Weekly masterclasses with domain experts",
      ],
    },
    {
      icon: Rocket,
      title: "Marketing & Lead Engine",
      items: [
        "Hyperlocal launch kit with creatives & standees",
        "SEO/Performance marketing lead share",
        "City-specific education fairs & webinars",
      ],
    },
    {
      icon: Briefcase,
      title: "Operations & Closure Support",
      items: [
        "Dedicated counsellor desk & CRM access",
        "Admissions processing + documentation support",
        "Scholarship & finance desk for quick closures",
      ],
    },
  ];

  const onboardingTimeline = [
    {
      phase: "Day 1",
      title: "Partner onboarding & MoU",
      description: "Sign-up, KYC, and agreement. Success manager assigned with immediate portal access.",
    },
    {
      phase: "Day 7",
      title: "Toolkit handover & launch plan",
      description: "Receive marketing assets, pricing decks, and the first wave of leads to activate local outreach.",
    },
    {
      phase: "Day 14",
      title: "Go live with campaigns",
      description: "Run co-branded digital campaigns, host first counselling clinic, and start closing admissions.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC067] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Partner Experience
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            A turnkey revenue playbook that keeps your admissions desk busy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            We combine two decades of education counselling expertise with high-conversion marketing,
            automation, and people support so that you can focus on advising students and growing your business.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 px-6 sm:px-8 py-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Why Dynamic World Partners stay ahead
              </h3>
              <ul className="mt-5 space-y-3 text-sm sm:text-base text-slate-600">
                {valuePropositions.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 text-blue-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 px-6 sm:px-8 py-8 text-white shadow-2xl">
              <h3 className="text-xl font-semibold">Powerful partner success infrastructure</h3>
              <p className="mt-3 text-sm sm:text-base text-indigo-100/90 leading-relaxed">
                Work with a dedicated success manager, marketing strategist, and admissions operations executive.
                We align university campaigns, scholarship drives, and local events around your catchment area.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4">
                  <p className="text-2xl font-bold">20+ yrs</p>
                  <p className="text-xs text-indigo-100/90">Education counselling legacy since 2005</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4">
                  <p className="text-2xl font-bold">99%</p>
                  <p className="text-xs text-indigo-100/90">Partner retention with predictable payouts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {successPlaybook.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 px-5 py-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFC067] text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FFC067]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 px-6 sm:px-8 py-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Your onboarding journey — launch in two weeks
              </h3>
              <div className="mt-6 space-y-5">
                {onboardingTimeline.map(({ phase, title, description }) => (
                  <div key={phase} className="flex gap-4">
                    <div className="flex h-10 w-24 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC067] text-sm font-semibold text-blue-600">
                      {phase}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 px-6 sm:px-8 py-8 text-white shadow-2xl">
              <h3 className="text-xl font-semibold">Ready to unlock your education franchise?</h3>
              <p className="mt-3 text-sm sm:text-base text-indigo-100/90">
                Let’s align goals, territories, and launch timelines. Our team will curate a personalised revenue projection
                for your city and help you launch a high-trust education centre immediately.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <ActionButton
                  as="a"
                  href="https://wa.me/917887881060"
                  text="Schedule partnership call"
                  variant="primary"
                />
                <ActionButton
                  as="a"
                  href="mailto:Dynamicworld.edu@gmail.com"
                  text="Request proposal"
                  variant="ghost"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION 3 ===
export const BusinessPartnerBenefits = () => {
  const headlineHighlights = [
    {
      icon: TrendingUp,
      title: "High Earning Potential",
      description:
        "Earn ₹10,000 to ₹50,000 per admission (depending on course and program).",
    },
    {
      icon: BadgeCheck,
      title: "Official Recognition",
      description:
        "Get listed as an Authorized Counsellor on www.dynamicworld.in with your name & location.",
    },
  ];

  const benefitSections = [
    {
      icon: GraduationCap,
      title: "Training & Support",
      items: [
        "Online & Offline Training Sessions",
        "24/7 Counselling Support",
        "Use of our offices for work or client meetings",
      ],
    },
    {
      icon: Layers,
      title: "Complete Counselling Toolkit",
      items: [
        "Contact points for all departments",
        "Complete counselling kit",
        "Enquiry & admission books",
        "Access to course finder software",
        "CRM software for client management",
      ],
    },
    {
      icon: Briefcase,
      title: "Course & Career Resources",
      items: [
        "University list with fee & commission structures",
        "Marketing & advertisement support",
        "Updated digital leaflets & brochures",
        "Professional standees & banners",
      ],
    },
  ];

  const bookletList = [
    "Career Guidance",
    "Online Education",
    "Online/Distance/Regular MBA",
    "Distance & Regular Courses",
    "10ᵗʰ–12ᵗʰ (Science, Commerce, Arts)",
    "DVoc – B.Voc – M.Voc",
    "Diploma, PG Diploma, Certificate & Skill Courses",
    "Study Abroad",
    "Immigration & Visa Services",
    "Placement Services in India & Abroad",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Partner Success
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            What our Business Associates get?
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {headlineHighlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-[#FFC067] text-blue-600 p-3 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefit Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitSections.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-[#FFC067] text-blue-600 p-3 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FFC067]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Booklets */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#FFC067] text-blue-600 p-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Booklets You&apos;ll Receive
                </h3>
                <p className="text-sm text-slate-500">
                  Ready-to-use references for quick counselling and admissions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {bookletList.map((booklet) => (
                <div
                  key={booklet}
                  className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#FFC067]" />
                  {booklet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION 4 ===
export const BusinessPartnerCommission = () => {
  const commissionTiers = [
    {
      title: "Online Courses",
      details: "BA • BCom • BCA • BBA • MBA • MCA • MA • MCom",
      payout: "₹10,000 – ₹25,000 per admission",
    },
    {
      title: "Distance Courses / Regular Courses",
      details: "BA • BCom • BCA • BBA • BSc • MBA • MCA • MA • MCom • MSc",
      payout: "₹10,000 – ₹20,000 on each admission",
    },
    {
      title: "Council Courses",
      details:
        "BEd • BPEd • MED • LLB • BALLB • LLM • DPharm • BPharm • Diploma Engineering • BE / BTech • MTech",
      payout: "₹20,000 – ₹40,000 on each admission",
    },
    {
      title: "Ph.D",
      details: "",
      payout: "₹25,000 – ₹50,000 on each admission",
    },
    {
      title: "Boards: 10ᵗʰ – 12ᵗʰ Science / Commerce / Arts",
      details: "",
      payout: "₹10,000 – ₹20,000 on each admission",
    },
    {
      title: "Vocational Courses: DVoc • BVoc • MVoc",
      details: "",
      payout: "₹10,000 – ₹15,000 on each admission",
    },
    {
      title: "Diploma • PG Diploma • Certificate & Skill Courses",
      details: "",
      payout: "₹5,000 – ₹10,000 on each admission",
    },
    {
      title: "School Admission College Admission",
      details: "Medical • Engineering • Management • Law • MBBS in India & Abroad",
      payout: "₹25,000 – ₹50,000 on each admission",
    },
    {
      title: "Overseas Education • Study Abroad",
      details: "",
      payout: "₹25,000 – ₹50,000 on each admission",
    },
    {
      title: "Immigration & Visa",
      details: "",
      payout: "₹25,000 & above on each case",
    },
    {
      title: "Jobs in India & Abroad",
      details: "",
      payout: "₹25,000 & above on each case",
    },
    {
      title: "Attestation & Apostille Services",
      details: "",
      payout: "₹5,000 & above on each case",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 shadow-xl">
          <div className="bg-slate-900 text-white rounded-t-2xl px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Commission Overview
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              B2B Commission Sheet
            </h2>
            <p className="mt-1 text-sm sm:text-base text-blue-100">
              Earn ₹10,000 – ₹50,000 per admission
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {commissionTiers.map(({ title, details, payout }) => (
              <div
                key={title}
                className="grid gap-4 md:grid-cols-[2fr_1fr] px-6 py-5 bg-white hover:bg-slate-50 transition-colors"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                  {details ? (
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {details}
                    </p>
                  ) : null}
                </div>
                <div className="flex md:justify-end">
                  <div className="inline-flex items-center rounded-xl border border-blue-200 bg-[#FFC067] px-4 py-2 text-sm font-semibold text-blue-700">
                    {payout}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

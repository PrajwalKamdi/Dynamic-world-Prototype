import React from "react";

export const dynamicWorldData = [
  {
    companyName: "Dynamic World",
    website: "https://dynamicworld.in/",
    tagline: "Education Experts Since 2005",
    description:
      "Dynamic World is an educational consultancy platform offering access to 50+ online universities with 24/7 counseling, free career guidance, and 100% placement support. They specialize in distance and online education and are recognized for helping students enroll in UGC-approved programs across India.",
    achievements: {
      admissions: "12,000+ admissions completed",
      counseling: "100,000+ students counseled",
      universities: "50+ partnered online universities",
    },
    services: [
      { name: "Online University Admissions", details: "Provides admission assistance for UGC-approved online universities." },
      { name: "Career Counseling", details: "24/7 personalized counseling and course selection guidance." },
      { name: "Placement Support", details: "Offers 100% placement guidance and post-admission support." },
      { name: "Distance & Online Education", details: "Helps students enroll in distance learning and online degree programs." },
      { name: "Medical (MBBS) Admissions", details: "Guides students through MBBS course admissions in India and abroad." },
      { name: "Refund and Return Policy", details: "Maintains financial transparency through a defined return and refund policy." },
    ],
    headOffice: {
      city: "Pune",
      address:
        "Building No 506, 5th Floor, Sterling Centre, Opposite Arora Tower, Camp, Pune, Maharashtra",
      phone: "+91 7887881060",
      email: "support@dynamicworld.in",
    },
    branchOffices: [
      { city: "Nagpur", state: "Maharashtra" },
      { city: "Ahmedabad", state: "Gujarat" },
      { city: "Indore", state: "Madhya Pradesh" },
      { city: "Raipur", state: "Chhattisgarh" },
      {
        city: "Surat",
        address:
          "231, Second Floor, Green Elina Complex, Anand Mahal Road, Adajan, Surat, Gujarat 395009",
      },
    ],
    authorizedCounselors:
      "Authorized counselors and associates are spread across multiple cities in India and abroad.",
    socialLinks: {
      facebook: "https://www.facebook.com/p/Dynamic-World-61566819778877/",
      instagram: "https://www.instagram.com/dynamicworld.in/",
      linkedin: "https://in.linkedin.com/company/dynamic-world",
    },
    reviewPlatforms: {
      justDial: {
        url: "https://www.justdial.com/Pune/Dynamic-World-Oppoto-Arora-Tower-Camp/020PXX20-XX20-210804145556-K7R4_BZDET",
        summary:
          "Rated positively for counseling quality and support. Listed as an Education Consultant in Pune.",
      },
      googleReviews: "No verified Google Maps listing found during search.",
    },
    foundedYear: 2005,
    industry: "Education and Career Counseling",
  },
];

const Chip = ({ children, tone = "indigo" }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1 bg-${tone}-50 text-${tone}-700 ring-${tone}-100`}
  >
    {children}
  </span>
);

const SectionCard = ({ title, subtitle, children, badge }) => (
  <section className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
    <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {badge}
    </div>
    <div className="px-4 sm:px-6 py-5">{children}</div>
  </section>
);

const LinkButton = ({ href, children, variant = "primary" }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-400",
    soft:
      "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 ring-1 ring-indigo-100 focus-visible:ring-indigo-300",
    outline:
      "ring-1 ring-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-indigo-300",
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
};

const DynamicWorldInfo = () => {
  const data = dynamicWorldData[0];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0 space-y-6 sm:space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 text-white shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,white,transparent_50%),radial-gradient(ellipse_at_bottom_right,white,transparent_50%)]" />
        <div className="relative px-5 sm:px-8 py-7 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {data.companyName}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base text-indigo-50/90">
                {data.tagline}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Chip>{data.industry}</Chip>
                <Chip tone="violet">Founded {data.foundedYear}</Chip>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <LinkButton href={data.website}>🌐 Visit Website</LinkButton>
              <LinkButton href={`tel:${data.headOffice.phone}`} variant="soft">
                📞 Call
              </LinkButton>
              <LinkButton href={`mailto:${data.headOffice.email}`} variant="outline">
                ✉️ Email
              </LinkButton>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-4">
              <div className="text-xs uppercase tracking-wide text-indigo-100">Admissions</div>
              <div className="mt-1 text-lg font-semibold">{data.achievements.admissions}</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-4">
              <div className="text-xs uppercase tracking-wide text-indigo-100">Counseled</div>
              <div className="mt-1 text-lg font-semibold">{data.achievements.counseling}</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-4">
              <div className="text-xs uppercase tracking-wide text-indigo-100">Universities</div>
              <div className="mt-1 text-lg font-semibold">{data.achievements.universities}</div>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <SectionCard title="About Dynamic World">
        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          {data.description}
        </p>
      </SectionCard>

      {/* SERVICES */}
      <SectionCard
        title="Services"
        subtitle="End-to-end support across admissions, counseling, and placements"
        badge={<Chip tone="violet">{data.services.length} offerings</Chip>}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.services.map((service, i) => (
            <li
              key={i}
              className="group rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors p-4"
            >
              <div className="font-semibold text-gray-900 group-hover:text-indigo-800">
                {service.name}
              </div>
              <p className="mt-1 text-sm text-gray-600">{service.details}</p>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* OFFICES (GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Head Office */}
        <SectionCard title="Head Office" subtitle={data.headOffice.city}>
          <div className="space-y-2 text-sm sm:text-base">
            <p className="text-gray-800">{data.headOffice.address}</p>
            <p className="text-gray-700">📍 {data.headOffice.city}</p>
            <p className="text-gray-700">📞 {data.headOffice.phone}</p>
            <p className="text-gray-700">✉️ {data.headOffice.email}</p>
          </div>
        </SectionCard>

        {/* Branch Offices */}
        <SectionCard
          title="Branch Offices"
          subtitle="Across India"
          badge={<Chip>{data.branchOffices.length} locations</Chip>}
        >
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            {data.branchOffices.map((office, i) => (
              <li key={i} className="leading-relaxed">
                <span className="font-medium text-gray-900">{office.city}</span>
                {office.state ? <span>, {office.state}</span> : null}
                {office.address ? <span> — {office.address}</span> : null}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Counselors & Social */}
        <SectionCard title="Authorized Counselors" subtitle="Availability">
          <p className="text-sm sm:text-base text-gray-700">
            {data.authorizedCounselors}
          </p>

          <div className="mt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Social Links
            </div>
            <div className="flex flex-wrap gap-2">
              <LinkButton href={data.socialLinks.facebook} variant="outline">
                Facebook
              </LinkButton>
              <LinkButton href={data.socialLinks.instagram} variant="outline">
                Instagram
              </LinkButton>
              <LinkButton href={data.socialLinks.linkedin} variant="outline">
                LinkedIn
              </LinkButton>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* REVIEWS */}
      <SectionCard title="Reviews" subtitle="What learners are saying">
        <div className="space-y-3">
          <p className="text-sm sm:text-base text-gray-700">
            {data.reviewPlatforms.justDial.summary}
          </p>
          <LinkButton href={data.reviewPlatforms.justDial.url} variant="soft">
            View on JustDial
          </LinkButton>
          <p className="text-sm text-gray-500">
            Google Reviews: {data.reviewPlatforms.googleReviews}
          </p>
        </div>
      </SectionCard>

      {/* META */}
      <SectionCard title="Additional Info">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase tracking-wide text-gray-500">Industry</div>
            <div className="mt-1 font-semibold text-gray-900">{data.industry}</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase tracking-wide text-gray-500">Founded</div>
            <div className="mt-1 font-semibold text-gray-900">{data.foundedYear}</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase tracking-wide text-gray-500">Website</div>
            <div className="mt-1">
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-4"
              >
                {data.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default DynamicWorldInfo;

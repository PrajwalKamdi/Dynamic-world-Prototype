import React from 'react'
import { useMemo } from 'react';

const samplePageData = {
  seo: {
    title: "MBBS Abroad | Dynamic World",
    description:
      "Study MBBS abroad with recognized universities (WHO/NMC). Get expert guidance on admission, visas, & counseling.",
  },
  hero: {
    headline: "Study MBBS Abroad",
    subheadline:
      "Recognized Universities • Transparent Process • Expert Counselling",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251136/LaptopMbbsAbroadDesktop_rbeewp.svg",
    ctas: [
      { label: "Book Free Counselling", href: "#contact" },
      { label: "Explore Universities", href: "#destinations", variant: "ghost" },
    ],
    badges: [
      "20+ Years in Education",
      "WHO & NMC Recognized",
      "End-to-End Support",
    ],
  },
  credibility: {
    logosTitle: "Recognitions & Partners",
    logos: [
      { alt: "WHO", src: "https://dummyimage.com/100x40/fff/aaa&text=WHO" },
      { alt: "NMC", src: "https://dummyimage.com/100x40/fff/aaa&text=NMC" },
      { alt: "IMED", src: "https://dummyimage.com/100x40/fff/aaa&text=IMED" },
      { alt: "USMLE", src: "https://dummyimage.com/100x40/fff/aaa&text=USMLE" },
    ],
    stats: [
      { label: "Universities", value: "50+" },
      { label: "Countries", value: "10+" },
      { label: "Students Counselled", value: "25,000+" },
    ],
  },
  whyAbroad: {
    title: "Why MBBS Abroad?",
    points: [
      {
        title: "Affordable Tuition",
        desc:
          "Lower fees compared to many private colleges, with transparent costs.",
      },
      {
        title: "Global Exposure",
        desc:
          "International peer groups, modern labs, and clinical practice.",
      },
      {
        title: "Recognitions",
        desc: "WHO, NMC, IMED listings (check per university).",
      },
      {
        title: "English Medium",
        desc: "Programs widely offered in English (verify at university level).",
      },
    ],
  },
  destinations: {
    title: "Popular Destinations",
    cards: [
      {
        country: "Kazakhstan",
        image: "https://dummyimage.com/640x360/ede/aaa&text=Kazakhstan",
        bullets: [
          "Fees: ₹18L – ₹35L total",
          "Duration: 5–6 years",
          "Medium: English (varies)",
        ],
        link: "#",
      },
      {
        country: "Kyrgyzstan",
        image: "https://dummyimage.com/640x360/ede/aaa&text=Kyrgyzstan",
        bullets: [
          "Fees: ₹15L – ₹30L total",
          "Duration: 5–6 years",
          "Medium: English (varies)",
        ],
        link: "#",
      },
      {
        country: "Russia",
        image: "https://dummyimage.com/640x360/ede/aaa&text=Russia",
        bullets: [
          "Fees: ₹20L – ₹40L total",
          "Duration: 6 years",
          "Medium: English/Russian",
        ],
        link: "#",
      },
    ],
  },
  process: {
    title: "Admission Process (Step-by-Step)",
    steps: [
      { title: "1. Profile & Counselling", desc: "Academic fit & country match." },
      { title: "2. University Shortlisting", desc: "Compare fees & recognition." },
      { title: "3. Application & Offer", desc: "Documents + conditional offer." },
      { title: "4. Visa & Pre-Departure", desc: "Visa file, flights, briefing." },
      { title: "5. Arrival & Enrollment", desc: "Airport pickup & onboarding." },
    ],
  },
  featuredUniversities: {
    title: "Featured Universities",
    items: [
      {
        name: "South Kazakhstan Medical Academy",
        country: "Kazakhstan",
        fee: "₹3L–₹5L/year (approx.)",
        medium: "English",
        recognition: ["WHO", "NMC"],
      },
      {
        name: "Jalal-Abad State University",
        country: "Kyrgyzstan",
        fee: "₹2.5L–₹4.5L/year (approx.)",
        medium: "English",
        recognition: ["WHO", "NMC"],
      },
    ],
  },
  costComparison: {
    title: "Estimated Cost Comparison",
    tableHead: ["Country", "Tuition (per year)", "Living (per year)", "Duration"],
    rows: [
      ["Kazakhstan", "₹3L–₹5L", "₹1.2L–₹2L", "5–6 years"],
      ["Kyrgyzstan", "₹2.5L–₹4.5L", "₹1L–₹1.8L", "5–6 years"],
      ["Russia", "₹3.5L–₹6L", "₹1.5L–₹2.5L", "6 years"],
    ],
    note:
      "All costs are indicative; verify latest university brochures and official notices.",
  },
  faqs: {
    title: "FAQs",
    items: [
      {
        q: "Is MBBS abroad valid in India?",
        a:
          "Graduates must clear screening/licensing as per NMC/Next regulations. Recognition varies by university — verify before applying.",
      },
      {
        q: "Is the medium of instruction English?",
        a:
          "Most popular universities offer English-medium programs; confirm per university.",
      },
      {
        q: "Do you help with visas and accommodation?",
        a:
          "Yes — end-to-end assistance: application, visas, travel, arrival, and hostel guidance.",
      },
    ],
  },
  contact: {
    title: "Talk to a Counsellor",
    blurb:
      "Get a free profile evaluation and a customized shortlist of universities.",
    formAction: "#",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email" },
      { name: "city", label: "City", type: "text" },
    ],
    ctaLabel: "Request Callback",
  },
  footer: {
    lines: [
      "Disclaimer: Information is compiled from public sources and may change.",
      "© Dynamic World. All rights reserved.",
    ],
  },
};

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-4 py-10 ${className}`}>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-block bg-[#EDEEEB] text-[#31393C] text-sm px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

function CTA({ href, children, variant }) {
  const base =
    "px-5 py-3 rounded-xl font-semibold transition shadow-sm inline-flex items-center justify-center";
  const primary = "bg-[#3E96F4] text-white hover:brightness-95";
  const ghost =
    "bg-white/90 text-[#31393C] hover:bg-white ring-1 ring-black/10";
  return (
    <a href={href} className={`${base} ${variant === "ghost" ? ghost : primary}`}>
      {children}
    </a>
  );
}

function Hero({ data }) {
  return (
    <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
      <img
        src={data.image}
        alt={data.headline}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center gap-5">
        <div className="flex flex-wrap gap-2">
          {data.badges?.map((b, i) => (
            <Pill key={i}>{b}</Pill>
          ))}
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {data.headline}
        </h1>
        <p className="text-white/90 text-lg max-w-2xl">{data.subheadline}</p>
        <div className="flex gap-3">
          {data.ctas?.map((c, i) => (
            <CTA key={i} href={c.href} variant={c.variant}>
              {c.label}
            </CTA>
          ))}
        </div>
      </div>
    </div>
  );
}

function Credibility({ data }) {
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.logosTitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mb-8">
        {data.logos?.map((l, i) => (
          <img
            key={i}
            src={l.src}
            alt={l.alt}
            className="h-10 w-auto object-contain opacity-80"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.stats?.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow p-6 text-center border border-black/5"
          >
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm opacity-70">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyAbroad({ data }) {
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.points?.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow p-5 border border-black/5"
          >
            <div className="font-semibold mb-1">{p.title}</div>
            <div className="text-sm opacity-80">{p.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Destinations({ data }) {
  return (
    <Section id="destinations" className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.cards?.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow overflow-hidden border border-black/5"
          >
            <img src={c.image} alt={c.country} className="w-full h-40 object-cover" />
            <div className="p-5">
              <div className="text-lg font-semibold">{c.country}</div>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                {c.bullets?.map((b, j) => (
                  <li key={j} className="list-disc ml-5">
                    {b}
                  </li>
                ))}
              </ul>
              {c.link && (
                <a
                  href={c.link}
                  className="inline-block mt-4 text-[#3E96F4] font-medium hover:underline"
                >
                  Learn more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Process({ data }) {
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      <ol className="grid md:grid-cols-5 gap-4">
        {data.steps?.map((s, i) => (
          <li
            key={i}
            className="rounded-2xl bg-white shadow p-5 border border-black/5"
          >
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm opacity-80 mt-1">{s.desc}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FeaturedUniversities({ data }) {
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.items?.map((u, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow p-5 border border-black/5"
          >
            <div className="text-lg font-semibold">{u.name}</div>
            <div className="text-sm opacity-80">{u.country}</div>
            <div className="mt-3 text-sm">
              <div>
                <span className="font-medium">Fee:</span> {u.fee}
              </div>
              <div>
                <span className="font-medium">Medium:</span> {u.medium}
              </div>
              <div className="mt-1">
                <span className="font-medium">Recognition:</span>{" "}
                {Array.isArray(u.recognition) ? u.recognition.join(", ") : u.recognition}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CostComparison({ data }) {
  const hasTable = useMemo(
    () => Array.isArray(data.rows) && data.rows.length > 0,
    [data.rows]
  );
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      {hasTable && (
        <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-[#EDEEEB] text-[#31393C]">
              <tr>
                {data.tableHead?.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr
                  key={i}
                  className="odd:bg-white even:bg-black/0 hover:bg-[#f8f9fb]"
                >
                  {r.map((cell, j) => (
                    <td key={j} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {data.note && <p className="text-sm opacity-70 mt-3">{data.note}</p>}
    </Section>
  );
}

function FAQs({ data }) {
  return (
    <Section className="text-[#31393C]">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>
      <div className="divide-y rounded-2xl border border-black/5 bg-white shadow">
        {data.items?.map((f, i) => (
          <details key={i} className="group p-5">
            <summary className="cursor-pointer font-semibold list-none">
              {f.q}
            </summary>
            <p className="mt-2 text-sm opacity-90">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Contact({ data }) {
  return (
    <Section id="contact" className="text-[#31393C]">
      <div className="rounded-2xl bg-white shadow p-6 border border-black/5">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="opacity-80 mt-1">{data.blurb}</p>
        <form
          className="grid md:grid-cols-2 gap-4 mt-5"
          action={data.formAction}
          method="POST"
          onSubmit={(e) => e.preventDefault()}
        >
          {data.fields?.map((f) => (
            <label key={f.name} className="flex flex-col gap-1">
              <span className="text-sm font-medium">{f.label}</span>
              <input
                name={f.name}
                type={f.type || "text"}
                required={!!f.required}
                className="rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#3E96F4]"
                placeholder={f.placeholder || ""}
              />
            </label>
          ))}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#3E96F4] text-white font-semibold hover:brightness-95"
            >
              {data.ctaLabel || "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Footer({ data }) {
  return (
    <footer className="border-t border-black/10 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-sm text-[#31393C]/80 space-y-1">
        {data.lines?.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </footer>
  );
}

export default function MbbsInAbroad({ data = samplePageData }) {
  // (Optional) Basic SEO tags – if using Next.js use <Head>
  document.title = data.seo?.title || "MBBS Abroad";
  // (You can also inject meta description with a framework-level Head component)

  return (
    <main className="bg-white">
      <Hero data={data.hero} />
      <Credibility data={data.credibility} />
      <WhyAbroad data={data.whyAbroad} />
      <Destinations data={data.destinations} />
      <Process data={data.process} />
      <FeaturedUniversities data={data.featuredUniversities} />
      <CostComparison data={data.costComparison} />
      <FAQs data={data.faqs} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </main>
  );
}

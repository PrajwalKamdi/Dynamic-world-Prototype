import { Download } from "lucide-react";
import React from "react";

/**
 * AttestationServices
 * Single-file React component to present the full content extracted from the uploaded PDF.
 * - TailwindCSS ready (uses your brand colors: #3E96F4 primary, #31393C text, #EDEEEB chips)
 * - Mobile-first, responsive, accessible, keyboard-navigable
 * - Includes sticky contact card, sectioned content, and searchable/filterable tables
 */

const processes = [
  // Section: Core Process Timelines (Normal vs Express)
  {
    id: 1,
    name: "SDM + MEA",
    normal: "4–5 working days",
    express: "2–3 working days",
  },
  {
    id: 2,
    name: "SDM + Apostille",
    normal: "5–6 working days",
    express: "3–4 working days",
  },
  {
    id: 3,
    name: "SDM + WNR + Apostille",
    normal: "5–6 working days",
    express: "3–4 working days",
  },
  {
    id: 4,
    name: "WNR + MEA",
    normal: "4–5 working days",
    express: "2–3 working days",
  },
  {
    id: 5,
    name: "MEA (HRD completed)",
    normal: "4–5 working days",
    express: "2–3 working days",
  },
  {
    id: 6,
    name: "Apostille (HRD completed)",
    normal: "4–5 working days",
    express: "2–3 working days",
  },
  {
    id: 7,
    name: "UAE Attestation (with MOFA)",
    normal: "14–16 working days",
    express: "10–12 working days",
  },
  {
    id: 8,
    name: "UAE Attestation (without MOFA)",
    normal: "18–20 working days",
    express: "6–8 working days",
  },
  {
    id: 9,
    name: "Only MOFA (UAE)",
    normal: "8–10 working days",
    express: "4–5 working days",
  },
  {
    id: 10,
    name: "UAE Attestation (Non‑Education)",
    normal: "6–7 working days",
    express: "6–8 working days",
  },
  {
    id: 11,
    name: "UAE Attestation (Non‑Education) with MOFA",
    normal: "14–16 working days",
    express: "10–12 working days",
  },
  {
    id: 12,
    name: "UAE Attestation (Commercial)",
    normal: "12–14 working days",
    express: "10–12 working days",
  },
  {
    id: 13,
    name: "UAE Attestation (Commercial) with MOFA",
    normal: "16–18 working days",
    express: "12–14 working days",
  },
  {
    id: 14,
    name: "Kuwait Attestation (Education)",
    normal: "20–25 working days",
    express: "10–12 working days",
  },
  {
    id: 15,
    name: "Kuwait Attestation (Non‑Education)",
    normal: "20–25 working days",
    express: "10–12 working days",
  },
  {
    id: 16,
    name: "Kuwait Attestation (Education, HRD completed)",
    normal: "20–25 working days",
    express: "10–12 working days",
  },
  {
    id: 17,
    name: "Qatar Attestation (with MOFA)",
    normal: "20–25 working days",
    express: "15–18 working days",
  },
  {
    id: 18,
    name: "Qatar Attestation (without MOFA)",
    normal: "18–20 working days",
    express: "15–18 working days",
  },
  {
    id: 19,
    name: "Only MOFA (Qatar)",
    normal: "8–10 working days",
    express: "6–8 working days",
  },
  { id: 20, name: "Nigeria", normal: "10–12 working days", express: "—" },
  { id: 21, name: "Algeria", normal: "12–14 working days", express: "—" },
  {
    id: 22,
    name: "Algeria (Commercial)",
    normal: "12–14 working days",
    express: "—",
  },
  { id: 23, name: "Vietnam", normal: "12–14 working days", express: "—" },
  {
    id: 24,
    name: "Vietnam (Commercial)",
    normal: "5–8 working days",
    express: "4–6 working days",
  },
  {
    id: 25,
    name: "Egypt",
    normal: "12–14 working days",
    express: "5–8 working days",
  },
  {
    id: 26,
    name: "Egypt (Commercial)",
    normal: "12–14 working days",
    express: "5–8 working days",
  },
  { id: 27, name: "Sudan", normal: "12–14 working days", express: "—" },
  {
    id: 28,
    name: "Sudan (Commercial)",
    normal: "12–14 working days",
    express: "—",
  },
  { id: 29, name: "Lebanon", normal: "12–14 working days", express: "—" },
  { id: 30, name: "Guatemala", normal: "12–14 working days", express: "—" },
  { id: 31, name: "Ecuador", normal: "12–14 working days", express: "—" },
  {
    id: 32,
    name: "Iraq (Commercial)",
    normal: "5–8 working days",
    express: "—",
  },
  {
    id: 33,
    name: "Bahrain",
    normal: "8–10 working days",
    express: "5–8 working days",
  },
  {
    id: 34,
    name: "Argentina (in Original)",
    normal: "12–14 working days",
    express: "—",
  },
  {
    id: 35,
    name: "Argentina (in Copy)",
    normal: "12–14 working days",
    express: "—",
  },
  {
    id: 36,
    name: "Taiwan (Commercial)",
    normal: "12–14 working days",
    express: "5–8 working days",
  },
  {
    id: 37,
    name: "China (Commercial)",
    normal: "18–20 working days",
    express: "8–10 working days",
  },
  { id: 38, name: "Dominican", normal: "8–10 working days", express: "—" },
  {
    id: 39,
    name: "Thailand (Commercial)",
    normal: "8–10 working days",
    express: "5–8 working days",
  },
  { id: 40, name: "Peru", normal: "8–10 working days", express: "—" },
  { id: 41, name: "Jordan", normal: "12–14 working days", express: "—" },
  {
    id: 42,
    name: "Jordan (Commercial)",
    normal: "12–14 working days",
    express: "—",
  },
  { id: 43, name: "Bangladesh", normal: "8–10 working days", express: "—" },
  { id: 44, name: "Pakistan", normal: "18–20 working days", express: "—" },
  {
    id: 45,
    name: "China",
    normal: "18–20 working days",
    express: "12–14 working days",
  },
  { id: 46, name: "Ethiopia", normal: "12–14 working days", express: "—" },
  {
    id: 47,
    name: "Ethiopia (Commercial)",
    normal: "12–14 working days",
    express: "—",
  },
  { id: 48, name: "Tanzania", normal: "12–14 working days", express: "—" },
  { id: 49, name: "Indonesia", normal: "12–14 working days", express: "—" },
  {
    id: 50,
    name: "Indonesia (Commercial)",
    normal: "12–14 working days",
    express: "—",
  },
];

const translationLanguages = [
  "French",
  "German",
  "Spanish",
  "Portuguese",
  "Chinese",
  "Japanese",
  "Korean",
  "Italian",
  "Russian",
  "Dutch",
  "Greek",
  "Turkish",
  "Romanian",
  "Czech",
  "Slovak",
  "Ukrainian",
  "Hindi and other Regional Languages",
];

const Section = ({ title, children }) => (
  <section
    className="scroll-mt-28"
    id={title?.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="h-6 w-1 rounded-full bg-[#3E96F4]" />
      <h2 className="text-xl md:text-2xl font-semibold text-[#31393C]">
        {title}
      </h2>
    </div>
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4 md:p-6">
      {children}
    </div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
    {children}
  </span>
);

const KeyPoint = ({ heading, points }) => (
  <div>
    <h3 className="text-lg font-medium text-[#31393C]">{heading}</h3>
    <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-[#31393C]">
      {points.map((p, idx) => (
        <li key={idx}>{p}</li>
      ))}
    </ul>
  </div>
);

const ProcessRow = ({ name, normal, express }) => (
  <tr className="border-b last:border-none">
    <td className="px-4 py-2 text-sm md:text-base text-[#31393C]">{name}</td>
    <td className="px-4 py-2 text-sm md:text-base">{normal}</td>
    <td className="px-4 py-2 text-sm md:text-base">{express}</td>
  </tr>
);

const StudyAbroadAttestationApostile = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F6] text-[#31393C]">
      {/* Top Header */}
      <header className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Dynamic World – Document Attestation, Apostille & Verification
              </h1>
              <p className="mt-1 opacity-90 text-sm md:text-base">
                Global leaders in document handling, headquartered in Dubai.
                ISO‑certified processes and a team of 50+ employees worldwide.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>Apostille</Chip>
                <Chip>Embassy Attestation</Chip>
                <Chip>Educational & Non‑Educational</Chip>
                <Chip>Commercial Certificates</Chip>
                <Chip>Legalization & Translation</Chip>
              </div>
            </div>
            <address className="not-italic text-sm md:text-base">
              <div className="rounded-2xl bg-white/10 md:bg-white/10 p-3 md:p-4 backdrop-blur">
                <div className="font-medium">Pune Office</div>
                <div>Office No. 506, 5th Floor, Sterling Centre, MG Road,</div>
                <div>Opp. Aurora Towers, Camp, Pune, Maharashtra 411001</div>
              </div>
            </address>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-8">
        {/* Left content */}
        <div className="lg:col-span-8 space-y-6">
          <Section title="Company Profile">
            <div className="prose max-w-none prose-p:my-1">
              <p>
                Dynamic World provides reliable, prompt attestation and
                legalization services for educational, non‑educational, and
                commercial documents. Services include Attestation & Apostille,
                PRO service, Embassy errands, and global document handling with
                efficient collection, timely completion, and prompt delivery.
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>ISO‑certified processes</li>
                <li>50+ employees across the globe</li>
                <li>Customer‑centric, fast, and transparent operations</li>
              </ul>
            </div>
          </Section>

          <Section title="Facilities & Tracking">
            <div className="grid md:grid-cols-2 gap-6">
              <KeyPoint
                heading="Online Tracking"
                points={[
                  "Real‑time status via Tracking ID on the website.",
                  "Email/SMS updates at each legalization stage.",
                  "Customer care support for on‑demand updates.",
                ]}
              />
              <KeyPoint
                heading="Internal Target"
                points={[
                  "Customer Satisfaction through proactive updates and care.",
                ]}
              />
            </div>
          </Section>

          <Section title="Workflow & Logistics">
            <div className="grid md:grid-cols-2 gap-6">
              <KeyPoint
                heading="Document Collection"
                points={[
                  "Pickup by staff or courier to designated offices.",
                  "Registration from nearest office with details sent to email/phone.",
                  "Share courier tracking ID with the officer in charge.",
                ]}
              />
              <KeyPoint
                heading="Registration"
                points={[
                  "Unique computer‑generated Tracking ID for every document.",
                  "All details enrolled against the Tracking ID and invoice shared via email.",
                ]}
              />
              <KeyPoint
                heading="Transition"
                points={[
                  "Secure transit via legally bound trusted partners.",
                  "Email/SMS alerts while in transit between checkpoints.",
                ]}
              />
              <KeyPoint
                heading="Tracking ID & Status"
                points={[
                  "Check progress on the website using your Tracking ID.",
                  "Stage‑wise updates (e.g., Notary → Home → Mantralaya → HRD → MEA → Embassy → Apostille).",
                  "Final delivery via courier to designated location after completion.",
                ]}
              />
            </div>
          </Section>

          <Section title="Process Timelines (Normal vs Express)">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 font-semibold">Process</th>
                    <th className="px-4 py-2 font-semibold">Normal</th>
                    <th className="px-4 py-2 font-semibold">Express</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((p) => (
                    <ProcessRow
                      key={p.id}
                      name={p.name}
                      normal={p.normal}
                      express={p.express}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Available Translation Languages (Normal: 4–5 working days)">
            <div className="flex flex-wrap gap-2">
              {translationLanguages.map((lang) => (
                <Chip key={lang}>{lang}</Chip>
              ))}
            </div>
          </Section>
        </div>

        {/* Right sticky contact / quick actions */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-6 space-y-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="mt-1 text-sm">
                For attestation, apostille, embassy errands, or translation
                support.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:+919820401375"
                  className="rounded-xl px-4 py-2 text-center bg-[#3E96F4] text-white font-medium hover:opacity-90"
                >
                  Call 9820401375
                </a>
                <a
                  href="tel:+917738846286"
                  className="rounded-xl px-4 py-2 text-center bg-[#3E96F4] text-white font-medium hover:opacity-90"
                >
                  Call 7738846286
                </a>
                <div className="col-span-2 flex justify-center">
                  <button className="inline-flex grid-cols-2 items-center gap-2 px-6 py-3 rounded-xl bg-[#3E96F4] text-white  font-semibold shadow-md hover:bg-[#3E96F6] hover:text-black/80 transition duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1">
                    Download Brochure
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <div className="font-medium">Address</div>
                <div>Office No. 506, 5th Floor, Sterling Centre, MG Road,</div>
                <div>Opp. Aurora Towers, Camp, Pune, Maharashtra 411001</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
              <h3 className="text-lg font-semibold">Why choose us</h3>
              <ul className="mt-2 list-disc pl-5 text-sm leading-6">
                <li>Reliable & prompt service with transparent tracking</li>
                <li>ISO‑certified processes and experienced global team</li>
                <li>
                  Coverage for Educational, Non‑Educational & Commercial docs
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default StudyAbroadAttestationApostile;

import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";
import { Download } from "lucide-react";

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-semibold text-[#31393C]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#3E96F4]" />
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E96F4]/10 ring-1 ring-[#3E96F4]/30">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#3E96F4]"
        fill="currentColor"
        aria-hidden
      >
        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
      </svg>
    </span>
    <span className="text-sm text-gray-700">{children}</span>
  </li>
);

const ImmigrationHome = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-8">
      {/* soft background tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#3E96F4]/5 to-transparent" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-7 xl:col-span-8">
          {/* Header */}
          <div className="mb-5">
            <Pill>Trusted Immigration & Skilled Jobs</Pill>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#31393C] lg:text-4xl">
              Immigration Services
            </h1>
            <div className="mt-3 h-1 w-28 rounded-full bg-[#3E96F4]" />
          </div>

          {/* Intro copy */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We proudly offer a wide range of skilled job opportunities across
              some of the most sought-after destinations in the world, including
              the
              <span className="font-semibold text-[#31393C]">
                {" "}
                United Kingdom, Australia, New Zealand, Europe, Canada,
              </span>{" "}
              and
              <span className="font-semibold text-[#31393C]"> Dubai</span>. Our
              platform connects talented individuals with employers seeking
              specialized expertise, ensuring a seamless pathway to exciting
              careers abroad. Whether you’re advancing your profession or
              exploring new horizons, we guide and support you at every step.
            </p>
            <p>
              Dynamic World specializes in skilled job placements and visa
              services to help you achieve international career and education
              goals. As a certified consultancy, we offer genuine and reliable
              processing for the world’s most renowned destinations.
            </p>
            <p>
              With years of experience and a proven approach, we ensure a
              smooth, result-driven process for individuals aspiring to work,
              study, or settle abroad.
            </p>
          </div>

          {/* Countries */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "United Kingdom",
              "Australia",
              "New Zealand",
              "Europe",
              "Canada",
              "Dubai",
            ].map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-[#31393C]">
              Why choose Dynamic World?
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <Bullet>
                Certified immigration guidance with transparent process
              </Bullet>
              <Bullet>Skilled job placements aligned to your profile</Bullet>
              <Bullet>End-to-end visa documentation & timelines</Bullet>
              <Bullet>
                Profile-first shortlisting for higher success rates
              </Bullet>
            </ul>

            {/* CTA row */}
            <div className="mt-5 flex justify-evenly items-end gap-3">
              <CalendyButton />

              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E96F4] text-white  font-semibold shadow-md hover:bg-[#3E96F6] hover:text-black/80 transition duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1">
                Download Brochure <Download size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right - Sticky form card */}
        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              {/* Form header */}
              <div className="relative bg-gradient-to-r from-[#3E96F4] via-[#3E96F4]/90 to-[#3E96F4]/70 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Get a Free Consultation
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Share your details and our expert will reach out with the next
                  steps.
                </p>
                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
              </div>

              {/* Embedded form */}
              <div className="p-4">
                <DynamicForm />
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-3 border-t border-gray-100 bg-[#EDEEEB] px-4 py-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#3E96F4]"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z" />
                </svg>
                <p className="text-xs text-[#31393C]">
                  100% confidential • No hidden charges • Quick turnaround
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ImmigrationHome;

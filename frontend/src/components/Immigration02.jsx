import React from "react";
import { Briefcase, UserCheck, Globe, GraduationCap } from "lucide-react";

const Immegration02 = () => {
  const services = [
    { icon: Briefcase, title: "Work Visa", desc: "Allows foreign workers to legally work abroad." },
    { icon: UserCheck, title: "Permanent Visa", desc: "Grants long-term residence and work rights." },
    { icon: Globe, title: "Freelancer Visa", desc: "For self-employed individuals to work independently." },
    { icon: GraduationCap, title: "Study Visa", desc: "Allows foreign nationals to study abroad." },
  ];

  return (
    <section className="lg:m-5">
      <div className="relative mx-auto max-w-7xl lg:rounded-2xl bg-[#3E96F4] px-2 lg:px-5 py-8 text-white">
        {/* soft overlay glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-white/10" />

        {/* grid of cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={i}
              className="group rounded-2xl bg-white/95 p-5 text-[#31393C] shadow-sm ring-1 ring-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDEEEB] ring-1 ring-[#3E96F4]/30">
                <Icon size={24} className="text-[#3E96F4]" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>

              {/* hover accent */}
              <div className="mt-4 h-0.5 w-0 bg-[#3E96F4] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        {/* bottom blurb */}
        <div className="mt-8 rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
          <h2 className="text-xl font-bold tracking-tight">Immigration Services</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/90">
            We offer comprehensive support for a range of immigration needs — from renewing your visa
            to obtaining work permits and legal guidance.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Work Permits", "PR Guidance", "Freelancer Setup", "Study Overseas"].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#31393C] ring-1 ring-white/60"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immegration02;

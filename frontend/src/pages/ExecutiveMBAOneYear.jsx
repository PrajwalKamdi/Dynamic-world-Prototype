// ExecutiveMBAOneYear.jsx
import { useMemo, useRef, useState } from "react";
import Blog_Form from "../components/Blog_Form";

const ExecutiveMBAOneYear = () => {
  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Replace with your banner image/background if needed */}
          <div className="absolute inset-0 bg-[#FFC067]/80 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl text-center text-white mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
              Executive Education • India
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              One-Year Executive MBA (EMBA)
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-900/90">
              Accelerate your leadership journey without pausing your career. A
              rigorous, industry-aligned program built for experienced
              professionals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center rounded-xl bg-white/90 px-5 py-3 text-sm sm:text-base font-semibold text-slate-900
                           shadow-md hover:bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Free Counseling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-5 lg:py-10">
        <article>
          <p className="text-slate-700 leading-relaxed">
            The <strong>One-Year Executive MBA</strong> is a fast-track,
            leadership-focused management program designed for working
            professionals with prior experience. It emphasizes strategic
            thinking, decision-making, and cross-functional leadership to help
            you step into senior roles quickly.
          </p>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Who is it for?
          </h3>
          <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed list-disc list-inside">
            <li>Professionals with 2–10+ years of experience</li>
            <li>Team leads/Managers aiming for P&amp;L or senior roles</li>
            <li>Entrepreneurs and career switchers targeting management</li>
          </ul>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {[
              "Executive MBA",
              "1-Year MBA",
              "Working Professionals",
              "Leadership",
              "Online/Hybrid EMBA",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-[#FFC067] px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-10 space-y-10 sm:space-y-12">
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Key Highlights
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
            <li>
              <strong>Duration:</strong> 12 months (accelerated)
            </li>
            <li>
              <strong>Format:</strong> Online / Hybrid (weekend or modular)
            </li>
            <li>
              <strong>Focus:</strong> Strategy, Leadership, Digital, Analytics,
              Finance
            </li>
            <li>
              <strong>Pedagogy:</strong> Live classes, case studies, capstone
            </li>
            <li>
              <strong>Support:</strong> Career services &amp; networking
            </li>
          </ul>
        </div>

        {/* ELIGIBILITY & CURRICULUM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Eligibility
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li>Bachelor’s degree (any discipline)</li>
              <li>Work experience: typically 2–5+ years</li>
              <li>Shortlisting via profile, SOP, or interview</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Curriculum Snapshot
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li>Managerial Economics • Accounting &amp; Finance</li>
              <li>Marketing, Operations &amp; Supply Chain</li>
              <li>People &amp; Leadership • Business Strategy</li>
              <li>Business Analytics • Digital Transformation</li>
              <li>Capstone / Industry Project</li>
            </ul>
          </div>
        </div>

        {/* SPECIALIZATIONS & FEES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Popular Specializations
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Leadership & Strategy",
                "Marketing & Growth",
                "Finance",
                "Operations & SCM",
                "Business Analytics",
                "Product Management",
                "HR & People Analytics",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Fees &amp; ROI (Indicative)
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li>
                <strong>Program Fee:</strong> ~₹1.5L – ₹8L (varies by university
                &amp; format)
              </li>
              <li>
                <strong>Funding:</strong> No-cost EMI / Education loans may be
                available
              </li>
              <li>
                <strong>Outcomes:</strong> Role expansion, salary hike,
                leadership opportunities
              </li>
            </ul>
          </div>
        </div>

        {/* ADMISSIONS PROCESS */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Admission Process
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li>Profile evaluation &amp; shortlist</li>
            <li>Application (SOP/Essays, Resume, Transcripts)</li>
            <li>Interview / Aptitude assessment (if applicable)</li>
            <li>Offer &amp; enrollment</li>
          </ol>
        </div>

        {/* FAQs */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            FAQs
          </h3>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Is a one-year EMBA recognized in India?
              </summary>
              <p className="mt-2 text-slate-700">
                Recognition depends on the university and approvals (e.g.,
                UGC/AICTE where applicable). We’ll guide you to compliant,
                reputable options.
              </p>
            </details>
            <details className="group rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Can I study while working full-time?
              </summary>
              <p className="mt-2 text-slate-700">
                Yes. Most formats are weekend, modular, online or hybrid to suit
                busy schedules.
              </p>
            </details>
            <details className="group rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Do I need prior management experience?
              </summary>
              <p className="mt-2 text-slate-700">
                Not mandatory for all schools, but relevant experience
                strengthens your profile and learning outcomes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="form">
        <Blog_Form title={" Need help choosing the right EMBA?"} />
      </section>
    </div>
  );
};

export default ExecutiveMBAOneYear;

// OnlineEducation.jsx
import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Blog_Form from "../components/Blog_Form";
const OnlineEducation = () => {
  const formRef = useRef(null);
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
          <div className="absolute inset-0 bg-[#FFC067]/70 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl text-center text-white mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              What is Online Education?
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-900/90">
              Online education has revolutionized learning, breaking barriers
              and offering access to knowledge from anywhere. Discover how this
              modern approach is reshaping the future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center rounded-xl bg-white/90 px-5 py-3 text-sm sm:text-base font-semibold text-slate-900
                           shadow-md hover:bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Free Counseling
              </button>
              <NavLink
                to={"/contact-us"}
                href="mailto:hello@dynamicworld.in?subject=Inquiry about Online Education"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-5 py-3 text-sm sm:text-base font-semibold text-white
                           hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-5 lg:py-10">
        <div>
          <article className="">
            <p className="text-slate-700 leading-relaxed">
              In recent years, <strong>online education</strong> has transformed
              learning across India, breaking barriers of geography and
              accessibility. With affordable internet and a tech-savvy
              population, online programs have become a preferred choice for
              many, especially working professionals. Among the most popular
              options is the <strong>Online MBA</strong>, which blends quality
              business education with unmatched convenience.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              If you’re considering an <strong>Online MBA</strong> in India,
              this guide will help you understand its potential, benefits, and
              how to choose the right program.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              What is Online Education?
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Online education refers to the delivery of learning through
              digital platforms, eliminating the need for physical classrooms.
              In India, this form of education is gaining popularity due to its
              accessibility, affordability, and flexibility. Whether you’re in a
              metro city or a remote town, you can access top-notch programs
              offered by leading institutions.
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {["Online BBA", "Online Education", "Online MBA"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-[#FFC067] px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* FEATURE LISTS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-10 space-y-10 sm:space-y-12">
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Features of Online Education in India
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
            <li>
              <strong>Affordable Fees:</strong> Often costs less than
              traditional programs.
            </li>
            <li>
              <strong>Flexibility:</strong> Study at your own pace and
              convenience.
            </li>
            <li>
              <strong>Wide Reach:</strong> Learn from premier institutions
              without relocation.
            </li>
            <li>
              <strong>Government Initiatives:</strong> SWAYAM & NPTEL offer
              free/subsidized courses.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            What is an Online MBA?
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            An Online MBA equips you with managerial and leadership skills—ideal
            for working professionals and fresh graduates seeking growth.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Key Features of Online MBA Programs in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li>
              <strong>Industry-Relevant Curriculum:</strong> Finance, marketing,
              ops, HR, and more.
            </li>
            <li>
              <strong>Accreditation:</strong> Many are <strong>UGC-DEB</strong>{" "}
              approved.
            </li>
            <li>
              <strong>Flexibility:</strong> Study part-time or full-time while
              working.
            </li>
            <li>
              <strong>Live & Recorded:</strong> Attend live or learn via
              recordings.
            </li>
            <li>
              <strong>Affordable:</strong> Typically <strong>₹50,000</strong>–
              <strong>₹5,00,000</strong>.
            </li>
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Top Indian Institutions Offering Online MBAs
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
            <li>
              <strong>IIMs:</strong> Bangalore, Ahmedabad, Indore (executive
              online programs).
            </li>
            <li>
              <strong>NMIMS Global:</strong> Robust online MBA.
            </li>
            <li>
              <strong>Amity Online:</strong> UGC-approved & globally recognized.
            </li>
            <li>
              <strong>SCDL:</strong> Specialized MBA programs.
            </li>
            <li>
              <strong>IGNOU:</strong> Affordable & widely recognized.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Benefits of Pursuing an Online MBA in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li>
              <strong>Career Advancement</strong>
            </li>
            <li>
              <strong>Flexible Learning</strong>
            </li>
            <li>
              <strong>Networking Opportunities</strong>
            </li>
            <li>
              <strong>Cost-Effective</strong>
            </li>
            <li>
              <strong>High Earning Potential</strong>
            </li>
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            How to Choose the Right Online MBA in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li>
              <strong>Accreditation:</strong> Look for <strong>UGC-DEB</strong>{" "}
              / <strong>AICTE</strong>.
            </li>
            <li>
              <strong>Curriculum:</strong> Aligns with your goals.
            </li>
            <li>
              <strong>Placement Assistance:</strong> Strong support & tie-ups.
            </li>
            <li>
              <strong>Delivery Mode:</strong> Live, recorded, or hybrid.
            </li>
            <li>
              <strong>Alumni Reviews:</strong> Check outcomes/testimonials.
            </li>
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Popular Google Keywords for Online MBA in India
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Best Online MBA programs in India",
              "UGC-approved Online MBA in India",
              "Affordable Online MBA India",
              "Online MBA for working professionals India",
              "IIM Online MBA fees",
              "Career opportunities after Online MBA India",
              "MBA distance learning vs online MBA",
              "Accredited Online MBA programs in India",
            ].map((k) => (
              <span
                key={k}
                className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Why Choose an Online MBA in India?
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            India’s growing economy and evolving job market demand skilled
            managers. An
            <strong> Online MBA</strong> helps bridge the gap between your
            current skills and industry requirements, while letting you keep
            your career moving.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            From MNCs to startups, opportunities for{" "}
            <strong>MBA graduates</strong> are immense. Join the digital
            learning revolution and unlock new horizons.
          </p>
        </div>
      </section>
      <section id="form">
        <Blog_Form
          title={"  Need help with your exams or college applications?"}
          formRef={formRef}
        />
      </section>
    </div>
  );
};

export default OnlineEducation;

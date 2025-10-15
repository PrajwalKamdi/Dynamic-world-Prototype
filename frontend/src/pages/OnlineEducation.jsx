// OnlineEducation.jsx
import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const nameOk = (v) => /^[A-Za-z][A-Za-z\s'.-]{1,39}$/.test(v.trim());
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());
// India mobile: optional +91/0, final must be 10 digits starting 6–9
const normalizePhone = (v) =>
  v.replace(/[^\d]/g, "") // keep digits
    .replace(/^91(?=\d{10}$)/, "")
    .replace(/^0(?=\d{10}$)/, "");
const phoneOk = (v) => /^[6-9]\d{9}$/.test(normalizePhone(v));

const OnlineEducation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    consent: false,
    company: "", // honeypot
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formRef = useRef(null);

  const errors = useMemo(() => {
    const e = {};
    if (!nameOk(formData.firstName)) e.firstName = "Enter a valid first name.";
    if (!nameOk(formData.lastName)) e.lastName = "Enter a valid last name.";
    if (!phoneOk(formData.phone))
      e.phone = "Enter a valid Indian mobile number (10 digits, starts 6–9).";
    if (!emailOk(formData.email)) e.email = "Enter a valid email address.";
    if (!formData.course.trim()) e.course = "Please specify the course.";
    if (!formData.consent) e.consent = "You must agree to be contacted.";
    if (formData.company.trim() !== "") e.company = "Spam detected.";
    return e;
  }, [formData]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      course: true,
      consent: true,
    });
    if (!isValid) return;

    try {
      setSubmitting(true);
      setErrorMsg("");

      // Prepare clean payload
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: normalizePhone(formData.phone),
        email: formData.email.trim(),
        course: formData.course.trim(),
        consent: formData.consent,
        submittedAt: new Date().toISOString(),
        source: "online-education-page",
      };

      // TODO: Replace with your API endpoint
      // await fetch("/api/inquiry", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });

      // Simulate success
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        course: "",
        consent: false,
        company: "",
      });
      setTouched({});
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/education-image.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-700/70 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl text-center text-white mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              What is Online Education?
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90">
              Online education has revolutionized learning, breaking barriers and
              offering access to knowledge from anywhere. Discover how this modern
              approach is reshaping the future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center rounded-xl bg-white/90 px-5 py-3 text-sm sm:text-base font-semibold text-slate-900
                           shadow-md hover:bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get Free Counseling
              </button>
              <NavLink to={'/contact-us'}
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
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <p className="text-slate-700 leading-relaxed">
              In recent years, <strong>online education</strong> has transformed learning across India,
              breaking barriers of geography and accessibility. With affordable internet and a tech-savvy
              population, online programs have become a preferred choice for many, especially working
              professionals. Among the most popular options is the <strong>Online MBA</strong>, which blends
              quality business education with unmatched convenience.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              If you’re considering an <strong>Online MBA</strong> in India, this guide will help you
              understand its potential, benefits, and how to choose the right program.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">What is Online Education?</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Online education refers to the delivery of learning through digital platforms, eliminating the
              need for physical classrooms. In India, this form of education is gaining popularity due to its
              accessibility, affordability, and flexibility. Whether you’re in a metro city or a remote town,
              you can access top-notch programs offered by leading institutions.
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {["Online BBA", "Online Education", "Online MBA"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Image Card */}
          <aside className="lg:col-span-1">
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <img
                src="/education-image.png"
                alt="Online Education"
                className="w-full h-64 object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600x400/808080/ffffff?text=Image+Unavailable";
                }}
              />
              <p className="mt-3 text-center text-xs text-slate-500">
                Representative image for Online Programs
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FEATURE LISTS */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 space-y-10 sm:space-y-12">
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Features of Online Education in India
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
            <li><strong>Affordable Fees:</strong> Often costs less than traditional programs.</li>
            <li><strong>Flexibility:</strong> Study at your own pace and convenience.</li>
            <li><strong>Wide Reach:</strong> Learn from premier institutions without relocation.</li>
            <li><strong>Government Initiatives:</strong> SWAYAM & NPTEL offer free/subsidized courses.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">What is an Online MBA?</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            An Online MBA equips you with managerial and leadership skills—ideal for working professionals and
            fresh graduates seeking growth.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Key Features of Online MBA Programs in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li><strong>Industry-Relevant Curriculum:</strong> Finance, marketing, ops, HR, and more.</li>
            <li><strong>Accreditation:</strong> Many are <strong>UGC-DEB</strong> approved.</li>
            <li><strong>Flexibility:</strong> Study part-time or full-time while working.</li>
            <li><strong>Live & Recorded:</strong> Attend live or learn via recordings.</li>
            <li><strong>Affordable:</strong> Typically <strong>₹50,000</strong>–<strong>₹5,00,000</strong>.</li>
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Top Indian Institutions Offering Online MBAs
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
            <li><strong>IIMs:</strong> Bangalore, Ahmedabad, Indore (executive online programs).</li>
            <li><strong>NMIMS Global:</strong> Robust online MBA.</li>
            <li><strong>Amity Online:</strong> UGC-approved & globally recognized.</li>
            <li><strong>SCDL:</strong> Specialized MBA programs.</li>
            <li><strong>IGNOU:</strong> Affordable & widely recognized.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Benefits of Pursuing an Online MBA in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li><strong>Career Advancement</strong></li>
            <li><strong>Flexible Learning</strong></li>
            <li><strong>Networking Opportunities</strong></li>
            <li><strong>Cost-Effective</strong></li>
            <li><strong>High Earning Potential</strong></li>
          </ol>
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            How to Choose the Right Online MBA in India
          </h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li><strong>Accreditation:</strong> Look for <strong>UGC-DEB</strong> / <strong>AICTE</strong>.</li>
            <li><strong>Curriculum:</strong> Aligns with your goals.</li>
            <li><strong>Placement Assistance:</strong> Strong support & tie-ups.</li>
            <li><strong>Delivery Mode:</strong> Live, recorded, or hybrid.</li>
            <li><strong>Alumni Reviews:</strong> Check outcomes/testimonials.</li>
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
            India’s growing economy and evolving job market demand skilled managers. An
            <strong> Online MBA</strong> helps bridge the gap between your current skills and industry
            requirements, while letting you keep your career moving.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            From MNCs to startups, opportunities for <strong>MBA graduates</strong> are immense. Join the
            digital learning revolution and unlock new horizons.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section ref={formRef} className="mx-auto max-w-7xl px-6 sm:px-10 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
            <div className="p-6 sm:p-8">
              <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900">
                Need help with your exams or college applications?
              </h2>

              {/* Success / Error */}
              {submitted && (
                <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  ✅ Your inquiry has been submitted! Our team will contact you soon.
                </div>
              )}
              {errorMsg && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                  {errorMsg}
                </div>
              )}

              <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2
                        ${touched.firstName && errors.firstName ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:ring-blue-400"}`}
                      required
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2
                        ${touched.lastName && errors.lastName ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:ring-blue-400"}`}
                      required
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      placeholder="Phone Number (India)"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2
                        ${touched.phone && errors.phone ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:ring-blue-400"}`}
                      required
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2
                        ${touched.email && errors.email ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:ring-blue-400"}`}
                      required
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="sr-only">
                    Course Looking For?
                  </label>
                  <input
                    id="course"
                    name="course"
                    type="text"
                    placeholder="Course Looking For? e.g. MBA in Marketing"
                    value={formData.course}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2
                      ${touched.course && errors.course ? "border-red-400 focus:ring-red-300" : "border-slate-300 focus:ring-blue-400"}`}
                    required
                  />
                  {touched.course && errors.course && (
                    <p className="mt-1 text-xs text-red-600">{errors.course}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 h-5 w-5 rounded border ${touched.consent && errors.consent ? "border-red-400" : "border-slate-300"}`}
                    required
                  />
                  <label htmlFor="consent" className="text-xs sm:text-sm text-slate-700">
                    <strong>Note:</strong> By selecting the ‘Submit’ button, you are expressly requesting a
                    call from Dynamic World and/or its authorized representatives at the contact number you
                    have provided. Additionally, by providing your email address, you agree to receive emails
                    regarding products, services, and offers from Dynamic World.
                  </label>
                </div>
                {touched.consent && errors.consent && (
                  <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
                )}

                <button
                  type="submit"
                  disabled={!isValid || submitting}
                  className={`w-full rounded-lg px-4 py-3 text-white font-semibold transition
                    ${!isValid || submitting ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>

                <p className="text-center text-[11px] sm:text-xs text-slate-500">
                  We respect your privacy. Your information will only be used to process your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineEducation;

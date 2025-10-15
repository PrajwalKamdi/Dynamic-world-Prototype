import React, { useMemo, useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  course: "",
  consent: false,
  // Honeypot (bot trap): must stay empty
  company: "",
};

// Simple validators
const nameOk = (v) => /^[a-zA-Z][a-zA-Z\s'.-]{1,39}$/.test(v.trim());
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());
const normalizePhone = (v) =>
  v.replace(/[^\d]/g, "")
    .replace(/^91(?=\d{10}$)/, "")
    .replace(/^0(?=\d{10}$)/, "");
const phoneOk = (v) => /^[6-9]\d{9}$/.test(normalizePhone(v));

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const errors = useMemo(() => {
    const e = {};
    if (!nameOk(formData.firstName)) e.firstName = "Enter a valid first name (letters, 2–40 chars).";
    if (!nameOk(formData.lastName)) e.lastName = "Enter a valid last name (letters, 2–40 chars).";
    if (!phoneOk(formData.phone)) e.phone = "Enter a valid Indian mobile (10 digits, starts 6–9).";
    if (!emailOk(formData.email)) e.email = "Enter a valid email address.";
    if (!formData.course.trim()) e.course = "Please specify the course you're looking for.";
    if (!formData.consent) e.consent = "You must agree to be contacted.";
    if (formData.company.trim() !== "") e.company = "Spam detected.";
    return e;
  }, [formData]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, phone: true, email: true, course: true, consent: true });
    if (!isValid) return;

    try {
      setSubmitting(true);
      setErrorMsg("");

      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: normalizePhone(formData.phone),
        email: formData.email.trim(),
        course: formData.course.trim(),
        consent: formData.consent,
        submittedAt: new Date().toISOString(),
        source: "contact-form",
      };

      // TODO: replace with your API call
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      await new Promise((r) => setTimeout(r, 600)); // simulate network

      console.log("Form submitted:", payload);
      setSubmitted(true);
      setFormData(initialForm);
      setTouched({});
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
          <div className="px-5 sm:px-8 py-6 sm:py-8">
            <header className="text-center mb-5 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                We’d Love to Hear From You
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Please ensure all fields are completed accurately to help us assist you effectively.
                Your details are protected by our privacy policy.
              </p>
            </header>

            {/* Success / Error banners */}
            <div aria-live="polite" className="space-y-3 mb-4">
              {submitted && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800 text-sm">
                  ✅ Thanks! Your message has been received. We’ll reach out soon.
                </div>
              )}
              {errorMsg && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm">
                  {errorMsg}
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot */}
              <div className="hidden">
                <label htmlFor="company">Company (leave blank)</label>
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
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-slate-600 mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John"
                    autoComplete="given-name"
                    className={`w-full rounded-lg border bg-white/80 p-2.5 sm:p-3 text-sm shadow-sm outline-none ring-1 transition
                      ${touched.firstName && errors.firstName
                        ? "border-red-300 ring-red-200 focus:ring-red-300"
                        : "border-slate-300 ring-slate-200 focus:ring-blue-300"}`}
                    required
                  />
                  {touched.firstName && errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Doe"
                    autoComplete="family-name"
                    className={`w-full rounded-lg border bg-white/80 p-2.5 sm:p-3 text-sm shadow-sm outline-none ring-1 transition
                      ${touched.lastName && errors.lastName
                        ? "border-red-300 ring-red-200 focus:ring-red-300"
                        : "border-slate-300 ring-slate-200 focus:ring-blue-300"}`}
                    required
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Phone Number (India)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    autoComplete="tel-national"
                    inputMode="tel"
                    className={`w-full rounded-lg border bg-white/80 p-2.5 sm:p-3 text-sm shadow-sm outline-none ring-1 transition
                      ${touched.phone && errors.phone
                        ? "border-red-300 ring-red-200 focus:ring-red-300"
                        : "border-slate-300 ring-slate-200 focus:ring-blue-300"}`}
                    required
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john.doe@example.com"
                    autoComplete="email"
                    className={`w-full rounded-lg border bg-white/80 p-2.5 sm:p-3 text-sm shadow-sm outline-none ring-1 transition
                      ${touched.email && errors.email
                        ? "border-red-300 ring-red-200 focus:ring-red-300"
                        : "border-slate-300 ring-slate-200 focus:ring-blue-300"}`}
                    required
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Course */}
              <div>
                <label htmlFor="course" className="block text-xs font-medium text-slate-600 mb-1.5">
                  Course Looking For?
                </label>
                <input
                  id="course"
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. MBA in Marketing"
                  className={`w-full rounded-lg border bg-white/80 p-2.5 sm:p-3 text-sm shadow-sm outline-none ring-1 transition
                    ${touched.course && errors.course
                      ? "border-red-300 ring-red-200 focus:ring-red-300"
                      : "border-slate-300 ring-slate-200 focus:ring-blue-300"}`}
                  required
                />
                {touched.course && errors.course && (
                  <p className="mt-1 text-xs text-red-600">{errors.course}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 h-4 w-4 rounded border
                    ${touched.consent && errors.consent ? "border-red-400" : "border-slate-300"}`}
                  required
                />
                <label htmlFor="consent" className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  By submitting, you agree to be contacted via phone or email regarding your inquiry.
                </label>
              </div>
              {touched.consent && errors.consent && (
                <p className="mt-1 -mb-2 text-xs text-red-600">{errors.consent}</p>
              )}

              {/* Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isValid || submitting}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition
                    ${!isValid || submitting
                      ? "bg-indigo-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"}
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400`}
                >
                  {submitting && (
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  )}
                  {submitting ? "Submitting..." : "Submit"}
                </button>

                <p className="mt-3 text-center text-[11px] sm:text-xs text-slate-500">
                  We respect your privacy. Your information will only be used to process your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useMemo, useState } from "react";
const nameOk = (v) => /^[A-Za-z][A-Za-z\s'.-]{1,39}$/.test(v.trim());
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());
// India mobile: optional +91/0, final must be 10 digits starting 6–9
const normalizePhone = (v) =>
  v
    .replace(/[^\d]/g, "") // keep digits
    .replace(/^91(?=\d{10}$)/, "")
    .replace(/^0(?=\d{10}$)/, "");
const phoneOk = (v) => /^[6-9]\d{9}$/.test(normalizePhone(v));

const Blog_Form = ({ title, formRef }) => {
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    consent: false,
    company: "", // honeypot
  });

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
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
            <div className="p-6 sm:p-8">
              <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900">
                {title}
              </h2>

              {/* Success / Error */}
              {submitted && (
                <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  ✅ Your inquiry has been submitted! Our team will contact you
                  soon.
                </div>
              )}
              {errorMsg && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                  {errorMsg}
                </div>
              )}

              <form
                className="mt-6 space-y-5"
                onSubmit={handleSubmit}
                noValidate
              >
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
                        ${
                          touched.firstName && errors.firstName
                            ? "border-red-400 focus:ring-red-300"
                            : "border-slate-300 focus:ring-blue-400"
                        }`}
                      required
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.firstName}
                      </p>
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
                        ${
                          touched.lastName && errors.lastName
                            ? "border-red-400 focus:ring-red-300"
                            : "border-slate-300 focus:ring-blue-400"
                        }`}
                      required
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.lastName}
                      </p>
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
                        ${
                          touched.phone && errors.phone
                            ? "border-red-400 focus:ring-red-300"
                            : "border-slate-300 focus:ring-blue-400"
                        }`}
                      required
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.phone}
                      </p>
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
                        ${
                          touched.email && errors.email
                            ? "border-red-400 focus:ring-red-300"
                            : "border-slate-300 focus:ring-blue-400"
                        }`}
                      required
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
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
                      ${
                        touched.course && errors.course
                          ? "border-red-400 focus:ring-red-300"
                          : "border-slate-300 focus:ring-blue-400"
                      }`}
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
                    className={`mt-1 h-5 w-5 rounded border ${
                      touched.consent && errors.consent
                        ? "border-red-400"
                        : "border-slate-300"
                    }`}
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs sm:text-sm text-slate-700"
                  >
                    <strong>Note:</strong> By selecting the ‘Submit’ button, you
                    are expressly requesting a call from Dynamic World and/or
                    its authorized representatives at the contact number you
                    have provided. Additionally, by providing your email
                    address, you agree to receive emails regarding products,
                    services, and offers from Dynamic World.
                  </label>
                </div>
                {touched.consent && errors.consent && (
                  <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
                )}

                <button
                  type="submit"
                  disabled={!isValid || submitting}
                  className={`w-full rounded-lg px-4 py-3 text-white font-semibold transition
                    ${
                      !isValid || submitting
                        ? "bg-[#FFC067] cursor-not-allowed"
                        : "bg-[#FFC067] hover:bg-[#FFC067]"
                    }
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>

                <p className="text-center text-[11px] sm:text-xs text-slate-500">
                  We respect your privacy. Your information will only be used to
                  process your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog_Form;

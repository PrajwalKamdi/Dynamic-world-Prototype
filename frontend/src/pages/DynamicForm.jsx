import React, { useMemo, useState } from "react";

const DynamicForm = ({ title }) => {
  const AUTOCOMPLETE_NAME = {
    first: "given-name",
    last: "family-name",
  };
  const initialForm = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    course: "",
    consent: false,
    company: "", // honeypot
  };

  // === Validation helpers (unchanged) ===
  const nameOk = (v) => /^[a-zA-Z][a-zA-Z\s'.-]{1,39}$/.test(v.trim());
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());
  const normalizePhone = (v) =>
    v
      .replace(/[^\d]/g, "")
      .replace(/^91(?=\d{10}$)/, "")
      .replace(/^0(?=\d{10}$)/, "");
  const phoneOk = (v) => /^[6-9]\d{9}$/.test(normalizePhone(v));

  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const errors = useMemo(() => {
    const errs = {};
    if (!nameOk(formData.firstName))
      errs.firstName = "Enter a valid first name (letters, 2–40 chars).";
    if (!nameOk(formData.lastName))
      errs.lastName = "Enter a valid last name (letters, 2–40 chars).";
    if (!phoneOk(formData.phoneNumber))
      errs.phoneNumber =
        "Enter a valid Indian mobile number (10 digits, starts 6–9).";
    if (!emailOk(formData.email)) errs.email = "Enter a valid email address.";
    if (!formData.course.trim())
      errs.course = "Please specify the course you’re looking for.";
    if (!formData.consent) errs.consent = "You must agree to be contacted.";
    if (formData.company.trim() !== "") errs.company = "Spam detected.";
    return errs;
  }, [formData]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleBlur = (e) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      phoneNumber: true,
      email: true,
      course: true,
      consent: true,
    });
    if (!isValid) return;

    try {
      setSubmitting(true);
      setErrorMsg("");

      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phoneNumber: normalizePhone(formData.phoneNumber),
        email: formData.email.trim(),
        course: formData.course.trim(),
        consent: formData.consent,
        submittedAt: new Date().toISOString(),
        source: "web-inquiry",
      };

      // TODO: POST payload to your endpoint
      // await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });

      await new Promise((r) => setTimeout(r, 500));
      setSubmitted(true);
      setFormData(initialForm);
      setTouched({});
    } catch (err) {
      setErrorMsg("Something went wrong while submitting. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Reusable classes
  const baseInput =
    "w-full rounded-xl border bg-white/90 px-3 py-3 text-sm sm:text-base shadow-[0_1px_0_rgba(0,0,0,0.02)] placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-4 transition-all";
  const okRing =
    "border-gray-300 focus:border-[#3E96F4] focus:ring-[#3E96F4]/20";
  const errRing = "border-red-400 focus:border-red-500 focus:ring-red-300/40";

  return (
    <div
      className="border border-[#EDEEEB] bg-white p-4 sm:p-6 md:p-7
        shadow-[0_8px_30px_rgba(49,57,60,0.06)]
        text-[#31393C]
      "
    >
      {/* Title */}
      {title && (
        <h2 className="mb-5 sm:mb-6 text-center text-lg sm:text-xl font-semibold tracking-tight">
          {title}
        </h2>
      )}

      {/* Success Banner */}
      {submitted && (
        <div className="mb-4 sm:mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800 text-sm sm:text-base">
          <span className="mr-1">✅</span>
          Your inquiry has been submitted! Our team will contact you soon.
        </div>
      )}

      {/* Error Banner */}
      {errorMsg && (
        <div className="mb-4 sm:mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm sm:text-base">
          {errorMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4 sm:space-y-5"
      >
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

        {/* Name Row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="mb-1 block text-xs font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete={AUTOCOMPLETE_NAME.first}
              className={`${baseInput} ${
                touched.firstName && errors.firstName ? errRing : okRing
              }`}
              aria-invalid={touched.firstName && !!errors.firstName}
              aria-describedby="firstName-error"
              required
            />
            {touched.firstName && errors.firstName && (
              <p
                id="firstName-error"
                className="mt-1 text-xs sm:text-sm text-red-600"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="mb-1 block text-xs font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete={AUTOCOMPLETE_NAME.last}
              className={`${baseInput} ${
                touched.lastName && errors.lastName ? errRing : okRing
              }`}
              aria-invalid={touched.lastName && !!errors.lastName}
              aria-describedby="lastName-error"
              required
            />
            {touched.lastName && errors.lastName && (
              <p
                id="lastName-error"
                className="mt-1 text-xs sm:text-sm text-red-600"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="mb-1 block text-xs font-medium text-gray-600"
          >
            Phone Number (India)
          </label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="10-digit mobile, starts with 6–9"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="tel-national"
            inputMode="tel"
            className={`${baseInput} ${
              touched.phoneNumber && errors.phoneNumber ? errRing : okRing
            }`}
            aria-invalid={touched.phoneNumber && !!errors.phoneNumber}
            aria-describedby="phone-error"
            required
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <p
              id="phone-error"
              className="mt-1 text-xs sm:text-sm text-red-600"
            >
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            className={`${baseInput} ${
              touched.email && errors.email ? errRing : okRing
            }`}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby="email-error"
            required
          />
          {touched.email && errors.email && (
            <p
              id="email-error"
              className="mt-1 text-xs sm:text-sm text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Course */}
        <div>
          <label
            htmlFor="course"
            className="mb-1 block text-xs font-medium text-gray-600"
          >
            Course Looking For
          </label>
          <input
            id="course"
            type="text"
            name="course"
            placeholder="e.g., MBA in Marketing"
            value={formData.course}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            className={`${baseInput} ${
              touched.course && errors.course ? errRing : okRing
            }`}
            aria-invalid={touched.course && !!errors.course}
            aria-describedby="course-error"
            required
          />
          {touched.course && errors.course && (
            <p
              id="course-error"
              className="mt-1 text-xs sm:text-sm text-red-600"
            >
              {errors.course}
            </p>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3 rounded-xl bg-[#EDEEEB]/40 px-3 py-3">
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
                : "border-gray-300"
            }`}
            aria-invalid={touched.consent && !!errors.consent}
            aria-describedby="consent-error"
            required
          />
          <label
            htmlFor="consent"
            className="text-xs sm:text-sm leading-relaxed text-[#31393C]"
          >
            <strong>Note:</strong> By selecting “Submit,” you agree to receive
            communication from Dynamic World via call, email, or WhatsApp.
          </label>
        </div>
        {touched.consent && errors.consent && (
          <p
            id="consent-error"
            className="mt-1 text-xs sm:text-sm text-red-600"
          >
            {errors.consent}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || submitting}
          className={`
            group relative inline-flex w-full items-center justify-center overflow-hidden
            rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-white transition
            ${
              !isValid || submitting
                ? "bg-[#3E96F4]/60 cursor-not-allowed"
                : "bg-[#3E96F4] hover:brightness-95 active:translate-y-[1px]"
            }
            shadow-[0_6px_20px_rgba(62,150,244,0.35)]
          `}
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Submitting…
            </span>
          ) : (
            "Submit Inquiry"
          )}
        </button>

        <p className="text-center text-[11px] sm:text-xs text-gray-500">
          We respect your privacy. Your information will only be used to process
          your inquiry.
        </p>
      </form>
    </div>
  );
};

export default DynamicForm;

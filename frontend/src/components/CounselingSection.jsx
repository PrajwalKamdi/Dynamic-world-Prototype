import React from "react";

const CounselingSection = () => {
  const phoneNumber = "7887881060"; // For tel: link

  return (
    <section
      className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3F4F2] to-[#EDEEEB]"
      aria-labelledby="counseling-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
          {/* Accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-100 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl opacity-60" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Copy */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <h2
                  id="counseling-heading"
                  className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 bg-clip-text text-transparent">
                    Confused About College?
                  </span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0">
                  Schedule a 30-minute admission counseling video call for personalized guidance
                  based on your skills and interests!
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  {/* Video Counseling Button */}
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white
                               bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-600 hover:via-indigo-600 hover:to-blue-600
                               shadow-md hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
                  >
                    {/* Video Camera Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h11a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                      />
                    </svg>
                    <span>Video Counselling</span>
                  </button>

                  {/* Call Button */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-xl px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white
                               bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-600 hover:to-emerald-700
                               shadow-md hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
                    aria-label={`Call us at ${phoneNumber}`}
                  >
                    {/* Phone Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a1 1 0 01-1 1H5a2 2 0 01-2-2V5zM21 19a2 2 0 01-2 2h-2.586a1 1 0 01-.707-.293l-2.414-2.414a1 1 0 01-.293-.707V15a1 1 0 011-1H19a2 2 0 012 2v2z"
                      />
                    </svg>
                    <span>Call us: {phoneNumber}</span>
                  </a>
                </div>

                {/* Microcopy */}
                <p className="mt-3 text-xs sm:text-sm text-slate-500">
                  No fees for the first consultation. Available Mon–Sat, 9:00 AM–7:00 PM.
                </p>
              </div>

              {/* Right side: decorative/info panel */}
              <div className="hidden lg:flex lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4 sm:p-5 shadow-sm">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                      <div className="rounded-xl bg-white ring-1 ring-slate-200 p-3">
                        <div className="text-lg font-bold text-slate-900">94+</div>
                        <div className="text-[11px] sm:text-xs text-slate-500">Universities</div>
                      </div>
                      <div className="rounded-xl bg-white ring-1 ring-slate-200 p-3">
                        <div className="text-lg font-bold text-slate-900">1:1</div>
                        <div className="text-[11px] sm:text-xs text-slate-500">Guidance</div>
                      </div>
                      <div className="rounded-xl bg-white ring-1 ring-slate-200 p-3">
                        <div className="text-lg font-bold text-slate-900">30 min</div>
                        <div className="text-[11px] sm:text-xs text-slate-500">Session</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 ring-1 ring-indigo-100 p-3 text-left">
                      <p className="text-xs sm:text-sm text-slate-700">
                        Get clarity on eligibility, fees, scholarships, and the best program for your goals.
                      </p>
                    </div>
                  </div>

                  {/* Light gradient underline */}
                  <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom hint */}
        <p className="mt-4 text-center text-[11px] sm:text-xs text-slate-500">
          Your contact details are safe with us. We never share them with third parties.
        </p>
      </div>
    </section>
  );
};

export default CounselingSection;

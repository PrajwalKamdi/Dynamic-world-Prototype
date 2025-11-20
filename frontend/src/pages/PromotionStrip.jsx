import React from "react";

const PromotionStrip = ({
  label = "Latest Update",
  message = "MHT-CET, JEE & NEET 2025 results are out. Get expert counselling from Dynamic World.",
  ctaLabel = "View Results & Notifications",
  ctaHref = "/results-and-updates",
}) => {
  return (
    <header className="w-full bg-[#FFC067] text-black px-4 sm:px-6 py-2 sm:py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-white text-sm sm:text-base font-semibold leading-tight">
              Dynamic World – Career Guidance Experts
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-900">
              1:1 Counselling • Results Updates • Admission Support
            </p>
          </div>
        </div>

        {/* Center: Live News / Result Strip */}
        <div className="flex-1 sm:px-4">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-3 py-2 backdrop-blur-sm">
            {/* LIVE / LABEL */}
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-white bg-red-500 rounded-full px-2 py-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>

            {/* Category Label */}
            <span className="hidden sm:inline-flex text-[10px] text-blue-100 border border-blue-100/40 rounded-full px-2 py-[1px]">
              {label}
            </span>

            {/* Message */}
            <p className="text-[10px] sm:text-xs text-gray-900 line-clamp-2">
              {message}
            </p>

            {/* CTA */}
            <a
              href={ctaHref}
              className="hidden md:inline-flex text-[10px] font-medium text-[#3E96F4] bg-white rounded-full px-3 py-[3px] hover:bg-[#FFC067] transition"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917887881060?text=Hi%20Dynamic%20World%2C%20I%20want%20help%20with%20admissions%20and%20latest%20results."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href="tel:+917887881060"
            className="border border-white/80 text-white text-xs sm:text-sm hover:bg-white hover:text-[#3E96F4] px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default PromotionStrip;

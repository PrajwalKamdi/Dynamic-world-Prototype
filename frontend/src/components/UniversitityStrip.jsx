import React from "react";
import { PhoneCall } from "lucide-react";

const UniversityStrip = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917887881060", "_blank");
  };

  return (
    <div className="bg-[#3E96F4] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* centered heading with thin dividers */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start gap-3">
          <span className="hidden md:block h-px w-6 bg-white/70" />
          <h2 className="text-base sm:text-lg font-semibold tracking-tight">
            All Universities
          </h2>
          <span className="hidden md:block h-px w-6 bg-white/70" />
        </div>

        {/* Contact */}
        <div className="flex items-center gap-3">
          <p className="hidden md:block text-sm text-white/95">
            Get instant student support
          </p>
          <a
            href="tel:+917887881060"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold shadow-sm transition"
            aria-label="Contact Us"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default UniversityStrip;

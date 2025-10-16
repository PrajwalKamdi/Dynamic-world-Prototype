import React from "react";
import Logo from "../assets/Dynamic-World-Vector-Logo.svg";
import CurrentYear from "../components/CurrentYear.jsx";
import FooterDisclaimer from "../components/Disclaimer.jsx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#31393C] text-[#EDEEEB] relative overflow-hidden">
     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand / About with Social Icons */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src={Logo}
                alt="Dynamic World logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-[#EDEEEB] leading-relaxed mb-6 text-sm">
              Your trusted partner for career guidance and educational
              opportunities. We help students achieve their academic and
              professional goals with expert counseling.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                {
                  label: "Facebook",
                  icon: (
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.95 3.62 9.06 8.35 9.86v-6.98H7.9V11.9h2.48V9.86c0-2.45 1.46-3.8 3.7-3.8 1.07 0 2.19.19 2.19.19v2.41h-1.23c-1.21 0-1.59.75-1.59 1.51v1.82h2.71l-.43 2.98h-2.28V21.9c4.73-.8 8.35-4.91 8.35-9.86 0-5.5-4.46-9.96-9.96-9.96z" />
                  ),
                  color: "hover:bg-blue-600",
                },
                {
                  label: "Twitter",
                  icon: (
                    <path d="M19.633 7.997c.013.177.013.355.013.533 0 5.42-4.126 11.67-11.67 11.67-2.317 0-4.472-.68-6.283-1.85.324.038.636.05.973.05 1.92 0 3.69-.65 5.1-1.74-1.79-.038-3.3-1.21-3.82-2.83.254.038.508.063.775.063.374 0 .748-.05 1.096-.139-1.88-.38-3.3-2.04-3.3-4.04v-.05c.55.304 1.19.49 1.87.514-1.11-.748-1.84-2.01-1.84-3.44 0-.761.203-1.46.558-2.07 2.02 2.47 5.06 4.08 8.47 4.25-.063-.304-.101-.62-.101-.935 0-2.29 1.86-4.16 4.16-4.16 1.2 0 2.29.49 3.05 1.28.95-.19 1.86-.533 2.67-1.01-.304.96-.96 1.77-1.82 2.28.85-.101 1.66-.328 2.41-.66-.57.86-1.28 1.62-2.1 2.23z" />
                  ),
                  color: "hover:bg-sky-500",
                },
                {
                  label: "Instagram",
                  icon: (
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="14" height="14" rx="3.5" />
                      <circle cx="10" cy="10" r="3" />
                      <circle cx="14.2" cy="5.8" r="1" />
                    </g>
                  ),
                  color:
                    "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
                },
                {
                  label: "YouTube",
                  icon: (
                    <path d="M19.615 6.184a2.51 2.51 0 00-1.77-1.77C16.64 4 10 4 10 4s-6.64 0-7.845.414a2.51 2.51 0 00-1.77 1.77C0 7.39 0 10 0 10s0 2.61.385 3.816c.23.9.93 1.6 1.77 1.77C3.36 16 10 16 10 16s6.64 0 7.845-.414a2.51 2.51 0 001.77-1.77C20 12.61 20 10 20 10s0-2.61-.385-3.816zM8 12.5v-5l5 2.5-5 2.5z" />
                  ),
                  color: "hover:bg-red-600",
                },
                {
                  label: "LinkedIn",
                  icon: (
                    <path d="M4.5 3.5A1.5 1.5 0 116 5a1.5 1.5 0 01-1.5-1.5zM3 7h3v10H3V7zm5 0h3v1.7h.04c.42-.8 1.45-1.7 2.99-1.7 3.2 0 3.97 2.1 3.97 4.9V17h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36V17h-3V7z" />
                  ),
                  color: "hover:bg-blue-700",
                },
              ].map(({ label, icon }, idx) => (
                <a
                  key={idx}
                  aria-label={label}
                  href="#"
                  className={`w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:text-[#3E96F4] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#EDEEEB] font-bold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-[#EDEEEB]">
              {/* Home */}
              <li className="group">
                <NavLink
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Home
                </NavLink>
              </li>

              {/* About Us */}
              <li className="group">
                <NavLink
                  to="/about-us"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  About Us
                </NavLink>
              </li>

              {/* Services */}
              <li className="group">
                <NavLink
                  to="/services"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Services
                </NavLink>
              </li>

              {/* Blog */}
              <li className="group">
                <NavLink
                  to="/blog"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Blog
                </NavLink>
              </li>

              {/* Contact */}
              <li className="group">
                <NavLink
                  to="/contact-us"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#EDEEEB] font-bold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-[#EDEEEB]">
              <li className="flex items-start gap-3 group">
                <span className="mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm">
                  Office Address: [Your Office Address]
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <a
                  className="hover:text-blue-400 transition-colors text-sm"
                  href="tel:+919876543210"
                >
                  +91 788 788 1060
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <a
                  className="hover:text-blue-400 transition-colors text-sm"
                  href="https://wa.me/917887881060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <span className="mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <a
                  className="hover:text-blue-400 transition-colors text-sm break-all"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@dynamicworld.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@dynamicworld.in
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours + CTA */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Office Hours
            </h3>
            <ul className="space-y-2.5 text-slate-400 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-[#EDEEEB]">Monday-Fri :</strong> 9:00
                  AM - 6:00 PM
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-[#EDEEEB]">Saturday :</strong> 10:00
                  AM - 4:00 PM
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-[#EDEEEB]">Sunday:</strong> Closed
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/917887881060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3e96f4] hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
            >
              
              Get Free Counseling
            </a>
          </div>
        </div>
      </div>

      {/* Divider with gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px"></div>
        <div className="border-t border-slate-700/50"></div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#EDEEEB]">
          <p className="flex items-center gap-2">
            @<CurrentYear />
            <span className="hidden sm:inline">All Rights Reserved.</span>
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <NavLink
              to={"/privacy-policy"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={"hover:text-blue-400 transition-colors duration-200"}
            >
              Privacy Policy
            </NavLink>
            <span className="text-[#EDEEEB]">•</span>
            <NavLink
              to={"/terms-and-conditions"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={"hover:text-blue-400 transition-colors duration-200"}
            >
              Terms & Condition
            </NavLink>
            <span className="text-[#EDEEEB]">•</span>
            <NavLink
              to={"/return-and-refund"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={"hover:text-blue-400 transition-colors duration-200"}
            >
              Return & Refund
            </NavLink>
            <span className="text-[#EDEEEB]">•</span>
            <NavLink
              to={"/cookie-policy"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={"hover:text-blue-400 transition-colors duration-200"}
            >
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
    <FooterDisclaimer/>
    </>
    
  );
};

export default Footer;

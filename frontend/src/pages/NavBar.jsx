import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Dynamic-World-Vector-Logo.svg";
import MenuLinkMobile from "./MenuLinkMobile";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const services = [
    "Online Education",
    "Distance Education",
    "Regular Full-time Education",
    "BVoc",
    "Diploma & PG",
    "Certificate & Skill Courses",
    "MBBS India",
    "MBBS Abroad",
    "BE/BTech Admission",
    "MBA Admission",
    "Study Abroad",
    "Immigration & Visa Services",
    "Attestation & Apostille",
    "Online & Home Tuitions",
    "Business Opportunities",
  ];

  const servicesRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpenDesktop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable link class (desktop)
  const linkClass = ({ isActive }) =>
    `relative text-[15px] font-medium transition-colors duration-200
     after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
     after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full
     focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded
     ${
       isActive
         ? "text-blue-700 after:w-full"
         : "text-slate-800 hover:text-blue-700"
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/" className="inline-flex items-center gap-2 group">
                <img
                  src={Logo}
                  alt="Dynamic World Logo"
                  className="h-8 w-auto transition-transform group-hover:scale-105"
                />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/about-us" className={linkClass}>
                About Us
              </NavLink>
              <NavLink to="/career-guidance" className={linkClass}>
                Career Guidance
              </NavLink>

              {/* Services Dropdown (Desktop) */}
              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpenDesktop((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpenDesktop}
                  className={`inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors 
                    ${
                      servicesOpenDesktop
                        ? "text-blue-700"
                        : "text-slate-800 hover:text-blue-700"
                    }
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      servicesOpenDesktop ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </button>

                {servicesOpenDesktop && (
                  <div
                    role="menu"
                    className="absolute left-0 mt-2 w-[22rem] bg-white border border-slate-200 rounded-xl shadow-lg z-50 ring-1 ring-black/5"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 text-xs text-slate-500">
                      Explore our offerings
                    </div>
                    <ul className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[70vh] overflow-auto">
                      {services.map((s) => (
                        <li key={s}>
                          <NavLink
                            to={`/services/${s
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-3 py-2 text-[13px] rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            role="menuitem"
                            onClick={() => setServicesOpenDesktop(false)}
                          >
                            {s}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <NavLink to="/blog" className={linkClass}>
                Blog / Resources
              </NavLink>
              <NavLink to="/contact-us" className={linkClass}>
                Contact Us
              </NavLink>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              {!mobileOpen && (
                <button
                  aria-label="Open menu"
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <line
                      x1="3"
                      y1="5"
                      x2="21"
                      y2="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="19"
                      x2="21"
                      y2="19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="py-3 px-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Dynamic World Logo" className="h-8 w-auto" />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className=" py-2">
            <MenuLinkMobile
              setMobileOpenFuc={setMobileOpen}
              servicesOpen={servicesOpen}
              setServicesOpenFuc={setServicesOpen}
              services={services}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const MenuLinkMobile = ({
  setMobileOpenFuc,
  servicesOpenFuc,
  setServicesOpenFuc,
  services,
  servicesOpen,
}) => {
  return (
    <div className="bg-white w-full inset-0">
      <NavLink
        to="/"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        About Us
      </NavLink>
      <NavLink
        to="/career-guidance"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Career Guidance
      </NavLink>

      {/* Services Accordion */}
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-[15px] font-medium hover:text-blue-600"
        onClick={() => setServicesOpenFuc((v) => !v)}
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            servicesOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {servicesOpen && (
        <ul className="ml-3 mb-2 max-h-[60vh] overflow-auto scrollbar-hide">
          {services.map((s) => (
            <li key={s}>
              <NavLink
                to={`/services/${s.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpenFuc(false)}
                className="block px-3 py-2 text-sm hover:text-blue-600"
              >
                {s}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <NavLink
        to="/events"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Events
      </NavLink>
      <NavLink
        to="/blog"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Blog / Resources
      </NavLink>
      <NavLink
        to="/testimonials"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Testimonials
      </NavLink>
      <NavLink
        to="/faqs"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        FAQs
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setMobileOpenFuc(false)}
        className="block w-full px-3 py-3 text-[15px] font-medium rounded-md hover:bg-gray-200"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default MenuLinkMobile;

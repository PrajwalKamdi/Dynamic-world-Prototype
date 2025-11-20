
import { NavLink } from "react-router-dom";
import CurrentYear from "../components/CurrentYear.jsx";
import FooterDisclaimer from "../components/Disclaimer.jsx";
const url =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760786893/Custom-Logo_xdultc.webp";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-[#EDEEEB] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand / About with Social Icons */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <img
                  src={url}
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
              <div className="">
                <ul className="flex flex-wrap gap-2 md:gap-4 ">
                  <li className="hover:scale-105 transition duration-500 ease-in-out">
                    <a
                      className="hover:text-green-400 transition-colors text-sm"
                      href="https://wa.me/917887881060"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        // className={className}
                        viewBox="0 0 24 24"
                        aria-label="WhatsApp"
                        role="img"
                        width={20}
                        height={20}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.1-.47-.149-.669.149-.198.3-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.787-1.48-1.758-1.653-2.056-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.583-.487-.504-.669-.513l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.082 4.487.71.306 1.264.489 1.696.627.712.226 1.36.194 1.873.118.571-.085 1.767-.72 2.017-1.414.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.571-.347zM20.52 3.48A11.785 11.785 0 0 0 12.01 0C5.37 0 .012 5.358.012 12c0 2.1.555 4.18 1.61 6.01L0 24l6.168-1.595a11.94 11.94 0 0 0 5.84 1.488h.005c6.64 0 11.998-5.358 11.998-12a11.9 11.9 0 0 0-3.49-8.413zM12.01 21.543h-.004a9.53 9.53 0 0 1-4.853-1.32l-.349-.207-3.665.947.977-3.588-.228-.369a9.56 9.56 0 0 1-1.47-5.13c0-5.277 4.3-9.575 9.59-9.575 2.56 0 4.97 1 6.78 2.81a9.48 9.48 0 0 1 2.81 6.77c0 5.277-4.3 9.575-9.59 9.575z" />
                      </svg>
                    </a>
                  </li>
                  <li className="hover:scale-105 transition duration-500 ease-in-out">
                    <a
                      href="https://www.facebook.com/dynamicworld.in"
                      className="hover:text-blue-400 transition-colors text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="facebook"
                        width={20}
                        height={20}
                        fill="currentColor"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.897V8.05h1.853V6.275c0-1.828 1.08-2.841 2.732-2.841.792 0 1.617.142 1.617.142v1.78h-.91c-.897 0-1.176.56-1.176 1.135v1.559h2l-.32 2.326h-1.68v5.625C13.074 15.396 16 12.066 16 8.049z" />
                      </svg>
                    </a>
                  </li>
                  <li className="hover:scale-105 transition duration-500 ease-in-out">
                    <a
                      href="https://www.instagram.com/dynamicworld.in/"
                      className="hover:text-blue-400 transition-colors text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="instagram"
                        width={20}
                        height={20}
                        // className={className}
                        fill="currentColor"
                      >
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                      </svg>
                    </a>
                  </li>
                  <li className="hover:scale-105 transition duration-500 ease-in-out">
                    <a
                      href="https://www.youtube.com/channel/UCOZRvMEWHmEKvKemIuF1gdg"
                      className="hover:text-red-400 transition-colors text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="youtube"
                        width={20}
                        height={20}
                        // className={className}
                        fill="currentColor"
                      >
                        {/* <title>{title}</title> */}
                        <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.103C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.408.583a2.974 2.974 0 0 0-2.09 2.103A31.432 31.432 0 0 0 .5 12a31.432 31.432 0 0 0 .002 5.814 2.974 2.974 0 0 0 2.09 2.103C4.495 20.5 12 20.5 12 20.5s7.505 0 9.408-.583a2.974 2.974 0 0 0 2.09-2.103A31.432 31.432 0 0 0 23.5 12a31.432 31.432 0 0 0-.002-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                      </svg>
                    </a>
                  </li>
                </ul>
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
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FFC067] transition-all duration-200"></span>
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
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FFC067] transition-all duration-200"></span>
                    About Us
                  </NavLink>
                </li>

                {/* Services */}
                <li className="group">
                  <NavLink
                    to="/"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FFC067] transition-all duration-200"></span>
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
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FFC067] transition-all duration-200"></span>
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
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FFC067] transition-all duration-200"></span>
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
                    Office No. 506, Sterling Centre, Opp. Aurora Tower, MG Road,
                    Camp, Pune 411001
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
                    href="tel:+917887881060"
                  >
                    +91 7887881060
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Dynamicworld.edu@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Dynamicworld.edu@gmail.com
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
                    <strong className="text-[#EDEEEB]">Monday-Sunday :</strong>{" "}
                    10:00 AM - 7:00 PM
                  </span>
                </li>
                {/* <li className="flex items-center gap-2 text-sm">
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
                </li> */}
                {/* <li className="flex items-center gap-2 text-sm">
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
                </li> */}
              </ul>
              <a
                href="https://wa.me/917887881060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFC067] hover:to-purple-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EDEEEB]">
            <p className="flex items-center gap-1">
              @<CurrentYear />
              <span className="">Dynamic World All Rights Reserved.</span>
            </p>
            <div className="flex items-center gap-2 lg:gap-6 flex-wrap justify-center">
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
      <FooterDisclaimer />
    </>
  );
};

export default Footer;

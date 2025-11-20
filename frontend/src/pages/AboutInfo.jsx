import React from "react";
import { NavLink } from "react-router-dom";
import education from "../assets/education.png";
import school from "../assets/school.png";
import handshake from "../assets/handshake.png";
import free from "../assets/free.png";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  bg: "#EDEEEB",
  white: "#FFFFFF",
};

const AboutInfo = () => {
  const infoCards = [
    {
      id: 1,
      icon: education,
      title: "12,000+ Admissions",
      text: "Provided counseling services to over 100,000+ students.",
    },
    {
      id: 2,
      icon: school,
      title: "UGC Approved Universities",
      text: "We offer access to over 50+ UGC Approved Universities.",
    },
    {
      id: 3,
      icon: handshake,
      title: "24/7 Student Support",
      text: "Our expert counselors are available 24/7 for support.",
    },
    {
      id: 4,
      icon: free,
      title: "*FREE Career Counselling",
      text: "We ensure 100% placement support for students.",
    },
  ];

  return (
    <section className="bg-[#EDEEEB] px-6 lg:px-10 pb-20 text-center text-[#31393C]">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 font-medium">
          Explore top online universities and find the perfect fit for your education needs!
        </h2>

        {/* Button */}
        <div className="mb-12">
          <NavLink
            to="/services/online-education"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#FFC067] text-black px-8 py-3 font-medium rounded-full shadow hover:shadow-lg hover:bg-[#FFC067] transition-all duration-300"
          >
            All Universities
          </NavLink>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFC067] text-black rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center items-center w-16 h-16 mb-4 bg-white/20 rounded-full">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 filter invert"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-900/90 leading-snug">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;

import { GraduationCapIcon, UniversityIcon } from "lucide-react";
import React from "react";
import education from "../assets/education.png";
import school from "../assets/school.png";
import handshake from "../assets/handshake.png";
import free from "../assets/free.png";

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
    <section className="bg-[#EDEEEB] py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <h2 className="text-lg sm:text-xl text-gray-800 mb-4 font-medium">
          Explore top online universities and find the perfect fit for your
          education needs!
        </h2>

        {/* Button */}
        <div className="mb-10">
          <button className="bg-[#0056D2] text-white px-6 py-2 font-medium rounded hover:bg-blue-700 transition">
            All Universities
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0056D2] text-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center">
                <img src={card.icon} alt="" className="filter invert " />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-200">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;

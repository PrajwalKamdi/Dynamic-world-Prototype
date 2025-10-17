import React from "react";

const Upgrad02 = () => {
  return (
    <section className="bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700 ">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-10 lg:py-10">
        {/* Card */}
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4 lg:p-8 space-y-10">
          {/* Intro */}
          <header className="space-y-4">
            <h1 className="text-xl lg:text-3xl font-semibold leading-tight text-[#31393C]">
              About Upgrad Courses
            </h1>
            <p className="text-[#31393C]/80 text-sm lg:text-base leading-relaxed">
              upGrad is South Asia’s premier higher EdTech platform, empowering
              over 10 million learners globally. Leveraging advanced technology,
              world-class faculty, and industry partnerships, upGrad delivers
              impactful online learning experiences. Their mission is to
              redefine professional growth by making quality education
              accessible to everyone.
            </p>
            <p className="text-[#31393C]/80 text-sm lg:text-base leading-relaxed">
              Founded in 2015, upGrad was established to address the need for
              continuous upskilling among professionals in a rapidly evolving
              industry. The founders recognized that learning often halts once
              individuals enter the workforce, and upGrad aims to bridge this
              gap by providing opportunities for working professionals to
              enhance their skills while maintaining their careers.
            </p>
          </header>

          {/* Key Features Table */}
          <section className="space-y-4 ">
            <h2 className="text-xl lg:text-3xl font-semibold text-[#31393C]">
              Key Features
            </h2>

            {/* Responsive table container */}
            <div className="overflow-x-auto rounded-xl ring-1 ring-black/5 bg-gray-200">
              <table className="min-w-full border-collapse bg-gray-50">
                <thead className="bg-[#EDEEEB]">
                  <tr>
                    <th className="text-left px-4 md:px-6 py-3 text-sm lg:text-base font-semibold text-[#31393C]">
                      Key Features
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-sm lg:text-base font-semibold text-[#31393C]">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-sm">
                  <tr>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]">
                      Global Reach
                    </td>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]/80">
                      Over 10 million learners worldwide.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]">
                      Advanced Technology
                    </td>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]/80">
                      Utilizes cutting-edge platforms for immersive learning.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]">
                      World-Class Faculty
                    </td>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]/80">
                      Collaborates with leading educators and industry experts.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]">
                      Industry Partnerships
                    </td>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]/80">
                      Aligns courses with current market demands.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]">
                      Mission
                    </td>
                    <td className="align-top px-4 md:px-6 py-4 text-[#31393C]/80">
                      To make quality education accessible to everyone.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note / Callout */}
            <div className="mt-4 rounded-xl border border-[#3E96F4]/30 bg-[#3E96F4]/5 p-4 md:p-5">
              <p className="text-sm  text-[#31393C]">
                <span className="font-semibold text-[#3E96F4]">
                  Please Note:
                </span>{" "}
                Universities have the right to change courses and fees at any
                time. Therefore, please confirm with the
                <span className="font-medium"> DYNAMIC WORLD</span> team when
                seeking admission.
              </p>
            </div>

            {/* Description block */}
            <div className="space-y-3">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#31393C]">
                Offer Professional Courses for Individual Growth
              </h3>
              <p className="text-[#31393C]/80 leading-relaxed text-sm lg:text-base">
                UpGrad is an online education platform that offers
                industry-relevant programs designed to help learners upskill and
                advance in their careers. It provides courses in areas like data
                science, technology, management, marketing, and more, often in
                collaboration with top universities and industry experts. UpGrad
                focuses on flexible learning, real-world projects, and
                professional guidance to empower individuals for career
                transitions or advancements.
              </p>
            </div>
          </section>

          {/* All Courses */}
          <section className="space-y-5">
            <h2 className="text-xl lg:text-3xl font-semibold text-[#31393C]">
              All Courses
            </h2>

            {/* Courses as responsive cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Cloud Engineer Bootcamp",
                "Cybersecurity Bootcamp",
                "DevOps Engineer Bootcamp",
                "Full Stack Development Bootcamp-Essential",
                "Professional Certificate Program in UI/UX Design & Design Thinking",
                "MS in Digital Marketing and Media | Yeshiva University",
                "Professional Certificate Program in Business Analytics & Consulting in Association with PWC India",
                "Professional Certificate Program in AI and Data Science",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-black/10 bg-white p-4 shadow-sm hover:shadow transition"
                >
                  <span className="block text-sm md:text-base text-[#31393C]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Row */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+917887881060"
                className="inline-flex items-center justify-center rounded-xl border border-[#3E96F4] px-5 py-3 text-[#3E96F4] text-sm md:text-base font-medium hover:bg-[#3E96F4]/5 transition"
              >
                Get Counselling
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Upgrad02;

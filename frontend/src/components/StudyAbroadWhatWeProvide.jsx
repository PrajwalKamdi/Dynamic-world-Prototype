import React from "react";

const leftItems = [
  "Visa Processing",
  "Travel Assistance",
  "Insurance & Forex",
  "Pre-Departure Orientation",
  "Post Arrival Orientation",
  "Scholarship Guidance",
  "Value Added Services",
  "Career Counselling",
];

const rightItems = [
  "Career Pathway Planning",
  "Course & Country Selection",
  "University Selection",
  "Application & Admission Process",
  "Loan / Finance Assistance",
  "IELTS / TOEFL Preparation",
  "Recommendation",
];

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-2 py-1 text-gray-700">
    <span className="mt-0.5 inline-flex shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#d4af37"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span className="text-sm font-semibold lg:text-base leading-relaxed">{text}</span>
  </li>
);

const WhatWeProvide = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left: Heading and CTA */}
          <div className="md:col-span-1">
            <div className="inline-block text-left">
              <h2 className="font-bold text-3xl leading-tight text-gray-900">
                What we provide?
              </h2>
              <div className="mt-2 h-0.5 w-20 bg-red-600"></div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded bg-amber-500 px-8 py-2.5 text-sm font-medium text-gray-900 shadow transition hover:bg-amber-400"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right: Two-column checklist */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              <ul className="list-none space-y-0.5">
                {leftItems.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
              <ul className="list-none space-y-0.5">
                {rightItems.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;

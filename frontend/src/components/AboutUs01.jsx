import React from "react";

const AboutUs01 = () => {
  const whatsappNumber = "917887881060"; // ✅ Remove + and spaces for wa.me link
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    // PRIMARY CONTAINER: Adjusted to use min-h-screen for full height, 
    // but not strictly fixed height (removed h-[75svh] for better flow) 
    // Added vertical padding for breathing room on all screens (py-10)
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-16 bg-gray-50 sm:py-20 md:py-24">
      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        
        {/* Heading: Responsive text size (3xl on mobile, 5xl on desktop) and margin */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8">
          Why Us?
        </h1>

        {/* Description: Responsive text size (sm on mobile, lg/xl on desktop) and max-width for readability */}
        <p className="max-w-xl sm:max-w-2xl text-center text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-10 sm:mb-12 px-2">
          We are an{" "}
          <span className="font-semibold">Advanced EdTech company </span>
          that leverages cutting-edge technology, innovative pedagogy, industry
          collaborations, and an exceptional faculty to craft engaging online
          learning journeys for students worldwide.
        </p>

        {/* WhatsApp Button: Responsive padding/text size for button and SVG */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          // Increased padding and made the font size slightly smaller on mobile (text-sm) 
          // while keeping the desktop style.
          className="flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* WhatsApp SVG: Responsive size */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" // Smaller on mobile
            height="24" // Smaller on mobile
            className="sm:w-6 sm:h-6" // Reverts to larger size on sm screens and up
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.932 7.932 0 0 0 8.002.001C3.584.001.002 3.584.002 8.001a7.93 7.93 0 0 0 1.112 4.04L.11 15.89l3.923-1.01a7.931 7.931 0 0 0 3.969 1.074h.001c4.418 0 8.001-3.582 8.001-8 0-2.137-.832-4.146-2.334-5.628zM8.002 14.6c-1.373 0-2.718-.37-3.883-1.07l-.278-.166-2.325.599.62-2.267-.181-.292A6.597 6.597 0 0 1 1.4 8.001c0-3.634 2.967-6.6 6.601-6.6 1.76 0 3.416.687 4.66 1.931a6.548 6.548 0 0 1 1.94 4.669c0 3.634-2.967 6.6-6.6 6.6zm3.615-4.765c-.197-.099-1.17-.578-1.352-.644-.181-.066-.313-.099-.445.099-.132.197-.51.644-.625.776-.115.132-.23.149-.427.05-.197-.099-.832-.307-1.586-.98-.586-.522-.982-1.165-1.098-1.362-.115-.198-.012-.305.087-.404.089-.088.197-.23.296-.346.099-.115.132-.198.197-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.16-.384-.324-.33-.445-.335-.115-.005-.248-.006-.38-.006s-.347.05-.53.248c-.182.197-.695.68-.695 1.658 0 .978.712 1.922.812 2.051.099.132 1.402 2.144 3.4 3.004.476.205.847.327 1.136.418.477.152.911.131 1.254.08.383-.057 1.17-.478 1.336-.94.165-.462.165-.857.115-.94-.05-.082-.182-.132-.38-.23z" />
          </svg>
          <span className="font-medium text-sm sm:text-base">Schedule 1:1 Counselling</span>
        </a>
      </div>
    </div>
  );
};

export default AboutUs01;
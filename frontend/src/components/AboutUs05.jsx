import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs05 = () => {
  return (
    // PRIMARY CONTAINER: 
    // - Replaced fixed h-[50vh] with min-h-[50vh] for flexibility.
    // - Increased horizontal padding on small screens (px-6 sm:px-10 md:px-16).
    // - Added generous vertical padding (py-16) to ensure content isn't cramped.
    <section className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-gray-100 px-6 sm:px-10 md:px-16 py-16">
      
      {/* Heading: 
          - Adjusted size: text-2xl on tiny screens, 3xl on mobile, 5xl on large screens. 
          - Increased max width for better text wrapping on wide screens.
          - Added stronger font weight for impact. */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-800 text-center mb-10 max-w-4xl leading-snug">
        Join us to make a difference in people's lives.
      </h1>

      {/* Careers Button: 
          - Ensured padding is consistent and slightly increased on desktop (lg:px-10 lg:py-4).
          - Added a small hover animation for a modern feel. */}
      <NavLink
        to={"/career"}
        className={
          "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-10 lg:py-4 text-base lg:text-lg rounded-xl font-bold shadow-xl transform transition-all duration-300 hover:scale-[1.03]"
        }
      >
        Our Careers
      </NavLink>
    </section>
  );
};

export default AboutUs05;
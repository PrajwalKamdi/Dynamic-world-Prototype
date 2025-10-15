import React from "react";
import Slider from "react-slick";
import { UniversityLogos } from "./logos.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import online_education_banner from "../assets/online_education_banner.png";

// Tailwind-friendly custom arrows (shown on md+)
const ArrowBase = ({ onClick, dir }) => (
  <button
    type="button"
    aria-label={dir === "prev" ? "Previous logos" : "Next logos"}
    onClick={onClick}
    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition
      ${dir === "prev" ? "left-2" : "right-2"}`}
  >
    <span className="text-gray-700 text-xl" aria-hidden>
      {dir === "prev" ? "❮" : "❯"}
    </span>
  </button>
);

const PrevArrow = (props) => <ArrowBase {...props} dir="prev" />;
const NextArrow = (props) => <ArrowBase {...props} dir="next" />;

export default function DynamicUniversityCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0, // continuous
    cssEase: "linear",
    slidesToShow: 6, // ← default: 6 on large screens
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    accessibility: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // < 1024px → small/medium screens
        settings: {
          slidesToShow: 3, // ← exactly 3 on small screens
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-[#EEF1F4] to-[#EDEEEB] py-4 sm:py-6 lg:py-8" // ↓ reduced vertical padding
      aria-labelledby="uni-carousel-title"
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6">
        {" "}
        {/* ↓ tighter side padding */}
        {/* Heading */}
        <header className="text-center mb-4 sm:mb-6">
          <h1
            id="uni-carousel-title"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-indigo-800"
          >
            Top Online Universities
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-indigo-900/70">
            Trusted institutions offering UGC-approved online programs
          </p>
        </header>
        {/* Carousel with edge-fade */}
        <div className="">
          <Slider {...settings}>
            {UniversityLogos.map((logo, idx) => (
              <div className="flex">
                <img
                  loading="lazy"
                  src={logo.image}
                  alt={logo.name}
                  className="px-2"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Banner */}
        <figure className="mt-5 sm:mt-6 lg:mt-8">
          {" "}
          {/* ↓ smaller gap above banner */}
          <img
            src={online_education_banner}
            alt="Learn online from top universities across India"
            loading="lazy"
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-md object-cover"
          />
          <figcaption className="mt-1 text-[11px] sm:text-xs text-gray-500 text-center">
            Explore flexible, career-ready programs designed for working
            professionals.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

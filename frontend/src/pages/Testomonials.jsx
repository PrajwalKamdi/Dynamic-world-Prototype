import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Nikki",
    role: "Computer Science Student",
    videoUrl: "https://youtube.com/shorts/8mwBWKlAjyI?si=LRDLCEKWiR7fZf96",
  },
  {
    id: 2,
    name: "Pulit Mahindra",
    role: "Engineering Student",
    videoUrl: "https://youtube.com/shorts/KyXT9QTnKlk?si=Bp19DNXDd1PAovpa",
  },
  {
    id: 3,
    name: "Sakshi",
    role: "Business Administration",
    videoUrl: "https://youtube.com/shorts/LUCkPcWdm_c?si=MEhr_s9BMSKRvg74",
  },
  {
    id: 4,
    name: "Luve",
    role: "Data Science Student",
    videoUrl: "https://youtube.com/shorts/N_EmQaU1FBc?si=Th2BxG9lpD8fXfFZ",
  },
];

// Extract YouTube video ID
const extractVideoId = (url) => {
  const regExp = /(?:youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const AllTestimonials = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  // 🔥 Detect which video is currently visible
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.scrollWidth / testimonials.length;
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveDot(currentIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll to specific video when clicking dot or arrow
  const scrollToVideo = (index) => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.scrollWidth / testimonials.length;
    scrollContainer.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  // Navigate to previous video
  const scrollPrev = () => {
    const newIndex = Math.max(0, activeDot - 1);
    scrollToVideo(newIndex);
  };

  // Navigate to next video
  const scrollNext = () => {
    const newIndex = Math.min(testimonials.length - 1, activeDot + 1);
    scrollToVideo(newIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Video Testimonials
        </h2>
        <p className="text-gray-600 mt-2">
          Watch what our students have to say about their experience
        </p>
      </div>

      {/* Testimonials */}
      <div
        ref={scrollRef}
        className="w-full max-w-full px-4 md:px-8 lg:px-12 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div className="flex flex-nowrap gap-8 md:gap-10 lg:gap-12 pb-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-80 p-5"
            >
              <div className="w-full aspect-[9/16] max-h-[500px]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${extractVideoId(item.videoUrl)}`}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 Navigation: Left Arrow + 4 Dots + Right Arrow (Mobile Only) */}
      <div className="flex md:hidden justify-center items-center mt-6 space-x-4">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* 4 Dots - One for each video */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToVideo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-400 opacity-70 hover:opacity-100"
              }`}
            ></button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="p-2 rounded-full transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllTestimonials;

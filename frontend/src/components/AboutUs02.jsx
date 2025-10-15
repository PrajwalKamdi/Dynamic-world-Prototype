import React, { useMemo, useRef, useState } from "react";

const AboutUs02 = () => {
  const slides = useMemo(
    () => [
      {
        title: "Mission",
        color: "#3E96F4",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 4.5-9 4.5-9-4.5L12 2zm0 9l9 4.5-9 4.5-9-4.5L12 11z" />
          </svg>
        ),
        text:
          "Empower learners of all ages to unlock their full potential through accessible, high-quality educational courses.",
      },
      {
        title: "Vision",
        color: "#22c55e",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5c4.5 0 8.5 2.25 11 6-2.5 3.75-6.5 6-11 6s-8.5-2.25-11-6c2.5-3.75 6.5-6 11-6z" />
            <circle cx="12" cy="10.5" r="2.5" strokeWidth={2} />
          </svg>
        ),
        text:
          "We aspire to be the go-to destination for learners seeking knowledge, skills, and inspiration.",
      },
      {
        title: "Values",
        color: "#8b5cf6",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ),
        text:
          "Providing access to education for all, breaking down barriers, and ensuring inclusive learning for diverse communities.",
      },
    ],
    []
  );

  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index) => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const width = container.clientWidth;
    container.scrollTo({ left: width * index, behavior: "smooth" });
    setActive(index);
  };

  const handlePrev = () => scrollToIndex((active - 1 + slides.length) % slides.length);
  const handleNext = () => scrollToIndex((active + 1) % slides.length);

  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Heading (optional minimal) */}
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-[#31393C]">What drives us</h2>
          {/* Controls visible on sm- only (mobile). Hidden on md+ where grid is shown. */}
          <div className="flex items-center gap-2 sm:hidden">
            <button aria-label="Previous" onClick={handlePrev} className="h-9 w-9 rounded-full ring-1 ring-[#EDEEEB] text-[#31393C] hover:bg-[#EDEEEB]">
              ‹
            </button>
            <button aria-label="Next" onClick={handleNext} className="h-9 w-9 rounded-full ring-1 ring-[#EDEEEB] text-[#31393C] hover:bg-[#EDEEEB]">
              ›
            </button>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
            onScroll={(e) => {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / el.clientWidth);
              if (idx !== active) setActive(idx);
            }}
          >
            {slides.map((s, i) => (
              <div key={s.title} className="min-w-full snap-start px-1">
                <div className="mx-1 rounded-2xl bg-[#EDEEEB] p-6 shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#FFF", color: s.color }}>
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#31393C]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#31393C]/70">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 w-2 rounded-full ${i === active ? "bg-[#3E96F4]" : "bg-[#CCC7BF]"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {slides.map((s) => (
            <div key={s.title} className="rounded-2xl bg-[#EDEEEB] p-8 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#FFF", color: s.color }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#31393C]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#31393C]/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs02;

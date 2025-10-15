import React from "react";

/** Brand tokens */
const BRAND = {
  blue: "#3E96F4",
  charcoal: "#31393C",
  chip: "#EDEEEB",
};

/** Data */
const testimonials = [
  {
    text: "Dynamic World turned my dream of studying in Canada into reality. From selecting the right university to guiding me through the visa process, their support was incredible. I’m now pursuing my master's degree in Toronto!",
    name: "Ramesh Gupta",
    city: "Delhi",
  },
  {
    text: "I was overwhelmed by the UK application process, but Dynamic World made it easy. They helped me secure admission to a top-ranked university—I couldn’t be happier. Highly recommend their services!",
    name: "Anjali Sharma",
    city: "Mumbai",
  },
  {
    text: "Dynamic World’s team was exceptional with my Australian student visa. Their attention to detail and constant updates made the journey stress-free. Now I’m studying in Melbourne!",
    name: "Vikram Singh",
    city: "Bangalore",
  },
  {
    text: "Outstanding guidance end-to-end. Their expertise in shortlisting universities and preparing documents was invaluable. I’m now a proud student in New Zealand!",
    name: "Priya Menon",
    city: "Surat",
  },
  {
    text: "They were instrumental in helping me achieve my study goals in Germany. The complex application felt simple, and they answered every question. Thank you!",
    name: "Rajiv Patel",
    city: "Ahmedabad",
  },
  {
    text: "Thanks to Dynamic World, I’m now pursuing a healthcare program in the USA. Professional yet friendly—made me confident at every step. Couldn’t have done it without them!",
    name: "Sneha Kapoor",
    city: "Hyderabad",
  },
];

/** Avatar from initials */
const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-semibold shadow"
      style={{
        background:
          "linear-gradient(135deg, rgba(62,150,244,1) 0%, rgba(49,57,60,1) 100%)",
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
};

const TestimonialCard = ({ text, name, city }) => (
  <article className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    {/* Top accent bar */}
    <div
      className="h-1 w-full"
      style={{ backgroundColor: BRAND.blue }}
      aria-hidden
    />
    {/* Content */}
    <div className="p-5">
      {/* Quote mark */}
      <svg
        className="mb-3 h-6 w-6 opacity-30"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: BRAND.blue }}
        aria-hidden
      >
        <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.62 1.2 2.8 2.8 2.8.12 1.86-1.1 3.52-2.8 4.2v1.8c3.07-1.03 5.2-3.83 5.2-7.2C9.2 8.02 8.34 6 7.17 6Zm9 0C14.42 6 13 7.43 13 9.2c0 1.62 1.2 2.8 2.8 2.8.12 1.86-1.1 3.52-2.8 4.2v1.8c3.07-1.03 5.2-3.83 5.2-7.2 0-2.78-.86-4.8-2.03-4.8Z" />
      </svg>

      <p className="text-sm leading-relaxed text-gray-700">{text}</p>

      <div className="mt-4 flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <h4
            className="text-sm font-semibold"
            style={{ color: BRAND.charcoal }}
          >
            {name}
          </h4>
          <span
            className="mt-1 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: BRAND.chip, color: BRAND.charcoal }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: BRAND.blue }}
            />
            {city}
          </span>
        </div>
      </div>
    </div>

    {/* Hover ring */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-[#3E96F4]/40" />
  </article>
);

const StudyAbroadTestimonials = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-10 bg-gray-100">
      {/* Header */}
      <header className="mb-6">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: BRAND.chip, color: BRAND.charcoal }}
        >
          OUR TESTIMONIALS
        </span>
        <h2
          className="mt-3 text-2xl font-bold tracking-tight lg:text-3xl"
          style={{ color: BRAND.charcoal }}
        >
          <span className="text-red-600">Hear Them</span> Out
        </h2>
        <div
          className="mt-3 h-1 w-28 rounded-full"
          style={{ backgroundColor: BRAND.blue }}
        />
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#3E96F4]/5" />
    </section>
  );
};

export default StudyAbroadTestimonials;

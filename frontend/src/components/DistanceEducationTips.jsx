import React from "react";
import {
  Clock,
  CalendarCheck,
  MessageSquare,
  Target,
  BookOpen,
  CheckCircle2,
  PhoneCall,
  Video,
} from "lucide-react";

export default function DistanceEducationTips({
  title = "5 Crucial Tips for Success in Distance Education Programs",
  subtitle = "Practical, no‑fluff strategies you can start using today.",
}) {
  const tips = [
    {
      icon: <CalendarCheck className="h-6 w-6" aria-hidden />,
      title: "Plan a Weekly Study Schedule",
      points: [
        "Block fixed time slots for lectures, revision, and assignments.",
        "Use calendar reminders and protect those slots like meetings.",
      ],
      meta: "Consistency beats intensity.",
    },
    {
      icon: <BookOpen className="h-6 w-6" aria-hidden />,
      title: "Create a Distraction‑Free Study Zone",
      points: [
        "Dedicated desk, good lighting, and ergonomic seating.",
        "Silence notifications; keep only what you need within reach.",
      ],
      meta: "Environment shapes focus.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" aria-hidden />,
      title: "Engage Actively in Classes",
      points: [
        "Turn on chat, ask questions, and take timestamped notes.",
        "Summarize each session in 5 bullet points afterward.",
      ],
      meta: "Active > passive learning.",
    },
    {
      icon: <Target className="h-6 w-6" aria-hidden />,
      title: "Use Support & Resources Smartly",
      points: [
        "Tap faculty hours, peer groups, and official study guides.",
        "Use spaced repetition & practice quizzes weekly.",
      ],
      meta: "Leverage the ecosystem.",
    },
    {
      icon: <Clock className="h-6 w-6" aria-hidden />,
      title: "Track Progress & Stay Accountable",
      points: [
        "Break modules into milestones; review each Sunday.",
        "Share goals with a buddy; do 15‑minute weekly check‑ins.",
      ],
      meta: "What gets measured improves.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFC067] text-black">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden
        >
          {/* soft pattern */}
          <svg
            className="absolute -top-10 -right-10 h-64 w-64"
            viewBox="0 0 200 200"
            fill="none"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#g1)" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
          {/* Chip */}
          <span className="inline-flex w-auto items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-white/30 backdrop-blur">
            <CheckCircle2 className="h-4 w-4" aria-hidden /> Distance Learning •
            Pro Tips
          </span>

          {/* Title + Subtitle */}
          <div className="mt-4 max-w-3xl ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="mt-3 text-gray-900/90 text-sm sm:text-base md:text-lg">
              {subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+917887881060"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#31393C] px-4 py-2 text-sm sm:text-base font-semibold shadow-sm ring-1 ring-white/40 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3E96F4]"
            >
              <PhoneCall className="h-5 w-5" aria-hidden /> Quick Call
            </a>
            <a
              href="https://wa.me/917887881060"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 text-white px-4 py-2 text-sm sm:text-base font-semibold shadow-sm ring-1 ring-white/30 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3E96F4]"
            >
              <Video className="h-5 w-5" aria-hidden /> Video Counselling
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {tips.map((tip, idx) => (
            <article
              key={idx}
              className="group rounded-2xl bg-[#EDEEEB] p-5 sm:p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-xl bg-white ring-1 ring-gray-200 p-2">
                  {tip.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {tip.title}
                  </h3>
                  <ul className="mt-2 list-disc list-inside text-sm sm:text-[15px] leading-relaxed space-y-1 text-[#31393C]/90">
                    {tip.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-[#31393C]/70">
                <span className="inline-block rounded-full bg-white px-2 py-1 ring-1 ring-gray-200">
                  {tip.meta}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA / Note */}
        <div className="mt-8 md:mt-12 rounded-2xl border border-dashed border-gray-300 p-5 sm:p-6">
          <h4 className="text-base sm:text-lg font-semibold">Pro workflow:</h4>
          <ol className="mt-2 list-decimal list-inside text-sm sm:text-[15px] space-y-1 text-[#31393C]/90">
            <li>Pick your study slots for the week and add reminders.</li>
            <li>Set up your study zone and open only the required tabs.</li>
            <li>During class, ask 1 question and write a 5‑bullet recap.</li>
            <li>Do a 30‑minute spaced‑repetition session every 2–3 days.</li>
            <li>Review milestones every Sunday and plan the next week.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const PromotionStrip = () => {
  const API = import.meta.env.VITE_BACKEND_API;
  const sessionKey = "promotionStripNews_v1";
  const [news, setNews] = useState([]); // array of news objects
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // prevent double-fetch in React 18 Strict Mode (dev)
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return; // already started fetch once
    const cached = sessionStorage.getItem(sessionKey);
    if (cached) {
      try {
        setNews(JSON.parse(cached));
        hasFetchedRef.current = true;
        return; // don't fetch
      } catch (e) {
        sessionStorage.removeItem(sessionKey);
      }
    }
    const controller = new AbortController();
    let cancelled = false;
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API}/news`, {
          signal: controller.signal,
        });
        // adapt to backend shape: prefer res.data.data, fallback to res.data
        const payload = res?.data?.data ?? res?.data ?? [];
        if (!cancelled) {
          setNews(payload);
          try {
            sessionStorage.setItem(sessionKey, JSON.stringify(payload));
          } catch {
            // ignore sessionStorage quota errors
          }
          hasFetchedRef.current = true;
        }
      } catch (err) {
        if (err.name === "CanceledError" || axios.isCancel?.(err)) {
          // aborted - ignore
        } else if (!cancelled) {
          setError(err.message ?? "Failed to fetch news");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchNews();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [API]);

  // Use the first news item for label/message/CTA as a simple example.
  const first = news && news.length > 0 ? news[0] : null;

  // 1. Get the original link and apply **.trim()** to remove leading/trailing whitespace
  const originalLink = first?.link ? String(first.link).trim() : null;

  // 2. Check if the link starts with a protocol and prepend 'https://' if it doesn't.
  const ctaHref = originalLink
    ? originalLink.startsWith("http://") || originalLink.startsWith("https://")
      ? originalLink
      : `https://${originalLink}`
    : "#"; // Fallback if no link exists

  const label = first?.category ?? "Updates";
  const message =
    first?.newsTitle ?? "Latest updates and admission support — check now.";

  return (
    <header className="w-full bg-[#3E96F4] px-4 sm:px-6 py-2 sm:py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-white text-sm sm:text-base font-semibold leading-tight">
              Dynamic World – Career Guidance Experts
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-900">
              1:1 Counselling • Results Updates • Admission Support
            </p>
          </div>
        </div>

        {/* Center: Live News / Result Strip */}
        <a
          href={ctaHref} // ⬅️ Using the formatted/trimmed link
          target="_blank"
          rel="noopener noreferrer"
          className="lg:ml-3 text-[10px] font-medium rounded-full lg:px-3 py-[3px] transition"
        >
          <div className="flex-1 sm:px-4">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-3 py-2 backdrop-blur-sm">
              {/* LIVE / LABEL */}
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-white bg-red-500 rounded-full px-2 py-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live
              </span>

              {/* Category Label */}
              <span className="hidden sm:inline-flex text-[10px] text-blue-100 border border-blue-100/40 rounded-full px-2 py-[1px]">
                {label}
              </span>

            {/* Message */}
            <p className="text-[10px] sm:text-xs text-white line-clamp-2">
              {message}
            </p>

            {/* CTA */}
            <a
              href={ctaHref}
              className="hidden md:inline-flex text-[10px] font-medium text-[#3E96F4] bg-white rounded-full px-3 py-[3px] hover:bg-blue-50 transition"
            >
              {ctaLabel}
            </a>
          </div>
        </a>

        {/* Right: Actions */}
        <div className="hidden lg:flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917887881060?text=Hi%20Dynamic%20World%2C%20I%20want%20help%20with%20admissions%20and%20latest%20results."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
          >
            {/* SVG icon omitted for brevity — keep your original */}
            <span>WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href="tel:+917887881060"
            className="border border-white/80 text-white text-xs sm:text-sm hover:bg-white hover:text-[#3E96F4] px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default PromotionStrip;

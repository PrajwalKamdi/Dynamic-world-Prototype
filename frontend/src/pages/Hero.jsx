import { useEffect, useMemo, useRef, useState, useCallback } from "react";

const AUTOPLAY_MS = 30000;

// ======= Desktop Banners =======
const studyAbroadLarge01 =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251136/LaptopMbbsAbroadDesktop_rbeewp.svg";
const vocationalLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251137/Vocatoinal_1920x600_fbneci.svg";
const careerLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251134/Career_1920_x_600_xuw8tc.svg";
const universitiesLarge =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251139/BannerUniversity_1920x600_jafrg9.svg";

// ======= Mobile Banners =======
const studyAbroadMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251168/MobileAbroadNew_nskr9n.svg";
const vocationalMobie =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251168/VocationalMobile_v4hsap.svg";
const universitiesMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251166/BannerUniversityMobile_onhtml.svg";
const careerMobile =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251166/BannerCarrerMobile_dxorj4.svg";
const career =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760251168/CareerMobile_wpeo8s.svg";

const MobileScreenBanners = [
  studyAbroadMobile,
  vocationalMobie,
  careerMobile,
  career,
  universitiesMobile,
];

const LargeScreenBanners = [
  vocationalLarge,
  careerLarge,
  studyAbroadLarge01,
  universitiesLarge,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const [isLarge, setIsLarge] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(min-width: 1024px)").matches
  );

  // ======= Handle screen resize =======
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsLarge(e.matches);

    mql.addEventListener?.("change", handleChange);
    mql.addListener?.(handleChange); // Safari fallback

    return () => {
      mql.removeEventListener?.("change", handleChange);
      mql.removeListener?.(handleChange);
    };
  }, []);

  // ======= Select banner set =======
  const banners = useMemo(
    () => (isLarge ? LargeScreenBanners : MobileScreenBanners),
    [isLarge]
  );

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const scheduleNext = useCallback(() => {
    clearTimer();
    if (isHovering) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, AUTOPLAY_MS);
  }, [banners.length, isHovering]);

  const nextBanner = useCallback(() => {
    clearTimer();
    setCurrent((prev) => (prev + 1) % banners.length);
    scheduleNext();
  }, [banners.length, scheduleNext]);

  const prevBanner = useCallback(() => {
    clearTimer();
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    scheduleNext();
  }, [banners.length, scheduleNext]);

  const gotoIndex = useCallback(
    (idx) => {
      clearTimer();
      setCurrent(idx);
      scheduleNext();
    },
    [scheduleNext]
  );

  // ======= Autoplay =======
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [current, banners, scheduleNext]);

  // ======= Keyboard navigation =======
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextBanner();
      if (e.key === "ArrowLeft") prevBanner();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextBanner, prevBanner]);

  // ======= Reset if banner count changes =======
  useEffect(() => {
    if (current >= banners.length) setCurrent(0);
  }, [banners.length, current]);

  return (
    <section
      className="relative w-full overflow-hidden h-[60vh] lg:h-[70vh]"
      onMouseEnter={() => {
        setIsHovering(true);
        clearTimer();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        scheduleNext();
      }}
    >
      {/* ======= Slides ======= */}
      <div className="absolute inset-0">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover select-none transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* ======= Controls ======= */}
      <button
        onClick={prevBanner}
        aria-label="Previous"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/40 text-white shadow transition"
      >
        ❮
      </button>
      <button
        onClick={nextBanner}
        aria-label="Next"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/40 text-white shadow transition"
      >
        ❯
      </button>

      {/* ======= Dots ======= */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => gotoIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/60 transition-all ${
              i === current
                ? "bg-[#3E96F4] scale-100"
                : "bg-white/70 hover:bg-white scale-90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

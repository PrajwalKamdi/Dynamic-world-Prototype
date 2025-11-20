import {
  Award,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star as StarIcon,
} from "lucide-react";

const BRAND = {
  blue: "#3E96F4",
  text: "#31393C",
  chip: "#EDEEEB",
  card: "#FFFFFF",
  accent: "#CCC7BF",
};

const fallbackExperts = [
  {
    name: "Priyesh",
    experience: "15+ Years Experience",
    phone: "7738846286",
    specialty: "Overseas Expert",
    rating: 4.9,
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761895819/Priyesh_hi7f0i.jpg",
  },
  {
    name: "Amit",
    experience: "10+ Years Experience",
    phone: "7208275245",
    specialty: "UGC Online & Distance",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761895838/Amit_ltgsal.jpg",
  },
  {
    name: "Supriya",
    experience: "11+ Years Experience",
    phone: "9920611771",
    specialty: "Career Counselling",
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761895819/Supriya_yyub5y.jpg",
  },
  {
    name: "Neha",
    experience: "12+ Years Experience",
    phone: "7887881060",
    specialty: "Career Counselling",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761895819/Neha_dhm34g.jpg",
  },
  {
    name: "Sameep",
    experience: "5+ Years Experience",
    phone: "7697736826",
    specialty: "Career Counselling",
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1761895819/sameep_isglfq.jpg",
  },
];

function normalizePhone(p = "") {
  const digits = (p.match(/\d/g) || []).join("");
  return digits.slice(-10);
}

/** Stars with half-fill support and accessible label */
function Stars({ value = 4.8 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${value.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = half && i === full;
        return (
          <div key={i} className="relative h-4 w-4">
            {/* Base (empty) */}
            <StarIcon className="h-4 w-4 text-gray-300" />
            {/* Fill */}
            <div
              className={`absolute inset-0 overflow-hidden ${
                isFull ? "w-full" : isHalf ? "w-1/2" : "w-0"
              }`}
            >
              <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        );
      })}
      <span className="ml-0.5 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}

/** Avatar: prefers image; falls back to initial */
function Avatar({ name = "E", src }) {
  const initial = name?.[0]?.toUpperCase() || "E";
  return (
    <div className="relative">
      <div className="h-16 w-16 rounded-2xl bg-white/50 ring-1 ring-black/5 grid place-items-center overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML = `<span class="text-xl font-semibold" style="color:${BRAND.text}">${initial}</span>`;
            }}
          />
        ) : (
          <span className="text-xl font-semibold" style={{ color: BRAND.text }}>
            {initial}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ExpertGuidance({
  experts = fallbackExperts,
  showHeader = true,
  title = "Receive Expert Guidance To Make Right Decisions.",
  subtitle = "We are a team of top leading education counseling experts.",
}) {
  const safeExperts = (experts?.length ? experts : fallbackExperts).map(
    (e) => ({
      ...e,
      phoneNorm: normalizePhone(e.phone),
    })
  );

  return (
    <section
      className="w-full text-[color:var(--text)] relative"
      style={{
        "--brand": BRAND.blue,
        "--text": BRAND.text,
      }}
    >
      {/* Background: soft gradient + subtle dots */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#B3B3B3]" />
        <div
          className="pointer-events-none h-full w-full opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(62,150,244,0.12) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-14">
        {showHeader && (
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 shadow-sm ring-1 ring-black/5">
              <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
              <span className="text-xs font-medium text-gray-700">
                Verified Counsellors
              </span>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#31393C] leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm md:text-base text-[#31393C]/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Clock className="h-4 w-4 text-[color:var(--brand)]" />
            <span>Mon–Sun, 10:00 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 ring-1 ring-black/5">
              <Award className="h-4 w-4 text-[color:var(--brand)]" />
              <span>UGC • NAAC • AICTE guidance</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {safeExperts.map((expert, idx) => {
            const tel = expert.phoneNorm
              ? `tel:+91${expert.phoneNorm}`
              : undefined;
            const wa = expert.phoneNorm
              ? `https://wa.me/91${expert.phoneNorm}`
              : undefined;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-5 md:p-6 shadow-sm ring-1 ring-black/5 bg-white transition
                           hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Gradient ring on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-[color:var(--brand)]/25 via-transparent to-[color:var(--brand)]/15 blur-[6px]" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <Avatar name={expert.name} src={expert.image} />

                  <div className="mt-4">
                    <h3 className="text-lg md:text-xl font-semibold text-[#31393C]">
                      {expert.name}
                    </h3>
                    {expert.specialty && (
                      <p className="text-sm text-gray-700 mt-0.5">
                        {expert.specialty}
                      </p>
                    )}
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {expert.experience}
                    </p>
                    <div className="mt-2 flex justify-center">
                      <Stars value={expert.rating ?? 4.8} />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-3 w-full">
                    <a
                      href={tel ?? "#"}
                      aria-label={`Call ${expert.name}`}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--brand)]
                        ${
                          tel
                            ? "bg-[color:var(--brand)] hover:brightness-110"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                      onClick={(e) => !tel && e.preventDefault()}
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={wa ?? "#"}
                      aria-label={`WhatsApp ${expert.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium ring-1 ring-black/10 bg-white
                        ${
                          wa
                            ? "hover:bg-gray-50"
                            : "bg-gray-100 cursor-not-allowed"
                        }`}
                      onClick={(e) => !wa && e.preventDefault()}
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)] px-3 py-1 text-xs font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Free Counselling
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
}

import {
  Globe2,
  MapPin,
  GraduationCap,
  IndianRupee,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";
import CurrentYear from "./CurrentYear";

export default function AffordableCountries({ showCTA = true }) {
  const countries = [
    {
      name: "Kyrgyzstan",
      flag: "https://flagcdn.com/w40/kg.png",
      highlight:
        "Among the lowest annual tuition with long-standing Indian student presence",
      feesNote: "Total ~₹18–27L for 5 yrs study + 1 yr internship extra",
      feesPerYear: "US$3,500–5,000/yr",
      living: "US$100–150/month (hostel/shared) typical",
      environment:
        "Cold winters, compact campuses; English-medium available; small class sizes in many schools",
      indianCommunity:
        "Large; Indian restaurants and student associations active in Bishkek/Osh",
      stay: "University hostels widely available; private rentals inexpensive",
      career: [
        "6-year pathway (5 + 1 internship)",
        "FMGE/NExT prep common; select grads target PLAB/USMLE",
      ],
      cities: ["Bishkek", "Osh"],
    },
    {
      name: "Kazakhstan",
      flag: "https://flagcdn.com/w40/kz.png",
      highlight: "Balanced fees with good infrastructure in Almaty/Astana",
      feesNote: "Total ~₹25–33L for 6 yrs incl. hostel/insurance",
      feesPerYear: "US$3,000–7,000/yr",
      living: "~US$100–300/month in hostels; more for private rentals",
      environment:
        "Modern cities, structured curriculum; English/Russian mediums vary by university",
      indianCommunity:
        "Steady Indian cohort; Indian groceries and mess options in big cities",
      stay: "University hostels + private apartments around campuses",
      career: [
        "1-year internship typically part of program",
        "FMGE/NExT route in India; GCC/UK options with exams",
      ],
      cities: ["Almaty", "Astana", "Karaganda", "Shymkent"],
    },
    {
      name: "Russia",
      flag: "https://flagcdn.com/w40/ru.png",
      highlight:
        "Established medical education hub with many WHO-listed universities",
      feesNote:
        "Total ~₹19–41L for 6 yrs incl. hostel/insurance (varies widely)",
      feesPerYear: "~₽2,50,000–5,30,000 (≈₹2.4–5.1L)/yr",
      living:
        "City dependent (higher in Moscow/St. Petersburg); campus hostels moderate",
      environment:
        "Strong fundamentals, labs & teaching hospitals; some programs bilingual (English + Russian)",
      indianCommunity:
        "Very large Indian student population across multiple cities",
      stay: "Hostels are standard; private stay possible near campus",
      career: [
        "Integrated clinical rotations; 6-year MD equivalent",
        "FMGE/NExT in India; some pursue residency abroad (PLAB/USMLE)",
      ],
      cities: ["Kazan", "Moscow", "Ryazan", "Kursk", "Volgograd"],
    },
    {
      name: "Uzbekistan",
      flag: "https://flagcdn.com/w40/uz.png",
      highlight:
        "Low living cost, English-medium options in Tashkent/Samarkand/Andijan",
      feesNote: "Total ~₹23–26L for full course (6 yrs incl. hostel/insurance)",
      feesPerYear: "~US$2,800–4,000/yr",
      living: "₹10k–15k/month incl. hostel (city-dependent)",
      environment:
        "Continental climate (cold winters), safe student cities, practical exposure improves in senior years",
      indianCommunity:
        "Growing Indian student cohort; Indian mess options at major campuses",
      stay: "On-campus hostels common; private apartments affordable outside city cores",
      career: [
        "Internship typically integrated in year 6; rotations in teaching hospitals",
        "Graduates prepare for FMGE/NExT; some attempt USMLE/PLAB",
      ],
      cities: ["Tashkent", "Samarkand", "Andijan", "Bukhara"],
    },
    {
      name: "China",
      flag: "https://flagcdn.com/w40/cn.png",
      highlight:
        "Globally recognized medical programs with advanced facilities and affordable tuition",
      feesNote: "Total ~₹20–30L for 6 yrs including internship and hostel",
      feesPerYear: "~US$4,000–6,000/yr",
      living: "₹15k–25k/month (depending on city)",
      environment:
        "Modern infrastructure, large teaching hospitals, and cultural exposure",
      indianCommunity:
        "Strong Indian student network in cities like Nanjing, Wuhan, and Guangzhou",
      stay: "Well-furnished university dorms and affordable apartments available",
      career: [
        "MBBS (6 years) recognized by WHO; clinical exposure high",
        "FMGE/NExT exam eligibility for Indian students; options for PG in China or India",
      ],
      cities: ["Nanjing", "Wuhan", "Guangzhou", "Beijing"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center gap-3">
            <Globe2 className="h-6 w-6" aria-hidden />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Top 5 Affordable Countries for MBBS Abroad <CurrentYear/>
            </h1>
          </div>
          <p className="mt-1 text-gray-900/90 text-sm sm:text-base">
            Snapshot of fees, living costs, study environment, Indian community,
            and career pathways.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {countries.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
            >
              <header className="border-b border-gray-100 p-4 sm:p-6 flex justify-start items-center gap-4">
                <img
                  src={c.flag}
                  alt={`${c.name} flag`}
                  className=" rounded-sm ring-1 ring-black/10 h-8 w-10"
                />
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{c.highlight}</p>
                </div>
              </header>

              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-xl bg-[#EDEEEB] p-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-5 w-5" />
                    <h3 className="font-semibold">Costs</h3>
                  </div>
                  <ul className="mt-2 text-sm leading-6 list-disc list-inside">
                    <li>
                      <span className="font-medium">Tuition:</span>{" "}
                      {c.feesPerYear}{" "}
                      <span className="text-gray-600">({c.feesNote})</span>
                    </li>
                    <li>
                      <span className="font-medium">Living:</span> {c.living}
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#EDEEEB] p-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    <h3 className="font-semibold">Living & Stay</h3>
                  </div>
                  <ul className="mt-2 text-sm leading-6 list-disc list-inside">
                    <li>
                      <span className="font-medium">Stay:</span> {c.stay}
                    </li>
                    <li>
                      <span className="font-medium">Environment:</span>{" "}
                      {c.environment}
                    </li>
                    <li>
                      <span className="font-medium">Key Cities:</span>{" "}
                      {c.cities.join(", ")}
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#EDEEEB] p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <h3 className="font-semibold">Indian Community</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6">{c.indianCommunity}</p>
                </div>

                <div className="rounded-xl bg-[#EDEEEB] p-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    <h3 className="font-semibold">Career Pathways</h3>
                  </div>
                  <ul className="mt-2 text-sm leading-6 list-disc list-inside">
                    {c.career.map((k) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="border-t border-gray-100 p-4 sm:p-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
                  <GraduationCap className="h-4 w-4" /> 6-year MBBS-equivalent*
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
                  <MapPin className="h-4 w-4" /> {c.cities[0]} & more
                </div>
              </footer>
            </article>
          ))}

          <div className="text-xs text-gray-600">
            *Degree titles (MD/MBBS) and internship structure vary by
            country/university. Verify current NMC requirements and university
            medium of instruction before applying.
          </div>
        </div>

        <aside className="lg:col-span-1">
          {showCTA && (
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
                <h3 className="text-lg font-semibold">
                  Talk to an MBBS Abroad Advisor
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Get a personalized shortlist, eligibility check, and latest
                  fee breakdowns.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+917887881060"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FFC067] text-black px-4 py-2 font-semibold shadow-sm hover:bg-[#3187e2]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/+917887881060"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#31393C] px-4 py-2 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                  >
                    WhatsApp Counselling
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-[#EDEEEB] p-4 text-sm text-[#31393C]">
                <p className="font-semibold">Heads-up</p>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>
                    Confirm English-medium curriculum and hospital rotations.
                  </li>
                  <li>
                    Budget for visa, flights, health insurance, books, exam
                    prep.
                  </li>
                  <li>
                    Track NMC Gazette updates for eligibility & licensing
                    pathways.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

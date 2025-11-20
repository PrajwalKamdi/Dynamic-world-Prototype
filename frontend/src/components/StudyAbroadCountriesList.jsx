// MBBSInBangladesh.jsx
import {
  BadgeCheck,
  CheckCircle,
  Clock8,
  GraduationCap,
  IndianRupee,
  Languages,
  MapPin,
  University,
} from "lucide-react";

export const MBBSInGeorgia = () => {
  const advantagesData = [
    {
      text: "Medical universities are recognised by NMC and WHO.",
      position: "top",
    },
    { text: "No requirement for an IELTS or TOEFL score.", position: "bottom" },
    {
      text: "A straightforward admission process with a passing NEET score.",
      position: "top",
    },
    {
      text: "Unparalleled quality of education with advanced technology.",
      position: "bottom",
    },
    {
      text: "An affordable fee structure with high-class facilities.",
      position: "top",
    },
    {
      text: "Availability of Indian food and widespread use of English.",
      position: "bottom",
    },
    {
      text: "An extremely safe country with hassle-free Visa securement.",
      position: "top",
    },
  ];

  const universities = [
    { no: 1, name: "European University", location: "Tbilisi" },
    { no: 2, name: "David Tvildiani Medical University", location: "Tbilisi" },
    { no: 3, name: "Caucasus University", location: "Tbilisi" },
    { no: 4, name: "University of Georgia", location: "Tbilisi" },
    { no: 5, name: "New Vision University", location: "Tbilisi" },
    { no: 6, name: "Georgian American University", location: "Tbilisi" },
  ];

  return (
    <div className="font-sans text-[#31393C]">
      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl">
        <div className="bg-[#FFC067] text-black">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  MBBS in Georgia
                </h1>
                <p className="mt-3 inline-flex items-center bg-white/15 px-3 py-1 rounded-full text-sm">
                  <BadgeCheck className="w-4 h-4 mr-2" /> Trusted Guidance for
                  Indian Students
                </p>
                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <GraduationCap className="w-3.5 h-3.5" /> NMC/WHO Recognised
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Languages className="w-3.5 h-3.5" /> English Friendly
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Clock8 className="w-3.5 h-3.5" /> ~6 Years incl. internship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <IndianRupee className="w-3.5 h-3.5" /> Cost-effective
                  </span>
                </div>
              </div>

              <p className="lg:w-2/3 text-blue-50 leading-relaxed text-sm lg:text-base">
                Spanning six years, the MBBS program in Georgia offers
                world-class theoretical and practical training, preparing you
                for a global medical career.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {/* ===== Section: Advantages ===== */}
        <section className="mt-10 sm:mt-12">
          <h2 className="relative z-10 text-2xl lg:text-3xl font-extrabold text-black text-center mb-b md:mb-16">
            Advantages of Studying MBBS in Georgia
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative w-full pt-16 pb-10 px-8">
            {/* dashed spine behind content */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] z-0" />
            <div className="relative z-10 grid grid-cols-7 gap-4">
              {advantagesData.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  {/* bubble */}
                  <div
                    className={[
                      "absolute w-56 text-center left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-sm transition",
                      item.position === "top"
                        ? "bottom-full mb-8"
                        : "top-full mt-8",
                    ].join(" ")}
                  >
                    <p className="font-medium text-gray-900 text-xs flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden />
                      <span>{item.text}</span>
                    </p>
                  </div>

                  {/* connector */}
                  <div
                    className={[
                      "absolute w-0.5 bg-gray-300",
                      item.position === "top"
                        ? "h-6 bottom-[calc(100%+0.5rem)]"
                        : "h-6 top-[calc(100%+0.5rem)]",
                    ].join(" ")}
                  />

                  {/* node */}
                  <div
                    className="relative w-5 h-5 bg-[#FFC067] rounded-full ring-4 ring-white shadow"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet list */}
          <ul className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantagesData.map((item, idx) => (
              <li
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 mt-0.5" aria-hidden />
                <span className="text-black text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Section: Universities ===== */}
        <section className="mt-6 md:mt-20">
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Top Medical Universities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <article
                key={uni.no}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                    {uni.no}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                      <University
                        className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{uni.name}</span>
                    </h4>
                    <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                      <MapPin
                        className="w-4 h-4 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span>{uni.location}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const MBBSInBangladesh = () => {
  const advantagesData = [
    { text: "NMC recognised medical universities.", position: "top" },
    {
      text: "NEET score required; no other entrance exam.",
      position: "bottom",
    },
    { text: "Affordable tuition + economical living costs.", position: "top" },
    { text: "English medium of instruction.", position: "bottom" },
    { text: "Syllabus & exams similar to India.", position: "top" },
    { text: "1-year internship in reputed hospitals.", position: "bottom" },
    { text: "Strong, hands-on practical training.", position: "top" },
    {
      text: "Lifestyle similar to India for easy transition.",
      position: "bottom",
    },
  ];

  const universities = [
    {
      no: 1,
      name: "Anwer Khan Modern Medical College Hospital",
      location: "Dhaka",
    },
    { no: 2, name: "Green Life Medical College", location: "Dhaka" },
    {
      no: 3,
      name: "Holy Family Red Crescent Medical College Hospital",
      location: "Dhaka",
    },
    { no: 4, name: "Dhaka National Medical College", location: "Dhaka" },
    { no: 5, name: "TMSS Medical College", location: "Bogura" },
  ];

  return (
    <div className="font-sans text-[#31393C]">
      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl">
        <div className="bg-[#FFC067] text-black ring-1 ring-black/5">
          <div className="p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              MBBS in Bangladesh
            </h1>
            <p className="mt-3 inline-flex items-center bg-white/15 px-3 py-1 rounded-full text-sm">
              <BadgeCheck className="w-4 h-4 mr-2" /> Trusted Guidance for
              Indian Students
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                <GraduationCap className="w-3.5 h-3.5" /> NMC-Recognised
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                <Languages className="w-3.5 h-3.5" /> English Medium
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                <Clock8 className="w-3.5 h-3.5" /> ~6 Years incl. internship
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                <IndianRupee className="w-3.5 h-3.5" /> Cost-effective
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {/* ===== Section: Advantages ===== */}
        <section className="mt-10 sm:mt-12">
          <h2 className="relative z-10 text-2xl lg:text-3xl font-extrabold text-black text-center mb-6">
            Advantages of Studying MBBS in Bangladesh
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative w-full pt-20 pb-10 px-8">
            {/* center dashed line behind everything */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] z-0" />
            <div className="relative z-10 grid grid-cols-8 gap-4">
              {advantagesData.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  {/* bubble */}
                  <div
                    className={[
                      "absolute w-56 text-center left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-sm transition",
                      item.position === "top"
                        ? "bottom-full mb-8"
                        : "top-full mt-8",
                    ].join(" ")}
                  >
                    <p className="font-medium text-gray-900 text-xs flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden />
                      <span>{item.text}</span>
                    </p>
                  </div>

                  {/* connector */}
                  <div
                    className={[
                      "absolute w-0.5 bg-gray-300",
                      item.position === "top"
                        ? "h-6 bottom-[calc(100%+0.5rem)]"
                        : "h-6 top-[calc(100%+0.5rem)]",
                    ].join(" ")}
                  />

                  {/* node */}
                  <div
                    className="relative w-5 h-5 bg-[#FFC067] rounded-full ring-4 ring-white shadow"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet list */}
          <ul className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantagesData.map((item, idx) => (
              <li
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 mt-0.5" aria-hidden />
                <span className="text-black text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Section: Universities ===== */}
        <section className="mt-20">
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Top NMC/MCI-Approved Medical Universities in Bangladesh
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {universities.map((uni) => (
              <article
                key={uni.no}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                    {uni.no}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                      <University
                        className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{uni.name}</span>
                    </h4>
                    <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                      <MapPin
                        className="w-4 h-4 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span>{uni.location}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
// MBBSInKazakhstanKyrgyzstan.jsx

export const MBBSInKazakhstanKyrgyzstan = () => {
  // Advantages timeline
  const advantagesData = [
    { text: "Recognised by WHO, NMC, IMED, USMLE, and IMED.", position: "top" },
    { text: "A hassle-free admission process.", position: "bottom" },
    {
      text: "No hefty fees, donations, or capitation required.",
      position: "top",
    },
    {
      text: "Affordable tuition fees and economical cost of living.",
      position: "bottom",
    },
    { text: "A high standard of education is maintained.", position: "top" },
    { text: "No requirement for any entrance exam score.", position: "bottom" },
    { text: "Opportunity to gain international exposure.", position: "top" },
    { text: "Equips students for global competition.", position: "bottom" },
    {
      text: "Privilege to choose the credit hour system offered.",
      position: "top",
    },
  ];

  // Kazakhstan
  const kazakhstanUniversities = [
    { no: 1, name: "Kazakh National Medical University", location: "Almaty" },
    {
      no: 2,
      name: "West Kazakhstan Marat Ospanov State Medical University",
      location: "Aktobe",
    },
    { no: 3, name: "Asian Medical Institute", location: "Kant" },
  ];

  // Kyrgyzstan (add when ready)
  const kyrgyzstanUniversities = [
    // { no: 1, name: "Kyrgyz State Medical Academy", location: "Bishkek" },
    // { no: 2, name: "Jalal-Abad State University", location: "Jalal-Abad" },
  ];

  return (
    <div className=" text-[#31393C]">
      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl">
        <div className="bg-[#FFC067] text-black ">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  MBBS in Kazakhstan & Kyrgyzstan
                </h1>
                <p className="mt-3 inline-flex items-center bg-white/15 px-3 py-1 rounded-full text-sm">
                  <BadgeCheck className="w-4 h-4 mr-2" /> Trusted Guidance for
                  Indian Students
                </p>

                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <GraduationCap className="w-3.5 h-3.5" /> NMC/WHO Recognised
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Languages className="w-3.5 h-3.5" /> English Friendly
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Clock8 className="w-3.5 h-3.5" /> ~6 Years incl. internship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <IndianRupee className="w-3.5 h-3.5" /> Cost-effective
                  </span>
                </div>
              </div>

              <p className="lg:w-2/3 text-blue-50 leading-relaxed text-sm lg:text-base">
                The six-year MBBS program across Kazakhstan and Kyrgyzstan
                includes five years of clinical studies and a one-year
                internship, offering strong practical exposure with modern
                facilities.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {/* ===== Advantages Section ===== */}
        <section className="mt-10 sm:mt-12">
          <h2 className="relative z-10 text-2xl lg:text-3xl font-extrabold text-black text-center mb-6 md:mb-16">
            Advantages of Studying MBBS in Kazakhstan & Kyrgyzstan
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative w-full pt-16 pb-10 px-8">
            {/* dashed spine behind content */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] z-0 " />
            <div className="relative z-10 grid grid-cols-9 gap-4">
              {advantagesData.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  {/* bubble */}
                  <div
                    className={[
                      "absolute w-56 text-center left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-sm transition",
                      item.position === "top"
                        ? "bottom-full mb-8"
                        : "top-full mt-8",
                    ].join(" ")}
                  >
                    <p className="font-medium text-gray-900 text-xs flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden />
                      <span>{item.text}</span>
                    </p>
                  </div>

                  {/* connector */}
                  <div
                    className={[
                      "absolute w-0.5 bg-gray-300",
                      item.position === "top"
                        ? "h-6 bottom-[calc(100%+0.5rem)]"
                        : "h-6 top-[calc(100%+0.5rem)]",
                    ].join(" ")}
                  />

                  {/* node */}
                  <div
                    className="relative w-5 h-5 bg-[#FFC067] rounded-full ring-4 ring-white shadow"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet list */}
          <ul className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantagesData.map((item, idx) => (
              <li
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 mt-0.5" aria-hidden />
                <span className="text-black text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Universities: Kazakhstan ===== */}
        <section className="mt-6 md:mt-16">
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Top NMC/MCI-Approved Medical Universities (Kazakhstan)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kazakhstanUniversities.map((uni) => (
              <article
                key={uni.no}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                    {uni.no}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                      <University
                        className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{uni.name}</span>
                    </h4>
                    <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                      <MapPin
                        className="w-4 h-4 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span>{uni.location}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Universities: Kyrgyzstan (shows only if data present) ===== */}
        {kyrgyzstanUniversities.length > 0 && (
          <>
            <div className="my-10 border-t border-gray-300/60" />
            <section className="mt-6">
              <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
                Top NMC/MCI-Approved Medical Universities (Kyrgyzstan)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kyrgyzstanUniversities.map((uni) => (
                  <article
                    key={uni.no}
                    className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                        {uni.no}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                          <University
                            className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                            aria-hidden
                          />
                          <span className="line-clamp-2">{uni.name}</span>
                        </h4>
                        <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                          <MapPin
                            className="w-4 h-4 shrink-0 opacity-70"
                            aria-hidden
                          />
                          <span>{uni.location}</span>
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
// UzbekistanPhilippines.jsx

export const MBBSInUzbekistanPhilippines = () => {
  // Advantages timeline
  const advantagesData = [
    {
      text: "Medical universities accredited/recognized by WHO, NMC, ECFMG, FAIMER.",
      position: "top",
    },
    {
      text: "NEET score required; no other entrance exam.",
      position: "bottom",
    },
    {
      text: "Modern teaching technology; English as the medium of instruction.",
      position: "top",
    },
    {
      text: "Excellent academic framework and moderate climate.",
      position: "bottom",
    },
    {
      text: "Low cost of essentials and living; hostels/apartments with mess facilities.",
      position: "top",
    },
    {
      text: "Indian mess and food available on campus and nearby.",
      position: "bottom",
    },
    {
      text: "Convenient travel with frequent non-stop flights.",
      position: "top",
    },
  ];

  // Combined universities (Uzbekistan + Philippines)
  const universities = [
    {
      no: 1,
      name: "Andijan State Medical Institute (ASMI)",
      location: "Andijan",
    },
    {
      no: 2,
      name: "Samarkand State Medical Institute (SSMI)",
      location: "Samarkand",
    },
    { no: 3, name: "Brokenshire College", location: "Davao City, Philippines" }, // corrected spelling
  ];

  return (
    <div className="font-sans text-[#31393C]">
      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl">
        <div className="bg-[#FFC067] text-black">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  MBBS in Uzbekistan & the Philippines
                </h1>
                <p className="mt-3 inline-flex items-center bg-white/15 px-3 py-1 rounded-full text-sm">
                  <BadgeCheck className="w-4 h-4 mr-2" /> Trusted Guidance for
                  Indian Students
                </p>

                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <GraduationCap className="w-3.5 h-3.5" /> WHO/NMC Recognised
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Languages className="w-3.5 h-3.5" /> English Medium
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Clock8 className="w-3.5 h-3.5" /> ~6 Years incl. internship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <IndianRupee className="w-3.5 h-3.5" /> Cost-effective
                  </span>
                </div>
              </div>

              <p className="lg:w-2/3 text-blue-50 leading-relaxed text-sm lg:text-base">
                Universities in Uzbekistan and the Philippines offer a 6-year
                MBBS in English at an accessible cost: 5 years of
                academics/clinical rotations plus a 1-year internship, with
                strong hands-on exposure and affiliated hospital rounds.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {/* ===== Advantages ===== */}
        <section className="mt-10 sm:mt-12">
          <h2 className="relative z-10 text-2xl lg:text-3xl font-extrabold text-black text-center mb-6 md:mb-16">
            Advantages of Studying MBBS in Uzbekistan & the Philippines
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative w-full pt-16 pb-10 px-8">
            {/* dashed spine behind content */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] z-0" />
            <div className="relative z-10 grid grid-cols-7 gap-4">
              {advantagesData.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  {/* bubble */}
                  <div
                    className={[
                      "absolute w-56 text-center left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-sm transition",
                      item.position === "top"
                        ? "bottom-full mb-8"
                        : "top-full mt-8",
                    ].join(" ")}
                  >
                    <p className="font-medium text-gray-900 text-xs flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden />
                      <span>{item.text}</span>
                    </p>
                  </div>

                  {/* connector */}
                  <div
                    className={[
                      "absolute w-0.5 bg-gray-300",
                      item.position === "top"
                        ? "h-6 bottom-[calc(100%+0.5rem)]"
                        : "h-6 top-[calc(100%+0.5rem)]",
                    ].join(" ")}
                  />

                  {/* node */}
                  <div
                    className="relative w-5 h-5 bg-[#FFC067] rounded-full ring-4 ring-white shadow"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet list */}
          <ul className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantagesData.map((item, idx) => (
              <li
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 mt-0.5" aria-hidden />
                <span className="text-black text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Universities ===== */}
        <section className="mt-6 md:mt-16">
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Top NMC/MCI-Approved Medical Universities (Uzbekistan & Philippines)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <article
                key={uni.no}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                    {uni.no}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                      <University
                        className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{uni.name}</span>
                    </h4>
                    <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                      <MapPin
                        className="w-4 h-4 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span>{uni.location}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
// MBBSInRussia.jsx

export const MBBSInRussia = () => {
  // Advantages timeline
  const advantagesData = [
    {
      text: "Medical universities are recognised by NMC / MCI.",
      position: "top",
    },
    { text: "Affordable tuition fees and cost of living.", position: "bottom" },
    { text: "No donations or capitation fees.", position: "top" },
    { text: "No requirement for an IELTS or TOEFL score.", position: "bottom" },
    {
      text: "Comfortable hostels with hygienic Indian mess facilities.",
      position: "top",
    },
    { text: "English as the medium of medical education.", position: "bottom" },
    {
      text: "Guidance to learn Russian for smoother communication.",
      position: "top",
    },
    {
      text: "Advanced classrooms and well-equipped laboratories.",
      position: "bottom",
    },
    {
      text: "Practical exposure in affiliated world-class hospitals.",
      position: "top",
    },
  ];

  // Universities
  const universities = [
    { no: 1, name: "Bashkir State Medical University", location: "Ufa" },
    {
      no: 2,
      name: "Yaroslav-the-Wise Novgorod State University",
      location: "Veliky Novgorod",
    },
    { no: 3, name: "Orel State Medical University", location: "Orel" },
    {
      no: 4,
      name: "Kabardino-Balkarian State University",
      location: "Nalchik",
    },
    { no: 5, name: "Kemerovo State University", location: "Kemerovo" },
    { no: 6, name: "Tver State Medical University", location: "Tver" },
    { no: 7, name: "Samara State University", location: "Samara" },
    {
      no: 8,
      name: "Chuvash State University",
      location: "Cheboksary (Chuvashia)",
    },
    { no: 9, name: "Kursk State Medical University", location: "Kursk" },
    { no: 10, name: "Kazan State Medical University", location: "Kazan" },
  ];

  return (
    <div className="font-sans text-[#31393C]">
      {/* ===== Hero ===== */}
      <header className="mx-auto max-w-7xl">
        <div className="bg-[#FFC067] text-black ">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  MBBS in Russia
                </h1>
                <p className="mt-3 inline-flex items-center bg-white/15 px-3 py-1 rounded-full text-sm">
                  <BadgeCheck className="w-4 h-4 mr-2" /> Trusted Guidance for
                  Indian Students
                </p>

                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <GraduationCap className="w-3.5 h-3.5" /> NMC/MCI Recognised
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Languages className="w-3.5 h-3.5" /> English Medium
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <Clock8 className="w-3.5 h-3.5" /> ~6 Years incl. internship
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">
                    <IndianRupee className="w-3.5 h-3.5" /> Cost-effective
                  </span>
                </div>
              </div>

              <p className="lg:w-2/3 text-blue-50 leading-relaxed text-sm lg:text-base">
                A coveted destination for over a decade: Russia’s MBBS includes
                five years of study plus a one-year internship, with strong
                clinical exposure and modern facilities.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        {/* ===== Advantages ===== */}
        <section className="mt-10 sm:mt-12">
          <h2 className="relative z-10 text-2xl lg:text-3xl font-extrabold text-black text-center mb-6 md:mb-16">
            Advantages of Studying MBBS in Russia
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative w-full pt-16 pb-10 px-8">
            {/* dashed spine behind content */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] z-0" />
            <div className="relative z-10 grid grid-cols-9 gap-4">
              {advantagesData.map((item, index) => (
                <div key={index} className="relative flex justify-center">
                  {/* bubble */}
                  <div
                    className={[
                      "absolute w-56 text-center left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-sm transition",
                      item.position === "top"
                        ? "bottom-full mb-8"
                        : "top-full mt-8",
                    ].join(" ")}
                  >
                    <p className="font-medium text-gray-900 text-xs flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden />
                      <span>{item.text}</span>
                    </p>
                  </div>

                  {/* connector */}
                  <div
                    className={[
                      "absolute w-0.5 bg-gray-300",
                      item.position === "top"
                        ? "h-6 bottom-[calc(100%+0.5rem)]"
                        : "h-6 top-[calc(100%+0.5rem)]",
                    ].join(" ")}
                  />

                  {/* node */}
                  <div
                    className="relative w-5 h-5 bg-[#FFC067] rounded-full ring-4 ring-white shadow"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet list */}
          <ul className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantagesData.map((item, idx) => (
              <li
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 mt-0.5" aria-hidden />
                <span className="text-black text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Universities ===== */}
        <section className="mt-6 md:mt-16">
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Top Medical Universities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <article
                key={uni.no}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC067] text-black font-bold text-lg ring-1 ring-black/5">
                    {uni.no}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black text-base leading-snug flex items-start gap-2">
                      <University
                        className="w-4 h-4 mt-0.5 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{uni.name}</span>
                    </h4>
                    <p className="text-sm mt-1 flex items-center gap-2 text-gray-700">
                      <MapPin
                        className="w-4 h-4 shrink-0 opacity-70"
                        aria-hidden
                      />
                      <span>{uni.location}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

/** ---------- Lightweight SVG Icons (now accept className) ---------- */
const IconCheckCircle = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const IconInfo = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3a9 9 0 100 18 9 9 0 000-18zM2.458 12C3.732 7.943 7.52 5 12 5c4.48 0 8.268 2.943 9.542 7-1.274 4.057-5.062 7-9.542 7-4.48 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const IconChat = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

/** ---------- Component ---------- */
export const AdmissionCulturalBenefits = () => {
  return (
    <div className=" bg-[#EDEEEB] text-[#31393C] antialiased py-20">
      <main className="max-w-4xl mx-auto">
        {/* Admission Benefits */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#31393C] mb-6 flex items-center justify-center">
            <span className="inline-flex items-center justify-center bg-[#FFC067] text-black rounded-md p-2 mr-3">
              <IconInfo className="w-6 h-6" />
            </span>
            Admission Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Foreign medical universities have a good number of MBBS seats for international students.",
              "The entire MBBS course fees range between INR 15 to 60 lakhs.",
              "Admission in MBBS abroad is possible with a passing NEET score.",
              "No donations are required for admissions in case of MBBS abroad.",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow-sm ring-1 ring-gray-200/80 flex items-start"
              >
                <IconCheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <p className="text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Benefits */}
        <section className=" rounded-2xl shadow-md ring-1 ring-blue-200/60 bg-[#FFC067] text-black p-6">
          <h2 className="text-2xl font-bold mb-5 flex items-center">
            Cultural Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Multicultural environment at foreign medical universities with peers from many countries.",
              "Students can learn a second language during their MBBS abroad.",
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <IconArrowRight className="w-4 h-4 text-white mt-1" />
                <p className="text-base ml-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const IconCheck = ({
  className = "w-4 h-4 text-green-600 mr-2 flex-shrink-0",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export const UltraLightweightLandingPage = () => {
  return (
    <div className="min-h-screen  text-[#31393C] antialiased">
      {/* Main Content */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3E96F4] via-[#3E96F4]/90 to-[#EDEEEB] text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtaitsw4r/image/upload/v1761197698/vecteezy_world-map-with-glowing-lines-and-dots-on-blue-background_33692696_ww3tvd.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-sm">
            Is <span className="text-[#FFD43B]">MBBS Abroad</span> Worth It?
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-900/90 mb-8 max-w-3xl mx-auto">
            Absolutely. Unlock your global medical career with world-class
            education and unmatched exposure.
          </p>

          {/* Quick Stats */}
          <div className="max-w-2xl mx-auto grid grid-cols-3 gap-6">
            {[
              { k: "40K+", v: "Successful Admissions" },
              { k: "80K+", v: "Global Courses" },
              { k: "100+", v: "Partner Universities" },
            ].map((s) => (
              <div
                key={s.v}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 shadow-sm"
              >
                <p className="text-2xl font-bold text-[#FFD43B]">{s.k}</p>
                <p className="text-sm text-gray-900/80 tracking-wide">{s.v}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="tel:+91 7887881060"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#3E96F4] font-semibold text-lg py-3 px-8 rounded-full shadow-md hover:bg-[#FFD43B] hover:text-black transition-all duration-200"
            >
              Get Free Counselling
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto py-10 px-6 md:px-8 lg:px-12">
        {/* Overview */}
        <section className="mb-10 p-6 rounded-2xl bg-white shadow-sm ring-1 ring-blue-100">
          <h2 className="text-2xl font-bold text-[#3E96F4] mb-3">
            Your Global Medical Journey
          </h2>
          <p className="text-base leading-relaxed">
            Facing limited seats and high fees in India? MBBS abroad offers a
            proven, transformative path. Dynamic World partners with
            NMC/MCI-recognized global universities, ensuring your degree opens
            doors worldwide.
          </p>
        </section>

        {/* Advantages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Key Advantages
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Ultramodern Facilities & Tech",
              "Hands-on, Practice-Based Learning",
              "Global Exposure & Networking",
              "Simulation Training for Real Skills",
              "Excellent Student-Teacher Ratio",
              "NMC/MCI Recognized Degrees",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start bg-white p-3 rounded-xl border border-gray-200"
              >
                <IconCheck />
                <span className="text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-bold text-[#3E96F4] mb-4">
            Ready for Your Success?
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Get expert guidance for your MBBS journey abroad.
          </p>
          <a
            href="https://wa.me/917887881060"
            className="inline-flex items-center justify-center bg-[#FFC067] text-black font-semibold text-lg py-3 px-8 rounded-full shadow-md transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3E96F4] focus-visible:ring-offset-white"
            aria-label="Get Your Free Consultation"
          >
            Get Your Free Consultation
            <IconArrowRight />
          </a>
        </section>
      </main>
    </div>
  );
};

export default MBBSInBangladesh;

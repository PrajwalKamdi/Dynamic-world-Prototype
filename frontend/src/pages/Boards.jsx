import React from "react";

const SECTIONS = [
  { id: "msbshse", no: "1", title: "Maharashtra State Board (MSBSHSE)" },
  {
    id: "bosse",
    no: "2",
    title: "BOSSE (Board of Open Schooling and Skill Education, Sikkim)",
  },
  {
    id: "nwac",
    no: "3",
    title: "Northwest Accreditation Commission (NWAC), USA",
  },
  { id: "jua", no: "4", title: "Jamia Urdu Aligarh (JUA)" },
  { id: "nios", no: "5", title: "NIOS (National Institute of Open Schooling)" },
];

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-[#EDEEEB] px-2 py-0.5 text-[10px] md:text-xs font-medium text-[#31393C]">
    {children}
  </span>
);

const Card = ({ id, header, logo, logoAlt, children }) => (
  <section
    id={id}
    className="group relative rounded-xl border border-gray-100 bg-white p-4 md:p-6 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md"
  >
    {/* Anchor offset helper for sticky header scroll */}
    <div
      className="pointer-events-none absolute -top-20 md:-top-24"
      aria-hidden
    />
    <div className="flex flex-col gap-2 md:gap-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg md:text-2xl font-semibold text-[#31393C] leading-snug">
          {header}
        </h2>
        {logo ? (
          <img
            src={logo}
            alt={logoAlt || "logo"}
            className="h-12 md:h-16 w-auto shrink-0 rounded-md border border-gray-100 object-contain bg-white"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        <Chip>Recognized Board</Chip>
        <Chip>Valid Across India</Chip>
      </div>
    </div>

    <div className="mt-3 md:mt-4 prose prose-xs md:prose-sm max-w-none text-[#31393C] prose-headings:text-[#31393C] prose-li:marker:text-[#3E96F4]">
      {children}
    </div>

    <div className="mt-4 md:mt-6 flex justify-end">
      <a
        href={`#top`}
        className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs md:text-sm text-[#31393C] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4]"
      >
        Back to top ↑
      </a>
    </div>

    {/* Subtle corner accent */}
    <span className="pointer-events-none absolute right-0 top-0 h-8 w-8 md:h-10 md:w-10 rounded-tr-xl bg-gradient-to-bl from-[#3E96F4]/20 to-transparent" />
  </section>
);

const Boards = () => {
  return (
    <section id="top" className="min-h-screen w-full text-[#31393C]">
      {/* Header */}
      <header className="relative overflow-hidden bg-[#FFC067] text-black">
        {/* Gradient + pattern */}
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_30%,white_0,transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-6 md:py-8">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-tight">
            Educational Boards Overview
          </h1>
          <p className="mt-2 md:mt-3 max-w-2xl text-xs md:text-base text-gray-900/90">
            Compare recognition, subjects and exam systems across major boards.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5 md:gap-7 lg:gap-10">
          {/* Main column */}
          <div className="space-y-6 md:space-y-8">
         
            <Card
              id="msbshse"
              header="1. Maharashtra State Board (MSBSHSE)"
              logo="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762331437/Maharashtra_10th_12th_Board_Exam_2026_Datesheet_Releases_Soon-2390-logo_udqnxm.png"
              logoAlt="MSBSHSE Logo"
            >
              <p>
                The Maharashtra State Board of Secondary and Higher Secondary
                Education (MSBSHSE) is an autonomous body established under the{" "}
                <em>Maharashtra Secondary Boards Act</em> 1965 (amended in
                1977). It conducts the SSC (Class 10) and HSC (Class 12)
                examinations in Maharashtra, India.
              </p>
              <p className="mt-2">
                <strong>Headquarters:</strong> Pune, with nine divisional boards
                at Pune, Mumbai, Chhatrapati Sambhaji Nagar, Nashik, Kolhapur,
                Amravati, Latur, Nagpur, and Konkan.
              </p>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                HSC Streams and Subjects
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Science:</b> Physics, Chemistry, Biology, Mathematics &amp;
                  Statistics, IT, English, Environmental Education.
                </li>
                <li>
                  <b>Commerce:</b> Accountancy, Commerce &amp; Management,
                  Economics, Secretarial Practice, Mathematics &amp; Statistics,
                  English, Environmental Education.
                </li>
                <li>
                  <b>Arts:</b> History, Geography, Political Science, Economics,
                  Logic, Psychology, Sociology, English, Environmental
                  Education.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Recognition and Validity
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Recognized by the Government of Maharashtra.</li>
                <li>
                  Member of COBSE (Council of Boards of School Education in
                  India).
                </li>
                <li>
                  Accepted for higher education and employment across India.
                </li>
                <li>Certificates available digitally via DigiLocker.</li>
              </ul>
            </Card>
            <Card
              id="bosse"
              header="2. BOSSE (Board of Open Schooling and Skill Education, Sikkim)"
              logo="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762331435/logo_byljnb.png"
              logoAlt="BOSSE Logo"
            >
              <p>
                BOSSE is a state open schooling board established by the
                Government of Sikkim, recognized for secondary and senior
                secondary education with academic and vocational options.
              </p>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Recognition and Approvals
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Member of COBSE.</li>
                <li>
                  Granted AIU equivalence for higher education and employment.
                </li>
                <li>
                  Recognized by NIOS and professional councils like PCI and INC.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Streams and Subjects
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Languages:</b> Hindi, English, Urdu, Sanskrit, Bengali,
                  Tamil.
                </li>
                <li>
                  <b>Academic:</b> Mathematics, Physics, Chemistry, Biology,
                  Economics, Business Studies.
                </li>
                <li>
                  <b>Vocational:</b> Data Entry, Secretarial Practice,
                  Entrepreneurship, House Keeping.
                </li>
              </ul>
            </Card>
            <Card
              id="nwac"
              header="3. Northwest Accreditation Commission (NWAC), USA"
              logo="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762331435/Northwest_Accreditation_Commission__NWAC__Logo_gb58yf.jpg"
              logoAlt="NWAC"
            >
              <p>
                NWAC is a U.S.-based accreditation body that offers an American
                High School Diploma recognized in India as equivalent to Grade
                12.
              </p>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Recognition and Approvals
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Associate Member of COBSE since 2019.</li>
                <li>
                  AIU accords equivalence to Grade 12/Senior Secondary (+2)
                  level in India.
                </li>
                <li>
                  Accepted for higher education and university admissions across
                  India.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Streams and Subjects
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Science:</b> English, Physics, Chemistry, Mathematics,
                  Biology, Computer Science, Psychology.
                </li>
                <li>
                  <b>Commerce:</b> Accountancy, Business Studies, Economics,
                  English, Mathematics, Computer Science.
                </li>
                <li>
                  <b>Arts:</b> English, History, Political Science, Sociology,
                  Psychology, Mathematics.
                </li>
              </ul>
            </Card>
            <Card
              id="jua"
              header="4. Jamia Urdu Aligarh (JUA)"
              logo="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762331435/images_dhoviz.jpg"
              logoAlt="Jamia Urdu Aligarh"
            >
              <p>
                Jamia Urdu Aligarh, established in 1939, promotes Urdu education
                and offers recognized secondary (Adeeb) and senior secondary
                (Adeeb-e-Mahir) programs equivalent to Classes 10 and 12.
              </p>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Recognition and Approvals
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Member of COBSE.</li>
                <li>
                  Recognized by the Government of India for employment purposes.
                </li>
                <li>Minority status under the NCMEI Act 2004.</li>
                <li>
                  AIU equivalence varies by university; advised to confirm at
                  the time of admission.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Streams and Courses
              </h3>
              <p>JUA offers two major programs:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Adeeb:</b> Class 10 equivalent.
                </li>
                <li>
                  <b>Adeeb-e-Mahir:</b> Class 12 equivalent (Arts, Commerce,
                  Science).
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Selected Subjects
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Languages:</b> Urdu, English, Hindi, Punjabi, Bengali.
                </li>
                <li>
                  <b>Core Academic:</b> Physics, Chemistry, Biology,
                  Mathematics, History, Political Science, Economics, Business
                  Studies, Accountancy.
                </li>
                <li>
                  <b>Professional Courses:</b> Moallim-e-Urdu, B.Ed., D.El.Ed.
                  (recognized by NCTE/State Universities).
                </li>
              </ul>
            </Card>
            <Card
              id="nios"
              header="5. NIOS (National Institute of Open Schooling)"
              logo="https://res.cloudinary.com/dtaitsw4r/image/upload/v1762331435/NIOS-National-Institute-of-Open-Schooling-Logo_wfvnhw.png"
              logoAlt="NIOS Logo"
            >
              <p>
                The National Institute of Open Schooling (NIOS) is an autonomous
                organization under the Ministry of Education, Government of
                India. It offers formal courses at secondary and senior
                secondary levels via open and distance learning.
              </p>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Recognition and Validity
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  Recognized national board under the Ministry of Education.
                </li>
                <li>
                  Member of COBSE and recognized by AIU for higher studies.
                </li>
                <li>
                  Accepted for competitive exams like NEET, JEE, UPSC, and State
                  PSCs.
                </li>
                <li>
                  Accepted by AICTE-approved institutions for technical and
                  professional courses.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Streams and Subject Combinations
              </h3>
              <p>
                NIOS allows flexible subject selection without rigid streams:
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <b>Science:</b> Physics, Chemistry, Biology, Mathematics,
                  Computer Science.
                </li>
                <li>
                  <b>Commerce:</b> Accountancy, Economics, Business Studies,
                  Data Entry Operations.
                </li>
                <li>
                  <b>Arts/Humanities:</b> History, Geography, Political Science,
                  Psychology, Law.
                </li>
              </ul>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold">
                Examination System
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  Public Exams: Twice a year (April/May &amp; October/November).
                </li>
                <li>On-Demand Exams (ODES): Flexible testing when ready.</li>
                <li>
                  Transfer of Credit: Up to two passed subjects from other
                  boards can be carried over.
                </li>
              </ul>
            </Card>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-6 h-max">
            <div className="rounded-xl border border-gray-200 bg-white p-3 md:p-4 shadow-sm">
              <h3 className="text-xs md:text-sm font-semibold text-[#31393C]">
                Quick Links
              </h3>
              <nav className="mt-2 md:mt-3">
                <ol className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[#31393C] hover:bg-[#EDEEEB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4]"
                      >
                        <span className="inline-flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-md bg-[#FFC067]/10 text-[#3E96F4] text-xs md:text-sm font-semibold">
                          {s.no}
                        </span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-3 md:mt-4 border-t pt-3 md:pt-4">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-md bg-[#FFC067] px-3 py-1.5 text-xs md:text-xs font-medium text-black shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Back to Top
                </a>
              </div>
            </div>

            {/* Info box */}
            <div className="mt-3 md:mt-4 rounded-xl border border-[#3E96F4]/20 bg-[#FFC067]/5 p-3 md:p-4">
              <p className="text-[11px] md:text-xs text-[#31393C]">
                Tip: Use these boards’ certificates on DigiLocker wherever
                available for fast, verified submissions.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t bg-white/80">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-4 md:py-6 text-xs md:text-sm text-gray-600">
          © {new Date().getFullYear()} • Educational Boards Overview
        </div>
      </div>
    </section>
  );
};

export default Boards;

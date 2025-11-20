import { useState } from "react";

export const CareerHero = () => {
  return (
    <section className="w-full bg-[#FFC067] text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          HIGHWAY TO A BRIGHTER CAREER
        </h1>
        <p className="mt-4 text-gray-900/90 text-sm leading-relaxed">
          Studying made easy through suggestions and support always delivers
          satisfying results. Career needs focus, planning and advice. We
          balance all aspects of your career in a better way. Our experts are
          your flexible friends who will guide you through your journey to
          success. Build a foundation and kick start your career with proper
          focus, planning and advice. We shape your minds into shining stars, so
          that you can follow your dreams to become a doctor, engineer,
          architect, pharmacist, or a management expert. Follow your dreams by
          partnering with Dynamic World and plan, implement and achieve your
          success.
        </p>
        <p className="mt-3 text-gray-900/90 text-sm leading-relaxed">
          MEDICAL, ENGINEERING, ARCHITECTURE, AGRICULTURE, PHARMACY, MBA, BBA
          whichever stream you opt for career planning is essential through
          expert career counselling. Factors like self-efficiency, satisfaction,
          happiness are co-related to job satisfaction, therefore career
          counselling becomes more important than any other form of counselling.
          Career counselling and guidance is required on the part of students
          due to ignorance of personal abilities and potentials, parental
          pressure and multiple career options which may create a confusion in
          their minds.
        </p>
      </div>
    </section>
  );
};

// ==============================
// 2) Tree: 12th Science → PCB/PCM → Exams
// ==============================
const TreeNode = ({ label, children = [] }) => {
  const [open, setOpen] = useState(true);
  const hasKids = children.length > 0;
  return (
    <li className="relative">
      <div className="flex items-start gap-2">
        {hasKids ? (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md ring-1 ring-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E96F4]"
            aria-expanded={open}
          >
            <span className="text-sm font-bold text-[#31393C] select-none">
              {open ? "–" : "+"}
            </span>
          </button>
        ) : (
          <span className="mt-2 h-2 w-2 rounded-full bg-[#FFC067] ring-2 ring-[#EDEEEB]" />
        )}
        <div className="rounded-lg bg-white px-3 py-2 text-sm leading-5 text-[#31393C] ring-1 ring-gray-200 shadow-sm">
          {label}
        </div>
      </div>
      {hasKids && open && (
        <ul className="mt-2 ml-8 space-y-2 border-l-2 border-dashed border-[#EDEEEB] pl-4">
          {children.map((c, idx) => (
            <TreeNode key={idx} label={c.label} children={c.children} />
          ))}
        </ul>
      )}
    </li>
  );
};

const treeData = {
  label: "12th Science",
  children: [
    {
      label: "PCB",
      children: [{ label: "NEET" }, { label: "CET" }],
    },
    {
      label: "PCM",
      children: [
        { label: "JEE" },
        { label: "NATA" },
        { label: "CET" },
        { label: "SRMJEE" },
        { label: "VITEEE" },
        { label: "BITSAT" },
        { label: "NDA" },
      ],
    },
  ],
};

export const CareerTree = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#31393C]">
              Career Path Tree
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
              12th Science • PCB • PCM
            </span>
          </div>
          <div className="mt-4">
            <ul className="space-y-2">
              <TreeNode label={treeData.label} children={treeData.children} />
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            CREATE THE LIFE YOU LOVE BY LEARNING, GROWING AND ACHIEVING THE
            SKILLS
          </p>
        </div>
      </div>
    </section>
  );
};

// ==============================
// 3) What Are We Providing?
// ==============================
export const WhatWeProvide = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
        <div className="rounded-2xl ring-1 ring-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#FFC067] text-black px-6 py-4">
            <h2 className="text-lg font-semibold text-black">
              WHAT ARE WE PROVIDING?
            </h2>
          </div>
          <div className="bg-white p-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-[#31393C]">
                GUIDANCE FOR ENTRANCE PREPARATION AND ADMISSION PROCEDURE
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Counseling and guidance program for NEET, CET, JEE, NATA, CAT,
                MAT, CMAT preparation as well as admission procedure
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#31393C]">
                DIFFERENT TECHNIQUES TO UNDERSTAND &amp; REVISE
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Tips to complete syllabus within time limit and score maximum
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#31393C]">
                TAKING ALL RESPONSIBILITY OF CANDIDATES FROM THE BEGINNING OF
                THE COURSE TILL SELECTING A PERFECT CAREER
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Personal counselling session for 2 hours per week
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#31393C]">
                RESOLVING QUERIES REGARDING STUDY
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                There are hundreds of options available to choose from when it
                comes to higher education. There are number of questions in the
                mind of student like which field of specialization should choose
                or should go for the most popular course or should choose the
                field my parents suggest and much more. For solving these issues
                and confusions, Dynamic World Education offers insights into a
                wide variety of courses and career options. With our guidance
                and counselling we open the corridor for the world of colleges
                for the students and help them reach the best and top colleges
                in MEDICAL, ENGI- NEERING, ARCHITECTURE, AGRICULTURE, PHARMACY,
                MBA, BBA and many more to the list. Some students are in a
                dilemma to choose the right courses and colleges from the wide
                array of options available, Confused, lost, stressed, puzzled,
                upset, perplexed, unclear all these are words for a student who
                is unable to select a proper stream for career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==============================
// 4) Exams After 12th – At a Glance (compact table)
// ==============================
// ==============================
// 5) NEET / JEE / NATA / MHT-CET (verbatim highlights)
// ==============================
export const EntranceDetails = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* NEET */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-[#31393C]">NEET</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            National Testing Agency (NTA) will conduct the NEET Exam for UG
            Medical Education : Students of 12th level must have Physics,
            Chemistry and Biology/Biotechnology with English as a mandatory
            subject. Candidates in the 12th level must have secured minimum 50%
            marks for General categories; 45% marks for PH and 40% marks for
            SC/ST category candidates in PCB group. There is no maximum attempt
            limit for writing the NEET exam. Students must have passed/appearing
            12th or equivalent examination from any recognized board with
            Physics, Chemistry, Biology/ Biotechnology or any other elective
            subject with English. NEET candidate should be an Indian National or
            OCI (overseas citizen of India) and Aadhaar card is mandatory for
            all candidates except belonging to Assam, J & K and Meghalaya State.
            PIO, OCI & Foreign national's candidates can apply by passport
            number. Minimum Age - The minimum age limit is 17 years on 31st
            December of the year of admission. Maximum Age - There is no maximum
            age limit for NEET exam. Assam, J & K and Meghalaya candidates can
            also apply for NEET by providing their passport number, ration card
            number, bank account number or any other valid Government ID number.
          </p>
        </div>
        {/* JEE */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-[#31393C]">JEE</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Age Limit / Qualifying exam - For appearing in the JEE (main)
            examination there is no age limit for the candidates. The candidates
            should also satisfy themselves about their fulfilling the age limit
            requirements of the Institutes in which they are desirous of taking
            admission. The candidates must note that the IlTs have an age limit
            / restriction. The JEE (main) will be conducted twice before
            admission in the next academic session. The student's best of the
            two NTA scores will be considered for preparation of Merit list /
            Ranking. The Department of Higher Education, Ministry of Human
            Resource Development, Government of India has entrusted the
            responsibility of conducting Joint Entrance Examination JEE (main)
            to the National Testing Agency (NTA) from 2019 onwards. The (B.E. /
            B. Tech.) of JEE (main) will also be an eligibility test for the JEE
            (Advanced), which the candidate has to take if he/she is aspiring
            for admission to the undergraduate offered by programs the Indian
            Institute of Technology (IITs). Admission criteria to undergraduate
            engineering programs at NITS, IITs, other centrally Funded Technical
            Institution (CFTI), Institutions funded by participating state
            Governments and other Institutions shall include the performance in
            the class 12th/ equivalent qualifying Examination and in the Joint
            Entrance Examination JEE (main).
          </p>
        </div>
        {/* NATA */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-[#31393C]">
            NATA (NATIONAL APTITUDE TEST IN ARCHITECTURE)
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Eligibility Criteria: Candidate should have passed an 10+2
            examination with at least 50 percent aggregate marks in Physics,
            Chemistry, and Mathematics or passed 10+3 Diploma Examination with
            Mathematics as compulsory subject with at least 50 percent marks in
            aggregate. Candidate has to attempt 10 questions (Preferential
            Type/MCQ) within 72 minutes on PC/laptop. The drawing aptitude is
            judged on the following aspects. Understanding the important visual
            principles in a composition (2D OR 3D) such as balance, rhythm,
            direction, hierarchy, etc. Understanding geometry and the ability to
            visualize shape and solve geometrical puzzles to test spatial
            intelligence, Understanding color theory and the various
            terminologies to test color scheme knowledge. Visual system
            interpretation and perception to test graphical similarities and
            other properties. Ability to understand spatial relation- ship
            between objects, and to visualize images. Tests for cognitive
            ability: perception, attention, recognition, memory etc. There shall
            be 50 questions to be answered on PC/laptop within 45 minutes. Each
            question shall have 4 options out of which, only one option is
            correct. Each correct response will yield 1.5 marks. There is no
            negative marking.
          </p>
        </div>
        {/* MHT-CET */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-[#31393C]">MHT-CET</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            MHT CET (or Maharashtra Common Entrance Test) is a common state
            level entrance exam conducted by the State Common Entrance Test
            Cell, Government of Maharashtra every year for admission to
            Undergraduate Engineering, Pharmacy, and Agriculture courses such as
            B. Tech/ B.E, Pharma D And B.Pharma offered at colleges in
            Maharashtra. All aspirants who have passed / appeared in the
            qualifying examination i.e., HSC/12th Standard examination or its
            equivalent examination and having Indian Nationality are eligible
            for appearing for MHT CET. There is no age limit for appearing in
            MHT-CET. For PCM - This paper is having 2 Groups of
            Physics-Chemistry and Mathematics with total 180 minutes duration;
            for first 90 minutes, Physics and Chemistry will be enabled and
            after completion of first 90 minutes time, Physics-Chemistry group
            will be auto submitted and Mathematics group will be enabled with 90
            minutes' duration. For PCB - This paper is having 2 Groups of
            Physics-Chemistry and Biology with total 180 Minutes Duration, first
            90 minutes Physics and chemistry will be enabled and only after
            completion of time response for Physics -Chemistry group will be
            auto submitted and Biology group will be enabled with 90 minutes'
            duration.
          </p>
        </div>
      </div>
    </section>
  );
};

// ==============================
// 6) MBBS Abroad Overview + Why Choose Dynamic World (compact cards)
// ==============================
export const MBBSAbroad = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 space-y-8">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-[#31393C]">
            Overseas MBBS – Career Guidance
          </h2>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Over the past few years, studying MBBS abroad has undergone a
            significant transformation. As per recent trends, more and more
            students are choosing to pursue MBBS abroad. At Dynamic world
            Education, we firmly believe in offering the finest medical
            education pathways that align with the goals, aspirations, and
            financial constraints of our students. Our team of expert
            counsellors assist students in securing admissions to NMC/MCI
            recognized top medical universities around the world, enabling them
            to practice medicine in foreign countries and India.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Foreign medical universities have a good number of MBBS seats for
              international students.
            </li>
            <li>
              Admission in MBBS abroad is possible with a passing NEET score.
            </li>
            <li>
              The entire MBBS course fees range between INR 15 to 60 lakhs.
            </li>
            <li>
              No donations are required for admissions in case of MBBS abroad.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <h3 className="text-base font-semibold text-[#31393C]">
              WHY CHOOSE DYNAMIC WORLD EDUCATION?
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>FREE COUNSELLING</li>
              <li>ADMISSION PROCESS ASSISTANCE</li>
              <li>COUNTRY AND UNIVERSITY SELECTION</li>
              <li>EDUCATIONAL LOAN ASSISTANCE</li>
              <li>DOCUMENTATION AND VERIFICATION</li>
              <li>TUITION FEES TRANSFER ASSISTANCE</li>
              <li>VISA ASSISTANCE</li>
              <li>TRAVEL ARRANGEMENTS</li>
              <li>FMGE/ NEXT COACHING CLASSES</li>
              <li>24*7 SOS SUPPORT</li>
              <li>AIRPORT PICKUP AND DROP</li>
            </ul>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Unlike other education consultants, we travel across the
              universities and nations to deeply study the education and student
              facilities available at the campus and ensure that our students
              get the best standards of living in a safe environment. We
              outstand when it comes to addressing the challenges faced by our
              students abroad. Our international teams across the nations ensure
              a safe home away from home for the students. We believe in
              providing students with the best education pathways taking into
              consideration the aspirations of students and parents, budgets,
              education facilities etc.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <h3 className="text-base font-semibold text-[#31393C]">
              Country Snapshots (Highlights)
            </h3>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                <span className="font-medium">Georgia:</span> Recognised by NMC
                & WHO, no IELTS/TOEFL, affordable fees, English medium, safe,
                visa &lt; 30 days.
              </li>
              <li>
                <span className="font-medium">Bosnia & Serbia:</span> Recognised
                by NMC & WHO, 6-year program, low tuition, modern labs, low cost
                of living.
              </li>
              <li>
                <span className="font-medium">Russia:</span> English medium, no
                donations, NMC/MCI recognised, advanced classrooms, Indian mess.
              </li>
              <li>
                <span className="font-medium">Kazakhstan & Kyrgyzstan:</span>{" "}
                WHO/NMC/USMLE/IMED recognition, hassle-free, affordable, high
                standard of education.
              </li>
              <li>
                <span className="font-medium">
                  Uzbekistan & The Philippines:
                </span>{" "}
                6-year MBBS, English medium, advanced teaching technology,
                convenient travel.
              </li>
              <li>
                <span className="font-medium">Bangladesh:</span> 6 years incl.
                internship, similar syllabus/pattern to India, affordable, many
                Indian students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==============================
// 7) Wrapper Page
// ==============================
const CareerBrochurePage = () => {
  return (
    <main className="min-h-screen w-full bg-white text-[#31393C]">
      <CareerHero />
      {/* <CareerTree /> */}
      <WhatWeProvide />
      <div className="w-full flex flex-col justify-center ">
        <div className="mx-auto">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761139493/after10_bdukqx.jpg"
            alt=""
            className="object-center"
          />
        </div>
        <div className="mx-auto">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761138878/after12th_xbhkep.jpg"
            alt=""
            className="object-center"
          />
        </div>
        <div className="mx-auto">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761140461/examsafter12_spnk4i.jpg"
            alt=""
            className="object-center"
          />
        </div>
        <div className="mx-auto">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761138879/aftergrad_drvh2a.jpg"
            alt=""
          />
        </div>
      </div>
      <EntranceDetails />
      <MBBSAbroad />
    </main>
  );
};

export default CareerBrochurePage;

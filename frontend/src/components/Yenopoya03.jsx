import React from "react";

const admissionHighlightsData = [
  { particular: "Mode of Study", details: "Offline/Online" },
  { particular: "Programmes Offered", details: "200+" },
  { particular: "Admission Status", details: "Ongoing" },
  {
    particular: "How to Apply?",
    details: "Online at Parul University Admissions",
  },
  {
    particular: "Level of Programmes Offered",
    details: "UG, PG, Integrated & PhD",
  },
  { particular: "Popular Programmes", details: "MBA, BTech, BBA, BCA, MCA" },
];

const eligibilityCriteriaData = [
  {
    course: "BTech",
    eligibility:
      "Class 12 in Physics, Chemistry, Maths/Biology (45% aggregate)",
    selection: "JEE Main/ GUJCET + GUJCET Counselling",
  },
  {
    course: "BBA",
    eligibility: "Class 12 in any stream with English",
    selection: "Based on Class 12 Merit",
  },
  {
    course: "MBA",
    eligibility: "Graduation with 50% aggregate (45% for reserved category)",
    selection: "Merit-based",
  },
  {
    course: "BDes",
    eligibility: "Class 12 in any stream with English",
    selection: "Merit-based",
  },
  {
    course: "BCA",
    eligibility: "Class 12 in any stream with English and Maths or Statistics",
    selection: "Merit-based",
  },
  {
    course: "MCA",
    eligibility:
      "Graduation with 50% (45% for reserved category) from a recognized university",
    selection: "Merit-based",
  },
  {
    course: "BAMS",
    eligibility:
      "Class 12 in Science with PCB (50% aggregate for general, 45% for reserved)",
    selection: "NEET UG (General: 50% Reserved: 40% PR)",
  },
];

const Yenepoya03 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-[#31393C] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-gray-100 p-6 md:p-10">
        {/* Header */}
        <header className="mb-3">
          <h1 className="text-xl md:text-2xl font-bold text-[#3E96F4]">
            Admission Process
          </h1>
        </header>

        {/* Description */}
        <section className="space-y-4 text-sm lg:text-base leading-7 text-gray-700">
          <p>
            Yenepoya University, located in Mangalore, offers over 200 courses
            at UG, PG, and doctoral levels in disciplines such as Science,
            Management, Medical, Engineering, and Pharmacy. Admission is based
            on a combination of merit and entrance tests, with programs like
            MBBS, BCA, BCom, MSc, and BPharma being the most popular. NEET-UG
            and NEET-PG scores are mandatory for medical, dental, Ayurveda, and
            homeopathy courses, while most other courses rely on merit in
            qualifying examinations. The admission process includes online
            registration, eligibility verification, and fee payment through the
            official portal.
          </p>
          <p>
            The fee structure for Yenepoya University varies across courses,
            with UG fees ranging from INR 1.4 lakh to INR 12.5 lakh and PG fees
            starting at INR 80,000. Hostel facilities are available for
            students, with fees between INR 2.4 lakh and INR 4.74 lakh. A
            stipend of INR 55,000-65,000 is offered for select medical programs.
            The university ensures affordability through scholarships and loan
            assistance while maintaining a strong return on investment, with
            average salary packages ranging from INR 1.5 lakh to INR 5 lakh,
            depending on the course.
          </p>{" "}
          <p>
            The fee structure for Yenepoya University varies across courses,
            with UG fees ranging from INR 1.4 lakh to INR 12.5 lakh and PG fees
            starting at INR 80,000. Hostel facilities are available for
            students, with fees between INR 2.4 lakh and INR 4.74 lakh. A
            stipend of INR 55,000-65,000 is offered for select medical programs.
            The university ensures affordability through scholarships and loan
            assistance while maintaining a strong return on investment, with
            average salary packages ranging from INR 1.5 lakh to INR 5 lakh,
            depending on the course.
          </p>
          The seat allocation process depends on program availability and
          includes reserved seats for the Muslim Minority and Management
          categories. For instance, MBBS has 250 seats, BSc has 100 seats, and
          MSc has 25 seats. Interested candidates can apply online by following
          the step-by-step admission process, including application submission,
          entrance exams, and fee payment. Below is a summarized table of the
          admission details and fees:
        </section>

        {/* Highlights Table / Cards */}
        <div class="w-full text-sm max-w-3xl mx-auto mt-8">
          <div class="bg-[#3E96F4] text-white rounded-t-2xl px-5 py-4">
            <h2 class="text-lg md:text-xl font-semibold">
              Yenepoya University — Admission Highlights 2024
            </h2>
          </div>

          <div class="bg-white border border-gray-200 rounded-b-2xl shadow-sm divide-y divide-gray-200">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-3 hover:bg-gray-50 transition">
              <span class="font-semibold text-[#31393C] md:w-1/3">
                Mode of Study
              </span>
              <span class="text-[#31393C] md:w-2/3">Full-time/Offline</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-3 hover:bg-gray-50 transition">
              <span class="font-semibold text-[#31393C] md:w-1/3">
                Application Status
              </span>
              <span class="text-[#31393C] md:w-2/3">Open</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-3 hover:bg-gray-50 transition">
              <span class="font-semibold text-[#31393C] md:w-1/3">
                Fee Range
              </span>
              <span class="text-[#31393C] md:w-2/3">
                INR 80,000 – INR 12.5 lakh
              </span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-3 hover:bg-gray-50 transition">
              <span class="font-semibold text-[#31393C] md:w-1/3">
                Programmes Offered
              </span>
              <span class="text-[#31393C] md:w-2/3">209</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-3 hover:bg-gray-50 transition">
              <span class="font-semibold text-[#31393C] md:w-1/3">
                Popular Programmes
              </span>
              <span class="text-[#31393C] md:w-2/3">BSc, MSc, MBBS</span>
            </div>
          </div>
        </div>

        {/* Eligibility & Selection */}
        <div class="w-full max-w-6xl mx-auto mt-8 text-sm">
          <div class="bg-[#3E96F4] text-white rounded-t-2xl px-5 py-4">
            <h2 class="text-lg md:text-xl font-semibold">
              Yenepoya University — Course Eligibility & Selection
            </h2>
          </div>

          <div class="hidden md:grid md:grid-cols-3 bg-[#EDEEEB] font-semibold text-[#31393C] border-x border-t border-gray-200">
            <div class="px-5 py-3">Course</div>
            <div class="px-5 py-3">Eligibility Criteria</div>
            <div class="px-5 py-3">Selection Process</div>
          </div>

          <div class="bg-white border border-gray-200 rounded-b-2xl shadow-sm divide-y divide-gray-200 text-[#31393C]">
            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">MBBS</div>
              <div>50% in Class 12</div>
              <div>NEET-UG</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">MCA</div>
              <div>50% in Graduation</div>
              <div>Merit-based</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">BCA</div>
              <div>55%-65% in Class 12</div>
              <div>Merit-based</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">BCom</div>
              <div>60% in Class 12</div>
              <div>Merit-based</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">MSc</div>
              <div>50%-55% in Graduation</div>
              <div>Merit-based</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">BPharma</div>
              <div>45% in Class 12</div>
              <div>KCET</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-4 hover:bg-gray-50 transition">
              <div class="font-semibold">MD</div>
              <div>Completion of 17 years of age</div>
              <div>NEET-PG</div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-5xl mx-auto mt-8 text-sm">
          <div class="bg-[#3E96F4] text-white rounded-t-2xl px-5 py-3">
            <h2 class="text-base md:text-lg font-semibold">
              Yenepoya University — Fees and ROI
            </h2>
          </div>

          <div class="hidden md:grid md:grid-cols-3 bg-[#EDEEEB] font-semibold text-[#31393C] border-x border-t border-gray-200 text-xs uppercase tracking-wide">
            <div class="px-5 py-2">Course</div>
            <div class="px-5 py-2">Tuition Fee</div>
            <div class="px-5 py-2">Average Salary Package</div>
          </div>

          <div class="bg-white border border-gray-200 rounded-b-2xl shadow-sm divide-y divide-gray-200 text-[#31393C]">
            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-3 hover:bg-gray-50 transition">
              <div class="font-semibold">MBBS</div>
              <div>INR 9.2 lakh</div>
              <div>INR 4.48 lakh</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-3 hover:bg-gray-50 transition">
              <div class="font-semibold">MCA</div>
              <div>INR 2.3 lakh</div>
              <div>INR 4.8 lakh</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-3 hover:bg-gray-50 transition">
              <div class="font-semibold">BSc</div>
              <div>INR 1.4–12.5 lakh</div>
              <div>INR 1.5–5 lakh</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-3 hover:bg-gray-50 transition">
              <div class="font-semibold">MSc</div>
              <div>INR 80,000–12.5 lakh</div>
              <div>INR 4.8 lakh</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 px-5 py-3 hover:bg-gray-50 transition">
              <div class="font-semibold">BPharma</div>
              <div>INR 4 lakh</div>
              <div>INR 5 lakh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yenepoya03;

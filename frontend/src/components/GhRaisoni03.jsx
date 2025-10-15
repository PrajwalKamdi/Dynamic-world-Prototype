import React from "react";

// Data for the first table
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

// Data for the second table
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

const GhRaisoni03 = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="m-5 max-w-7xl">
      <div className="w-full px-5 lg:px-8 py-5 rounded-2xl bg-gray-100">
        <header>
          <h1 className="text-xl lg:text-2xl font-bold text-[#3E96F4] text-left mb-6">
            Admission Process
          </h1>
        </header>

        <section>
          <p className="text-base leading-relaxed text-left mb-4">
            G.H. Raisoni International Skill Tech University, Pune, offers both
            entrance and merit-based admissions for its undergraduate (UG) and
            postgraduate (PG) programs. The university accepts various entrance
            exam scores such as ISC, Maharashtra HSC, and CBSE 12th, depending
            on the program. For courses like BBA, BCA, and B.Sc., the
            institution considers the candidate’s past academic performance for
            admission, making it accessible to a broader range of applicants.
          </p>
          <p className="text-base leading-relaxed text-left mb-4">
            The university offers 7 courses across multiple streams, including
            Business & Management Studies, IT & Software, and Science. The
            undergraduate courses are typically completed in 3 years, while
            postgraduate programs are structured for a duration of 2 years. This
            ensures a solid foundation of education while maintaining
            flexibility for students to pursue their professional goals. For
            those interested in joining G.H. Raisoni International Skill Tech
            University, Pune in 2024, the fee structure and other essential
            details are available for prospective candidates. With a variety of
            course offerings and a combination of entrance and merit-based
            selection, GHRISTU provides opportunities for students across
            diverse academic backgrounds.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GhRaisoni03;

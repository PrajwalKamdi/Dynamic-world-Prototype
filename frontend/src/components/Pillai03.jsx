import React from "react";

const Pillai03 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C] rounded-lg shadow p-6 md:p-8 m-5">
      {/* Heading */}
      <h3 className="text-2xl sm:text-2xl font-bold mb-4 text-[#3E96F4]">
        Admission Process
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed mb-6">
        Admission to Pillai College of Engineering (PCE) is open for all its UG,
        PG, and doctoral courses, including BTech, MTech, and PhD programs.
        Affiliated with the University of Mumbai, the college follows an
        entrance-based admission process. Candidates must qualify for entrance
        exams such as JEE Mains, MHT-CET, GATE, or PET, followed by a
        counselling or personal interview (PI) round. Interested applicants can
        begin the process by visiting the official website of PCE and filling
        out the online application form.
      </p>
      <h3 className="text-xl font-semibold mb-3">
        Eligibility and Selection Criteria
      </h3>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        The eligibility and selection criteria for each program at PCE vary. For
        BTech admission, students must secure a minimum of 45% in Class 12
        (Science stream) and qualify for JEE Mains or MHT-CET, followed by
        counselling. MTech aspirants need a graduation degree with a 50%
        aggregate and must clear GATE. PhD candidates should hold a BTech degree
        with 50% aggregate and qualify for the PET exam and a PI round. Notably,
        20% of the seats are filled at the institute level, while the remaining
        80% are allocated through the Centralised Admission Process (CAP).
      </p>

      <h3 className="text-xl font-semibold mb-3">Admission Process Steps</h3>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        The admission process at PCE comprises three main steps. First,
        candidates must review the eligibility criteria and fill out the
        application form online. Second, applicants participate in the selection
        rounds, including qualifying exams like JEE Mains, MHT-CET, GATE, or
        PET, and PI (for PhD). Finally, shortlisted candidates based on the
        merit list released by the college must confirm their admission by
        paying the requisite fee.
      </p>
      {/* Admission Criteria Table */}
      <h3 className="text-xl font-semibold mb-3">Admission Criteria</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Course</th>
              <th className="border px-4 py-2 text-left">Eligibility</th>
              <th className="border px-4 py-2 text-left">Selection Criteria</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "BTech",
                "Class 12 (Science) with 45%",
                "JEE Mains or MHT-CET + Counselling",
              ],
              ["MTech", "Graduation with 50%", "GATE + Counselling"],
              ["PhD", "BTech with 50%", "PET + Personal Interview"],
            ].map(([course, eligibility, selection], idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{course}</td>
                <td className="border px-4 py-2">{eligibility}</td>
                <td className="border px-4 py-2">{selection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Notes */}
      <div className="bg-white p-4 rounded-lg mt-4">
        <h4 className="text-lg font-semibold mb-2">Key Notes:</h4>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
          <li>
            <strong>Institute-Level Seats:</strong> 20% of seats are filled
            directly through the college admission portal or in person.
          </li>
          <li>
            <strong>CAP Process:</strong> 80% of seats are allocated through the
            Centralized Admission Process.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Pillai03;

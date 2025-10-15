import React from "react";

const Pillai04 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C] rounded-lg shadow p-6 md:p-8 m-5">
      {/* Heading */}
      
      <h3 className="text-2xl sm:text-2xl font-bold mb-4 text-[#3E96F4]">
        All Courses
      </h3>
    <h3 className="text-xl font-semibold mb-2">Courses and Eligibility at Pillai College of Engineering</h3>
    <p className="text-sm md:text-base leading-relaxed text-gray-700">Pillai College of Engineering offers a diverse range of 23 courses, including B.E./B.Tech, M.E./M.Tech, and Ph.D. programs, with eligibility criteria and fees varying based on course requirements. For B.E./B.Tech programs, candidates must have 45-50% in 10+2 and qualify for JEE Main or MHT-CET, with tuition fees ranging from INR 1.3 L to 4.6 L. M.E./M.Tech programs require a graduation degree with 50% and qualifying exams like GATE or MHT-CET, with fees ranging from INR 54 K to 93.9 K. Ph.D. programs are available with a tuition fee of INR 1.3 L and specific criteria for eligibility.

</p>
      {/* Courses Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <tbody>
            {[
              ["Course", "Tuition Fees", "Eligibility", "Entrance Exams"], // Header row
              ["B.E./B.Tech", "INR 1.3 L – 4.6 L", "10+2 with 45–50%", "JEE Main, MHT-CET"],
              ["M.E./M.Tech", "INR 54 K – 93.9 K", "Graduation with 50%", "GATE, MHT-CET"],
              ["Ph.D.", "INR 1.3 L", "As per relevant guidelines", "N/A"],
            ].map(([col1, col2, col3, col4], idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
                <td className="border px-4 py-2 font-medium">{col1}</td>
                <td className="border px-4 py-2">{col2}</td>
                <td className="border px-4 py-2">{col3}</td>
                <td className="border px-4 py-2">{col4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ranking Section */}
      <h3 className="text-xl font-semibold mb-2">Pillai College of Engineering Ranking</h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Pillai College of Engineering (PCE) in New Panvel, India, is approved by AICTE and UGC, and accredited by NAAC with an A+ grade.
      </p>
    </section>
  );
};

export default Pillai04;

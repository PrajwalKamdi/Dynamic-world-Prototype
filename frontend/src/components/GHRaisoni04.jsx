import React from "react";

const GHRaisoni04 = () => {
  return (
    <div className="m-5 max-w-7xl">
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        <header className="mb-6">
          <h1 className="text-[#3E96F4] font-bold text-xl lg:text-2xl tracking-tight">
            All Courses
          </h1>
        </header>
        <div className="text-gray-700 text-sm lg:text-base mb-8">
          <p>
            G.H. Raisoni International Skill Tech University, Pune offers 7
            courses with varying eligibility criteria, entrance exam
            requirements, and tuition fees. The available programs include
            B.Sc., BBA, BCA, MCA, MBA/PGDM, and M.Sc. Each course has specific
            demands in terms of eligibility, with most requiring CBSE or ISC
            12th-grade qualifications. The tuition fees for these courses range
            from INR 1.2 L to INR 2.1 L, depending on the program.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
            <thead>
              <tr className="bg-[#3E96F4]/10">
                <th className="py-3 px-4 text-left font-semibold text-gray-800">
                  Courses
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-800">
                  Tuition Fees
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-800">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">B.Sc.</td>
                <td className="py-3 px-4">2.1L</td>
                <td className="py-3 px-4">Exams: CBSE 12th, ISC + 1 More</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">MCA</td>
                <td className="py-3 px-4">1.8L</td>
                <td className="py-3 px-4">Exams: CBSE 12th, ISC + 1 More</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">BBA</td>
                <td className="py-3 px-4">2.1L</td>
                <td className="py-3 px-4">Exams: CBSE 12th, ISC + 1 More</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">MBA/PGDM</td>
                <td className="py-3 px-4">1.8L</td>
                <td className="py-3 px-4">-/-</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">BCA</td>
                <td className="py-3 px-4">2.1L</td>
                <td className="py-3 px-4">Exams: CBSE 12th, ISC + 1 More</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4">M.Sc.</td>
                <td className="py-3 px-4">1.2L</td>
                <td className="py-3 px-4">-/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5">
          <h1 className="text-[#3e96f4] text-xl lg:text-2xl mb-3 font-semibold">
            G.H. Raisoni International Skill Tech University Ranking
          </h1>
          <p className="text-sm lg:text-base text-gray-700">
            G.H. Raisoni International Skill Tech University (GHRISTU) in Pune
            is a globally recognized institution known for excellence in
            education, research, and innovation. As part of the prestigious
            Raisoni Group, it has established itself as one of the top
            universities in Pune. The university offers a diverse range of
            programs, including B.Sc., M.Sc., MCA, BCA, and BBA, aimed at
            equipping students with the skills and knowledge needed for success
            in their respective fields. GHRISTU fosters an environment that
            encourages students to explore multiple disciplines and apply them
            to solve complex problems. The university also offers valuable
            exposure to global perspectives through international
            collaborations, ensuring students are prepared for the challenges of
            a rapidly evolving world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GHRaisoni04;

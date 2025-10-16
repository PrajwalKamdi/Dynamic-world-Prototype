import React from "react";

// --- Main Admission Layout Component ---
const Law02 = () => {
  const lawColleges = [
    { college: "Symbiosis Law School (SLS)", feature: "Renowned for its modern curriculum" },
    { college: "ILS Law College", feature: "Legacy institution with a stellar faculty" },
    { college: "Bharati Vidyapeeth New Law College (NLC)", feature: "Comprehensive legal programs" },
    { college: "DES’s Shri Navalmal Firodia Law College", feature: "Strong emphasis on practical training" },
    { college: "Sinhgad Law College", feature: "Affordable with quality education" },
    { college: "MIT ADT University", feature: "Focus on innovative learning approaches" },
    { college: "Savitribai Phule Pune University (SPPU)", feature: "Public institution with diverse programs" },
    { college: "Ajeenkya DY Patil University (ADYPU)", feature: "Modern infrastructure and pedagogy" },
    { college: "Tilak Maharashtra Vidyapeeth (TMV)", feature: "Traditional yet relevant legal training" },
  ];

  const mumbaiLawColleges = [
    { college: "Government Law College (GLC)", feature: "Prestigious and historic law school" },
    { college: "Mumbai University", feature: "Offers various legal specializations" },
    { college: "Amity University", feature: "International exposure and facilities" },
    { college: "Dr. Ambedkar College of Law", feature: "Known for social justice legal studies" },
    { college: "KC Law College", feature: "Strong focus on academic excellence" },
    { college: "NMIMS Kirit P. Mehta School of Law (KPMSOL)", feature: "Integrates law with management skills" },
    { college: "Pravin Gandhi College of Law (PGCL)", feature: "Emphasis on modern legal practices" },
    { college: "Rizvi Law College", feature: "Affordable legal education" },
    { college: "Jitendra Chauhan College of Law", feature: "Offers diverse programs and internships" },
  ];

  return (
    <div className="max-w-7xl lg:m-5">
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        <div className="md:flex-row md:justify-between md:items-center mb-8">
          <h3 className="text-lg lg:text-2xl font-semibold mb-4 text-left text-[#3E96F4]">
            Streamlined Overview of Law Education in India
          </h3>

          <h3 className="text-sm lg:text-base font-normal mb-4 text-left">
            Law education in India is structured to cater to diverse career aspirations, ranging from practicing
            lawyers to legal researchers. Here’s a breakdown:
          </h3>

          <div className="mb-6">
            <ol className="list-decimal pl-5 text-sm lg:text-base font-normal">
              <li>
                Undergraduate Law Programs
                <ul className="list-disc pl-5 text-gray-800">
                  <li>
                    <span className="font-bold">Integrated Courses (5 Years)</span>: BA LLB, BBA LLB, BLS-LLB, BSc
                    LLB, or BCom LLB. Ideal for candidates starting after Class 12, these programs combine a bachelor’s
                    degree with legal education.
                  </li>
                </ul>
              </li>

              <li>Graduate Entry into Law</li>
              <ul className="list-disc pl-5 text-gray-800">
                <li>
                  <span className="font-bold">3-Year LLB Programs :</span> Tailored for those who have completed
                  graduation in another discipline and want to pivot to a legal career.
                </li>
              </ul>

              <li>Advanced Law Degrees</li>
              <ul className="list-disc pl-5 text-gray-800">
                <li>
                  <span className="font-bold">Master’s Degree (LLM)</span>: A one or two-year program for
                  specialization in law.
                </li>
                <li>
                  <span className="font-bold">Doctoral Degree (PhD)</span>: For those pursuing academic or
                  research-focused careers.
                </li>
              </ul>
            </ol>
          </div>

          {/* Pune Table */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold my-5">Top Law Colleges in Pune</h3>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full table-auto text-left">
                <thead className="bg-[#3E96F4] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-sm lg:text-base font-semibold uppercase tracking-wide">
                      College
                    </th>
                    <th scope="col" className="px-6 py-3 text-sm lg:text-base font-semibold uppercase tracking-wide">
                      Feature
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lawColleges.map((item, index) => (
                    <tr
                      key={index}
                      className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-normal text-sm lg:text-base font-medium text-gray-900">
                        {item.college}
                      </td>
                      <td className="px-6 py-4 text-sm lg:text-base text-gray-700">{item.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mumbai Table */}
          <div>
            <h3 className="text-lg lg:text-xl my-5 font-bold">Top Law Colleges in Mumbai</h3>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full table-auto text-left">
                <thead className="bg-[#3E96F4] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-sm lg:text-base font-semibold uppercase tracking-wide">
                      College
                    </th>
                    <th scope="col" className="px-6 py-3 text-sm lg:text-base font-semibold uppercase tracking-wide">
                      Feature
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mumbaiLawColleges.map((item, index) => (
                    <tr
                      key={index}
                      className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-normal text-sm lg:text-base font-medium text-gray-900">
                        {item.college}
                      </td>
                      <td className="px-6 py-4 text-sm lg:text-base text-gray-700">{item.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Law02;

import React from "react";

const Teaching02 = () => {
  const collegesPune = [
    {
      collegeName: "Padmashree Dr. DY Patil College of Education",
      location: "Pune",
    },
    {
      collegeName: "Adarsha Comprehensive College of Education and Research",
      location: "Pune",
    },
    {
      collegeName: "Shri Khanderai Pratishthan’s MEd College",
      location: "Pune",
    },
    { collegeName: "MIT Arts Design & Technology (MIT ADT)", location: "Pune" },
    {
      collegeName: "Savitribai Phule Pune University (SPPU)",
      location: "Pune",
    },
    { collegeName: "MIT World Peace University (MIT-WPU)", location: "Pune" },
    { collegeName: "Spicer Memorial College – [SMC]", location: "Pune" },
    { collegeName: "Pratibha College of Education", location: "Pune" },
    {
      collegeName: "Smt. Kashibai Navale College of Education & Training",
      location: "Pune",
    },
    { collegeName: "Swami Vivekanand College of Education", location: "Pune" },
    { collegeName: "Vidya Pratishthan’s Adhyapak Vidyalaya", location: "Pune" },
    {
      collegeName: "Vidya Pratishthans College of Education Bara",
      location: "Pune",
    },
    { collegeName: "Spicer Adventist University – [SAU]", location: "Pune" },
    { collegeName: "Dr. P. A. INAMDAR University", location: "Pune" },
    { collegeName: "Dr. D. Y. Patil College of Education", location: "Pune" },
    { collegeName: "JSPM University", location: "Pune" },
    {
      collegeName: "Pillai HOC College of Education and Research",
      location: "Pune",
    },
    { collegeName: "Savitribai Phule Mahila Mahavidyalaya", location: "Pune" },
  ];

  const collegesMumbai = [
    { collegeName: "Bombay Teacher’s Training College", location: "Mumbai" },
    {
      collegeName: "Thakur Shyamnarayan College of Education and Research",
      location: "Mumbai",
    },
    {
      collegeName: "Chembur Sarvankash Shikshan Sanstha Mahavidyalaya",
      location: "Mumbai",
    },
    {
      collegeName: "Gandhi Shikshan Bhavan’s Smt Surajba College of Education",
      location: "Mumbai",
    },
    { collegeName: "Aishabai College of Education", location: "Mumbai" },
    { collegeName: "Secondary Training College (TSCER)", location: "Mumbai" },
    { collegeName: "K J Somaiya College of Education", location: "Mumbai" },
    {
      collegeName: "Hansraj Jivandas College of Education",
      location: "Mumbai",
    },
    { collegeName: "St. Xavier’s Institute of Education", location: "Mumbai" },
    {
      collegeName: "SNDT Women’s University – B.Ed. College",
      location: "Mumbai",
    },
    { collegeName: "Oriental College of Education", location: "Mumbai" },
    { collegeName: "Somaiya Vidyavihar University", location: "Mumbai" },
    {
      collegeName: "Nagrik Shikshan Sanstha College of Education (NSSCE)",
      location: "Mumbai",
    },
    {
      collegeName: "Guru Nanak College of Education And Research (GNCER)",
      location: "Mumbai",
    },
    {
      collegeName: "Shreemati Nathibai Damodar Thackersey Women’s University",
      location: "Mumbai",
    },
    {
      collegeName: "Smt Kapila Khandwala College of Education",
      location: "Mumbai",
    },
    { collegeName: "St Teresa’s Institute of Education", location: "Mumbai" },
    {
      collegeName:
        "Ali Yavar Jung National Institute for The Hearing Handicapped",
      location: "Mumbai",
    },
    { collegeName: "HSNC University", location: "Mumbai" },
    {
      collegeName: "National Institute of Management and Research Studies",
      location: "Mumbai",
    },
  ];

  return (
    <div className="m-5">
      <div className="px-5 py-5 lg:px-8 bg-gray-100 rounded-2xl">
        <section>
          <div className="bg-[#3E96F4] text-white text-center py-3 rounded-2xl">
            <h3 className="text-base lg:text-xl font-semibold">
              Teaching Courses and Eligibility
            </h3>
          </div>
          <div className="text-sm mb-2 mt-2">
            <p>
              If you’re passionate about teaching, you can pursue various
              courses to become an educator. The Bachelor of Education (B.Ed.)
              is the most common undergraduate course for aspiring teachers. For
              those interested in physical education, the Bachelor of Physical
              Education (BP.Ed) is the ideal choice. After completing a B.Ed.,
              you can further your expertise with a Master in Education (M.Ed.).
            </p>
          </div>
          <div className="bg-[#3E96F4] text-white text-center py-3 rounded-2xl">
            <h3 className="text-base lg:text-xl font-semibold">
              B.Ed. Eligibility Criteria:
            </h3>
          </div>
          <div className="text-sm mb-2">
            <ol className="mt-2">
              <li>
                Educational Qualification: You need to have completed your
                graduation (in Arts, Science, or Commerce). Most B.Ed. colleges
                require at least 50-55% aggregate marks at the undergraduate
                level.
              </li>
              <li>
                Age Limit: There is no age restriction for B.Ed. admissions.
              </li>
            </ol>
          </div>
        </section>

        <section className="my-5">
          <div className="border-b-[#3E96F4] text-center my-2">
            <h3 className="text-base lg:text-xl font-semibold">
              Top Teaching Colleges in Pune
            </h3>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-[#EDEEEB] bg-white">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#3E96F4] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    College Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    Location
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#EDEEEB] text-[#31393C]">
                {collegesPune.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F9FAFB] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {item.collegeName}
                    </td>
                    <td className="px-6 py-4 text-sm">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <div className="border-b-[#3E96F4] text-center my-2">
            <h3 className="text-base lg:text-xl font-semibold">
              Top Teaching Colleges in Mumbai
            </h3>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-[#EDEEEB] bg-white">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#3E96F4] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    College Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDEEEB] text-[#31393C]">
                {collegesMumbai.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F9FAFB] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {item.collegeName}
                    </td>
                    <td className="px-6 py-4 text-sm">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching02;

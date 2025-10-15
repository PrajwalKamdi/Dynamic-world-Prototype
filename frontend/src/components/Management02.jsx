import React from "react";

const Management02 = () => {
  const colleges = [
    {
      puneCollege: "Symbiosis Institute of Business Management (SIBM)",
      mumbai: "SP Jain Institute of Management and Research (SPJIMR)",
    },
    {
      puneCollege:
        "Symbiosis Centre for Management and HR Development (SCMHRD)",
      mumbai: "Jamnalal Bajaj Institute of Management Studies (JBIMS)",
    },
    {
      puneCollege:
        "Lexicon MILE – Management Institute of Leadership and Excellence",
      mumbai: "Vivekanand Business School (VBS)",
    },
    {
      puneCollege: "Symbiosis Institute of International Business (SIIB)",
      mumbai: "Indian Institute of Management (IIM)",
    },
    {
      puneCollege: "Amity Global Business School (AGBS)",
      mumbai: "International Institute of Sports and Management (IISM)",
    },
    {
      puneCollege: "Dr. DY Patil B-School",
      mumbai: "Tata Institute of Social Sciences (TISS)",
    },
    {
      puneCollege:
        "Symbiosis Institute of Digital & Telecom Management (SIDTM)",
      mumbai: "Shailesh J Mehta School of Management (SJMSOM)",
    },
    {
      puneCollege: "International School of Management Studies (ISMS)",
      mumbai: "NMIMS University, School of Business Management (SBM)",
    },
    {
      puneCollege: "Balaji Institute of Modern Management (BIMM)",
      mumbai: "Sydenham Institute of Management Studies (SIMSREE)",
    },
    {
      puneCollege: "International Institute of Management Studies (IIMS)",
      mumbai: "KJ Somaiya Institute of Management",
    },
    {
      puneCollege: "S.B. Patil Institute of Management (SBPIM)",
      mumbai: "Prin. L.N. Welingkar Institute of Management (WeSchool)",
    },
    {
      puneCollege: "IIEBM Indus Business School (IIEBM IBS)",
      mumbai: "SIES School of Business Studies",
    },
    {
      puneCollege: "MIT Academy of Engineering (MITAOE)",
      mumbai: "MET Institute of Management",
    },
    {
      puneCollege: "International School of Business and Media (ISB&M)",
      mumbai: "N.L. Dalmia Institute of Management Studies",
    },
    {
      puneCollege: "Balaji Institute of International Business (BIIB)",
      mumbai: "Amity University",
    },
    {
      puneCollege: "Balaji Institute of Management and HR Development (BIMHRD)",
      mumbai: "Aditya Institute of Management Studies (AIMSR)",
    },
    {
      puneCollege: "Global Business School and Research Centre (GBSRC)",
      mumbai: "Kohinoor Business School",
    },
    {
      puneCollege: "Indira School of Business Studies PGDM",
      mumbai: "Chetana’s Institute of Management and Research",
    },
    {
      puneCollege: "Pune Institute of Business Management (PIBM)",
      mumbai: "National Academy of Event Management (NAEMD)",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      <div className="px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl ">
        <p className="text-sm my-2">
          Business Management courses focus on developing essential skills to
          manage and run a business effectively. They cover a wide range of
          topics, including finance, marketing, human resources, leadership, and
          organizational management. These courses are open to students from all
          streams (Commerce, Science, and Arts) and can be pursued at
          undergraduate (BBA/BMS), postgraduate (MBA/PGDM), and doctoral
          (PhD/FPM) levels. Eligibility typically requires passing Class 12 from
          a recognized board. Popular entrance exams include CAT, MAT, CMAT, MAH
          CET, and TISS NET. The course fees range from ₹50,000 to ₹25 lakh,
          depending on the institute and program level.
        </p>
        <section className="my-5">
          <div className="border-b-[#3E96F4] text-center my-2">
            <h3 className="text-base lg:text-xl font-semibold">
              Top Management Colleges in Pune and Mumbai
            </h3>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-[#EDEEEB] bg-white">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#3E96F4] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    Pune Colleges
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                    Mumbai Colleges
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#EDEEEB] text-[#31393C]">
                {colleges.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F9FAFB] transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {item.puneCollege}
                    </td>
                    <td className="px-6 py-4 text-sm">{item.mumbai}</td>
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

export default Management02;

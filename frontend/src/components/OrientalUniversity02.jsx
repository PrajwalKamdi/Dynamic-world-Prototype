import React from "react";
import AboutButton from "./AboutButton";

export default function OrientalUniversity02() {
  const tableData = [
    { particular: "Year of Establishment", detail: "2011" },
    { particular: "Campus", detail: "Indore" },
    { particular: "Campus Size", detail: "77 acres" },
    { particular: "Recognised By", detail: "UGC, AIU Member" },
    { particular: "Modes of Education", detail: "Full-time" },
    {
      particular: "Number of Courses Offered",
      detail: "58 courses across 12 streams",
    },
    { particular: "Total Number of Seats", detail: "2866" },
    { particular: "Scholarships", detail: "3" },
    { particular: "Official Website", detail: "www.oui.edu.in", link: true },
    { particular: "Gender Intake", detail: "Co-education" },
    { particular: "Application Mode", detail: "Online and offline" },
    { particular: "Total Faculty", detail: "47" },
  ];

  return (
    <div className="max-w-7xl m-5">
      {/* Header Section */}
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl ">
        <AboutButton title={"About Oriental University"} />

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            Oriental University, Indore, established in 2011, is the first
            self-funded private university in Indore, Madhya Pradesh. It
            features an impressive infrastructure designed by renowned
            contractors, M/S Hafeez Contractors of Mumbai. The campus houses
            spacious classrooms with modern teaching aids, well-equipped
            laboratories, and workshops. Additionally, the university’s library
            meets UGC standards, making it one of the best-established in the
            region. It is a UGC-recognized university offering a wide range of
            undergraduate, postgraduate, and doctoral programs across diverse
            fields, including Engineering, Pharmacy, Management, IT, Law, and
            more.
          </p>

          <p>
            The university is highly ranked, securing a State Rank-2, Zone
            Rank-2, and National Rank-38 according to the Indian Institutional
            Ranking Framework (IIRF 2023). It has been ranked 2 by India
            Today-MDRA Ranking 2023. With a campus size of 77 acres, Oriental
            University continues to grow, offering 58 courses across 12 streams
            and a total of 2,866 seats. The university provides full-time
            education in co-education mode, with scholarships available to
            deserving students.
          </p>

          <p>
            Key highlights of the university include online and offline
            application modes, a total faculty strength of 47, and its status as
            an AIU member. For more information, you can visit their official
            website at{" "}
            <a
              href="https://www.oui.edu.in"
              className="text-blue-600 underline hover:text-blue-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.oui.edu.in
            </a>
            .
          </p>
        </div>

        {/* Table Section */}
        <h3 className="text-xl font-semibold text-[#31393C] mb-4">
          Oriental University: Key Highlights
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">
                  Particulars
                </th>
                <th className="px-5 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 ${
                    index % 2 !== 0 ? "bg-[#FAFAFA]" : ""
                  }`}
                >
                  <td className="px-5 py-3 font-medium">{row.particular}</td>
                  <td className="px-5 py-3">
                    {row.link ? (
                      <a
                        href={`https://${row.detail}`}
                        className="text-blue-600 underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.detail}
                      </a>
                    ) : (
                      row.detail
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact Section */}
        <div className="bg-[#3E96F4] text-white rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Need more info about Oriental University?
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3Tva_Ro6p7A"
                  title="Oriental University Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

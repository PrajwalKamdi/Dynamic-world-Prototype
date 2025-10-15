import React from "react";
import AboutButton from './AboutButton'
export default function DrAPJAbdulKalamUniversity02() {
  const tableData = [
    { particular: "Year of establishment", detail: "2016" },
    { particular: "Also known as", detail: "AKU" },
    { particular: "Location", detail: "Indore" },
    { particular: "Campus size", detail: "35.17 acres" },
    { particular: "Institute type", detail: "Private" },
    { particular: "Affiliated colleges", detail: "12" },
    { particular: "Constituent departments", detail: "9" },
    { particular: "Recognised by", detail: "UGC, AICTE" },
    { particular: "Mode of education", detail: "Full-Time" },
    { particular: "Number of courses offered", detail: "75 courses across 9 streams" },
    { particular: "Official website", detail: "www.aku.ac.in", link: true },
    { particular: "Total faculty", detail: "177" },
    { particular: "Total students", detail: "1,884" },
    { particular: "Accepted exams", detail: "JEE Main, GATE, CMAT, GPAT" },
    { particular: "Gender intake", detail: "Co-ed" },
    { particular: "Application mode", detail: "Online" },
  ];

  return (
   
      <div  className="max-w-7xl m-5">
         <div className="bg-gray-100 rounded-2xl shadow p-6 md:p-8 w-full">
        <AboutButton title={"About Dr. APJ Abdul Kalam University"}/>
        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            Established in 2016,{" "}
            <span className="font-semibold">
              Dr. APJ Abdul Kalam University (AKU Indore)
            </span>{" "}
            is a premier private university in Indore that aims to provide
            quality education in Science, Technology, Humanities, Social
            Sciences, Performing Arts, and more. Renowned for its rich academic
            tradition, the university attracts highly talented students who
            contribute significantly to society. With a sprawling{" "}
            <span className="font-semibold">35.17-acre lush green campus</span>,
            AKU Indore offers UG, PG, diploma, and PhD programs in various
            disciplines.
          </p>

          <p>
            The university boasts excellent facilities, including{" "}
            <span className="font-semibold">
              hostels for boys and girls
            </span>
            , a library, sports arena, cafeteria, auditorium, hospital, Wi-Fi,
            IT infrastructure, well-equipped laboratories, and even a bank and
            ATM. The campus has{" "}
            <span className="font-semibold">
              12 affiliated colleges, 9 constituent departments
            </span>
            , and over{" "}
            <span className="font-semibold">75 courses across 9 streams</span>.
            Recognized by UGC and AICTE, AKU Indore accepts exams such as{" "}
            <span className="font-semibold">
              JEE Main, GATE, CMAT, and GPAT
            </span>{" "}
            for admissions.
          </p>

          <p>
            With a dedicated faculty of{" "}
            <span className="font-semibold">177 professors</span> and more than{" "}
            <span className="font-semibold">1,880 students</span>, AKU Indore
            operates in a{" "}
            <span className="font-semibold">full-time education mode</span>. The
            university provides co-ed education with an online application
            process and is driven by its commitment to fostering intellectual
            and practical excellence among its students.
          </p>
        </div>
        
        {/* Table Section */}
        <h3 className="text-xl font-semibold text-[#31393C] mb-4">
          Dr. APJ Abdul Kalam University: Key Highlights
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
            Need more info about Dr. APJ Abdul Kalam University?
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/gkgje53Yp9w"
                  title="PIBM Video"
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

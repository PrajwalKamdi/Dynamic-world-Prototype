import React from "react";
import AboutButton from './AboutButton'
export default function SVYASAUniversity02() {
  const tableData = [
    { particular: "Establishment Year", detail: "2002" },
    { particular: "Recognised By", detail: "UGC" },
    { particular: "Approved By", detail: "AICTE" },
    { particular: "Accredited By", detail: "NAAC with A+ grade" },
    { particular: "Programmes Offered", detail: "UG, PG, Diploma, Doctoral, and Distance Learning" },
    { particular: "MoUs", detail: "St Petersburg Federal Research Institute (Russia), Hangzhou Yinhu Technology Co Ltd (China), Massachusetts Institute of Technology (USA)" },
    { particular: "Official Website", detail: "svyasa.edu.in", link: true },
  ];

  return (
    <div className="m-5 max-w-7xl">
      {/* Header Section */}
      <div className="w-full px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
       <AboutButton title={"About S-VYASA University"}/>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
          Swami Vivekanand Yoga Anusandhana Samsthana, commonly known
           as S-VYASA, is a <span className="font-semibold">Deemed to be University</span> established in 2002.
            The institution is recognized by the <span className="font-semibold">UGC</span> and approved by the 
            <span className="font-semibold">AICTE</span>. In addition, S-VYASA has received an <span className="font-semibold">A+ grade</span> 
            accreditation from <span className="font-semibold">NAAC</span> and boasts a <span className="font-semibold">4-star rating by KSURF</span>,
             underscoring its commitment to high-quality education. 
             The university combines the traditional <span className="font-semibold">Gurukula-style 
             education</span> with a <span className="font-semibold">modern scientific approach</span> to learning.

          </p>

          <p>
          S-VYASA offers a wide range of programs, including 
          undergraduate, postgraduate, doctoral, and distance learning 
          courses. Its academic offerings span across various streams, 
          including <span className="font-semibold">Commerce, Management, Science, and Yoga</span>. Some of the 
          key courses offered by the university are <span className="font-semibold">BBA, BSc, BCA, BCom, 
          BTech, MCA, MBA, MSc, and PhD</span>. The university aims to provide a 
          comprehensive education system that fosters both academic
           excellence and personal well-being.
          </p>
          <p>The institution has established significant partnerships with global institutes, including <span className="font-semibold">St Petersburg Federal Research 
            Institute (Russia)</span>, <span className="font-semibold">Hangzhou Yinhu Technology Co Ltd (China)</span>, 
            and the <span className="font-semibold">Massachusetts Institute of Technology (USA)</span>. 
            These collaborations enhance the university's academic and 
            research capabilities, making S-VYASA a globally recognized 
            center for learning and innovation.
          </p>
        </div>
        
        {/* Table Section */}
        <h3 className="text-xl font-semibold text-[#31393C] mb-4">
          S-VYASA University: Key Highlights
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">
                  Particulars
                </th>
                <th className="px-5 py-3 text-left font-semibold">S-VYASA Highlights</th>
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
            Need more info about S-VYASA University?
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Gy1QRRyZE58"
                  title="S-VYASA University Video"
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

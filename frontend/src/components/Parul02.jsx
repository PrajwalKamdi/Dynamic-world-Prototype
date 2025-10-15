import React from "react";
import { FileText, Download } from "lucide-react";
import AboutButton from "./AboutButton";

const highlightsData = [
  { particular: "Establishment Year", details: "2015" },
  { particular: "Ownership Type", details: "Private University" },
  { particular: "City", details: "Vadodara, Gujarat" },
  { particular: "Campus Size", details: "150+ acres" },
  { particular: "Top Accreditations", details: "A++ Grade by NAAC, NABH, BCI, GCH, NNC" },
  { particular: "Recognised By", details: "DSIR, INC, PCI, COA, MHRD, AICTE, UGC" },
  { particular: "Rankings", details: "35 by India Today 2023 (University - Private), 52 by India Today 2023 (BCA), 47 by NIRF 2024 (Pharmacy)" },
  { particular: "Flagship Courses", details: "BTech, MTech, and Diploma" },
  { particular: "Number of Courses", details: "200+" },
  { particular: "Number of Students", details: "50,000+ [3,500+ International Students]" },
  { particular: "Faculty", details: "2,500+ [180+ Faculties from IIT, IIM, NID, NIFT, 900+ PhD-qualified]" },
  { particular: "Foreign University Partnerships", details: "120+" },
  { particular: "In-Campus Residency", details: "24,000+" },
];

const Parul02 = () => {
  return (
    <div className=" text-[#31393C] m-5">
      {/* Card Container */}
      <div className="mx-auto max-w-5xl md:max-w-6xl   bg-gray-50 p-10 rounded-t-2xl shadow">
        {/* Header + Actions */}
       <AboutButton title={"About Parul University"}/>

        {/* Description */}
        <section className="space-y-4 text-base leading-7 text-gray-700">
          <p>
            Parul University, Vadodara, established in 2015 under the Gujarat Private Universities (Second
            Amendment) Act, has quickly established itself as a prominent educational institution in India. It is
            accredited with an A++ grade by NAAC, as well as by the NABH, BCI, GCH, and the NNC. The University is
            also recognized by various prestigious organizations like the DSIR, UGC, AICTE, and MHRD. It has ranked
            favorably with both NIRF and India Today, including being ranked 47th by NIRF 2024 for Pharmacy. Parul
            University consistently demonstrates excellence in education and innovation.
          </p>
          <p>
            Parul University offers more than 200 programs across various levels, including undergraduate,
            postgraduate, and doctoral courses. The university provides diverse courses in fields such as nursing,
            engineering, business, design, and more. With a sprawling campus covering over 150 acres and housing more
            than 24,000 students, the university fosters a dynamic learning environment. It also boasts a successful
            record of research and innovation supported by more than ₹100 crore in entrepreneurship funding.
          </p>
        </section>

        {/* Highlights */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#3E96F4] mb-4">
            Parul University Highlights 2024
          </h2>

          {/* Mobile: Stacked list */}
          <div className="md:hidden divide-y divide-gray-200 rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white">
            {highlightsData.map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-sm font-semibold text-gray-600">{item.particular}</div>
                <div className="mt-1 text-base text-gray-800">{item.details}</div>
              </div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden md:block rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white">
            <table className="w-full border-collapse text-[15px]">
              <tbody>
                {highlightsData.map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-50/70 hover:bg-gray-50">
                    <td className="w-1/3 p-4 font-semibold text-gray-700 border-b border-gray-200">
                      {row.particular}
                    </td>
                    <td className="p-4 text-gray-800 border-b border-gray-200">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Video Section */}
      <section className="bg-[#3E96F4]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Need More Info About Parul University?
          </h2>

          <div className="mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/fTsOVqkJYTw"
                title="Parul University - A Glimpse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parul02;

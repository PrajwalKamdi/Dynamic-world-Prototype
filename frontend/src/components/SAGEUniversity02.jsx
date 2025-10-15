import React from "react";
import AboutButton from "./AboutButton";
export default function SAGEUniversity02() {
  return (
    <div className="m-5 max-w-7xl">
      {/* Main Card */}
      <div className="w-full px-5 lg:px-8 py-5 rounded-2xl bg-gray-100">
        <AboutButton title={" About SAGE University"} />

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-8 space-y-6 text-sm md:text-base">
          <p>
            SAGAR Group of Educational Society (SAGE) University Indore,
            established in 2007 under the Madhya Pradesh Private University Act,
            offers a wide array of undergraduate, postgraduate, diploma, and PhD
            programs. These programs are spread across 15 multi-disciplinary
            institutes, such as the Institute of Agricultural Sciences,
            Institute of Arts and Humanities, and Institute of Architecture,
            covering diverse fields like Agriculture, Applied Sciences, Computer
            Applications, Engineering, Technology, Journalism, and Banking. SAGE
            University provides a comprehensive educational experience to
            students, with a focus on both academic excellence and practical
            skills.
          </p>

          <p>
            The university is recognized by the UGC and AICTE and has been
            accredited by NAAC with an A+ grade, which attests to its high
            academic standards. SAGE University also operates a second campus in
            Bhopal. It stands out for its commitment to student success,
            offering up to 100% scholarships, with a total of INR 2 crore in
            scholarships disbursed so far. The university also enjoys
            significant academic partnerships, with over 30 collaborations and
            MoUs with reputed institutions such as NDHU Taiwan, Brunel
            University London, and London Postgraduate Credit Management
            College.
          </p>

          <p>
            The major highlights of SAGE University Indore’s academic
            achievements are as follows:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 rounded-lg text-sm">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">
                  Particulars
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  SAGE University Highlights 2025
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Establishment Year</td>
                <td className="px-5 py-3">2017</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Campus Size</td>
                <td className="px-5 py-3">26 acres</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Student Intake</td>
                <td className="px-5 py-3">9,000+</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Recognized by</td>
                <td className="px-5 py-3">UGC, AICTE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Accredited by</td>
                <td className="px-5 py-3">NAAC with an A+ grade</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Approved by</td>
                <td className="px-5 py-3">BCI, PCI, COA</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">
                  Number of Affiliated Institutes
                </td>
                <td className="px-5 py-3">15</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">
                  Types of Scholarship Offered
                </td>
                <td className="px-5 py-3">Merit-based scholarship</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">
                  Total Scholarship Amount Disbursed
                </td>
                <td className="px-5 py-3">INR 2 crore</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Total Collaborations</td>
                <td className="px-5 py-3">30+</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MoUs</td>
                <td className="px-5 py-3">
                  NDHU Taiwan, Brunel University London, London Postgraduate
                  Credit Management College, UK
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Official Website</td>
                <td className="px-5 py-3">
                  <a
                    href="https://sageuniversity.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    sageuniversity.in
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Section */}
        <div className="bg-[#3E96F4] text-white rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Need more info about SAGE University?
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/xHNxo47mfb8"
                  title="SAGE University Video"
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

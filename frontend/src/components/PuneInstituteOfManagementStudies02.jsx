import React from 'react';
import AboutButton from './AboutButton'
export default function PuneInstituteOfManagementStudies02() {
  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <AboutButton title={"About Pune Institute Of Management Studies"}/>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-8 space-y-6 text-sm md:text-base">
          <p>
            The Pune Institute of Business Management (PIBM), established in 2007, is one of India’s leading B-schools.
            Affiliated with Savitribai Phule Pune University, PIBM offers PGDM and MBA programs, which are NBA and NAAC accredited.
            The institute is approved by AICTE and is a certified member of the AACSB. PIBM ranks among the Top 5 MBA colleges in Pune
            and the Top 125 MBA colleges in India according to NIRF Rankings 2023. It has a well-established reputation for providing
            quality business education, with its PGDM program recognized as equivalent to an MBA by the Association of Indian Universities (AIU).
          </p>

          <p>
            PIBM is committed to enhancing corporate exposure for its students through various initiatives like Dual Internships,
            Live Projects, Industrial Visits, and Corporate Training. The institute has a 100% placement record, with more than 750
            top recruiters visiting the campus every year. Reputed companies like Deloitte, KPMG, Accenture, and Amazon hire PIBM graduates,
            offering competitive packages. As per the latest placement report, PIBM’s highest salary offer in 2023 was INR 18 LPA,
            with the average package standing at INR 9.5 LPA.
          </p>

          <p>
            The institute also conducts an entrance exam, PMAT, alongside accepting national-level exams like CAT, XAT, MAT, CMAT,
            and MH-CET for admission. PIBM’s stellar rankings and placement records reflect its commitment to offering world-class
            business education and preparing students for successful careers.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 rounded-lg text-sm">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Particulars</th>
                <th className="px-5 py-3 text-left font-semibold">PIBM Pune Highlights 2025</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Establishment year</td>
                <td className="px-5 py-3">2007</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Accredited by</td>
                <td className="px-5 py-3">NBA, NAAC</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Approved by</td>
                <td className="px-5 py-3">AICTE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Member of</td>
                <td className="px-5 py-3">AACSB</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Courses offered</td>
                <td className="px-5 py-3">PGDM, MBA</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Highest package 2023</td>
                <td className="px-5 py-3">INR 18 LPA</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Rankings 2024</td>
                <td className="px-5 py-3">
                  55 by TOI (MBA), 63 by India Today (MBA), 76 by Outlook 2024 (MBA)
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Entrance exams accepted</td>
                <td className="px-5 py-3">
                  CAT, XAT, MAT, CMAT, MH-CET, PMAT (PIBM’s Online Aptitude Test)
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Official website</td>
                <td className="px-5 py-3">
                  <a href="https://www.pibm.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.pibm.in
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Section */}
        <div className="bg-[#3E96F4] text-white rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Need more info about Pune Institute Of Management Studies?
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

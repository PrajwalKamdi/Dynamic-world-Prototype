import React from "react";
import CurrentYear from './CurrentYear'
export default function DrAPJAbdulKalamUniversity03() {
  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="bg-gray-100 rounded-2xl shadow w-full px-5 lg:px-8 py-5">
        
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
          APJ Abdul Kalam University (AKU) offers a wide range of programs at the PhD, PG, UG, and Diploma/Polytechnic levels across various specializations, including Design, Engineering, and Science. 
          The admission process for UG and PG courses is a mix of merit-based selection and entrance exams. 
          For instance, <span className="font-semibold">BTech admissions are based on JEE Main scores</span>, while other programs like BSc, BPharma, and MBA have merit-based criteria. 
          The university provides full-time and part-time learning modes to cater to diverse student needs.
          </p>

          <p>
            TheSome of the most popular programs at AKU include <span className="font-semibold">BSc, BTech, BPharma, MBA, and BBA</span>, attracting students from across the country.
            With over 12+ programs, AKU offers flexibility and specialized education to its students. 
            Candidates can apply through the official website, where the university provides detailed guidelines for eligibility and application processes.
          </p>

          <p>
          AKU’s admission process for the 2024 session ensures transparency and accessibility, 
          allowing students to enroll in their desired programs based on academic merit or competitive exam scores. 
          The university also provides specific entrance exam-based admissions for professional courses like MTech (GATE), 
          BArch (NATA), and MBA (CMAT), ensuring high standards of academic excellence.
          </p>
        </div>

        {/* Table */}
        <h3 className="text-xl font-bold text-[#31393C] mb-4 flex items-center gap-2">
          Admission highlights {" "}<CurrentYear/>
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Particulars</th>
                <th className="px-5 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Mode of Study</td>
                <td className="px-5 py-3">Full-Time/Part-Time</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Programs Offered</td>
                <td className="px-5 py-3">12+ courses across multiple specializations</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Application Mode</td>
                <td className="px-5 py-3">
                  Online (<a href="https://www.aku.ac.in/website" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.aku.ac.in/website</a>)
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">Level of Programs Offered</td>
                <td className="px-5 py-3">PhD, PG, UG, Diploma/Polytechnic</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">Popular Programs</td>
                <td className="px-5 py-3">BSc, BTech, BPharma, MBA, BBA</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility, Selection, and Fee Structure Table */}
        <h3 className="text-xl font-bold text-[#31393C] mb-4">
          Eligibility, Selection, and Fee Structure
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Course Name</th>
                <th className="px-5 py-3 text-left font-semibold">Eligibility Criteria</th>
                <th className="px-5 py-3 text-left font-semibold">Selection Criteria</th>
                <th className="px-5 py-3 text-left font-semibold">Total Fee</th>
                <th className="px-5 py-3 text-left font-semibold">Seats Available</th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BSc</td>
                <td className="px-5 py-3">Class 12 with PCM/PCB</td>
                <td className="px-5 py-3">Merit-Based</td>
                <td className="px-5 py-3">NA</td>
                <td className="px-5 py-3">480</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BTech</td>
                <td className="px-5 py-3">Class 12 with 45% aggregate</td>
                <td className="px-5 py-3">JEE Main</td>
                <td className="px-5 py-3">INR 3.6 Lakh</td>
                <td className="px-5 py-3">1,290</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BPharma</td>
                <td className="px-5 py-3">Class 12 with 45% aggregate</td>
                <td className="px-5 py-3">Merit-Based</td>
                <td className="px-5 py-3">INR 1 Lakh</td>
                <td className="px-5 py-3">180</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">MBA</td>
                <td className="px-5 py-3">Graduation with 50% aggregate</td>
                <td className="px-5 py-3">CMAT/Merit-Based</td>
                <td className="px-5 py-3">NA</td>
                <td className="px-5 py-3">240</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BBA</td>
                <td className="px-5 py-3">Class 12</td>
                <td className="px-5 py-3">Merit-Based</td>
                <td className="px-5 py-3">NA</td>
                <td className="px-5 py-3">180</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Admission Process 2024 */}
        <h3 className="text-xl font-bold text-[#31393C] mb-4 flex items-center gap-2">
          Admission Process {" "}<CurrentYear/>
        </h3>
        <div className="text-[#31393C] leading-relaxed mb-6">
          <p className="mb-4">
            AKU's admission process varies by program, ensuring a fair evaluation for each applicant.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold">UG Courses:</span> Admissions for BTech and BArch are based on entrance exams like JEE Main and NATA, while other UG programs rely on merit in the Class 12 examination.
            </li>
            <li>
              <span className="font-semibold">PG Courses:</span> MTech and MArch admissions are based on GATE and GPAT scores, respectively. MBA admissions require a CMAT score, while other PG programs are merit-based.
            </li>
            <li>
              <span className="font-semibold">Application:</span> Eligible candidates must apply online through AKU's official website. The selection process for diploma and polytechnic programs also emphasizes academic merit.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
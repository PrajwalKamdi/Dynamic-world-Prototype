import React from "react";
import WarningSection from "./WarningSection";

export default function TransStadiaInstitute04() {
  return (
    <div className="min-h-screen mx-5 mb-5">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4 md:mb-0">
            All Courses
          </h2>
        </div>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            TransStadia Institute offers a diverse range of undergraduate
            programs, including B.Sc. and BBM/BMS, designed to meet the academic
            and professional needs of students. These courses are tailored to
            provide specialized knowledge and skills, ensuring students are
            well-prepared for their chosen fields. With state-of-the-art
            facilities and a focus on quality education, the institute provides
            a comprehensive learning experience.
          </p>

          <p>
            The tuition fees for these programs range between INR 5.1 L and INR
            7.5 L, depending on the course and specialization. Eligibility
            criteria vary, with specific entrance exams like the COE-TIEE being
            a requirement for admission. Prospective students are encouraged to
            check these details carefully while applying.
          </p>

          <p>
            For those aspiring to join the institute, the table below provides a
            summary of the tuition fees, eligibility requirements, and entrance
            exams for each course. This information helps candidates make
            informed decisions regarding their education at TransStadia
            Institute.
          </p>
        </div>
        {/* Table Section */}
        <div className="overflow-x-auto mb-8">
          <h3 className="text-lg font-semibold text-[#31393C] mb-4">
            TransStadia Institute Course Details
          </h3>
          <table className="min-w-full border border-gray-300 rounded-xl">
            <thead className="bg-gray-100 text-[#31393C]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">
                  Courses
                </th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">
                  Tuition Fees
                </th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">
                  Eligibility
                </th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">
                  Entrance Exams
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 font-medium border border-gray-300">
                  B.Sc.
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  INR 6.9 L – 7.5 L
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  Based on COE-TIEE exam
                </td>
                <td className="px-4 py-3 border border-gray-300">COE-TIEE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-200">
                <td className="px-4 py-3 font-medium border border-gray-300">
                  BBM/BMS
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  INR 5.1 L – 5.8 L
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  Based on COE-TIEE exam
                </td>
                <td className="px-4 py-3 border border-gray-300">COE-TIEE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ranking Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#3E96F4] mb-6">
            TransStadia Institute Ranking
          </h3>
          <div className="text-[#31393C] leading-relaxed space-y-4">
            <p>
              TransStadia Institute, located in Mumbai, India, is a premier
              educational institution known for its academic excellence and
              state-of-the-art facilities. The institute is officially
              accredited by the All India Council for Technical Education
              (AICTE), ensuring that its programs meet the highest standards of
              quality and technical education in India. This accreditation
              highlights the institute's commitment to providing students with a
              globally competitive education.
            </p>
            <p>
              The institute offers a range of undergraduate programs in fields
              like Business & Management Studies, Engineering, IT & Software,
              and Science. With a focus on innovation, it blends theoretical
              knowledge with practical applications to prepare students for
              modern industry demands.
            </p>
            <p>
              TransStadia Institute boasts a well-equipped campus that supports
              academic and extracurricular activities. The AICTE accreditation
              ensures students gain recognized qualifications that enhance their
              career prospects both nationally and internationally. Its holistic
              approach to education emphasizes ethical practices, skill
              development, and leadership, making it a preferred choice for
              aspiring professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

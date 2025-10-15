import React, { useState } from 'react';

// Data for the course table
const coursesData = [
  { course: 'B.E. / B.Tech (59 courses)', fees: '₹4.5 L – ₹9 L', eligibility: '10+2: 45%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'M.A. (4 courses)', fees: '₹1.4 L', eligibility: 'Graduation Required' },
  { course: 'M.Com (5 courses)', fees: '₹1.4 L – ₹6.3 L', eligibility: 'Graduation: 50%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.Sc. (89 courses)', fees: '₹1.8 L – ₹5.8 L', eligibility: '10+2: 40-50%, Exams: CBSE 12th/GSEB HSC+1 More' },
  { course: 'MBA/PGDM (33 courses)', fees: '₹3.6 L – ₹5.3 L', eligibility: 'Graduation: 50%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.Pharma (4 courses)', fees: '₹3.6 L – ₹6.4 L', eligibility: 'Exams: CBSE 12th/ISC+1 More' },
  { course: 'M.Sc. (47 courses)', fees: '₹1.8 L – ₹6 L', eligibility: 'Graduation: 50-55%, Exams: IIT JAM' },
  { course: 'After 10th Diploma (35 courses)', fees: '₹80 K – ₹3.9 L', eligibility: 'Exams: CBSE 10th/ICSE+1 More' },
  { course: 'BBA (44 courses)', fees: '₹2.9 L – ₹5.6 L', eligibility: 'Exams: CBSE 12th/ISC+4 More' },
  { course: 'BHMS (5 courses)', fees: '₹5.3 L', eligibility: '10+2: 50%, Exams: NEET/Gujarat NEET' },
  { course: 'BPT (2 courses)', fees: '₹4 L – ₹5.1 L', eligibility: 'Exams: CBSE 12th/ISC+1 More' },
  { course: 'MCA (24 courses)', fees: '₹2.7 L – ₹8.4 L', eligibility: 'Graduation: 45-50%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.Des (5 courses)', fees: '₹5.1 L – ₹11 L', eligibility: 'Exams: PU DAT' },
  { course: 'BCA (30 courses)', fees: '₹4 L – ₹5.4 L', eligibility: 'Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.A.M.S. (1 course)', fees: '₹16.1 L', eligibility: '10+2: 50%, Exams: NEET' },
  { course: 'B.A. (15 courses)', fees: '₹2.2 L – ₹2.9 L', eligibility: 'Exams: CBSE 12th/ISC+1 More' },
  { course: 'Ph.D. (43 courses)', fees: '₹2.1 L – ₹11.3 L', eligibility: 'Post-Graduation Required' },
  { course: 'MD (45 courses)', fees: '₹6 L – ₹12.8 L', eligibility: 'Exams: NEET PG' },
  { course: 'M.Pharma (22 courses)', fees: '₹2.9 L – ₹3.3 L', eligibility: 'Graduation: 55%' },
  { course: 'B.Com (10 courses)', fees: '₹2.2 L – ₹6.3 L', eligibility: 'Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.A. LL.B. (1 course)', fees: '₹6.8 L', eligibility: '10+2: 45%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'M.E./M.Tech (13 courses)', fees: '₹2.5 L', eligibility: 'Graduation: 50%' },
  { course: 'GNM (1 course)', fees: '₹2.3 L', eligibility: '10+2: 40%, Exams: CBSE 12th/ISC+1 More' },
  { course: 'B.Arch (1 course)', fees: '₹6.7 L', eligibility: '10+2: 45%, Exams: JEE Main/NATA' },
  { course: 'L.L.B. (1 course)', fees: '₹1.8 L', eligibility: 'Graduation Required' },
];

const Parul04 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coursesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(coursesData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen text-[#31393C] mx-5  mb-5 bg-gray-100 rounded-2xl ">
      <div className="px-5 lg:px-8 py-5 ">
        {/* Header */}
        <header className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-[#3E96F4]">All Courses at Parul University</h1>
        </header>

        {/* Description */}
        <section className="mb-8">
          <p className="text-sm md:text-base leading-7">
            Parul University offers a broad spectrum of over 200 undergraduate and postgraduate courses across diverse
            fields like Engineering, Business, Science, and Health Sciences. Below is a comprehensive list of programs,
            their fees, and eligibility criteria to help you find the perfect fit for your academic journey.
          </p>
        </section>

        {/* Section Title */}
        <h2 className="text-lg md:text-xl font-semibold mt-6 mb-4">Parul University Courses, Fees & Eligibility</h2>

        {/* Table */}
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="bg-[#F8F9FA] text-black">
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Course</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Total Tuition Fees</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={idx} className="border-b border-[#dee2e6] hover:bg-[#F8F9FA]">
                  <td className="px-4 py-3 font-semibold whitespace-nowrap" data-label="Course">{item.course}</td>
                  <td className="px-4 py-3 whitespace-nowrap" data-label="Tuition Fees">{item.fees}</td>
                  <td className="px-4 py-3 whitespace-nowrap" data-label="Eligibility">{item.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav className="mt-6 flex justify-center">
          <ul className="flex flex-wrap items-center gap-2">
            <li>
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md border border-[#dee2e6] text-[#3E96F4] bg-white transition disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-[#e9ecef]"
                aria-label="Previous page"
              >
                «
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <li key={num}>
                <button
                  onClick={() => paginate(num)}
                  className={`px-3 py-2 rounded-md border border-[#dee2e6] transition hover:bg-[#e9ecef] ${
                    currentPage === num
                      ? 'bg-[#3E96F4] text-white border-[#3E96F4]'
                      : 'bg-white text-[#3E96F4]'
                  }`}
                  aria-current={currentPage === num ? 'page' : undefined}
                >
                  {num}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md border border-[#dee2e6] text-[#3E96F4] bg-white transition disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-[#e9ecef]"
                aria-label="Next page"
              >
                »
              </button>
            </li>
          </ul>
        </nav>

        {/* Ranking Section */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#3E96F4] mb-3">Parul University Ranking</h2>
          <p className="text-sm md:text-base leading-7">
            Parul University, located in Vadodara, Gujarat, has earned an A++ grade accreditation from the National
            Assessment and Accreditation Council (NAAC), marking the highest level of recognition for quality
            education. The university is also accredited by NABL for its clinical research in the teaching hospital.
            Recognized by the University Grants Commission (UGC), it meets the high standards set by the Government of
            India.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Parul04;

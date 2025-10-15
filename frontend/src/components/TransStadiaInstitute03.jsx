import React from 'react';

export default function TransStadiaInstitute03() {
  return (
    <div className="min-h-screen  p-3 sm:p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
        
         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
           <h2 className="text-xl sm:text-2xl font-semibold text-[#3E96F4] mb-4 md:mb-0 text-center md:text-left">
           Admission Process
           </h2>
         </div>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4 text-sm sm:text-base">
        <p>
        TransStadia Institute, Mumbai offers admission to undergraduate courses based on entrance exams, including the TransStadia Eligibility Test (TET). The institute provides 4 courses across diverse streams such as Engineering, IT & Software, and Business & Management Studies. Popular UG programs include B.Sc. and BBM/BMS, designed to equip students with theoretical knowledge and practical skills in their chosen fields.
        </p>
        <p>
        The fee structure for UG courses at TransStadia Institute ranges between INR 5,10,000 and INR 7,50,000. In addition to tuition fees, students may need to pay application, examination, and other associated fees. These fees are as per the official website and may be subject to revisions. The institute’s focus on quality education ensures value for investment in these programs.
        </p>
        <p>
        The duration of all UG courses at TransStadia Institute is 3 years, allowing students to gain in-depth knowledge and industry-ready skills. Interested candidates for the 2024 admissions cycle are encouraged to review the course fees and eligibility criteria to make an informed decision.
        </p>
        </div>

         {/* Table Section */}
         <div className="overflow-x-auto mb-6 sm:mb-8">
           <h3 className="text-base sm:text-lg font-semibold text-[#31393C] mb-4">TransStadia Institute Highlights</h3>
           <table className="min-w-full border border-gray-300 rounded-xl text-sm sm:text-base">
             <thead className="bg-gray-100 text-[#31393C]">
               <tr>
                 <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold border border-gray-300">Particulars</th>
                 <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold border border-gray-300">Details</th>
               </tr>
             </thead>
             <tbody className="text-[#31393C]">
               <tr className="border-t border-gray-300">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Admission Basis</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">Entrance-based (TET and others)</td>
               </tr>
               <tr className="border-t border-gray-300 bg-gray-200">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Courses Offered</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">B.Sc., BBM/BMS, and others</td>
               </tr>
               <tr className="border-t border-gray-300">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Streams Available</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">Engineering, IT & Software, Business & Management Studies</td>
               </tr>
               <tr className="border-t border-gray-300 bg-gray-200">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Course Duration</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">3 years</td>
               </tr>
               <tr className="border-t border-gray-300">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Fees Range</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">INR 5,10,000 – INR 7,50,000</td>
               </tr>
               <tr className="border-t border-gray-300 bg-gray-200">
                 <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium border border-gray-300">Additional Fees</td>
                 <td className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300">Application, exam, and other fees may apply</td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }
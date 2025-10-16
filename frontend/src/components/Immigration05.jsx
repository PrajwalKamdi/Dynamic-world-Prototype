import React from "react";

const UnitedKingdom = () => {
  const jobDetails = [
    [
      "Job Positions",
      "Cashier, Accountant, Sales & Marketing, All types of Skilled Jobs, IT Jobs, Healthcare, Engineers, Administration, Store Manager, Mall Executives",
    ],
    ["Salary Range", "INR 25 Lacs/Year"],
    ["Duration of Employment Visa", "5 Years"],
    ["Insurance & Medical", "Provided by the Company"],
    ["Total Leaves/Year", "35 Days"],
    ["Accommodation/Food", "Provided by the Company"],
    ["Process Time", "6-8 Months"],
    [
      "Job Type",
      "Skilled, IT, Healthcare, Engineering, and Administrative Positions",
    ],
  ];

  const servicesProvided = [
    ["Service Agreement", "5 Years"],
    ["Visa Process", "Work Permit"],
    ["Itinerary", "Travel Included"],
    ["Travel Insurance", "Provided"],
    ["Flight Tickets", "Included"],
  ];

  return (
    <div className="min-h-screen bg-[#3E96F4] text-white px-4 sm:px-6 lg:px-8 py-6 font-[Poppins,sans-serif]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/30">
        <img
          src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1760432772/Flag_of_the_United_Kingdom__3-5_liqlyp.svg"
          alt="United Kingdom Flag"
          className="w-20 h-12 sm:w-24 sm:h-14 rounded-md object-cover"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">United Kingdom</h1>
      </div>

      {/* Job Information */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">Job Information</h2>
      <div className="bg-white/10 ring-1 ring-white/20 rounded-2xl p-4 sm:p-5 mb-7 backdrop-blur-sm">
        <table className="w-full border-collapse rounded-xl overflow-hidden">
          <tbody>
            {jobDetails.map(([category, details], i) => (
              <tr key={i} className="border-t first:border-t-0 border-white/25">
                <td className="w-1/3 font-semibold border-r border-white/25 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {category}
                </td>
                <td className="align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What Dynamic World is providing */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">
        What Dynamic World is providing?
      </h2>
      <div className="bg-white/10 ring-1 ring-white/20 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
        <table className="w-full border-collapse rounded-xl overflow-hidden">
          <tbody>
            {servicesProvided.map(([category, details], i) => (
              <tr key={i} className="border-t first:border-t-0 border-white/25">
                <td className="w-1/3 font-semibold border-r border-white/25 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {category}
                </td>
                <td className="align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional CTA */}
      {/* <div className="flex gap-3 mt-3 flex-wrap">
        <a
          href="#apply"
          className="bg-white text-[#31393C] font-semibold px-4 py-2 rounded-xl shadow-md"
        >
          Apply Now
        </a>
        <a
          href="#consultation"
          className="border border-white/60 text-white font-semibold px-4 py-2 rounded-xl"
        >
          Free Consultation
        </a>
      </div> */}
    </div>
  );
};

export default UnitedKingdom;

import React from "react";

const UAEFlag =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760432749/Flag_of_the_United_Arab_Emirates_wkwp6p.svg";

const Immigration03 = () => {
  const jobDetails = [
    {
      category: "Job Positions",
      details:
        "Cashier, Accountant, BPO/KPO, Sales & Marketing, Executives in Malls, Store Supervisor, Store Manager, Administration, Factory Supervisor, A/C Technicians",
    },
    { category: "Salary Range", details: "INR 40,000 – 50,000 / Month" },
    { category: "Duration of Employment Visa", details: "2 Years" },
    { category: "Insurance & Medical", details: "Provided by the Company" },
    { category: "Total Leaves/Year", details: "35 Days" },
    { category: "Accommodation/Food", details: "Provided by the Company" },
    { category: "Process Time", details: "45 Days" },
    { category: "Job Type", details: "Skilled and Professional Positions" },
  ];

  const servicesProvided = [
    { category: "Service Agreement", details: "2 Years" },
    { category: "Visa Process", details: "Work Permit" },
    { category: "Flight Tickets", details: "Included" },
    { category: "Travel Insurance", details: "Provided" },
    { category: "Process Time", details: "1 Month" },
    { category: "Accommodation", details: "Provided" },
  ];

  return (
    <div className="min-h-screen bg-[#3E96F4] text-white px-4 sm:px-6 lg:px-8 py-6 font-[Poppins,sans-serif]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/30">
        <img
          src={UAEFlag}
          alt="UAE Flag"
          className="w-10 h-auto rounded-md shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.15)]"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">DUBAI</h1>
      </div>

      {/* Job Information */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">Job Information</h2>
      <div className="bg-white/10 ring-1 ring-white/20 rounded-2xl p-4 sm:p-5 mb-7 backdrop-blur-sm">
        <table className="w-full border-collapse">
          <tbody>
            {jobDetails.map((row, i) => (
              <tr
                key={i}
                className="border-t first:border-t-0 border-white/25"
              >
                <td className="font-semibold w-1/3 border-r border-white/25 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {row.category}
                </td>
                <td className="align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {row.details}
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
      <div className="bg-white/10 ring-1 ring-white/20 rounded-2xl p-4 sm:p-5 mb-7 backdrop-blur-sm">
        <table className="w-full border-collapse">
          <tbody>
            {servicesProvided.map((row, i) => (
              <tr
                key={i}
                className="border-t first:border-t-0 border-white/25"
              >
                <td className="font-semibold w-1/3 border-r border-white/25 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {row.category}
                </td>
                <td className="align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
                  {row.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional CTA (kept as Tailwind-ready, commented) */}
      {/* <div className="flex gap-3 mt-2 flex-wrap">
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

export default Immigration03;

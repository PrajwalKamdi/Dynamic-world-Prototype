import React from "react";

const EuropeFlag =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760446180/Flag_of_Europe_li6ahv.svg";

const ImmigrationEurope = () => {
  const jobDetails = [
    {
      category: "Job Positions",
      details:
        "Cashier, Accountant, Sales & Marketing, Executives in Malls, Store Supervisor, Store Manager, Administration, Factory Supervisor, Delivery Person",
    },
    { category: "Salary Range", details: "INR 90,000 – 1.80 Lacs/Month" },
    { category: "Duration of Employment Visa", details: "2 + 1 Years" },
    { category: "Insurance & Medical", details: "Provided by the Company" },
    { category: "Total Leaves/Year", details: "35 Days" },
    { category: "Accommodation/Food", details: "Provided by the Company" },
    { category: "Process Time", details: "45 Days" },
    { category: "Job Type", details: "Skilled and Professional Positions" },
  ];

  const servicesProvided = [
    { category: "Service Agreement", details: "2 + 1 Years" },
    { category: "Visa Process", details: "Work Permit" },
    { category: "Itinerary", details: "Travel Included" },
    { category: "Travel Insurance", details: "Provided" },
    { category: "Process Time", details: "10 Days" },
    { category: "Accommodation", details: "Provided" },
  ];

  return (
    <div className="min-h-screen bg-[#007bff] text-white px-4 sm:px-6 lg:px-8 py-6 font-[Poppins,sans-serif]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={EuropeFlag}
          alt="Europe Flag"
          className="w-10 h-auto rounded-md"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">EUROPE</h1>
      </div>

      {/* Job Information */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">Job Information</h2>
      <div className="bg-white/10 ring-1 ring-white/40 rounded-2xl p-4 sm:p-6 mb-8">
        <table className="w-full border border-white/40 border-collapse rounded-xl overflow-hidden">
          <tbody>
            {jobDetails.map((row, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 border-white/30"
              >
                <td className="w-1/3 font-semibold border-r border-white/30 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
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
      <div className="bg-white/10 ring-1 ring-white/40 rounded-2xl p-4 sm:p-6">
        <table className="w-full border border-white/40 border-collapse rounded-xl overflow-hidden">
          <tbody>
            {servicesProvided.map((row, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 border-white/30"
              >
                <td className="w-1/3 font-semibold border-r border-white/30 align-top px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base">
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

      {/* Optional CTA (Tailwind-ready) */}
      {/* <div className="flex gap-3 mt-4 flex-wrap">
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

export default ImmigrationEurope;

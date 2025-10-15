import React from "react";

const UnitedKingdom = () => {
  return (
    <div className="min-h-screen bg-[#3E96F4] text-white">
      <div className="mx-auto p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1760432772/Flag_of_the_United_Kingdom__3-5_liqlyp.svg"
            alt="United Kingdom Flag"
            className="w-24 h-14"
          />
          <h1 className="text-3xl font-bold">United Kingdom</h1>
        </div>

        {/* Job Information Table */}
        <div className="bg-white/10 rounded-2xl p-6 mb-10">
          <table className="w-full border border-white/40 border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/30">
                <th className="py-2 px-3 font-semibold border-r border-white/30 w-1/3 text-left">
                  Category
                </th>
                <th className="py-2 px-3 font-semibold text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30 w-1/3">
                  Job Positions
                </td>
                <td className="py-2 px-3">
                  Cashier, Accountant, Sales & Marketing, All types of Skilled
                  Jobs, IT Jobs, Healthcare, Engineers, Administration, Store
                  Manager, Mall Executives
                </td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Salary Range
                </td>
                <td className="py-2 px-3">INR 25 Lacs/Year</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Duration of Employment Visa
                </td>
                <td className="py-2 px-3">5 Years</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Insurance & Medical
                </td>
                <td className="py-2 px-3">Provided by the Company</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Total Leaves/Year
                </td>
                <td className="py-2 px-3">35 Days</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Accommodation/Food
                </td>
                <td className="py-2 px-3">Provided by the Company</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Process Time
                </td>
                <td className="py-2 px-3">6-8 Months</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Job Type
                </td>
                <td className="py-2 px-3">
                  Skilled, IT, Healthcare, Engineering, and Administrative
                  Positions
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dynamic World Section */}
        <h2 className="text-xl font-bold mb-4">
          What Dynamic World is providing?
        </h2>
        <div className="bg-white/10 rounded-2xl p-6">
          <table className="w-full border border-white/40 border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/30">
                <th className="py-2 px-3 font-semibold border-r border-white/30 w-1/3 text-left">
                  Category
                </th>
                <th className="py-2 px-3 font-semibold text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30 w-1/3">
                  Service Agreement
                </td>
                <td className="py-2 px-3">5 Years</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Visa Process
                </td>
                <td className="py-2 px-3">Work Permit</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Itinerary
                </td>
                <td className="py-2 px-3">Travel Included</td>
              </tr>
              <tr className="border-b border-white/30">
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Travel Insurance
                </td>
                <td className="py-2 px-3">Provided</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold border-r border-white/30">
                  Flight Tickets
                </td>
                <td className="py-2 px-3">Included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitedKingdom;

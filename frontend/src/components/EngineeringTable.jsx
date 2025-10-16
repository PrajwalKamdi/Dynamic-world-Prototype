import React from "react";
const EngineeringTable = ({ tags, subHeading, data }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden my-6 p-2 lg:p-0">
        {/* Subheading */}
        <h1 className="text-xl lg:text-2xl font-semibold text-white/90 px-6 py-4 border-b text-center border-gray-200 bg-blue-500">
          {subHeading}
        </h1>
        <h1 className="text-xs lg:text-sm font-semibold text-[#31393C] px-6 py-4 border-b text-center border-gray-200">
          {tags}
        </h1>
        {/* Table Wrapper for Scroll on Mobile */}
        <div className="overflow-x-auto bg-gray-50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#3E96F4] text-white">
              <tr>
                <th className="px-2 py-2 lg:px-6 lg:py-4 text-xs lg:text-sm font-medium uppercase tracking-wide">
                  CODE
                </th>
                <th className="px-2 py-2 lg:px-6 lg:py-4 text-xs lg:text-sm  font-medium uppercase tracking-wide">
                  College Name
                </th>
                <th className="px-2 py-2 lg:px-6 lg:py-4 text-xs lg:text-sm  font-medium uppercase tracking-wide">
                  City
                </th>
                {/* <th className="px-2 py-2 lg:px-6 lg:py-4 text-xs lg:text-sm  font-medium uppercase tracking-wide">
                  State
                </th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#EDEEEB]/50 transition"
                >
                  <td className="px-2 py-2 lg:px-6 lg:py-4 text-[#31393C] font-medium text-xs lg:text-sm">
                    {item.collgeCode}
                  </td>
                  <td className="px-2 py-2 lg:px-6 lg:py-4 text-[#31393C] font-medium text-xs lg:text-sm">
                    {item.collegeName}
                  </td>
                  <td className="px-2 py-2 lg:px-6 lg:py-4 text-[#31393C] font-medium text-xs lg:text-sm">
                    {item.city}
                  </td>
                  {/* <td className="px-2 py-2 lg:px-6 lg:py-4 text-[#31393C] text-xs lg:text-sm">
                    {item.collegeState}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EngineeringTable;

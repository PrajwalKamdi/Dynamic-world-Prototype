import React from "react";
import MBBSHeader from "./MBBSHeader";

const MBBBTable = ({tags, subHeading, data }) => {
  console.log(data);
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden my-6">
        {/* Subheading */}
        <h1 className="text-2xl font-semibold text-white/90 px-6 py-4 border-b text-center border-gray-200 bg-blue-500">
          {subHeading}
        </h1>
        <h1 className="text-sm font-semibold text-[#31393C] px-6 py-4 border-b text-center border-gray-200">
          {tags}
        </h1>
        {/* Table Wrapper for Scroll on Mobile */}
        <div className="overflow-x-auto bg-gray-50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#3E96F4] text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-medium uppercase tracking-wide">
                  College Name
                </th>
                <th className="px-6 py-3 text-sm font-medium uppercase tracking-wide">
                  State
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#EDEEEB]/50 transition"
                >
                  <td className="px-6 py-4 text-[#31393C] font-medium">
                    {item.collegeName}
                  </td>
                  <td className="px-6 py-4 text-[#31393C]">
                    {item.collegeState}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MBBBTable;

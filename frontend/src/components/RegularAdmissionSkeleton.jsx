import React from "react";

const RegularAdmissionSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C] animate-pulse">
      {/* Header Section */}
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Text Placeholder */}
            <div className="flex-1 space-y-3">
              <div className="h-10 w-3/4 bg-white/30 rounded-md"></div>
              <div className="h-7 w-1/2 bg-white/30 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto">
        <div className=" space-y-6 items-start">
          <div className="px-8 py-5 space-y-4">
            <div className="h-32 w-full bg-[#FFC067]/20 rounded-md mt-6"></div>
            <div className="h-32 w-full bg-[#FFC067]/20 rounded-md mt-6"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularAdmissionSkeleton;

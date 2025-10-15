import { Download } from "lucide-react";
import React from "react";

const AboutButton = ({ title }) => {
  return (
    <div className="flex justify-between mb-5">
      <h2 className="text-xl md:text-2xl font-bold text-[#3E96F4] mb-4 lg:mb-0 text-center lg:text-left">
        {title}
      </h2>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
        <button className="bg-[#3E96F4] flex items-center gap-2 hover:bg-[#3179C2] text-white px-4 sm:px-5 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ease-in-out hover:scale-105 cursor-pointer duration-500">
          Download Brochure{" "}
          <span>
            <Download size={16} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutButton;

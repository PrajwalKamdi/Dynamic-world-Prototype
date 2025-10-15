import React from "react";

const MBBSHeader = ({ heading, tags }) => {
  console.log(tags);
  return (
    <div className="bg-[#3E96F4] p-5 my-3">
      <h2 className="text-lg lg:text-2xl font-bold mb-2 text-white text-center">{heading}</h2>
      <h4 className="text-base lg:text-base text-white/80 text-center">{tags}</h4>
    </div>
  );
};

export default MBBSHeader;

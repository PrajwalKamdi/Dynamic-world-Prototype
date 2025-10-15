import React from "react";

const BranchLocations = () => {
  const branches = [
    {
      city: "Pune",
      phone: "9820401375",
      address:
        "Office No. 506, Sterling Centre, Opp. Aurora Tower, MG Road, Camp, Pune 411001",
    },
    {
      city: "Mumbai",
      phone: "7738846286",
      address:
        "Shop No.8, Neelkant Shopping Centre, Camalane, Near PN Doshi Womens College Corner, Ghatkopar(W), Mumbai 400078",
    },
    {
      city: "Indore",
      phone: "7697736826",
      address:
        "Office No.517, Onam Plaza, AB Road, Near Industry House, Old Palasia, Indore 452001",
    },
  ];

  return (
    <div className="bg-[#EDEEEB] py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#31393c]">
          Our Branch Offices
        </h2>
        <p className="text-[#31393c] mt-2 text-base md:text-lg">
          Visit or connect with our regional offices for expert guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-[#CCC7BF] p-6 rounded-xl shadow-md text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">
              {/* Location SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#3E96F4"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3E96F4"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4.97-4.97-8-8.03-8-11.25a8 8 0 1116 0C20 12.97 16.97 16.03 12 21z"
                />
                <circle cx="12" cy="9" r="2.5" fill="#3E96F4" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#31393c] mb-1">
              {branch.city}
            </h3>
            <p className="text-[#31393c] text-sm mb-2">(+91) {branch.phone}</p>

            <a
              href={`tel:+91${branch.phone}`}
              className="inline-block bg-[#3E96F4] text-white px-5 py-2 rounded-lg hover:bg-[#31393c] transition mb-3"
            >
              Call Now
            </a>

            <p className="text-[#31393c] text-sm leading-relaxed">
              {branch.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchLocations;

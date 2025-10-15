import React from "react";

const branches = [
  { city: "Ahmedabad", address: "Suraj Complex (Drive-In Road)" },
  { city: "Raipur", address: "Ashirwad Tower (G.E. Road)" },
  { city: "Chennai", address: "Anandha Building (Mamballam West)" },
  { city: "Kerala", address: "Thangassery (Kollam)" },
  { city: "Andhra Pradesh", address: "Annamaiah (Tirupati)" },
  { city: "Bangalore", address: "Opening Shortly" },
  { city: "Canada", address: "Toronto (ON)" },
  { city: "Oman", address: "AL Nahdah (Muscat)" },
  { city: "Dubai", address: "Opening Shortly" },
  { city: "Gurgaon", address: "Sector 39 (Gurgaon)" },
  { city: "Faridabad", address: "5M-116 NIT (Faridabad)" },
];

const AboutUs06 = () => {
  return (
    // Section Padding: Adjusted vertical padding for a tighter look
    <section className="w-full bg-gray-50 py-10 px-4 sm:px-6">
      
      {/* Heading: Smaller text size (2xl on mobile, 3xl on desktop) and reduced margin */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        Our Branches Across the World
      </h2>

      {/* Grid Container: 
          - Changed grid-cols to show 1 column on mobile, 2 on small screens, and 3 from medium screens up. 
          - Removed lg:grid-cols-4. */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* SVG Icon: Slightly smaller icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12l-4.243 4.243"
              />
            </svg>
            <div>
              {/* City Name: Smaller font size (base on mobile, lg on desktop) */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{branch.city}</h3>
              {/* Address: Smallest font size (sm on mobile, base on desktop) */}
              <p className="text-sm sm:text-base text-gray-600 leading-snug">{branch.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs06;
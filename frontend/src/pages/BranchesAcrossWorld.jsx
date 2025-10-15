import React from "react";
import { MapPin, Phone } from "lucide-react";

const BranchesWorld = () => {
  const branches = [
    {
      name: "Ahmedabad",
      location: "Suraj Complex (Drive-In Road)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/Ahmedabad.png",
    },
    {
      name: "Raipur",
      location: "Ashirwad Tower (G.E. Road)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/raipur.png",
    },
    {
      name: "Chennai",
      location: "Anandha Building (Mamballam West)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/11/Chennai.png",
    },
    {
      name: "Kerala",
      location: "Thangassery (Kollam)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/11/Kerala.png",
    },
    {
      name: "Andhra Pradesh",
      location: "Annamaiah (Tirupati)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/sri-ranganathasvamy.png",
    },
    {
      name: "Bangalore",
      location: "Opening Shortly",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/bangalore.png",
    },
    {
      name: "Gurgaon",
      location: "Sector 39 (Gurgaon)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/07/Gurgaon.png",
    },
    {
      name: "Faridabad",
      location: "5M-116 NIT (Faridabad)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/07/Faridabad.png",
    },
    {
      name: "Canada",
      location: "Toronto (ON)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/canada.png",
    },
    {
      name: "Oman",
      location: "AL Nahdah (Muscat)",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/11/Oman.png",
    },
    {
      name: "Dubai",
      location: "Opening Shortly",
      img: "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2023/10/dubai.png",
    },
  ];

  return (
    // Responsive Padding and Background
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Adjusted text and spacing for better mobile flow */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Icon Box */}
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md mx-auto mb-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-2">
            Branches Across The World
          </h2>
          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base mb-4">
            Connecting communities globally with excellence
          </p>
          {/* Helpline/Call to Action */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-medium">
              Helpline:
            </span>
            <a
              href="tel:+917887881060"
              className="text-blue-600 font-bold text-sm sm:text-base hover:underline"
            >
              (+91) 788 788 1060
            </a>
          </div>
        </div>

        {/* Branch Cards Grid: Adjusted grid for better scaling 🔄 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              // Added hover effect for better user experience
              className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center p-3 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {/* Image Container: Kept aspect ratio but made it responsive */}
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-md">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="max-h-14 sm:max-h-16 w-auto object-contain"
                />
              </div>

              {/* Content: Adjusted text sizes for optimal fit */}
              <div className="mt-2 text-center w-full">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 truncate">
                  {branch.name}
                </h3>
                {/* Location: Adjusted font and icon size */}
                <div className="flex justify-center items-center gap-1 mt-1 text-xs text-slate-500">
                  <MapPin className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <p className="truncate px-1" title={branch.location}>{branch.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-xs sm:text-sm">
            Expanding our reach to serve you better worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchesWorld;
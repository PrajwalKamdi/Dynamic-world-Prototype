import React from "react";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Outer section: Reduced vertical padding from py-10 to py-6
    <div className="w-full bg-gradient-to-r from-slate-50 to-gray-100 py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Inner content box: Reduced padding from p-8 to p-5 */}
        <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 border-l-4 border-amber-500">
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Icon size remains the same, reduced margin-top */}
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              {/* Heading: Reduced font size on mobile and reduced bottom margin */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-gray-700 leading-snug mb-3 text-xs sm:text-sm">
                Dynamic World is dedicated to delivering top-notch educational content and services. 
                While we strive for accuracy and excellence, please be aware that course availability, 
                content, pricing, and program details are subject to change without prior notice.
              </p>
              <p className="text-gray-700 leading-snug text-xs sm:text-sm">
                To ensure you have the most up-to-date information, we strongly encourage you to contact 
                our helpline at <span className="font-bold text-gray-900">+91 788 788 1060</span> before 
                making any educational choices or purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
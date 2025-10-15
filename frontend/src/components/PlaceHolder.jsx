import React from "react";

const PlaceHolder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="h-8 w-72 mx-auto bg-gray-200 rounded animate-pulse mb-3" />
          <div className="h-4 w-96 mx-auto bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-blue-600 px-8 py-6">
            <div className="h-6 w-56 bg-white/20 rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
          </div>
          <div className="p-8 space-y-4">
            <div className="h-28 bg-gray-100 rounded animate-pulse" />
            <div className="h-28 bg-gray-100 rounded animate-pulse" />
            <div className="h-28 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolder;

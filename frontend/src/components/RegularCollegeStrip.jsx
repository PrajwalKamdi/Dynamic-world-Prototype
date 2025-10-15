import React from 'react'

const RegularCollegeStrip = ({title}) => {
  return (
      <div className="flex justify-between items-center mb-5 bg-[#3E96F4] p-3 px-5">
        <h3 className="text-2xl sm:text-2xl font-bold text-gray-50">
         {title}
        </h3>
        <div className="space-x-3">
          <button className=" text-white cursor-pointer hover:scale-105 transition duration-300 px-5 py-2 rounded-md font-medium  bg-red-600">
            Download Brochure
          </button>
        </div>
      </div>
  )
}

export default RegularCollegeStrip

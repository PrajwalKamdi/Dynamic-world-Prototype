import React from "react";

const UniversityDetails = ({ data }) => {
  if (!data) return <p className="text-center text-gray-600">No data available</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      {/* University Header */}
      <div className="flex flex-col md:flex-row items-center gap-4 border-b pb-4 mb-4">
        <img
          src={data.image?.[0]}
          alt={data.universityName}
          className="w-48 h-auto object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {data.universityName}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            📍 {data.location} | 🏛️ Established: {data.establish}
          </p>
        </div>
      </div>

      {/* Short Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">{data.shortDescription}</p>

      {/* About Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About University</h2>
        {data.about?.map((point, index) => (
          <p key={index} className="text-gray-700 mb-2 leading-relaxed">
            {point}
          </p>
        ))}
      </section>

      {/* Online Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Online Education</h2>
        {data.onlineEducation?.map((point, index) => (
          <p key={index} className="text-gray-700 mb-2 leading-relaxed">
            {point}
          </p>
        ))}
      </section>

      {/* Ranking Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">University Ranking</h2>
        {data.universityRanking?.map((point, index) => (
          <p key={index} className="text-gray-700 mb-2 leading-relaxed">
            {point}
          </p>
        ))}
      </section>

      {/* Program & Specialization Table */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Programs & Specializations</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Program</th>
                <th className="border border-gray-300 px-4 py-2">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {data.universityProgram?.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item.program}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Timestamp */}
      <p className="text-gray-500 text-xs mt-6 text-right">
        Last updated: {new Date(data.updatedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default UniversityDetails;

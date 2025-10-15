import React from "react";
import AboutSection from './AboutButton'
// --- Main Admission Layout Component ---
const ShivajiUniversity02 = () => {
  // Define Table Data based on the provided image
  const highlights = [
    {
      particular: "University Name",
      details: "Chhatrapati Shivaji Maharaj University (CSMU)",
    },
    { particular: "Established", details: "2018" },
    { particular: "Location", details: "Navi Mumbai, Maharashtra" },
    { particular: "Type", details: "Private University" },
    {
      particular: "Recognition & Approvals",
      details: "Approved by AICTE, recognized by UGC, PCI, and AIU",
    },
    {
      particular: "Ranking (TODAY 2024)",
      details:
        "B.Tech: Ranked 221/285; B.A: Ranked 156/186; B.Com: Ranked 104/229; B.Sc: Ranked 179/211",
    },
    {
      particular: "Ranking (TIMES 2024)",
      details: "Ranked 87/175 for private engineering institutes",
    },
  ];

  const videoId = "yi5M0C6vt38"; // Placeholder ID
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div
      className=" relative max-w-7xl mx-5 lg:mx-7 rounded-xl overflow-hidden shadow mt-5 bg-white "
      // Attractive Color Grade: Deep indigo background for vibrancy
      style={{
        backgroundColor: "#f8fafc", // Light background now, as the card dominates
      }}
    >
      {/* === MAIN CONTENT AREA (White Background) === */}
      <div className="p-6 md:p-10">
        <AboutSection  title={"About Chhatrapati Shivaji Maharaj University"}/>
        {/* Detailed Description Paragraphs */}
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
          Chhatrapati Shivaji Maharaj University (CSMU) is a private university
          located in Navi Mumbai, Maharashtra, established in 2018. The
          university is recognized by the University Grants Commission (UGC),
          All India Council for Technical Education (AICTE), Pharmacy Council of
          India (PCI), and Association of Indian Universities (AIU). CSMU offers
          45 courses across various disciplines, including commerce, banking,
          management, engineering, law, education, information technology,
          pharmacy, hotel management, and media & mass communication, at
          certificate, diploma, undergraduate, postgraduate, and doctoral
          levels.
        </p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-8">
          Admissions to CSMU are based on the university's own entrance exam
          (CSMUUEE), though candidates with valid national-level exam scores
          such as JEE, MHT CET, CUET, and others may be exempted. The university
          also provides several scholarships based on academic performance and
          family income. CSMU has achieved significant placement success in
          2024, with over 250 students securing jobs offering packages above ₹8
          LPA. The campus boasts various amenities such as hostels, mess,
          canteen, sports facilities, medical assistance, parking, and
          state-of-the-art laboratories.
        </p>

        {/* Highlights Table */}
        <h3 className="text-lg font-bold  mb-4 pt-4 border-t  border-gray-100">
          <span className="text-gray-700">Chhatrapati Shivaji Maharaj University Highlights</span>
        </h3>

        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/3">
                  Particulars
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-2/3">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {highlights.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.particular}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="p-6 md:p-12 text-white flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: "#3e96f4" }} // A slightly deeper blue for contrast
      >
        <h3 className="text-xl md:text-xl font-medium mb-8 leading-snug max-w-2xl">
          Need more info about Chhatrapati Shivaji Maharaj University?
        </h3>

        <div className="max-w-4xl mx-auto w-100">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0 rounded-xl shadow-xl"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShivajiUniversity02;

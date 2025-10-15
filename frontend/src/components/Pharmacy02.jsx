import React from "react";

const Pharmacy02 = () => {
  const mumbaiColleges = [
    {
      name: "Institute of Chemical Technology (ICT)",
      highlights:
        "Known for advanced research and innovation in pharmaceutical sciences.",
    },
    {
      name: "Shobhaben Pratapbhai Patel School of Pharmacy & Technology",
      highlights: "Offers integrated learning and state-of-the-art facilities.",
    },
    {
      name: "Bombay College of Pharmacy (BCP)",
      highlights: "Reputed institution with strong industry connections.",
    },
    {
      name: "Dr. Bhanuben Nanavati College of Pharmacy",
      highlights: "Focuses on modern teaching methodologies.",
    },
    {
      name: "Principal K.M. Kundnani College of Pharmacy (KMKCP)",
      highlights:
        "Offers a variety of pharmacy programs with practical exposure.",
    },
    {
      name: "VES College of Pharmacy (VESCOP)",
      highlights: "Known for experienced faculty and strong placement support.",
    },
    {
      name: "Seth GS Medical College (GSMC)",
      highlights:
        "One of Mumbai’s premier institutions in healthcare and pharmacy.",
    },
    {
      name: "SNDT Women’s University",
      highlights:
        "Offers excellent pharmacy programs with a focus on women’s education.",
    },
    {
      name: "Hiray Group of Institutes",
      highlights: "Affordable and quality pharmacy education.",
    },
    {
      name: "H.K. College of Pharmacy (HKCP)",
      highlights: "Focuses on holistic education and industry training.",
    },
  ];

  const puneColleges = [
    {
      name: "Padamshree Dr. DY Patil College of Pharmacy",
      highlights: "Offers modern facilities and experienced faculty.",
    },
    {
      name: "Poona College of Pharmacy",
      highlights:
        "Known for its academic excellence and placement opportunities.",
    },
    {
      name: "Dr. DY Patil Institute of Pharmaceutical Sciences and Research",
      highlights: "Focuses on innovation and research-oriented learning.",
    },
    {
      name: "Maeer’s Maharashtra Institute of Pharmacy (MIP)",
      highlights: "Provides strong academic and practical training.",
    },
    {
      name: "Modern College of Pharmacy",
      highlights:
        "A leading pharmacy institution with affordable fee structures.",
    },
    {
      name: "Savitribai Phule Pune University (SPPU)",
      highlights:
        "Offers a range of pharmacy programs in a renowned university setup.",
    },
    {
      name: "Bharati Vidyapeeth Deemed University (BVDU)",
      highlights:
        "A well-established institution with a focus on practical learning.",
    },
    {
      name: "Allana College of Pharmacy",
      highlights: "Known for providing a supportive learning environment.",
    },
    {
      name: "Abhinav Education Society’s College of Pharmacy",
      highlights:
        "Offers state-of-the-art labs and experienced teaching staff.",
    },
    {
      name: "Indira Group of Institutes (IGI)",
      highlights: "Provides strong placement support and real-world exposure.",
    },
  ];

  return (
    <div className="m-5 max-w-7xl">
      <div className="bg-gray-100 py-5 px-5 lg:px-8 rounded-2xl">
        <section className="mb-5">
          <p className="text-gray-700 text-sm">
            To pursue a Pharmacy course, students need to have completed Class
            12 in the Science stream with subjects like Physics, Chemistry, and
            Biology or Mathematics (PCMB/PCM). Once qualified in pharmacy,
            graduates can explore a variety of careers such as Clinical Research
            Associate, Pharmacist, Drug Safety Associate, Drug Inspector,
            Scientific Writer, Pharmacy Business Owner, or Pathological Lab
            Scientist.
          </p>
        </section>

        {/* Mumbai Colleges Table */}
        <section className="mb-10 overflow-x-auto">
          <h3 className="text-lg  font-semibold mb-5">
            Top Pharmacy Colleges in Mumbai
          </h3>
          <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
            <thead className="bg-[#3E96F4] text-white  border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                  College Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                  Highlights
                </th>
              </tr>
            </thead>
            <tbody>
              {mumbaiColleges.map((college, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 text-left"
                      : "bg-white text-left"
                  }
                >
                  <td className="py-3 px-5 font-medium border-r border-gray-300 text-sm">
                    {college.name}
                  </td>
                  <td className="py-3 px-5 text-sm">{college.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Pune Colleges Table */}
        <section className="overflow-x-auto">
          <h3 className="text-lg lg:text-xl  font-semibold mb-5 text-center">
            Top Pharmacy Colleges in Pune
          </h3>
          <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-[#3E96F4]  text-white border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                  College Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                  Highlights
                </th>
              </tr>
            </thead>
            <tbody>
              {puneColleges.map((college, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 text-left"
                      : "bg-white text-left"
                  }
                >
                  <td className="py-3 px-5 font-medium border-r border-gray-300 text-sm">
                    {college.name}
                  </td>
                  <td className="py-3 px-5 text-sm">{college.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Pharmacy02;

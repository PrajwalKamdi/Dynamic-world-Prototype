import React from "react";
import AboutButton from "./AboutButton";
const AIUniversity02 = () => {
  const highlights = [
    { particular: "University Name", details: "Universal AI University" },
    { particular: "Location", details: "Karjat, Maharashtra, India" },
    { particular: "Established", details: "2023" },
    { particular: "Accreditations", details: "UGC, AICTE, NAAC (in process)" },
    {
      particular: "International Memberships",
      details:
        "ACU, IAU, AMDISA, Businet, GBSN, IMA, Positive Impact Rating, PRME, Scopus Preview",
    },
    { particular: "Indian Memberships", details: "AIU, CII, NASSCOM" },
    {
      particular: "Research Initiatives",
      details: "AI Ethics, Natural Language Processing, Cybersecurity",
    },
    {
      particular: "Unique Features",
      details:
        "AI-driven curriculum, interdisciplinary approach, AI incubation center",
    },
    { particular: "Highest Placement Package", details: "INR 1.01 Crore" },
    {
      particular: "Campus Facilities",
      details:
        "AI Labs, Wellness Room, Sports Complex, Hostels, Gym, Medical Room, and more",
    },
  ];

  const videoId = "NTD4XMDVpKQ";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div className="max-w-7xl m-5">
      <div className="bg-gray-100 px-5 lg:px-8 py-5">
        <AboutButton title={"About Universal AI University"} />
        <div className="text-sm lg:text-base text-gray-700 leading-relaxed">
          <p className=" mb-4 text-left">
            <span className="font-semibold">Universal AI University</span>,
            established in 2023 and located in Karjat, Maharashtra, is a private
            institution approved by UGC and AICTE. The university is accredited
            by NBA and is a member of the Association of Indian Universities
            (AIU), as well as various international organizations. Offering
            courses in fields like Engineering, Business & Management, Sound &
            Music, Design, and Liberal Arts, the university provides a range of
            undergraduate, postgraduate, and doctoral programs, including a
            Global BBA, Executive MBA, and a PhD program. Additionally, two new
            courses, B.Tech in Sound Engineering and B.A. in Music and Audio
            Production, have been launched. Admissions are based on scores from
            the Universal AI Entrance Test and other recognized entrance exams.
          </p>
          <p className="mb-8 text-left">
            The university is distinguished by its strong international and
            Indian memberships, including AACSB, AMDISA, businet, and IMA, among
            others. It promotes hands-on experiential learning through industry
            partnerships, with backing from 60 global CEOs. The curriculum
            focuses on AI ethics and interdisciplinary approaches, combining AI
            with design and business. The campus is equipped with
            state-of-the-art facilities, including AI Laboratories, Quantum
            Computing AI Lab, AR VR MR Lab, wellness rooms, and sports
            facilities. The highest-ever placement package at the university has
            reached an impressive Rs 1.01 Crore, demonstrating the institution’s
            commitment to student success.
          </p>

          <p className="mb-8 text-left">
            Universal AI University also emphasizes research initiatives in AI
            Ethics, Natural Language Processing, and Cybersecurity, with funding
            available for student-led research projects. The university’s AI and
            Data Science resources include specialized software, cloud-based
            data resources, and access to frameworks like TensorFlow and
            PyTorch. Additionally, the university runs an incubation center to
            support AI and tech startups with mentorship, funding, and business
            development support. Students regularly participate in national AI
            competitions, hackathons, and ideathons, showcasing their skills and
            innovations in the field.
          </p>
        </div>

        <h3 className="text-lg text-left font-bold text-[#3e96f4] mb-4 pt-4 border-t border-gray-100">
          AI University Highlights
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                    {item.particular}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-left">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#3E96F4] mt-5 rounded-2xl p-5 w-full">
          <h3 className="lg:text-2xl font-semibold text-white text-center mb-3">
            Need more info about Chhatrapati Shivaji Maharaj University?
          </h3>

          {/* Card + responsive iframe wrapper */}
          <div className="mx-auto max-w-7xl rounded-2xl">
            <div
              className="relative w-full overflow-hidden rounded-xl
                    aspect-video md:aspect-auto md:h-[60vh]"
            >
              <iframe
                src={embedUrl}
                title="Chhatrapati Shivaji Maharaj University – Info"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIUniversity02;

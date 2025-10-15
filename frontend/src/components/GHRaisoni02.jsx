import React from "react";
import AboutButton from "./AboutButton";
const GHRaisoni02 = () => {
  const raisoniHighlightsData = [
    { particular: "Campus Location", details: "Pune, Maharashtra" },
    { particular: "Courses Offered", details: "UG and PG" },
    { particular: "Fees Range", details: "INR 1,20,000 – 2,10,000" },
    { particular: "Ownership", details: "Private" },
    { particular: "UGC Approved", details: "No" },
    { particular: "AIU Membership", details: "No" },
    { particular: "Institute of National Importance", details: "No" },
  ];
  return (
    <div className="m-5 max-w-7xl">
      <div className="w-full px-5 lg:px-8 py-5 bg-gray-100 rounded-2xl">
        <AboutButton title={"About GH Raisoni Skill Tech University"} />

        <section className="space-y-4">
          <p className="text-base leading-[1.7]">
            G.H. Raisoni International Skill Tech University (GHRISTU), located
            in Pune, Maharashtra, is a private institute offering a range of
            undergraduate and postgraduate courses, including MBA/PGDM, B.Sc.,
            M.Sc., MCA, BCA, and BBA. The university provides 9 specializations,
            such as Digital Marketing, Finance, Human Resources, International
            Business, and Supply Chain, aiming to deliver industry-relevant
            knowledge and skills. GHRISTU offers full-time degree programs
            across four major streams: Business & Management Studies, Science,
            IT & Software, and Architecture & Planning.
          </p>
          <p className="text-base leading-[1.7]">
            The university’s fee structure ranges between INR 1,20,000 to INR
            2,10,000, making it an affordable option for many students.
            Placements at GHRISTU are considered decent compared to other
            institutes. The institute focuses on providing practical education
            and training to students, preparing them for diverse career
            opportunities in various industries. Despite not being UGC-approved
            or a member of the AIU, GHRISTU offers a promising education
            environment for aspiring students. Its curriculum and teaching
            methods ensure that students are well-prepared for their
            professional journeys.
          </p>
        </section>
        <section className="mt-5">
          <h2 className="text-[1.3rem] font-bold mb-2 text-[#3E96F4] md:text-[1.5rem]">
            Institute Highlights
          </h2>
          <table className="w-full text-[0.95rem] border border-[#EDEEEB] rounded-2xl overflow-hidden shadow-md">
            <tbody>
              {raisoniHighlightsData.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-[#F9FAFB] hover:bg-[#EDEEEB]/60 transition-colors duration-300"
                >
                  <td className="w-[40%] p-4 font-semibold text-[#31393C] border-b border-[#EDEEEB] md:w-[35%]">
                    {item.particular}
                  </td>
                  <td className="p-4 text-[#555] border-b border-[#EDEEEB]">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="bg-[#3E96F4] py-12 px-6 text-center rounded-2xl my-5">
          <h2 className="text-xl font-semibold text-white mb-3">
            Need more info about G.H. Raisoni International Skill Tech
            University?
          </h2>
          <div className="max-w-[800px] mx-auto bg-black rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                // TODO: Replace with a relevant video URL for G.H. Raisoni University
                src="https://www.youtube.com/embed/w6cwkVpQrUo"
                // Corrected the title attribute
                title="G.H. Raisoni International Skill Tech University"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GHRaisoni02;

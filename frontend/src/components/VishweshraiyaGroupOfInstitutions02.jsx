import React from "react";
import AboutButton from "./AboutButton";

const Vishweshraiya02 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C]  rounded-2xl p-6 md:p-8 m-5 mt-5">
      {/* Heading */}
      <AboutButton title={" About Vishveshwarya Group of Institutions"} />

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed mb-6">
        Vishveshwarya Group of Institutions (VGI), established in 2000, is a
        private educational institution located in Greater Noida, Uttar Pradesh.
        VGI offers a wide array of specializations, including Computer Science
        Engineering, Electrical Engineering, Electronics & Communication
        Engineering, Fashion Design, and more. The institute provides 39 courses
        across various streams, such as Engineering, Business & Management,
        Science, IT, Law, and Medicine. The courses offered at VGI include
        B.E./B.Tech, M.E./M.Tech, MBA/PGDM, MCA, B.Pharma, LL.B, BBA, B.Sc,
        B.Voc, and many others. With a total seat intake of 2278, the institute
        offers Degree and Diploma courses across UG, PG, and After 10th
        programs. The courses are approved by AICTE and PCI, ensuring quality
        education and career opportunities for students. The fee range for these
        programs at VGI varies between INR 22,500 and INR 2,82,000. The courses
        are available in full-time mode, and the institute is committed to
        providing an excellent educational experience across multiple
        disciplines.
      </p>

      {/* Quick Facts Table */}
      <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
      <section className="bg-white rounded-lg shadow mb-12">
        <table className="w-full border-collapse">
          <tbody>
            {[
              ["Campus Location", "Greater Noida, Uttar Pradesh"],
              ["Courses Offered", "UG, PG, and After 10th"],
              ["No. of Seats", "2278"],
              ["Fees Range", "INR 22,500 – 2,82,000"],
            ].map(([particular, detail], idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="border px-4 py-2 font-medium w-1/3">
                  {particular}
                </td>
                <td className="border px-4 py-2">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* YouTube Video with Heading */}
      <div className="w-full bg-[#3E96F4] rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6 mb-6">
        {/* Heading above video */}
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">
          Need more info about Vishveshwarya Group of Institutions?
        </h2>

        {/* Video */}
        <div className="w-full aspect-video overflow-hidden h-[60vh] mb-6 flex justify-center items-center ">
          <iframe
            className="w-[500px] h-[500px] rounded-2xl rounded-t-2xl"
            src="https://www.youtube.com/embed/HBbMk8_IZHc?si=Bxt4YMG3LBcSNdIQ"
            title="Vishveshwarya Group of Institutions"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Vishweshraiya02;

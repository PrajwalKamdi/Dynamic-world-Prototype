import { Download } from "lucide-react";
import React from "react";
import AboutButton from "./AboutButton";

const Pillai02 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C]  rounded-lg  p-6 md:p-8 m-5">
      {/* Heading */}
     <AboutButton title={"About Pillai College of Engineering"}/>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed mb-6">
        Pillai College of Engineering (PCE), a private institute established in
        1999 in Mumbai, Maharashtra, is renowned for its diverse academic
        offerings in engineering and IT. The college provides Undergraduate
        (UG), Postgraduate (PG), and Doctorate programs across 23 courses and 7
        specializations, including Automobile Engineering, Computer Science
        Engineering, and Robotics Engineering. The programs include B.E./B.Tech,
        M.E./M.Tech, and Ph.D., with course fees ranging from INR 93,912 to INR
        4,62,608. The institute has a total seat intake of 1,008 and boasts a
        median salary of INR 3,94,750 for its graduates.
      </p>

      {/* Facilities */}
      <h3 className="text-xl font-semibold mb-2">
        Facilities and Infrastructure
      </h3>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        PCE provides state-of-the-art facilities to ensure holistic development
        for its students. The campus houses a digital library with over 22,000
        volumes, 1,232 e-journals, and memberships with reputed organizations
        like IUCEE and IIT Bombay. The library supports diverse services like
        reference, current awareness, and inter-library lending. Hostel
        facilities are available off-campus, with 380 beds for boys and 300 beds
        for girls, offering single occupancy and shared rooms. Additional
        infrastructure includes well-equipped laboratories, a gym, a cafeteria,
        an auditorium, A/C classrooms, and sports facilities for student
        recreation and growth.
      </p>

      {/* Quick Facts Table */}
      <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
      <section className="bg-white rounded-lg shadow mb-12">
        <table className="w-full border-collapse">
          <tbody>
            {[
              ["Campus Location", "Mumbai, Maharashtra"],
              ["Courses Offered", "UG, PG, Doctorate"],
              ["Total Seats", "1,008"],
              ["Specializations", "7 (e.g., Robotics, IT, etc.)"],
              ["Median Salary", "INR 3,94,750"],
              ["Fees Range", "INR 93,912 – 4,62,608"],
              ["Library Collection", "22,643 volumes, 1,232 e-journals"],
              ["Hostel Capacity", "Boys: 380, Girls: 300"],
              ["Key Facilities", "Labs, Cafeteria, Sports, Gym"],
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
          Need more info about Pillai College of Engineering?
        </h2>

        {/* Video */}
        <div className="w-full aspect-video overflow-hidden mt-12 mb-6 flex justify-center items-center ">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/pZP3kO2jY6k"
            title="Pillai College of Engineering"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Pillai02;

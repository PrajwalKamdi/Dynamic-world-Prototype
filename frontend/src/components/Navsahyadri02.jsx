import React from "react";
import AboutButton from "./AboutButton";

const Navsahyadri02 = () => {
  const videoId = "PYZuV5k73rM"; // Placeholder ID
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div className="max-w-7xl m-5">
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        <AboutButton title={"About Navsahyadri Group of Institutes"} />
        <p className=" text-gray-700 leading-relaxed mb-4 text-left">
          The Navsahyadri Group of Institutes (NGI), located in{" "}
          <strong className="font-bold text-gray-800">Pune, India</strong>, is a{" "}
          <strong className="font-bold text-gray-800">
            government-affiliated institution
          </strong>{" "}
          offering programs in{" "}
          <strong className="font-bold text-gray-800">
            engineering, management, and pharmacy
          </strong>
          . NGI is committed to delivering{" "}
          <strong className="font-bold text-gray-800">
            quality education and hands-on training
          </strong>
          , ensuring students are well-prepared for professional challenges. Its
          programs are tailored to develop{" "}
          <strong className="font-bold text-gray-800">
            technical, managerial, and ethical skills
          </strong>{" "}
          among students.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-8 text-left">
          NGI provides{" "}
          <strong className="font-bold text-gray-800">
            undergraduate and postgraduate programs
          </strong>{" "}
          in engineering and technology, alongside{" "}
          <strong className="font-bold text-gray-800">MBA and PGDM</strong>{" "}
          courses in management. The pharmacy programs aim to produce{" "}
          <strong className="font-bold text-gray-800">
            competent and ethically grounded pharmacy professionals
          </strong>
          . In addition, the institute boasts modern facilities, including a{" "}
          <strong className="font-bold text-gray-800">
            well-stocked library, laboratories, a gym, playground, seminar
            halls, and hostels
          </strong>{" "}
          equipped with mess, banking, and medical services.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-8 text-left">
          Beyond academics, NGI emphasizes holistic development through{" "}
          <strong className="font-bold text-gray-800">
            events like Freshers’ Day, Ambedkar Jayanti, and Yoga Day
          </strong>
          , along with{" "}
          <strong className="font-bold text-gray-800">
            workshops, industrial visits, internships, and research projects
          </strong>
          . Accredited by the{" "}
          <strong className="font-bold text-gray-800">
            National Assessment and Accreditation Council (NAAC)
          </strong>
          , NGI upholds its reputation as a hub of academic excellence and
          innovation.
        </p>
        <div className="bg-[#3E96F4] h-[60%] pb-5  rounded-2xl">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <h3 className="text-xl sm:text-2xl text-center text-white font-semibold py-5">
              Need more info about Chhatrapati Shivaji Maharaj University?
            </h3>
            {/* Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    title="PIBM Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navsahyadri02;

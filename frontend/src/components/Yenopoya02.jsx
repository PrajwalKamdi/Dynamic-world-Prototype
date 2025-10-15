import React from "react";
import AboutButton from "./AboutButton";
const Yenopoya02 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C]  rounded-2xl p-6 md:p-8 m-5 mt-5">
      {/* Heading */}
      <AboutButton title={"About Yenepoya University"} />

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed mb-6">
       <span className="font-semibold"> Yenepoya University</span>, a deemed-to-be university in Bangalore, is
        accredited with an <span className="font-semibold">A+ grade by NAAC</span> and recognized for its academic
        excellence. It holds an impressive 85th rank among the Top 100
        Universities in India, as per NIRF 2023. The university is also globally
        acknowledged, ranking in the 301-400 band in the Times Higher Education
        (THE) Global Impact Rankings and achieving Band A in ARIIA under the
        self-financed/private institutions category. Furthermore, it is
        UGC-recognized and rated 3 stars by ICARE in the Young University
        category.
      </p>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        The university offers a wide range of Graduate, Postgraduate, and
        Doctoral programs in disciplines such as Science, Management,
        Engineering, Medical, and Pharmacy. Popular degrees available include
        MBBS, BDS, BBA, BCom (Hons), BE, BCA, MCA, MSc, and more. These programs
        are designed to provide a comprehensive education that combines
        theoretical knowledge with practical training to prepare students for
        successful careers.
      </p>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        dmission to Yenepoya University is primarily based on marks obtained in
        the previous qualifying examinations, with NEET-UG and NEET-PG being the
        key entrance exams for medical courses. The university’s emphasis on
        academic rigor and global impact makes it a top choice for students
        aspiring to excel in their respective fields.
      </p>

      {/* YouTube Video with Heading */}
      <div className="w-full bg-[#3E96F4] rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6 mb-6">
        {/* Heading above video */}
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">
          Need more info about Yenepoya University?
        </h2>

        {/* Video */}
        <div className="w-full aspect-video overflow-hidden h-[60vh] mb-6 flex justify-center items-center ">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/k32NHVAV31Q?si=VrQCA6GtodCqm-_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Yenopoya02;

import React from "react";

const Yenopoya04 = () => {
  return (
    <section className="bg-gray-100 text-[#31393C] rounded-lg shadow p-6 md:p-8 m-5">
      {/* Heading */}

      <h3 className="text-2xl sm:text-2xl font-bold mb-4 text-[#3E96F4]">
        All Courses
      </h3>

      <p className="text-sm md:text-base leading-relaxed text-gray-700">
        Yenepoya (Deemed to be University) provides a diverse range of courses
        spanning undergraduate (UG), postgraduate (PG), and diploma levels in
        various fields of education. Popular UG courses include MBBS, B.Sc., and
        BBA, while PG offerings encompass MBA, M.Sc., MCA, and more. The
        university also offers specialized courses such as BAMS, BHMS, and
        D.Pharma. Admission requirements vary based on course levels and include
        merit or entrance exams like NEET, KCET, or CBSE 12th scores. Below is a
        table highlighting some key courses, their tuition fees, and eligibility
        criteria:
      </p>
      {/* Courses Table */}
      <div class="w-full max-w-6xl mx-auto mt-8 text-sm space-y-2">
        <div class="bg-[#3E96F4] text-white rounded-t-2xl px-5 py-3">
          <h2 class="text-base md:text-lg font-semibold">
            Yenepoya University — Courses, Fees, Eligibility & Exams
          </h2>
        </div>

        <div class="hidden md:grid md:grid-cols-4 bg-[#EDEEEB] font-semibold text-[#31393C] border-x border-t border-gray-200 text-xs uppercase tracking-wide">
          <div class="px-5 py-2">Course</div>
          <div class="px-5 py-2">Tuition Fees (INR)</div>
          <div class="px-5 py-2">Eligibility</div>
          <div class="px-5 py-2">Exams</div>
        </div>

        <div class="bg-white border border-gray-200 rounded-b-2xl shadow-sm divide-y divide-gray-200 text-[#31393C]">
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">B.Sc.</div>
            <div>3 L – 11.8 L</div>
            <div>10+2: 35-55%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">B.E./B.Tech</div>
            <div>8 L – 13 L</div>
            <div>10+2: 60%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MBBS</div>
            <div>9.2 L</div>
            <div>10+2: 50%</div>
            <div>NEET</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">BCA</div>
            <div>3 L – 5.3 L</div>
            <div>10+2: 55%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">B.Pharma</div>
            <div>10 L</div>
            <div>10+2: 45%</div>
            <div>KCET</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">BAMS</div>
            <div>18.9 L</div>
            <div>10+2: 50%</div>
            <div>NEET</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">B.Com</div>
            <div>3.3 L – 5.3 L</div>
            <div>10+2: 55-60%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">M.Sc.</div>
            <div>80 K – 10 L</div>
            <div>Graduation: 50-55%</div>
            <div>NEET, CBSE 12th</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MCA</div>
            <div>2.3 L</div>
            <div>Graduation: 50%</div>
            <div>–</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MBA/PGDM</div>
            <div>3.3 L</div>
            <div>Graduation: 50%</div>
            <div>–</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">BHMS</div>
            <div>9.3 L</div>
            <div>10+2: 50%</div>
            <div>NEET, AYUSH</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MD</div>
            <div>30 K – 1.5 Cr</div>
            <div>Graduation</div>
            <div>NEET PG</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">BBA</div>
            <div>3.8 L – 5 L</div>
            <div>10+2: 50-55%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">BDS</div>
            <div>20.3 L</div>
            <div>Graduation</div>
            <div>NEET, CBSE 12th</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MDS</div>
            <div>7.5 L – 39 L</div>
            <div>Graduation</div>
            <div>NEET MDS</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">D.Pharma</div>
            <div>2.2 L</div>
            <div>10+2: 70%</div>
            <div>CBSE 12th, ISC</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">MS</div>
            <div>1.1 Cr – 1.2 Cr</div>
            <div>Graduation</div>
            <div>NEET</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 px-5 py-3 hover:bg-gray-50 transition">
            <div class="font-semibold">Certificate</div>
            <div>1 L</div>
            <div>10+2: 50%</div>
            <div>CBSE 12th, ISC</div>
          </div>
        </div>
      </div>

      {/* Ranking Section */}
      <h3 className="text-xl font-semibold mb-2 text-blue-500 space-y-2 mt-5">
        Pillai College of Engineering Ranking
      </h3>
      <p className="text-sm  leading-relaxed text-gray-700">
        Yenepoya University, situated in Mangalore, Karnataka, is a prestigious
        institution accredited with an A+ grade by NAAC in 2022, achieving a
        CGPA of 3.47 on a four-point scale. This accreditation is valid for five
        years, starting from August 10, 2022. The university has earned
        recognition for its commitment to academic excellence and quality
        education.
      </p>
      <p className="text-sm mt-2">
        The Yenepoya Medical College Hospital is accredited by the National
        Accreditation Board for Hospitals and Healthcare Providers (NABH),
        ensuring high standards in patient safety and quality care.
        Additionally, the university’s laboratories hold certifications from the
        National Accreditation Board for Testing and Calibration Laboratories
        (NABL) and AHA, emphasizing their advanced testing and research
        capabilities.
      </p>
      <p className="text-sm mt-2">
        In terms of rankings, Yenepoya University was ranked 85th in the NIRF
        2023 rankings and was recognized as the 4th best Young University in
        Karnataka by K-SURF in 2019. These achievements underline its dedication
        to innovation and excellence in education and research.
      </p>
    </section>
  );
};

export default Yenopoya04;

import React from "react";
import { MapPin, Calendar } from "lucide-react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const Parul01 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50 ">
      <main className="bg-white">
        {/* Header */}
        <div className="bg-[#3E96F4] text-white">
          <div className="mx-auto max-w-7xl px-6 py-8 flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919770/Parul_University-Regular_Admission_yinscn.svg"
              alt="Parul University Logo"
              className="h-16 w-[150px] rounded-md bg-white p-1 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                Parul University:
              </h1>
              <h3 className="text-xl text-white/80 font-bold">
                Admission {currentYear} — About, Courses & Ranking
              </h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="px-5 lg:px-8 py-5">
              <div className="flex justify-start items-center gap-5 mb-2">
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>Gujarat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>ESTD. 2015</span>
                </div>
                <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                  Regular Admission
                </span>
              </div>
              <p className="text-sm md:text-base leading-7">
                <span className="font-semibold">
                  {" "}
                  Parul University in Vadodara
                </span>
                , Gujarat, holds an A++ grade accreditation from NAAC, the
                highest recognition for quality education. The university is
                UGC-approved and excels in clinical research, healthcare, and
                innovation, with NABL, NABH, and DSIR accreditations. Recognized
                by the Indian Nursing Council and the Ministry of Health and
                Family Welfare, it offers exceptional health programs. Ranked in
                the top 50 by ARIIA for innovation, it is lauded for its
                placements and achievements in education. Awards from Praxis
                Media, ASSOCHAM, and the World Education Summit affirm its
                excellence.
              </p>
              {/* Description */}

              {/* CTA (Calendy) */}
              <div>
                <CalendyButton />
              </div>
            </div>

            {/* Right column (form) */}

            <DynamicForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Parul01;

import React from "react";
import { MapPin } from "lucide-react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";
const NavSahyadri01 = () => {
  return (
    <div className="">
      <div className="text-white bg-[#3e96f4] p-5">
        <div className="flex items-start gap-5">
          <div className="h-20 w-20 lg:w-50">
            <img src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919767/Navsahyadri_Group_of_Institute-Regular_Admission_mqpkyh.svg"></img>
          </div>

          <div className="">
            <h2 className="text-xl lg:text-2xl text-left font-bold">
              Navsahyadri Group of Institutes:
            </h2>
            {/* University Name: Different and larger font size as requested */}
            <h2 className="text-lg text-left md:text-xl font-medium leading-tight text-white/80">
              Admission {new Date().getFullYear()} – About, Courses & Ranking
            </h2>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-8  gap-5 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center space-x-4 text-sm font-medium my-3 ">
            <span className="flex items-center space-x-1 text-black">
              <MapPin className="w-4 h-4 text-black" />
              <span>Pune</span>
            </span>
            <span className="text-black">|</span>
            <span className="text-black">
              ESTD. <span className="text-black font-bold">2009</span>
            </span>
            <span className="text-black">|</span>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
              Regular Admission
            </span>
          </div>
          <div>
            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">
                The Navsahyadri Group of Institutes (NGI)
              </span>{" "}
              , established in 2009 in Pune, India, is a premier institution
              recognized for its academic excellence. It is accredited by the{" "}
              <strong className="font-semibold text-gray-800">
                National Assessment and Accreditation Council (NAAC)
              </strong>{" "}
              with an "A" grade and approved by the{" "}
              <strong className="font-semibold text-gray-800">
                All India Council of Technical Education (AICTE)
              </strong>
              . The institute's polytechnic is affiliated with the{" "}
              <strong className="font-semibold text-gray-800">
                Maharashtra State Board of Technical Education (MSBTE)
              </strong>
              , and NGI is also affiliated with{" "}
              <strong className="font-semibold text-gray-800">
                Savitribai Phule Pune University (SPPU)
              </strong>
              . Additionally, it is recognized by the{" "}
              <strong className="font-semibold text-gray-800">
                Government of Maharashtra
              </strong>
              , underscoring its commitment to quality education.
            </p>
            <CalendyButton />
          </div>
        </div>
        <DynamicForm />
      </div>
    </div>
  );
};

export default NavSahyadri01;

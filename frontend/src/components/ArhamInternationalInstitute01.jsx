import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const ArhamInternationalInstitute01 = () => {
  return (
    <div className="max-w-7xl text-[#31393C]">
      <div className="bg-[#3E96F4] text-white flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex justify-center items-start sm:items-start gap-4 sm:gap-6">
            <div>
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919759/arham_international_institute_of_information_security-Regular_Admission_wpm0lm.svg"
                alt="Arham International Institute Logo"
                className="w-24 h-20 lg:w-50  object-contain"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  Arham International Institute of Information Security:
                </h1>
                <p className="mt-1 text-base lg:text-xl text-white/80 font-semibold">
                  Admission {new Date().getFullYear()} - About, Courses &
                  Ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="px-5 lg:px-8 py-5">
          <div className="flex mb-2 gap-3 font-semibold justify-start items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 sm:w-4 sm:h-4"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Pune</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-400"></div>
            <span>ESTD. 2023</span>
            <div className="hidden sm:block h-4 w-px bg-gray-400"></div>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
              Regular Admission
            </span>
          </div>
          <p className="">
            <strong>
              Arham International Institute of Information Security
            </strong>
            , located in Pune, Maharashtra, offers two courses: B.Sc. and PG
            Diploma, specializing in Cyber Security. The institute provides both
            undergraduate and postgraduate programs in the IT & Software stream,
            with courses available in full-time and part-time modes. Arham
            International Institute of Information Security has a decent
            placement record compared to other institutes. The courses are
            designed to equip students with essential skills in information
            security. The institute is dedicated to providing quality education
            and training in this crucial field.
          </p>
          <CalendyButton />
        </div>
      <DynamicForm title={"Receive expert college counseling at no cost"} />
      </div>

     
    </div>
  );
};

export default ArhamInternationalInstitute01;

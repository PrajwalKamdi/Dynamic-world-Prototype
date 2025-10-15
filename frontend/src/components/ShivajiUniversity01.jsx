import React from "react";
import { MapPin } from "lucide-react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const ShivajiUniversity01 = () => {
  return (
    <div className="w-full bg-white text-[#31393C]">
      {/* Top Header */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center gap-5">
            <div className="shrink-0">
              <img
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919760/chhatrapati_shivaji_maharaj_university-Regular_Admission_ng0m5g.svg"
                alt="Chhatrapati Shivaji Maharaj University Logo"
                className="w-20 h-20 rounded-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="pt-1">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Chhatrapati Shivaji Maharaj University
              </h2>
              <h1 className="text-lg md:text-xl font-medium leading-tight text-blue-100">
                Admission {new Date().getFullYear()} – About, Courses & Ranking
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="px-5 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-3 mb-2 ">
            <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Navi Mumbai
            </div>
            <span className="text-black text-sm">|</span>
            <div className="inline-flex items-center gap-2 text-black text-sm font-medium">
              ESTD. 2018
            </div>
            <span className="text-black text-sm">|</span>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
              Regular Admission
            </span>
          </div>
          <div>
            <p className="">
              <span className="font-semibold">
                Chhatrapati Shivaji Maharaj University (CSMU),
              </span>{" "}
              established in 2018 in Navi Mumbai, Maharashtra, is accredited by
              UGC, COA, PCI, and BCI. The university offers a wide range of
              programs at undergraduate, postgraduate, diploma, and PhD levels.
              CSMU’s modern campus includes well-equipped laboratories,
              classrooms, a library, and sports facilities. Its mission is to
              deliver a holistic learning experience that integrates both
              theoretical and practical knowledge. CSMU strives to prepare
              students for successful careers through a balanced approach to
              education.
            </p>
            <CalendyButton />
          </div>
        </div>
        <DynamicForm title={"Receive expert college counseling at no cost"} />
      </div>
    </div>
  );
};

export default ShivajiUniversity01;

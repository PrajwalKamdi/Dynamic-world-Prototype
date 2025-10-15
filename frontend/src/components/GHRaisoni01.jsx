import { MapPin } from "lucide-react";
import React from "react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";

const GHRaisoni01 = () => {
  return (
    <div className="">
      <div className="bg-[#3E96F4] text-white p-5 flex justify-start items-center gap-5">
        <div className="">
          <img
            src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919778/Raisoni_University-Regular_Admission_adnnjv.svg"
            alt="GH Raisoni Skill Tech"
            className="h-20 w-20 lg:w-50 rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            {" "}
            GH Raisoni Skill Tech University:
          </h1>
          <h3 className="text-base lg:text-xl text-white/80 font-semibold">
            Addmission {new Date().getFullYear()} - About, Courses & Ranking
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="px-5 lg:px-8">
          <div className="flex justify-start gap-5 my-3 font-semibold">
            <div className="flex gap-1 justify-start items-center">
              <span>Pune</span>
              <MapPin size={16} />
              <span>|</span>
            </div>
            <div>
              <p>ESTD. 2016 |</p>
            </div>
            <div>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                Regular Admission
              </span>
            </div>
          </div>
          <div>
            <p>
              <span className="font-semibold">
                G.H. Raisoni International Skill Tech University (GHRISTU) in
                Pune
              </span>
              , Maharashtra, offers a range of undergraduate and postgraduate
              programs, including MBA/PGDM, B.Sc., M.Sc., MCA, BCA, and BBA. The
              university provides 9 specializations, such as Digital Marketing,
              Finance, Human Resources, International Business, and more.
              GHRISTU focuses on equipping students with industry-relevant
              skills and knowledge. The university delivers degrees that enhance
              career prospects. With a strong emphasis on practical learning,
              GHRISTU aims to nurture future leaders in various sectors.
            </p>
          </div>
          <CalendyButton />
        </div>
        <DynamicForm title={"Receive expert college counseling at no cost"} />
      </div>
    </div>
  );
};

export default GHRaisoni01;

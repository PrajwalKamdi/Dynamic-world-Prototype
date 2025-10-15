import React from "react";
import { MapPin } from "lucide-react";
import CalendyButton from "./CalendyButton";
import DynamicForm from "../pages/DynamicForm";
const AIUniversity01 = () => {
  return (
    <div>
      <div className="text-white bg-[#3e96f4] p-5 ">
        <div className="flex items-start gap-5">
          <div className="rounded-xl">
            <img
              src="https://i0.wp.com/dynamicworld.in/wp-content/uploads/2025/01/ai-universal-university-Regular-Admission.webp?fit=300%2C120&ssl=1"
              class="w-20 h-20 lg:w-50 object-cover"
            />
          </div>
          <div className="pt-1">
            <h2 className="text-2xl text-left font-bold">
              AI Universal University:
            </h2>
            <h2 className="text-xl text-left md:text-2xl font-semibold text-white/80 leading-tight">
              Admission {new Date().getFullYear()} – About, Courses & Ranking
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="px-5 lg:px-8 py-5">
          <div className="flex flex-wrap items-center space-x-4 text-sm font-semibold mb-2">
            <span className="flex items-center space-x-1 text-black">
              <MapPin className="w-4 h-4 text-black" />
              <span>Karjat</span>
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
            <p className="text-base text-left text-gray-700 leading-relaxed mb-8">
              <span className="font-semibold">
                Universal AI University in Karjat
              </span>
              , Maharashtra, is accredited by NBA and approved by AICTE. The
              university offers undergraduate, postgraduate, and doctoral
              programs across various disciplines. Its PGDM programs, including
              the Single & Dual Specialization, are accredited by AICTE, AIU,
              and NBA. The PGDM + MBA degree in collaboration with Cardiff
              Metropolitan University, UK, is recognized by the Quality
              Assurance Agency (QAA), UK. Admissions are merit-based, with
              entrance exams like CAT, NPAT, and CUET being accepted.
            </p>
            <CalendyButton />
          </div>
        </div>
        <DynamicForm />
      </div>
    </div>
  );
};

export default AIUniversity01;

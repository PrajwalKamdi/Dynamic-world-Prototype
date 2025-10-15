import React from "react";

const OrientalUniversity03 = () => {
  return (
    <div className="max-w-7xl m-5">
      {/* Main Card */}
      <div className="bg-gray-100 px-5 lg:px-8 py-5 rounded-2xl">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-[#3E96F4] mb-6">
          Admission Process
        </h2>

        {/* Description */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p>
            Oriental University is currently accepting applications for its{" "}
            <span className="font-semibold">
              UG, PG, Diploma, and PhD courses
            </span>{" "}
            for the academic year 2023. Interested candidates can apply through
            both <span className="font-semibold">online and offline modes</span>
            . For offline applications, candidates need to visit the Oriental
            University, Indore campus with the necessary documents. The
            admission process is based on various entrance examinations such as{" "}
            <span className="font-semibold">
              JEE, CAT, CLAT, MAT, UCEED, CET
            </span>
            , and others, along with qualifying examinations like SSC, HSC, UG,
            and PG, depending on the course.
          </p>

          <p>
            For the 2024 admission cycle, Oriental University offers a variety
            of courses in fields such as{" "}
            <span className="font-semibold">engineering, law, management</span>,
            and more. Each program has specific eligibility criteria and
            selection processes based on entrance exams or academic
            qualifications. Candidates must visit the official website to
            register and obtain detailed information regarding the admission
            process.
          </p>

          <p>
            Below are the eligibility and selection criteria for some of the key
            courses offered by the university:
          </p>
        </div>

        {/* Admission Criteria Table */}
        <h3 className="text-xl font-bold text-[#31393C] mb-4">
          Admission Criteria
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Courses</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Eligibility Criteria
                </th>
                <th className="px-5 py-3 text-left font-semibold">
                  Selection Criteria
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BE/BTech</td>
                <td className="px-5 py-3">
                  Class 12 with min 45% (Gen) or 40% (SC/ST/OBC) in relevant
                  specialisation
                </td>
                <td className="px-5 py-3">JEE Main</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">B.A</td>
                <td className="px-5 py-3">
                  Class 12 (any stream) with min 50% aggregate (GEN/SC/ST/OBC)
                </td>
                <td className="px-5 py-3">CBSE 12th</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">MBA/PGDM</td>
                <td className="px-5 py-3">
                  Graduation (Any Discipline) with min 50% (Gen) & 45%
                  (ST/SC/OBC)
                </td>
                <td className="px-5 py-3">MAT/CAT</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BPharma</td>
                <td className="px-5 py-3">
                  Class 12 with min 45% (Gen)/40% (SC, ST, OBC) in Phy,
                  Chem-Maths/Bio
                </td>
                <td className="px-5 py-3">CBSE 12th/MPBSE 12th</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BSc</td>
                <td className="px-5 py-3">
                  Class 12 (PCM) with min 50% (Gen/SC/ST/OBC)
                </td>
                <td className="px-5 py-3">CBSE 12th/MPBSE 12th</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">B.Ed</td>
                <td className="px-5 py-3">
                  UG/PG in Any Discipline (Except BTech) with min 50% (GEN/OBC)
                  and 45% (ST/SC)
                </td>
                <td className="px-5 py-3">–</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BBA</td>
                <td className="px-5 py-3">
                  Class 12 (Any Discipline) with min 50% (Gen/SC/ST/OBC)
                </td>
                <td className="px-5 py-3">CBSE 12th/MPBSE 12th</td>
              </tr>
              <tr className="border-t border-gray-300 bg-[#FAFAFA]">
                <td className="px-5 py-3 font-medium">BA LLB</td>
                <td className="px-5 py-3">
                  Class 12 (Any Discipline) with min 45% (Gen/OBC)/ 40% (SC/ST)
                </td>
                <td className="px-5 py-3">CLAT</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-5 py-3 font-medium">BCom (Hons)</td>
                <td className="px-5 py-3">
                  Class 12 (Commerce/Science with Maths) with min 50%
                  (Gen/SC/ST/OBC)
                </td>
                <td className="px-5 py-3">CBSE 12th/MPBSE 12th</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrientalUniversity03;

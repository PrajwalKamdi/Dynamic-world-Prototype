import React from "react";

export default function PHD02() {
  const tableData = [
    {
      university: "Indian Institutes of Technology (IITs)",
      location: "Nationwide",
    },
    {
      university:
        "Indian Institutes of Science Education and Research (IISERs)",
      location: "Nationwide",
    },
    {
      university: "Tata Institute of Fundamental Research (TIFR)",
      location: "Mumbai",
    },
    {
      university: "Indian Institute of Science (IISc) Bangalore",
      location: "Bangalore",
    },
    { university: "Jawaharlal Nehru University (JNU)", location: "New Delhi" },
    { university: "University of Delhi", location: "New Delhi" },
    { university: "Indian Statistical Institute (ISI)", location: "Kolkata" },
    {
      university: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
    },
    {
      university: "National Institutes of Technology (NITs)",
      location: "Nationwide",
    },
    {
      university: "Indian Institute of Management (IIMs)",
      location: "Nationwide",
    },
    { university: "University of Hyderabad", location: "Hyderabad" },
    { university: "Banaras Hindu University (BHU)", location: "Varanasi" },
    { university: "Jadavpur University", location: "Kolkata" },
    { university: "Anna University", location: "Chennai" },
    { university: "University of Calcutta", location: "Kolkata" },
    { university: "University of Mumbai", location: "Mumbai" },
    {
      university: "Manipal Academy of Higher Education (MAHE)",
      location: "Manipal",
    },
    { university: "Savitribai Phule Pune University", location: "Pune" },
    { university: "Aligarh Muslim University (AMU)", location: "Aligarh" },
    { university: "Pondicherry University", location: "Puducherry" },
  ];

  return (
    <div className="w-full bg-white p-6 md:p-8">
      {/* Header Section */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-6 md:p-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#3E96F4] mb-4 md:mb-0">
            Ph.D. Admission and Completion Process
          </h2>
        </div>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4">
          <p className="mb-4">
            The journey towards a Ph.D. in India involves a structured process
            designed to ensure that candidates are well-prepared for high-level
            research. Here's how it typically works:
          </p>

          <div className="space-y-6">
            <div>
              <ol className="list-decimal pl-6 space-y-2 ml-4">
                <li>
                  <span className="font-medium">
                    Admission Form Submission:{" "}
                  </span>
                  Candidates must submit the admission form along with necessary
                  documents.
                </li>
                <li>
                  <span className="font-medium">Entrance Test: </span>
                  After submission, candidates must clear an entrance test,
                  followed by an interview or discussion.
                </li>
                <li>
                  <span className="font-medium">Ph.D. Registration: </span>
                  Upon clearing the entrance, candidates officially register for
                  their Ph.D. program.
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Ph.D. Program Structure
              </h4>
              <ol className="list-decimal pl-6 space-y-2 ml-4">
                <li>
                  <span className="font-medium">Course Work Completion: </span>
                  Candidates must complete mandatory pre-Ph.D. coursework,
                  including courses in research methodology, domain-specific
                  topics, and seminars related to their research.
                </li>
                <li>
                  <span className="font-medium">Course Work Exam: </span>
                  After coursework, candidates must pass exams in research
                  methodology, domain-specific courses, and attend seminars.
                </li>
                <li>
                  <span className="font-medium">Progress Reports: </span>
                  Regular reviews (at least every six months) by the Doctoral
                  Committee to monitor research progress.
                </li>
                <li>
                  <span className="font-medium">Synopsis Submission: </span>
                  Candidates present their research synopsis to the Doctoral
                  Committee. After approval, they submit 7 copies of their
                  synopsis.
                </li>
                <li>
                  <span className="font-medium">Publications: </span>
                  Research scholars must publish at least 2 research papers in
                  reputed journals (national or international).
                </li>
                <li>
                  <span className="font-medium">Thesis Submission: </span>
                  After meeting progress requirements, candidates submit their
                  thesis, along with 5 hard copies and 1 soft copy.
                </li>
                <li>
                  <span className="font-medium">
                    Viva Voce and Open Defence:{" "}
                  </span>
                  After submission, candidates undergo an open defence of their
                  thesis in front of the Doctoral Committee.
                </li>
                <li>
                  <span className="font-medium">Ph.D. Notification: </span>
                  Upon successful defence and approval, the university issues a
                  provisional Ph.D. degree certificate.
                </li>
                <li>
                  <span className="font-medium">Award of Ph.D. Degree: </span>
                  The final Ph.D. degree certificate is awarded at the
                  university's next convocation.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Universities Table Section */}
        <h3 className="text-xl font-semibold text-[#31393C] mb-4">
          Get Admission Guidance for Top Ph.D. Universities in India
        </h3>
        <div className="overflow-x-auto mb-8 rounded-2xl">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#3E96F4] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white">
                  University Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white">
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C] text-sm">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 ${
                    index % 2 !== 0 ? "bg-[#FAFAFA]" : ""
                  }`}
                >
                  <td className="px-5 py-3 font-medium">{row.university}</td>
                  <td className="px-5 py-3">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

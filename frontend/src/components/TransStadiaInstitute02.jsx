import AboutButton from "./AboutButton";

export default function TransStadiaInstitute02() {
  return (
    <div className="min-h-screen max-w-7xl m-5">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
        <div className="mb-6">
        <AboutButton title={"About TransStadia Institute"}/>
        </div>

        {/* Description Section */}
        <div className="text-[#31393C] leading-relaxed mb-6 space-y-4 text-sm sm:text-base">
          <p>
            TransStadia Institute, located in Mumbai, Maharashtra, offers
            full-time undergraduate programs across a variety of
            specializations, including Artificial Intelligence & Machine
            Learning and Sports. The institute provides courses such as B.Sc.
            and BBM/BMS, catering to students interested in streams like
            Business & Management Studies, Engineering, IT & Software, and
            Science. With a total seat intake of 240, the institute aims to
            deliver quality education supported by state-of-the-art facilities
            on its well-equipped campus. The fee structure for courses at
            TransStadia Institute ranges between INR 5,10,000 and INR 7,50,000,
            making it a premium educational institution in the region. The
            institute emphasizes creating a balanced learning environment by
            combining theoretical knowledge with practical skills in its
            specialized fields. With a modern campus infrastructure and advanced
            resources, TransStadia Institute is committed to nurturing talent in
            innovative domains. While the median salary for placements is yet to
            be disclosed, the institute is focused on providing students with
            opportunities for professional growth and career advancement.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-6 sm:mb-8">
          <table className="min-w-full border border-gray-300 rounded-xl text-sm sm:text-base">
            <thead className="bg-[#F6F6F6] text-[#31393C] border-b border-gray-300">
              <tr>
                <th className="px-3 sm:px-5 py-2 sm:py-3 text-left font-semibold">
                  Particulars
                </th>
                <th className="px-3 sm:px-5 py-2 sm:py-3 text-left font-semibold">
                  TransStadia Institute Highlights 2025
                </th>
              </tr>
            </thead>
            <tbody className="text-[#31393C]">
              <tr className="border-t border-gray-300">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Establishment year
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">1857</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-200">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Accredited by
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">AICTE</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Approved by
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">AICTE</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-200">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Location
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">Mumbai, India</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Courses offered
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">
                  Sports Management, Fitness Training, Athletic Training,
                  Recreation Management
                </td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-200">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Program Level
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">
                  Diploma/Certificate
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Duration
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">1-3 Years</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-200">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Fee Range
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">
                  ₹30,000 – ₹2,00,000 per year
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-3 sm:px-5 py-2 sm:py-3 font-medium">
                  Average Salary
                </td>
                <td className="px-3 sm:px-5 py-2 sm:py-3">₹3 LPA – ₹8 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Video Section */}
        <div className="bg-[#3E96F4] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Need more info about TransStadia Institute?
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/AQDQtqLKtfQ?modestbranding=1&showinfo=0&rel=0&controls=1&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=0&enablejsapi=0&origin=https://dynamicworld.in"
                  title="TransStadia Institute Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

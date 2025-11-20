const COLORS = {
  brand: "#3E96F4", // primary blue
  text: "#31393C", // charcoal
  chipBg: "#EDEEEB", // off‑white chip/bg
  white: "#FFFFFF",
};

export const MVocCourseInfo = [
  {
    name: "Definition",
    value:
      "Two-year postgraduate program providing specialized vocational training and industry-relevant skills.",
  },
  { name: "Level", value: "Postgraduate" },
  { name: "Duration", value: "2 Years" },
  { name: "Eligibility", value: "Graduation with minimum 50% aggregate" },
  {
    name: "Focus Areas",
    value:
      "Practical training, skill development, job-specific skills aligned with National Occupational Standards (NOS).",
  },
  {
    name: "Key Specializations",
    value:
      "Textile, Automobile, Apparel Design, Dairy Technology, Renewable Energy, Medical Technology, Food Processing, and more.",
  },
  { name: "Average Course Fee", value: "₹50,000 – ₹2,00,000 per year" },
  { name: "Average Salary Post Completion", value: "₹3 LPA – ₹10 LPA" },
  { name: "Selection Process", value: "Merit / Entrance-based" },
  {
    name: "Ideal For",
    value:
      "Creative individuals (design, media, hospitality) and technical professionals seeking industry-ready, skill-based careers.",
  },
  {
    name: "Outcomes",
    value:
      "Job readiness, career flexibility, practical expertise, and strong employability across fast-growing sectors.",
  },
];

// Small reusable components
const Section = ({ title, children }) => (
  <section className="space-y-3">
    {title ? (
      <h2 className="text-xl font-bold mb-2" style={{ color: COLORS.brand }}>
        {title}
      </h2>
    ) : null}
    {children}
  </section>
);

const InfoTable = ({ rows = [] }) => (
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
    <table className="min-w-full border-collapse">
      <thead style={{ background: "#F7F7F7" }}>
        <tr>
          <th className="px-6 py-3 text-left text-sm lg:text-base font-semibold text-gray-800 w-1/3">
            Feature
          </th>
          <th className="px-6 py-3 text-left text-sm lg:text-base font-semibold text-gray-800">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={idx}
            className={`${
              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-[#FFC067] text-black transition`}
          >
            <td className="align-top px-6 py-3 text-sm lg:text-base text-gray-900">
              {row.name}
            </td>
            <td className="align-top px-6 py-3 text-sm lg:text-base text-gray-700 leading-relaxed">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MVOC03 = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Section>
        <div
          className="space-y-4 text-gray-700 rounded-2xl p-5 ring-1 ring-gray-200 shadow-sm"
          style={{ backgroundColor: COLORS.chipBg }}
        >
          <p>
            A{" "}
            <span className="font-semibold text-gray-900">
              Master of Vocation (M.Voc)
            </span>{" "}
            is a two-year postgraduate program designed to provide{" "}
            <span className="font-semibold">
              specialized vocational training
            </span>{" "}
            and
            <span className="font-semibold"> industry‑relevant skills</span>.
            This degree equips students with
            <span className="font-semibold"> practical expertise</span>, making
            them highly competitive in their chosen professional domains. M.Voc
            programs integrate{" "}
            <span className="font-semibold">practical training</span>,
            <span className="font-semibold"> general education</span>, and{" "}
            <span className="font-semibold">job‑specific skills</span> aligned
            with
            <span className="font-semibold">
              {" "}
              National Occupational Standards (NOS)
            </span>
            , preparing graduates for diverse industries.
          </p>

          <h3 className="text-lg font-semibold" style={{ color: COLORS.brand }}>
            Features and Benefits of M.Voc Programs
          </h3>
          <p>
            M.Voc programs focus on{" "}
            <span className="font-semibold">hands‑on learning</span>, offering
            courses that enhance{" "}
            <span className="font-semibold">language proficiency</span>,{" "}
            <span className="font-semibold">business communication</span>, and
            <span className="font-semibold"> technical competencies</span>.
            Students can specialize in fields like Textile, Automobile, Apparel
            Design, Dairy Technology, and Renewable Energy. These programs are
            ideal for those seeking
            <span className="font-semibold"> career growth</span> in
            skill‑intensive fields, while offering
            <span className="font-semibold"> creative expression</span> and{" "}
            <span className="font-semibold">professional advancement</span>.
          </p>

          <h3 className="text-lg font-semibold" style={{ color: COLORS.brand }}>
            Who Should Choose an M.Voc Program?
          </h3>
          <p>
            M.Voc programs are perfect for{" "}
            <span className="font-semibold">creative individuals</span> aiming
            for careers in design, media, or hospitality, as well as
            professionals seeking to enhance their
            <span className="font-semibold"> technical expertise</span> in
            industries like medical technology or food processing. With its
            focus on <span className="font-semibold">practical training</span>{" "}
            and
            <span className="font-semibold"> industry‑aligned curriculum</span>,
            an M.Voc degree ensures
            <span className="font-semibold"> job readiness</span>,{" "}
            <span className="font-semibold">career flexibility</span>, and
            success across
            <span className="font-semibold"> fast‑growing sectors</span>.
          </p>
        </div>
      </Section>

      {/* Table */}

      <p className="mt-5">

      </p>
      <Section title="M.Voc Program Highlights">
        <InfoTable rows={MVocCourseInfo} />
      </Section>
    </div>
  );
};

export default MVOC03;

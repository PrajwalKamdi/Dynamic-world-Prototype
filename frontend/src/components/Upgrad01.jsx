import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const Upgrad01 = () => {
  return (
    <section className="">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            Upgrad • India
          </span>

          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Upgrad Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top Upgrad programs across India and get admission done.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full px-4 lg:px-8 py-5 text-sm lg:text-base">
          <div className=" space-y-3">
            <p>
             <span className="font-semibold"> Upgrad Skill Courses</span> empower you with industry-relevant knowledge
              and practical expertise. Gain hands-on training, flexible learning
              options, and certifications to boost your career prospects. Stay
              ahead of trends and adapt to the ever-evolving job market.
              Designed for professionals and learners aiming for growth and
              excellence. Unleash your potential and transform your career with
              Upgrad!
            </p>
            <p>
              UpGrad is South Asia’s premier higher EdTech platform, empowering
              over 10 million learners globally. Leveraging advanced technology,
              world-class faculty, and industry partnerships, upGrad delivers
              impactful online learning experiences. Their mission is to
              redefine professional growth by making quality education
              accessible to everyone.
            </p>
            <CalendyButton />
          </div>
        </div>

        <DynamicForm title={"Receive expert college counseling at no cost"} />
      </div>
    </section>
  );
};

export default Upgrad01;

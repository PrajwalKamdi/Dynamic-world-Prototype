import CalendyButton from "./CalendyButton";

const VisaServiceHome = () => {
  return (
    <div className={` w-full`}>
      <header className="bg-[#3E96F4] py-5">
        <h2 className="text-3xl px-5 lg:px-8 text-left md:text-4xl font-sans tracking-wide font-semibold text-white">
          Visa Services
        </h2>
      </header>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 font-sans">
        <div className="grid grid-cols-1">
          <div className="py-6">
            <p className="text-base text-left mb-6 leading-relaxed">
              Our visa services offer a seamless and efficient process for
              obtaining work, travel, and study visas to top global
              destinations. We handle all the paperwork, application
              submissions, and documentation requirements, ensuring you a
              hassle-free experience. Whether you're looking to relocate for
              work or leisure, we provide expert guidance to make your visa
              journey smooth and stress-free.
            </p>

            <p className="text-base text-left mb-8 leading-relaxed">
              Travelers entering any country are required to have a valid visa.
              Simplify your travel planning by reviewing essential information
              about various visa types, application processes, and document
              requirements, ensuring a smooth and hassle-free experience.
            </p>

            <CalendyButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaServiceHome;

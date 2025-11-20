import ContactForm from "../pages/ContectForm";
import CalendyButton from "./CalendyButton";

const CollegeAdmissionHome = ({ title, para1, para2 }) => {
  return (
    <div className="bg-white text-[#31393C]">
      {/* Header */}
      <header className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
          <h1 className="mt-4 text-3xl sm:text-4xl capitalize font-extrabold leading-tight tracking-tight">
            {title}
          </h1>

          <h3 className="mt-2 text-base sm:text-lg text-blue-50 capitalize">
            Find 100+ Colleges Across India, and get admission done.
          </h3>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10">
          <section className="">
            <p className="text-sm lg:text-base leading-7 sm:leading-8">
              {para1}
            </p>
            <p className="mt-4 text-sm lg:text-base leading-7 sm:leading-8">
              {para2}
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-200" />

          {/* CTA: simple, no card */}
          <section className="flex items-center gap-4">
            <div className="hidden lg:block">
              <h4 className="text-lg font-semibold">Book a quick call</h4>
              <p className="text-sm text-gray-600">
                Schedule at a time that suits you.
              </p>
            </div>
            <div className="ml-auto">
              <CalendyButton />
            </div>
          </section>
        </div>

        {/* Contact form - simple section with a subtle top border */}
        <section className="border-t border-gray-200">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default CollegeAdmissionHome;

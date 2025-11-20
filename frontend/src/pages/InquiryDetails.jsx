import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "./ContectForm";
const COLORS = { brand: "#3E96F4", text: "#31393C" };
export default function InquiryDetails({
  title = "Admission Inquiry Form",
  phone = "+917887881060",
  waPhone = "917887881060",
  hours = "Mon–Sun, 10:00 AM – 7:00 PM",
  RightForm = ContactForm,
}) {
  const waText = encodeURIComponent(
    "Hi, I’m interested in online admissions. Please guide me."
  );

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 sm:py-10 lg:py-12 px-2 md:px-6 flex items-center justify-center"
      style={{ color: COLORS.text }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
        {/* Left: Information & CTAs */}
        <section
          className="text-black flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 bg-[#FFC067]"
          // style={{ background: COLORS.brand }}
        >
          <div className="w-full max-w-prose text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Get Expert Admission Guidance
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-900/90 leading-relaxed">
              Complete Your Education Online Anytime, Anywhere, and at Any Age!
              <br className="hidden sm:block" />
              Find{" "}
              <span className="font-semibold">
                50+ Online Universities
              </span>{" "}
              across India and secure your admission with expert help.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6 justify-center items-center">
              {/* Quick Call */}
              <a
                href={`tel:${phone}`}
                aria-label="Call counsellor"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-white text-[#3E96F4] font-semibold text-sm sm:text-base shadow-md ring-1 ring-gray-200 hover:ring-white/60 hover:shadow-lg hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center bg-[#FFC067]/10 p-1.5 rounded-full">
                  <Phone
                    size={18}
                    className="text-[#3E96F4] group-hover:rotate-12 transition-transform duration-200"
                  />
                </span>
                Quick Call
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${waPhone}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#22c55e] hover:shadow-lg hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-300"
              >
                <MessageCircle />
                WhatsApp
              </a>
            </div>

            {/* Phone & Hours */}
            <div className="mt-5 sm:mt-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                {phone.replace(/^\+91/, "+91 ")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-900/80 mt-1">{hours}</p>
            </div>
          </div>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}

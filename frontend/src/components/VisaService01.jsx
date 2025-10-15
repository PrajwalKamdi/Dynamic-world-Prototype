import React from "react";
// Only CheckCircle is needed now as PhoneCall, Video, and Sparkles were removed.
import { CheckCircle } from "lucide-react";

// The main component that renders the Work Visa service details.
const VicaServices1 = () => {
  // --- COLOR PALETTE from previous component ---
  const vibrantBlue = "bg-[#3E96F4]"; // Used for main background
  // const darkCharcoal = "bg-[#31393C]"; // Removed, no buttons

  // Data provided by the user for the Work Visa Service details
  const workVisaServices = [
    {
      title: "Expertise",
      description:
        "With deep knowledge of visa regulations across various countries, we provide clear, accurate guidance every step of the way.",
    },
    {
      title: "Personalized Advice",
      description:
        "We understand that each applicant’s situation is unique. That’s why we offer tailored advice based on your qualifications, job offer, and destination country to help you choose the right visa.",
    },
    {
      title: "Documentation Support",
      description:
        "We help you gather and organize all the necessary documents, ensuring they meet the specific requirements of your destination country, so you don’t have to worry about paperwork.",
    },
    {
      title: "Application Assistance",
      description:
        "We take care of completing your visa application forms accurately and submitting them on your behalf, minimizing the risk of errors or delays.",
    },
    {
      title: "Clear Communication",
      description:
        "Acting as your go-between, we address any questions you have and keep you updated on the status of your application, so you always know where you stand.",
    },
    {
      title: "Interview Preparation",
      description:
        "For visa types that require interviews, we provide you with tips on what to expect and how to present yourself confidently.",
    },
    {
      title: "Timely Updates",
      description:
        "Visa regulations can change, and we stay on top of the latest updates, letting you know if anything affects your application.",
    },
    {
      title: "Peace of Mind",
      description:
        "Navigating the visa process can be overwhelming, but we handle the details so you can focus on preparing for your new job and life abroad with confidence.",
    },
  ];

  return (
    // Outer container: Full width, minimum screen height, vibrant blue background, white text, and responsive padding.
    <div
      className={`${vibrantBlue} w-full min-h-screen text-white p-4 md:p-8 lg:p-12 font-sans flex justify-left `}
    >
      <div className="max-w-8xl mx-auto w-full">
        {" "}
        {/* Centering content and limiting width */}
        {/* Service Details Column */}
        <div className="py-6">
          {/* Main Title - Work Visa */}
          <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-wide text-left">
            Work Visa
          </h2>

          {/* Detailed Service List Title */}
          <h3 className=" font-bold mb-4 text-left">
            We offer invaluable work visa support for individuals aspiring to
            work abroad. Our expertise lies in simplifying the intricate
            procedures and prerequisites for securing work visas in
            international destinations.
          </h3>
          <h3 className="font-bold mb-4 text-left">
            Our services are designed to make your visa application process as
            smooth and stress-free as possible:
          </h3>

          {/* Detailed Service List */}
          <ul className="space-y-5">
            {workVisaServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-1 mr-3 text-green-300 flex-shrink-0 text-left" />
                <p className="text-base text-left">
                  <strong className="font-bold">{service.title}:</strong>{" "}
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VicaServices1;

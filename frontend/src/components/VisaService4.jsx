import React from "react";
// Only CheckCircle is needed now as PhoneCall, Video, and Sparkles were removed.
import { CheckCircle } from "lucide-react";

// The main component that renders the Work Visa service details.
const VicaServices4 = () => {
  // --- COLOR PALETTE from previous component ---
  const vibrantBlue = "bg-[#3E96F4]"; // Used for main background
  // const darkCharcoal = "bg-[#31393C]"; // Removed, no buttons

  // Data provided by the user for the Work Visa Service details
  const investorVisaServices = [
    {
      title: "Visa Guidance",
      description:
        "We help you identify investment opportunities that meet the specific visa requirements of your target country. From investment thresholds to job creation goals, we provide clear insights on what’s needed for a successful application.",
    },
    {
      title: "Investment Guidance",
      description:
        "Our team offers valuable information on local business and investment opportunities, as well as advice on the legal and financial aspects of starting a business or making investments in your chosen country.",
    },
    {
      title: "Documentation Support",
      description:
        "We assist you in gathering all the necessary documentation for the investment portion of your visa application, ensuring everything is organized and compliant with the country’s guidelines.",
    },
    {
      title: "Application Assistance",
      description:
        "We guide you through the entire visa application process, from filling out forms to submitting all the required supporting documents, making sure everything is in order for a smooth submission.",
    },
    {
      title: "Business Networking",
      description:
        "We help connect you with local business entities, potential partners, and industry experts, helping you build a strong network and gain a deeper understanding of the local business environment.",
    },
    {
      title: "Post-Visa Support",
      description:
        "Our support doesn’t stop once your visa is issued. We assist with settling into your new country, handling additional requirements, and providing guidance as you start your business or investment projects.",
    },
    {
      title: "Legal and Financial Consultation",
      description:
        "We connect you with trusted legal and financial experts who can offer advice on investment regulations, tax implications, and business establishment procedures to ensure your investment is successful.",
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
            Investor Visa
          </h2>

          {/* Detailed Service List Title */}
          <h3 className="font-bold mb-4 text-left">
            Our investor visa services merge the potential for business
            investment in the host country with opportunities for individuals.
            We assist those looking to obtain investor visas in navigating the
            intricate application process, offering guidance on visa category
            selection, document compilation, legal and financial compliance, and
            comprehensive application support.
          </h3>

          <h3 className="font-bold mb-4 text-left">
            Our investor visa services are designed to guide you every step of
            the way, making your investment journey as seamless as possible:
          </h3>
          {/* Detailed Service List */}
          <ul className="space-y-5">
            {investorVisaServices.map((service, index) => (
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

export default VicaServices4;

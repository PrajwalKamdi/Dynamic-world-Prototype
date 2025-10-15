import React from 'react';
// Only CheckCircle is needed now as PhoneCall, Video, and Sparkles were removed.
import { CheckCircle } from 'lucide-react';

// The main component that renders the Work Visa service details.
const VicaServices2 = () => {
  // --- COLOR PALETTE from previous component ---
  const vibrantBlue = "bg-[#3E96F4]"; // Used for main background
  // const darkCharcoal = "bg-[#31393C]"; // Removed, no buttons

  // Data provided by the user for the Work Visa Service details
const visitorVisaServices = [
  {
    title: 'Consultation',
    description: 'We help you understand the different types of visitor visas, explain the eligibility criteria, and walk you through the application process so you know exactly what to expect.'
  },
  {
    title: 'Document Guidance',
    description: 'We advise you on the specific documents you’ll need, including invitation letters, flight details, hotel bookings, and financial statements, to ensure your application is complete.'
  },
  {
    title: 'Application Assistance',
    description: 'Our team helps you fill out the visa application forms accurately, ensuring that everything is in order for submission.'
  },
  {
    title: 'Documentation Review',
    description: 'We carefully review your submitted documents to make sure they meet the visa requirements and guidelines, reducing the chances of errors or delays.'
  },
  {
    title: 'Application Submission',
    description: 'We take care of submitting your completed visa application and all required documents, so you can relax while we handle the paperwork.'
  },
  {
    title: 'Follow-up and Tracking',
    description: 'We keep a close eye on the progress of your application and provide you with regular updates, so you’re always in the loop.'
  },
  {
    title: 'Interview Preparation',
    description: 'If your visa requires an interview, we provide helpful tips and guidance on how to prepare, so you can approach the interview with confidence.'
  },
  {
    title: 'Appeal Assistance',
    description: 'In the rare event of a visa denial, we offer advice on the appeal process and reapplication, helping you explore your options.'
  },
  {
    title: 'Travel Planning',
    description: 'Beyond your visa, we also offer additional services like creating travel itineraries, arranging travel insurance, and assisting with bookings, to ensure your trip is seamless from start to finish.'
  }
];


  return (
    // Outer container: Full width, minimum screen height, vibrant blue background, white text, and responsive padding.
    <div className={`${vibrantBlue} w-full min-h-screen text-white p-4 md:p-8 lg:p-12 font-sans flex justify-left `}>
      <div className="max-w-8xl mx-auto w-full"> {/* Centering content and limiting width */}
        
        {/* Service Details Column */}
        <div className="py-6">
            
          {/* Main Title - Work Visa */}
          <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-wide text-left">
            Visitor Visa
          </h2>

          {/* Detailed Service List Title */}
          <h3 className="font-bold mb-4 text-left">
              Our visitor visa services aid individuals planning to travel abroad for tourism, business, medical treatment, or various purposes. We strive to streamline the visa application process and guide applicants through the essential requirements.
          </h3>

          <h3 className="font-bold mb-4 text-left">
              Our visitor visa services are designed to guide you through every step of the process, making your travel plans as simple and stress-free as possible:
          </h3>
          {/* Detailed Service List */}
          <ul className="space-y-5">
            {visitorVisaServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-1 mr-3 text-green-300 flex-shrink-0 text-left"   />
                <p className="text-base text-left">
                  <strong className="font-bold">{service.title}:</strong> {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default VicaServices2;

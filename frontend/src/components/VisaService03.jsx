import React from 'react';
// Only CheckCircle is needed now as PhoneCall, Video, and Sparkles were removed.
import { CheckCircle } from 'lucide-react';

// The main component that renders the Work Visa service details.
const VicaServices3 = () => {
  // --- COLOR PALETTE from previous component ---
  const vibrantBlue = "bg-[#3E96F4]"; // Used for main background
  // const darkCharcoal = "bg-[#31393C]"; // Removed, no buttons

  // Data provided by the user for the Work Visa Service details
const familyVisaServices = [
  {
    title: 'Expert Guidance',
    description: 'With in-depth knowledge of visa regulations and immigration laws, we provide accurate and up-to-date information on eligibility, required documents, and the entire family visa application process.'
  },
  {
    title: 'Document Preparation',
    description: 'We help you gather and organize all the necessary supporting documents, ensuring everything is in order and meets the specific requirements for a successful application.'
  },
  {
    title: 'Application Submission',
    description: 'Our team carefully prepares and submits your visa application, reviewing it thoroughly to minimize errors and improve the chances of approval.'
  },
  {
    title: 'Customized Solutions',
    description: 'Every family is unique, so we offer personalized advice tailored to your specific situation, ensuring that the right visa options are explored based on your circumstances.'
  },
  {
    title: 'Communication with Authorities',
    description: 'We act as a liaison between you and immigration authorities, handling any queries, correspondence, and making sure the application process runs smoothly.'
  },
  {
    title: 'Updates and Monitoring',
    description: 'We track the progress of your application and keep you updated on any changes or developments, so you’re always informed and prepared.'
  },
  {
    title: 'Appeals and Follow-ups',
    description: 'If your application is rejected, we assist you with the appeal process, offering guidance, suggesting improvements, and helping you navigate the next steps.'
  },
  {
    title: 'Legal Expertise',
    description: 'If your case involves complex legal matters, we can connect you with trusted legal experts for advice on family reunification visas and immigration law.'
  },
  {
    title: 'Minimizing Stress',
    description: 'We understand that family separation can be emotional, so we handle the administrative details, allowing you to focus on your family’s well-being.'
  },
  {
    title: 'Saves Time and Effort',
    description: 'Our assistance simplifies the entire process, saving you time and effort, especially if you’re unfamiliar with immigration procedures.'
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
            Family Visa
          </h2>

          {/* Detailed Service List Title */}
          <h3 className="font-bold mb-4 text-left">
              Our family visa service enables individuals to unite with their loved ones in a new country. Acquiring a family visa, with its intricate procedures, can be a challenge. That’s where we step in, offering valuable assistance to those aiming to reunite with family abroad.
          </h3>

          <h3 className="font-bold mb-4 text-left">
             We provide comprehensive family visa assistance to ensure your loved ones can join you with ease. Here’s how we make the process smoother for you:
          </h3>
          {/* Detailed Service List */}
          <ul className="space-y-5">
            {familyVisaServices.map((service, index) => (
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

export default VicaServices3;

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does Dynamic World offer?",
    answer:
      "Dynamic World offers comprehensive career guidance services including online education, distance learning, regular admissions, study abroad programs, MBBS guidance, engineering admissions, MBA counseling, skill development courses, and immigration services.",
  },
  {
    question: "How can I get admission to online universities?",
    answer:
      "We help you with the complete admission process for 50+ online universities across India. Our experts guide you through eligibility criteria, application process, document preparation, and admission counseling.",
  },
  {
    question: "Do you provide study abroad guidance?",
    answer:
      "Yes, we provide comprehensive study abroad guidance including university selection, application process, visa assistance, scholarship guidance, and pre-departure support for students looking to study in countries like USA, UK, Canada, Australia, and more.",
  },
  {
    question: "What is the fee structure for your services?",
    answer:
      "Our fee structure varies based on the service you choose. We offer free initial counseling sessions. For detailed fee information, please contact us directly or visit our office for a personalized consultation.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The admission process duration varies depending on the program and university. Generally, it takes 2-4 weeks for online programs, 4-8 weeks for regular admissions, and 3-6 months for international admissions including visa processing.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div
                key={index}
                // Outer div always has white background and light border/shadow
                className="border rounded-lg shadow-sm overflow-hidden bg-white border-gray-200" 
              >
                <button
                  className={`w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none transition duration-300 ease-in-out 
                    ${
                      // Apply active styles to the button
                      isActive 
                        ? "bg-[#3E96F4] text-white border-b-2 border-[#3E96F4]" 
                        : "bg-white text-slate-800"
                    }
                  `}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  {isActive ? (
                    // Icon is white when active
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    // Icon is blue-600 when inactive
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {isActive && (
                  // Content area remains on a white background with dark text
                  <div className="p-4 border-t border-gray-200 text-slate-600 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
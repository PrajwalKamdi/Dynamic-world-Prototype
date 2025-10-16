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
    <section className="bg-slate-50 py-8 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <div
                key={index}
                className="border rounded-lg shadow-sm overflow-hidden bg-white border-gray-200"
              >
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isActive}
                  className={`w-full flex items-center justify-between gap-3 text-left font-medium focus:outline-none transition-colors duration-300
                    ${
                      isActive
                        ? "bg-[#3E96F4] text-white"
                        : "bg-white text-slate-800"
                    }
                  `}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="p-3 sm:p-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className="pr-3 sm:pr-4">
                    {isActive ? (
                      <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    ) : (
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#3E96F4]" />
                    )}
                  </span>
                </button>

                {isActive && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-200 text-slate-600 text-[13px] sm:text-sm lg:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

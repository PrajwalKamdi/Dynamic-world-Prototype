import React from "react";

const AboutUs03 = () => {
  return (
    <section className="w-full  bg-gray-50 flex flex-col justify-center items-center px-8 pt-5">
      <div className="max-w-6xl text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Beginning of a Transformative Era.
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 text-start text-sm">
          Established in 2005, our core activity lies in assisting students to make the right
          choice with regard to pursuing Distance Education, Online Education, Regular Education & 
          Overseas Education. We assist and provide support services to the students right from the 
          beginning, from form filling to getting the degree certificate. We assist the candidate in 
          getting the education loan at 0% interest. We provide multiple options that suit everyone’s 
          profile & budget.
        </p>

        {/* Career Options */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Options</h2>

        {/* WhatsApp Contact */}
        <div className="flex justify-center items-center gap-3">
          <a
            href="https://wa.me/917887881060"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .02 5.35.02 12c0 2.12.55 4.19 1.59 6.01L0 24l6.15-1.6a11.93 11.93 0 0 0 5.84 1.48h.01c6.63 0 12-5.35 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.5c-1.89 0-3.74-.51-5.35-1.48l-.38-.22-3.65.95.97-3.56-.25-.37A9.53 9.53 0 0 1 2.5 12c0-5.24 4.26-9.5 9.5-9.5 2.55 0 4.95 1 6.77 2.82A9.53 9.53 0 0 1 21.5 12c0 5.24-4.26 9.5-9.5 9.5Zm5.23-7.65c-.29-.14-1.7-.84-1.97-.93-.27-.1-.47-.14-.66.14-.2.29-.76.92-.93 1.11-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.58-.9-2.16-.24-.58-.48-.5-.66-.51h-.57c-.19 0-.5.07-.76.36s-1 1-1 2.43 1.02 2.82 1.16 3.01c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.35-.07-.12-.27-.19-.55-.33Z" />
            </svg>
            +91 788 788 1060
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs03;

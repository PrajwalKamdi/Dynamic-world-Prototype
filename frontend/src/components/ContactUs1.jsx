import React from 'react';

const ContactUs1 = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-red-600">Contact Us</h2>
        <p className="mt-2 text-gray-800">Get in Touch with Dynamic World</p>
      </div>

      {/* Info Panel */}
      <div className="bg-gray-200 rounded-xl border border-gray-300 p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Helpline */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600" aria-hidden>
              {/* simple phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-800">Helpline Number</p>
            <p className="mt-1 text-base font-semibold text-gray-900">(+91) 788 788 1060</p>
            <a href="tel:+917887881060" className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700  hover:-translate-y-1 transition-transform">Call Now</a>
          </div>

          {/* Head Office */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600" aria-hidden>
              {/* simple building icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-800">Head Office</p>
            <p className="mt-2 text-gray-900 max-w-xs font-semibold">
              Office No. 506, 5th Floor, Sterling Center<br/>
              Opposite Arora Tower, MG Road, Camp, Pune 411001
            </p>
          </div>

          {/* Support Mail */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600" aria-hidden>
              {/* simple mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-800">Support Mail</p>
            <p className="mt-1 text-gray-900 font-semibold">support@dynamicworld.in</p>
            <a href="mailto:support@dynamicworld.in" className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors hover:-translate-y-1 ">Get Inquiry</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs1;



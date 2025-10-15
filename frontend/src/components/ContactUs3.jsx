import React from 'react';

const ContactUs3 = () => {
  return (
    <div className="w-full min-h-screen px-0 md:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch h-full">
        {/* Left: Google Map */}
        <div className="bg-white rounded-xl shadow overflow-hidden h-[60vh] md:h-[80vh]">
          <div className="h-full">
            <iframe
              title="Dynamic World Map - Pune"
              src="https://maps.google.com/maps?q=Dynamic+World,+Office+No.+506,+5th+Floor,+Sterling+Centre,+MG+Road,+opposite+Aurora+Towers,+Camp,+Pune,+Maharashtra+411001&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 h-[60vh] md:h-[80vh] flex flex-col overflow-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600">We'd Love to Hear From You</h3>
            <p className="mt-2 text-sm text-gray-900">
              Please ensure all fields are completed accurately to help us assist you effectively.
            </p>
            <p className="mt-2 text-sm text-gray-900 font-medium">
              <span className="inline-flex items-center gap-2"><span className="text-gray-800">🔒</span> Your personal details is secure under privacy policy.</span>
            </p>
          </div>

          <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <input type="text" placeholder="First Name" className="col-span-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="text" placeholder="Last Name" className="col-span-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="tel" placeholder="Phone Number" className="sm:col-span-2 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="email" placeholder="Email Address" className="sm:col-span-2 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <div className="sm:col-span-2">
              <label className="block text-base text-gray-900 mb-1">Course Looking For?</label>
              <input type="text" placeholder="e.g. MBA in Marketing" className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div className="sm:col-span-2 mt-2">
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition-colors">Submit Details</button>
            </div>
          </form>

          <p className="mt-auto pt-3 text-xs text-gray-500">
            Note: By selecting the ‘Submit’ button, you are expressly requesting a call from Dynamic World and/or its authorized representatives at the contact number you have provided. Additionally, by providing your email address, you agree to receive emails regarding products, services, and offers from Dynamic World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs3;



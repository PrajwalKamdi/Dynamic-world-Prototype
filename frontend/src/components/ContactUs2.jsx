import React from 'react';

const officesFirst = [
  {
    city: 'Oman',
    phone: '(+91) 9820401375',
    tel: '+919820401375',
    address:
      'Office Number B/10, Double Tree By Hilton, Muscat Qurum, AL Nahdah Street, Qurum PC. 111 Muscat, Oman',
  },
  {
    city: 'Canada',
    phone: '(+91) 9820402089',
    tel: '+919820402089',
    address: 'Canada, Toronto, ON',
  },
];

const officesSecond = [
  {
    city: 'Mumbai',
    phone: '(+91) 773 884 6286',
    tel: '+917738846286',
    address:
      'Office No.8, 1st Floor, Neelkanth Shopping Centre, Kama Lane Corner, Near PN Joshi College, Ghatkopar (W), Mumbai 400086',
  },
  {
    city: 'Indore',
    phone: '(+91) 769 773 6826',
    tel: '+917697736826',
    address:
      'Office No.517, Onam Plaza, AB Rd, Near Industry House, Old Palasia, Indore 452001',
  },
  {
    city: 'Uttar Pradesh',
    phone: '(+91) 9820402089',
    tel: '+919820402089',
    address: 'Sector-59, Noida 201301, Uttar Pradesh',
  },
];

const Card = ({ city, phone, tel, address }) => (
  <div className="rounded-xl bg-slate-700 text-slate-100 px-4 py-6 shadow-md min-h-[260px]">
    <div className="flex flex-col items-center text-center gap-1.5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-600">
        {/* map pin icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a7.5 7.5 0 00-7.5 7.5c0 4.125 3.938 8.37 6.108 10.359a1.875 1.875 0 002.784 0C15.562 18.12 19.5 13.875 19.5 9.75a7.5 7.5 0 00-7.5-7.5zm0 10.125a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"/></svg>
      </div>
      <h3 className="text-sm font-semibold text-gray-100">{city}</h3>
      <p className="text-white font-medium text-xs">{phone}</p>
      <a
        href={`tel:${tel}`}
        className="mt-1 inline-flex items-center justify-center rounded-md border border-slate-400 px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:-translate-y-1 transition-transform"
      >
        Call Now
      </a>
      <p className="mt-2 text-xs text-white max-w-xl">{address}</p>
    </div>
  </div>
);

const ContactUs2 = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* First half: two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {officesFirst.map((item) => (
          <Card key={item.city} {...item} />
        ))}
      </div>

      {/* Second half: three cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {officesSecond.map((item) => (
          <Card key={item.city} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs2;


import React from "react";

const officesFirst = [
  {
    city: "Oman",
    phone: "(+91) 9820401375",
    tel: "+919820401375",
    address:
      "Office Number B/10, Double Tree By Hilton, Muscat Qurum, AL Nahdah Street, Qurum PC. 111 Muscat, Oman",
  },
  {
    city: "Canada",
    phone: "(+91) 9820402089",
    tel: "+919820402089",
    address:
      "Office No. 210, Maple Tower  25 King Street West, Financial District  Toronto, Ontario, Canada",
  },
];

const officesSecond = [
  {
    city: "Mumbai",
    phone: "(+91) 773 884 6286",
    tel: "+917738846286",
    address:
      "Office No.8, 1st Floor, Neelkanth Shopping Centre, Kama Lane Corner, Near PN Joshi College, Ghatkopar (W), Mumbai 400086",
  },
  {
    city: "Indore",
    phone: "(+91) 769 773 6826",
    tel: "+917697736826",
    address:
      "Office No.517, Onam Plaza, AB Rd, Near Industry House, Old Palasia, Indore 452001",
  },
  {
    city: "Uttar Pradesh",
    phone: "(+91) 9820402089",
    tel: "+919820402089",
    address:
      "Office No. 305, Skyview Tower, Sector-59, Near Metro Station, Noida 201301, Uttar Pradesh",
  },
];

const isIndianOffice = (o) => {
  const s = `${o.city} ${o.address}`.toLowerCase();

  const indiaHints = [
    "india",
    "mumbai",
    "indore",
    "noida",
    "uttar pradesh",
    "pune",
    "maharashtra",
    "nagpur",
    "delhi",
    "gujarat",
    "bangalore",
    "bengaluru",
    "hyderabad",
    "kolkata",
    "chennai",
  ];
  return indiaHints.some((k) => s.includes(k));
};

const mapLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

const Card = ({ city, phone, tel, address }) => (
  <div className="group rounded-2xl bg-white shadow-sm ring-1 ring-[#dbeafe] p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
    <div className="flex items-start gap-4">
      <div
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#1d4ed8] ring-1 ring-[#dbeafe]"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.25a7.5 7.5 0 00-7.5 7.5c0 4.125 3.938 8.37 6.108 10.359a1.875 1.875 0 002.784 0C15.562 18.12 19.5 13.875 19.5 9.75a7.5 7.5 0 00-7.5-7.5zm0 10.125a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z" />
        </svg>
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-lg font-semibold text-[#0f172a]">{city}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#eff6ff] text-[#1d4ed8] ring-1 ring-[#dbeafe]">
            {phone}
          </span>
        </div>

        <p className="mt-2 text-sm text-[#475569] line-clamp-3">{address}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`tel:${tel}`}
            className="inline-flex items-center justify-center rounded-lg bg-[#1d4ed8] px-4 py-2 text-xs lg:text-sm font-medium text-white transition-all hover:bg-[#1a46c6] hover:-translate-y-0.5 shadow-sm"
          >
            Call Now
          </a>
          <a
            href={mapLink(address)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#cbd5f5] bg-white px-4 py-2 text-xs lg:text-sm font-medium text-[#1e293b] transition-all hover:bg-[#f8fafc] hover:-translate-y-0.5 shadow-sm"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ label }) => (
  <div className="flex items-center justify-between mb-3">
    <h2 className="text-base sm:text-lg font-semibold text-[#0f172a]">
      {label}
    </h2>
    <span className="h-px flex-1 mx-4 bg-[#dbeafe]" />
  </div>
);

const ContactUs2 = () => {
  // Merge input arrays and partition: India first, then International
  const all = [...officesSecond, ...officesFirst]; // we already know second are Indian; still robustly check
  const indian = all
    .filter(isIndianOffice)
    .sort((a, b) => a.city.localeCompare(b.city));
  const international = all
    .filter((o) => !isIndianOffice(o))
    .sort((a, b) => a.city.localeCompare(b.city));

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f6f8fc] to-white">
      {/* Top banner */}
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
              Our Locations
            </span>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Visit or Call a Dynamic World Office
            </h1>
            <p className="mt-2 text-gray-900/85">
              Indian offices listed first for your convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-[#0f172a]">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-[#dbeafe] p-4 sm:p-6">
          {/* India section */}
          {indian.length > 0 && (
            <>
              <SectionHeader label="India Offices" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {indian.map((item) => (
                  <Card key={`${item.city}-${item.tel}`} {...item} />
                ))}
              </div>
            </>
          )}

          {/* International section */}
          {international.length > 0 && (
            <>
              <SectionHeader label="International Offices" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {international.map((item) => (
                  <Card key={`${item.city}-${item.tel}`} {...item} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 sm:mt-8">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-[#dbeafe] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-[#475569]">
                Need help choosing a course?
              </p>
              <h4 className="text-base sm:text-lg font-semibold text-[#0f172a]">
                Book a quick counselling call.
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917887881060"
                className="inline-flex items-center justify-center rounded-lg bg-[#1d4ed8] px-4 py-2.5 text-xs lg:text-sm font-medium text-white transition-all hover:bg-[#1a46c6] hover:-translate-y-0.5 shadow-sm"
              >
                Quick Call
              </a>
              <a
                href="#video-counselling"
                className="inline-flex items-center justify-center rounded-lg border border-[#cbd5f5] bg-white px-4 py-2.5 text-xs lg:text-sm font-medium text-[#1e293b] transition-all hover:bg-[#f8fafc] hover:-translate-y-0.5 shadow-sm"
              >
                Video Counselling
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs2;

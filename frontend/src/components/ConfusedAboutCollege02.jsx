import React, { useEffect, useState } from "react";

const UniversityLogos = [
  {
    name: "Aligarh Muslim University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918987/Aligarh_Muslim_University_xa60et.svg",
  },
  {
    name: "Amity Online",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918987/Amity_Online_d4bgqe.svg",
  },
  {
    name: "Andhra University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918988/Andhra_University_bzutnz.svg",
  },
  {
    name: "Bharath University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918987/Bharath_University_ggvtk4.svg",
  },
  {
    name: "Bharathidasan University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918987/Bharathidasan_University_kowe7v.svg",
  },
  {
    name: "Centurion University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918990/Centurion_University_hz4kbg.svg",
  },
  {
    name: "Chandigarh University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918989/Chandigarh_University_okxfv3.svg",
  },
  {
    name: "Chitkara University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918989/Chitkara_University_urq2q7.svg",
  },
  {
    name: "Dr. DY Patil Vidyapeeth",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918989/Dr._DY_Patil_Vidyapeeth_puzw6q.svg",
  },
  {
    name: "Dr. MGR University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918990/Dr._MGR_University_tsaapi.svg",
  },
  {
    name: "DY Patil University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918991/DY_Patil_University_n2oefw.svg",
  },
  {
    name: "GLA University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918991/GLA_University_fzjqre.svg",
  },
  {
    name: "Guru Kashi University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918991/Gurukashi_University_v12lra.svg",
  },
  {
    name: "Hindustan University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759918991/Hindustan_University_fx8oem.svg",
  },
  {
    name: "Jain University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919000/Jain_University_fv679m.svg",
  },
  {
    name: "Jamia Hamdard University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919001/Jamia_Hamdard_University_or9oso.svg",
  },
  {
    name: "Kalinga Institute of Industrial Technology",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919001/Kalinga_Insatitute_of_Industrial_Technology_k48fk8.svg",
  },
  {
    name: "KL University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919002/KL_UNiversity_zaiscc.svg",
  },
  {
    name: "Kurukshetra University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919002/Kurukshetra_University_k6aa2s.svg",
  },
  {
    name: "Lovely Professional University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919002/Lovely_Professional_University_x4yktg.svg",
  },
  {
    name: "Maharishi Makrandeshwar University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919003/Maharishi_Makrandeshwar_University_r3jjml.svg",
  },
  {
    name: "Mangalayatan University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919014/Mangalayatan_University_mnag3r.svg",
  },
  {
    name: "Manav Rachna University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919005/Manav_Rachna_University_uw9v13.svg",
  },
  {
    name: "Manipal University Jaipur",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919015/Manipal_University_Jaipur_crwz1z.svg",
  },
  {
    name: "MIT School of Distance Education",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919015/MIT_Scool_of_Distance_Education_wzmo8o.svg",
  },
  {
    name: "Mizoram University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919016/Mizoram_University_wyi1js.svg",
  },
  {
    name: "NMIMS University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919017/NMIMS_University_uv5jl6.svg",
  },
  {
    name: "OP Jindal Global University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919017/OP_Jindal_Global_University_hwkqne.svg",
  },
  {
    name: "Parul University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919028/Parul_University_ncmvli.svg",
  },
  {
    name: "Pune Institute of Business Management",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919028/Pune_Institute_of_Business_Management_hucqqs.svg",
  },
  {
    name: "Sharda University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919029/Sharda_University_l0egep.svg",
  },
  {
    name: "Shoolini University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919029/Shoolini_University_qvit1u.svg",
  },
  {
    name: "Sikkim Manipal University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919029/Sikkim_Manipal_University_b3ypzm.svg",
  },
  {
    name: "UPES University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919030/UPES_University_rbtu6r.svg",
  },
  {
    name: "Uttaranchal University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919031/Uttaranchal_University_imxnft.svg",
  },
  {
    name: "Vignan University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919030/Vignan_University_dgzy98.svg",
  },
  {
    name: "VIT University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919046/VIT_University_njqayz.svg",
  },
  {
    name: "Vivekanand Global University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919046/Vivekanand_Global_University_joclfs.svg",
  },
  {
    name: "Welingkar Institute of Management",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919047/Welingkar_Institute_of_Management_ebx7sz.svg",
  },
  {
    name: "Yenepoya University",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919047/Yenepoya_University_tg6uti.svg",
  },
];

const ConfusedAboutCollege02 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % UniversityLogos.length);
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gray-50 w-full">
      {/* Main Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100  py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Confused About College Card */}
          <div className="bg-blue-600 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 w-full shadow-2xl border border-blue-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              {/* Left Side - Text Content */}
              <div className="flex-1 space-y-3 sm:space-y-4 text-left w-full lg:w-auto">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                  Confused About College?
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Schedule a 30-minute admission counseling video call for
                  personalized guidance based on your skills and interests!
                </p>

                {/* Video Counselling Button */}
                <button className="bg-white hover:bg-gray-100 hover:-translate-y-1 text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start shadow-lg">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Video Counselling
                </button>

                {/* Separator */}
                <div className="flex items-center">
                  <div className="flex-1 h-px bg-white/30"></div>
                  <span className="px-3 sm:px-4 text-white/80 text-xs sm:text-sm">
                    or
                  </span>
                  <div className="flex-1 h-px bg-white/30"></div>
                </div>

                {/* Toll-Free Number */}
                <div className="text-white text-center sm:text-left">
                  <span className="text-sm sm:text-base">
                    Call us on our Toll-Free Number:{" "}
                  </span>
                  <a
                    href="tel:7887881060"
                    className="text-yellow-300 underline text-sm sm:text-base font-medium hover:text-yellow-200 transition-colors duration-200 cursor-pointer"
                  >
                    788 788 1060
                  </a>
                </div>
              </div>

              {/* Right Side - University Logos Carousel */}
              <div className="flex-1 relative overflow-hidden px-2 sm:px-4 w-full lg:w-auto">
                {/* Mobile View - Only 4 logos */}
                <div className="flex space-x-2 animate-scroll sm:hidden">
                  {[
                    ...UniversityLogos.slice(0, 4),
                    ...UniversityLogos.slice(0, 4),
                  ].map((logo, index) => (
                    <div
                      key={`mobile-${logo.name}-${index}`}
                      className="flex-shrink-0 w-24 h-24 rounded-full bg-white p-1 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop/Tablet View - All logos */}
                <div className="hidden sm:flex space-x-4 animate-scroll">
                  {[...UniversityLogos, ...UniversityLogos].map(
                    (logo, index) => (
                      <div
                        key={`desktop-${logo.name}-${index}`}
                        className="flex-shrink-0 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white p-1 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                      >
                        <img
                          src={logo.image}
                          alt={logo.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ConfusedAboutCollege02;

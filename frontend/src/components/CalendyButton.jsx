import { PhoneForwarded, Video } from "lucide-react";
import React from "react";

const CalendyButton = () => {
  // Handle Call
  const handleQuickCall = () => {
    window.location.href = "tel:+917887881060";
  };

  // Handle WhatsApp Video Counselling
  const handleVideoCounselling = () => {
    window.open("https://wa.me/+917887881060", "_blank");
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={handleQuickCall}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white  font-semibold shadow-md hover:bg-red-600 hover:text-black/80 transition duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 "
      >
        Quick Call <PhoneForwarded size={20} />
      </button>

      <button
        onClick={handleVideoCounselling}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E96F4] text-white  font-semibold shadow-md hover:bg-[#3E96F6] hover:text-black/80 transition duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1"
      >
        Video Counselling <Video size={20} />
      </button>
    </div>
  );
};

export default CalendyButton;

import { PhoneCall, Video } from "lucide-react";

const CalendyButton = () => {
  // Handle Call
  const handleQuickCall = () => {
    window.location.href = "tel:+917887881060";
  };

  // Handle WhatsApp Video Counselling
  const handleVideoCounselling = () => {
    window.open("https://wa.me/917887881060", "_blank");
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* Quick Call */}
      <button
        onClick={handleQuickCall}
        className="inline-flex items-center gap-2 rounded-2xl bg-[#FFC067] text-black px-4 py-2 text-sm sm:text-base font-semibold shadow-md ring-1 ring-[#3E96F4]/30 
        hover:bg-[#2f7dd0] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3E96F4]"
      >
        <PhoneCall className="h-5 w-5" aria-hidden /> Quick Call
      </button>

      {/* Video Counselling */}
      <button
        onClick={handleVideoCounselling}
        className="inline-flex items-center gap-2 rounded-2xl bg-[#FFC067] text-black px-4 py-2 text-sm sm:text-base font-semibold shadow-md ring-1 ring-[#3E96F4]/30 
        hover:bg-[#2f7dd0] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3E96F4]"
      >
        <Video className="h-5 w-5" aria-hidden /> Video Counselling
      </button>
    </div>
  );
};

export default CalendyButton;

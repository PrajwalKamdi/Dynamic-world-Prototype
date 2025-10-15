import { PhoneForwarded } from "lucide-react";
import { Video } from "lucide-react";
import DynamicForm from "../pages/DynamicForm";
import CalendyButton from "./CalendyButton";

const MVOC01 = () => {
  const handleQuickCall = () => {
    // Navigate to call
    window.location.href = "tel:+917887881060"; // Replace with actual phone number
  };

  const handleVideoCall = () => {
    // Navigate to WhatsApp
    window.open("https://wa.me/+917887881060", "_blank"); // Replace with actual WhatsApp number
  };

  return (
    <div className="mb-5">
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#31393C]">
            MVOC • India
          </span>

          {/* Title + subtitle */}
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
             Master of Vocation Courses
            </h1>
            <p className="mt-1 text-sm sm:text-[15px] text-white/80">
              Find top Master of Vocation-MVOC programs across India and get
              admission done.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2  items-start shadow-xl ">
          <div className="px-8 py-5 text-base">
            <div className="space-y-3">
              <p>
                A{" "}
                <span className="font-semibold">
                  Master of Vocation (M.Voc)
                </span>{" "}
                is a postgraduate degree focused on{" "}
                <span className="font-semibold">vocational training</span> and
                skill development, aligning learning with{" "}
                <span className="font-semibold">
                  National Occupational Standards (NOS)
                </span>
                . Students build practical expertise plus language and business
                communication skills — making them{" "}
                <span className="font-semibold">highly employable</span>.
              </p>

              <p>
                <span className="font-semibold">Popular fields:</span> Textile,
                Automobile, Apparel Design, Food Processing, and Renewable
                Energy. Ideal for creative individuals pursuing{" "}
                <span className="font-semibold">skill-based careers</span> in
                design, media, hospitality, and more, with clear pathways to{" "}
                <span className="font-semibold">career growth</span>.
              </p>
            </div>

            <CalendyButton />
          </div>

          <div>
            <DynamicForm
              title={"Receive expert college counseling at no cost"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVOC01;

import ContactRequestsCards from "@/components/layout/ContactRequests/ContactRequestsCards";
import { svgIcons } from "@/components/shared/svgIcons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ContactRequests = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ zIndex: 99999 }}
      className="min-h-screen bg-background/40  backdrop-blur-sm  p-8 absolute left-0 right-0 bottom-0 top-0"
    >
      <div>
        <h2
          className={`text-primary font-bold text-2xl md:text-[40px]  flex items-center gap-4"
           `}
        >
          <span className="text-secondary mx-2 ">{svgIcons.orders}</span>
          طلبات التواصل
        </h2>

        <Button
          onClick={() => navigate(-1)}
          className="mt-2 cursor-pointer flex items-center gap-2 bg-secondary text-xl font-bold min-h-[30px] w-[90px] text-white hover:bg-secondary/80 transition-all duration-300"
        >
          {svgIcons.return}

          <span className="pb-2"> رجوع</span>
        </Button>
      </div>

      <div className=" min-h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3 flex items-center justify-center flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[80px]">
        <ContactRequestsCards />
      </div>
    </div>
  );
};

export default ContactRequests;

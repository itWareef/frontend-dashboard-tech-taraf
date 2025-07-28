import ProposalSubmissionCards from "@/components/layout/ProposalSubmissionPage/ProposalSubmissionCards";
import { svgIcons } from "@/components/shared/svgIcons";
import HeaderPopup from "../../components/shared/HeaderPopup/HeaderPopup";
const ProposalSubmissionPage = () => {
  return (
    <section
      style={{ zIndex: 99999 }}
      className="min-h-screen bg-background/80  backdrop-blur-sm  p-8 absolute left-0 right-0 bottom-0 top-0"
    >
      <HeaderPopup PageName="تقديم العرض" icon={svgIcons.ordersIcon} />

      <div className=" min-h-[calc(100vh-180px)] relative  p-3 rounded-2xl my-3 flex items-center justify-center flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[80px]">
        <ProposalSubmissionCards />
      </div>
    </section>
  );
};

export default ProposalSubmissionPage;

import { svgIcons } from "@/components/shared/svgIcons";
import ExternalRequestsItems from "./ExternalRequestsItems";
import FormAddAssignExternalRequest from "./FormAddAssignExternalRequest";

const AssignExternalRequestContainer = () => {
  return (
    <div className="px-4 relative z-50">
      <div className="bg-card h-[calc(100vh-165px)] relative  px-3 py-5 rounded-2xl my-3">
        {/* Table Container with scroll */}
        <div className="relative h-full">
          <div
            className="absolute inset-0 overflow-y-auto rounded-[6px] 
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-center gap-2   p-2 rounded-[6px]">
              <img src={svgIcons.pen} alt="" />
              <h2 className="text-3xl font-bold text-white">انشاء طلب جديد</h2>
            </div>
            <FormAddAssignExternalRequest />
            <div className="flex items-center gap-2 my-5  p-2 rounded-[6px]">
              <img src={svgIcons.pending} alt="" />
              <h2 className="text-3xl font-bold text-white">
                طلبات قيد المعالجة
              </h2>
            </div>

            <ExternalRequestsItems type="pending" />
            <div className="flex items-center gap-2 my-5  p-2 rounded-[6px]">
              <img src={svgIcons.checkCircle} alt="" />
              <h2 className="text-3xl font-bold text-white">
                طلبات تم الانتهاء منها
              </h2>
            </div>

            <ExternalRequestsItems type="completed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignExternalRequestContainer;

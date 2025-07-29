import { svgIcons } from "@/components/shared/svgIcons";
import { Search } from "lucide-react";
import { useState } from "react";
import ContractRequestsServiceTBody from "./ContractRequests/ContractRequestsTBody";
import ContractRequestsServiceTH from "./ContractRequests/ContractRequestsTH";
import DesignServiceTBody from "./DesignService/DesignServiceTBody";
import DesignServiceTH from "./DesignService/DesignServiceTH";
import PublicHealthServiceTBody from "./PublicHealthService/PublicHealthServiceTBody";
import PublicHealthServiceTH from "./PublicHealthService/PublicHealthServiceTH";
import ServiceRequestsTBody from "./ServiceRequestsTBody";
import ServiceRequestsTH from "./ServiceRequestsTH";

const ServiceRequestsContainer = () => {
  const [activeTab, setActiveTab] = useState("gardening");

  const [gardeningServiceRequests, setGardeningServiceRequest] = useState(
    Array.from({ length: 10 }, () => ({
      clientName: "Ali Hassan",
      phoneNumber: "01012345678",
      email: "ali@example.com",
      contractStatus: "Active",
      area: "200 m²",
      totalArea: "250 m²",
      requestType: "بستنة",
      requestContent: "زراعه احواض الحديقه ",
      attachments: "photo1.jpg",
      actions: "View",
    }))
  );

  const [healthServiceRequests, setHealthServiceRequests] = useState(
    Array.from({ length: 10 }, () => ({
      clientName: "Ali Hassan",
      phoneNumber: "01012345678",
      email: "ali@example.com",
      contractStatus: "Active",
      area: "200 m²",
      totalArea: "250 m²",
      requestType: "بستنة",
      requestContent: "زراعه احواض الحديقه ",
      attachments: "photo1.jpg",
    }))
  );

  const [contractRequestsService, setContractRequestsService] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      requestNumber: `  ${i + 1}`,
      clientName: `عبدالرحمن علي`,
      deedNumber: `رقم الصك ${1000 + i}`,
      developerName: `المطور ${i + 1}`,
      projectName: `المشروع ${i + 1}`,
      unitType: i % 2 === 0 ? "فيلا" : "شقة",
      propertyAge: `${2 + i} سنوات`,
      area: `${150 + i * 10} متر مربع`,
      location: `الموقع ${i + 1}`,
      paymentStatus:
        i % 3 === 0 ? "paid" : i % 3 === 1 ? "not-paid" : "pending",
    }))
  );

  return (
    <>
      <section className="bg-card p-3 relative rounded-[20px] my-3 space-y-4">
        {/* Header */}
        <header className="flex justify-between items-center overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("gardening")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "gardening"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              خدمة البستنة
            </button>
            <button
              onClick={() => setActiveTab("health")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "health"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              خدمة الصحة العامة
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "design"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              خدكة تصميم الحدائق والاندسكيب
            </button>
            <button
              onClick={() => setActiveTab("contracts")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "contracts"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              طلبات التعاقد{" "}
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[250px]">
            <img src={svgIcons.filterIcon} className="w-6 h-6" alt="filter" />
            <div className="relative">
              <Search className="text-muted absolute top-1/2 right-2 transform -translate-y-1/2" />
              <input
                type="text"
                className="bg-white rounded-[6px] py-2 ps-10 pe-2 text-sm"
                placeholder="بحث"
              />
            </div>
          </div>
        </header>

        <div className="h-[calc(100vh-265px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeTab === "gardening" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <ServiceRequestsTH />
                <ServiceRequestsTBody
                  gardeningServiceRequests={gardeningServiceRequests}
                />
              </table>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}
          {activeTab === "health" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <PublicHealthServiceTH />
                <PublicHealthServiceTBody
                  healthServiceRequests={healthServiceRequests}
                />
              </table>

              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}
          {activeTab === "design" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <DesignServiceTH />
                <DesignServiceTBody
                  healthServiceRequests={healthServiceRequests}
                />
              </table>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}
          {activeTab === "contracts" && (
            <>
              <table className="w-full border-separate border-spacing-y-6">
                <ContractRequestsServiceTH />
                <ContractRequestsServiceTBody
                  contractRequestsService={contractRequestsService}
                />
              </table>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button>
                  <img src={svgIcons.add} className="w-8 h-8" alt="add" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceRequestsContainer;

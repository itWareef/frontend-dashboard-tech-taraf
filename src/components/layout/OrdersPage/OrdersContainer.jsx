import { svgIcons } from "@/components/shared/svgIcons";
import { Search } from "lucide-react";
import { useState } from "react";
import OrderTBody from "./OrderTBody";
import OrderTH from "./OrderTH";

const chooseSupervisorOptions = [
  { name: "عبدالرحمن علي", value: "supervisor-1" },
  { name: "سالم محمد", value: "supervisor-2" },
  { name: "فاطمة الزهراء", value: "supervisor-3" },
];

const OrdersContainer = () => {
  const [activeTab, setActiveTab] = useState("maintenance");

  const requestsMaintenance = Array(20).fill({
    id: 1001,
    clientName: "عبدالله محمد",
    requestType: "طلب صيانة كهربائية",
    unitNumber: 19,
    project: "وريف 35",
    time: "10:00 صباحا",
    date: "15/6/2023",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
  });

  const requestsCleaning = Array(15).fill({
    id: 2001,
    clientName: "عبدالرحمن علي",
    requestType: "طلب تنظيف الوحدة",
    unitNumber: 12,
    project: "واحة الرياض",
    time: "2:30 مساءً",
    date: "18/6/2023",
    phone: "0551111111",
    email: "abdalahm234@gmail.com",
  });

  const displayedRequests =
    activeTab === "maintenance" ? requestsMaintenance : requestsCleaning;

  return (
    <section className="bg-card p-3 rounded-[20px] my-3 space-y-4">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="space-x-2 border-b border-muted flex flex-1">
          <button
            onClick={() => setActiveTab("maintenance")}
            className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
              activeTab === "maintenance"
                ? "border-b-2 border-white  text-red-50 font-bold"
                : "opacity-60"
            }`}
          >
            طلبات الصيانة
          </button>
          <button
            onClick={() => setActiveTab("cleaning")}
            className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
              activeTab === "cleaning"
                ? "border-b-2 border-white  text-red-50 font-bold"
                : "opacity-60"
            }`}
          >
            طلبات النظافة
          </button>
        </div>

        <div className="flex items-center space-x-2 w-[250px]">
          <img src={svgIcons.filterIcon} className="w-6 h-6" alt="" />
          <div className="relative">
            <Search className="text-muted absolute -top-1 right-0 transform translate-y-1/2 -translate-x-1/2 " />
            <input
              type="text "
              className="bg-white rounded-[6px] py-2 ps-10 pe-2  text-sm"
              placeholder="بحث"
            />
          </div>
        </div>
      </header>

      <div className="max-h-[calc(100vh-250px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full border-separate border-spacing-y-6">
          <OrderTH />
          <OrderTBody
            requests={displayedRequests}
            chooseSupervisorOptions={chooseSupervisorOptions}
          />
        </table>
      </div>
    </section>
  );
};

export default OrdersContainer;

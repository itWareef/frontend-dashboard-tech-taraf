import { useState } from "react";
import { Search } from "lucide-react";
import { svgIcons } from "@/components/shared/svgIcons.jsx";
import NotificationsPromotionalTBody from "./NotificationsPromotionalTBody.jsx";
import NotificationsPromotionalTH from "./NotificationsPromotionalTH.jsx";
import NotificationsEndedContractsTBody from "./NotificationsEndedContractsTBody.jsx";
import ModelAddNotificationPromotional from "./ModelAddNotificationPromotional.jsx";
const NotificationsContainer = () => {
  const [activeTab, setActiveTab] = useState("promotional");
  const [isModalOpenAddNotification, setIsModalOpenAddNotification] =
    useState(false);
  const [
    isModalOpenAddPromotionalNotification,
    setIsModalOpenAddPromotionalNotification,
  ] = useState(false);

  const handleOpenModel = () => setIsModalOpenAddPromotionalNotification(true);
  const handleCloseModel = () =>
    setIsModalOpenAddPromotionalNotification(false);

  const openModalAddNotification = () => {
    setIsModalOpenAddNotification(true);
  };
  const [notificationsPromotional, setNotificationsPromotional] = useState(
    Array(20).fill({
      title: "بيع عقارك",
      content: "يمكنك بيع عقارك بسهولة",
      targetAudience: "العملاء الجدد",
      targetTime: "4:00 PM",
      date: "2025-07-31",
    })
  );

  return (
    <>
      {isModalOpenAddPromotionalNotification && (
        <ModelAddNotificationPromotional handleCloseModel={handleCloseModel} />
      )}
      <section className="bg-card p-3 rounded-[20px] my-2 space-y-0">
        {/* Header */}
        <header className="flex justify-between items-center mb-5 ">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("promotional")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "promotional"
                  ? "border-b-2 border-white text-white font-bold"
                  : "opacity-60"
              }`}
            >
              اشعارات دعائية{" "}
            </button>
            <button
              onClick={() => setActiveTab("endedContracts")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "endedContracts"
                  ? "border-b-2 border-white text-white font-bold"
                  : "opacity-60"
              }`}
            >
              اشعارات مجدولة{" "}
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[300px]">
            <img src={svgIcons.filterIcon} className="w-6 h-6" alt="filter" />
            <div className="relative flex-1">
              <Search className="text-muted absolute top-1/2 right-2 transform -translate-y-1/2" />
              <input
                type="text"
                className="bg-white rounded-[6px] py-2 ps-10 pe-2 text-sm w-full"
                placeholder="بحث"
              />
            </div>
          </div>
        </header>

        <div className="h-[calc(100vh-250px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeTab === "promotional" ? (
            <>
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0 z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button onClick={handleOpenModel}>
                  <img
                    src={svgIcons.notificationsIconS}
                    className="w-8 h-8 invert brightness-0"
                    alt="notifications"
                  />
                </button>
              </div>
              <table className="w-full  ">
                <NotificationsPromotionalTH />
                <NotificationsPromotionalTBody
                  notificationsPromotional={notificationsPromotional}
                />
              </table>
            </>
          ) : (
            <>
              <NotificationsEndedContractsTBody
                isModalOpenAddNotification={isModalOpenAddNotification}
                setIsModalOpenAddNotification={setIsModalOpenAddNotification}
              />
              <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
                <button onClick={openModalAddNotification}>
                  <img
                    src={svgIcons.notificationsIconS}
                    className="w-8 h-8 invert brightness-0"
                    alt="notifications"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default NotificationsContainer;

import CompletedRequestsItems from "./CompletedRequestsItems";
import FiltrationCompletedReq from "./FiltrationCompletedReq";

const CompletedRequestsContainer = () => {
  const requests = Array(20)
    .fill(0)
    .map((_, index) => ({
      id: 300 + index,
      visits: 5,
      location: "حي القيروان",
      build: "ورف هاوس 35",
      unit: "17",
      service: "صيانه حائط",
      imageLabel: "صوره الطلب",
      notesLabel: "ملاحظات",
      openDate: "1/1/2023",
      closeDate: "1/1/2023",
      duration: "يومان : 3 ساعات : 30 دقيقه",
      client: {
        name: "عبدالرحمن علي",
        phone: "01008034761",
        email: "01008034761",
        contractEndDate: "1/1/2023",
      },
      supervisor: {
        name: "عبدالرحمن علي",
        phone: "01008034761",
        email: "abdoali@.com",
        workImage: "صوره العمل",
        purchaseInvoices: "فواتير الشراء",
        rating: 4,
      },
    }));

  return (
    <>
      <FiltrationCompletedReq />
      <div className="bg-card h-[calc(100vh-210px)] p-3 rounded-2xl my-3">
        <div className="relative h-full">
          <div
            className="absolute inset-0 overflow-y-auto rounded-[6px] 
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 my-5 p-4">
              <CompletedRequestsItems requests={requests} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedRequestsContainer;

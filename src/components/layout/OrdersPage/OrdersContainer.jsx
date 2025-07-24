import OrderTBody from "./OrderTBody";
import OrderTH from "./OrderTH";

const chooseSupervisorOptions = [
  {
    name: "عبدالرحمن علي",
    value: "supervisor-1",
  },
  {
    name: "سالم محمد",
    value: "supervisor-2",
  },
  {
    name: "فاطمة الزهراء",
    value: "supervisor-3",
  },
];

const OrdersContainer = () => {
  const requests = Array(30).fill({
    id: 56739,
    clientName: "عبدالله محمد",
    requestType: "طلب صيانة كهربائية",
    unitNumber: 19,
    project: "وريف 35",
    time: "10:00 صباحا",
    date: "15/6/2023",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
  });

  return (
    <>
      {/* Table Card */}
      <div className="bg-card h-[calc(100vh-165px)] p-3 rounded-2xl my-3">
        <div className="relative h-full">
          <div
            className="absolute inset-0 overflow-y-auto rounded-[6px] 
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
          >
            <h4 className="text-xl py-3 border-b border-muted ">
              طلبات الصيانة
            </h4>
            <table className="w-full border-separate border-spacing-y-6">
              {/* Table Header - Sticky */}
              <OrderTH />

              {/* Table Body */}
              <OrderTBody
                requests={requests}
                chooseSupervisorOptions={chooseSupervisorOptions}
              />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersContainer;

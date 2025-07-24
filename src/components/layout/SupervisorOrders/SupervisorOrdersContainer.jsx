import SuperOrderTBody from "./SuperOrderTBody";
import SuperOrderTH from "./SuperOrderTH";

const SupervisorOrdersContainer = () => {
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
            <table className="w-full border-separate border-spacing-y-6">
              {/* Table Header - Sticky */}
              <SuperOrderTH />

              {/* Table Body */}
              <SuperOrderTBody requests={requests} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupervisorOrdersContainer;

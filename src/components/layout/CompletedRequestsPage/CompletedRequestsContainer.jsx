import CompletedRequestsItems from "./CompletedRequestsItems";

const CompletedRequestsContainer = () => {
  // Sample data for 20 cards
  const requests = Array(20).fill({
    requestType: "طلب صيانه",
    warehouse: "ورف هاوس 35",
    unit: "17",
    district: "حي الفيروز",
    requestDate: "1/1/2023",
    issue: "حائط صيانه",
    completionDate: "1/5/2023",
    client: {
      name: "عبدالؤحمن علي",
      phone: "0100804761",
      email: "abdoo@gmail.com",
    },
    supervisor: {
      name: "عبدالؤحمن علي",
      phone: "0100804761",
      email: "abdoo@gmail.com",
    },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5 p-4">
      <CompletedRequestsItems requests={requests} />
    </div>
  );
};

export default CompletedRequestsContainer;

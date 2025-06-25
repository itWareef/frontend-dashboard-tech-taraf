import dashboardSummaryItems from "@/mock-data/dashboardSummaryItems";

const DashboardStats = () => {
  return (
    <div className="  gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {dashboardSummaryItems.map((item) => (
        <div
          key={item.id}
          className="w-full text-center bg-card gap-y-3 rounded-lg shadow-md flex flex-col items-center justify-center p-4 hover:shadow-lg "
        >
          {item.icon}
          <h3 className="text-lg ">{item.title}</h3>
          <p className="text-2xl   text-muted">{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;

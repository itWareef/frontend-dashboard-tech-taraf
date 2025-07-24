import dashboardSummaryItems from "@/mock-data/dashboardSummaryItems";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {dashboardSummaryItems.map(({ id, path, icon, title, count }) => (
        <div
          key={id}
          className="w-full text-center bg-card rounded-lg shadow-md flex flex-col items-center justify-center p-4 gap-y-3 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-3xl">
            {path ? <Link to={path}>{icon}</Link> : icon}
          </div>

          <h3 className="text-lg font-medium ">{title}</h3>
          <p className="text-2xl text-muted font-bold">{count}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;

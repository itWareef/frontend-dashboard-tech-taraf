import dashboardSummaryItems from "@/mock-data/dashboardSummaryItems";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="col-span-10 row-span-2 col-start-1 row-start-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dashboardSummaryItems.map(({ id, path, icon, title, count }) => (
        <div
          key={id}
          className="w-full  text-center bg-card rounded-[20px] shadow-md flex flex-col items-center justify-center p-4 gap-y-3 hover:shadow-lg hover:-translate-y-1  transition-all duration-200"
        >
          <Link to={path}>{icon}</Link>

          <div className=" font-bold space-y-4">
            <h3 className="text-xl  text-muted ">{title}</h3>
            <p className="text-4xl text-white ">{count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;

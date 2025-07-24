import DashboardStats from "./DashboardStats";
import ReportsAnalytics from "./ReportsAnalytics";

const DashboardSummary = () => (
  <div className="w-full lg:order-1  space-y-4 lg:flex-1">
    <DashboardStats />
    <ReportsAnalytics />
  </div>
);

export default DashboardSummary;

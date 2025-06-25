import DashboardSummary from "@/components/layout/Dashboard/DashboardSummary";
import SidebarPanel from "@/components/layout/Dashboard/SidebarPanel";
import Header from "@/components/shared/Header/Header";

const Dashboard = () => {
  return (
    <main className="min-h-svh   ">
      <Header />

      <div className="flex flex-col lg:flex-row gap-6 pb-5 lg:pb-0 pt-5 md:px-4">
        <SidebarPanel />
        <DashboardSummary />
      </div>
    </main>
  );
};

export default Dashboard;

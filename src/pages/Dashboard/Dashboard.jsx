import DashboardSummary from "@/components/layout/Dashboard/DashboardSummary";
import SidebarPanel from "@/components/layout/Dashboard/SidebarPanel";
import Header from "@/components/shared/Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header PageName="لوحة التحكم" />

      <section className="overflow-hidden  flex flex-col gap-6 pt-5 pb-5 md:px-4 lg:flex-row lg:pb-0">
        <SidebarPanel />
        <DashboardSummary />
      </section>
    </>
  );
};

export default Dashboard;

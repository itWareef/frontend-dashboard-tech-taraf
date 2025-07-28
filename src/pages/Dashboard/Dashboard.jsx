import AssignExternalRequest from "@/components/layout/Dashboard/AssignExternalRequest";
import DashboardStats from "@/components/layout/Dashboard/DashboardStats";
import DashboardSummary from "@/components/layout/Dashboard/DashboardSummary";
import ReportsAnalytics from "@/components/layout/Dashboard/ReportsAnalytics";
import SidebarPanel from "@/components/layout/Dashboard/SidebarPanel";
import TaskManagerForm from "@/components/layout/Dashboard/TaskManagerForm";
import UserProfile from "@/components/layout/Dashboard/UserProfile";
import Header from "@/components/shared/Header/Header";
import { User } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <Header PageName="لوحة التحكم" />
      <section className="py-3 overflow-hidden" style={{}}>
        <div
          className="grid grid-cols-12 gap-4 h-full overflow-hidden  "
          style={{
            gridTemplateRows: "170px 170px 70px 195px 195px",
          }}
        >
          <UserProfile />
          <DashboardStats />

          <ReportsAnalytics />

          <AssignExternalRequest />

          <TaskManagerForm />
        </div>
      </section>

      {/* <SidebarPanel />
      <DashboardSummary /> */}
    </>
  );
};

export default Dashboard;

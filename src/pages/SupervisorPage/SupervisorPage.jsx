import MaintenanceRequestsTable from "@/components/layout/OrdersPage/OrdersContainer";
import PerfectMaintenanceTable from "@/components/layout/OrdersPage/OrdersContainer";
import OrdersContainer from "@/components/layout/OrdersPage/OrdersContainer";
import SupervisorContainer from "@/components/layout/SupervisorPage/SupervisorContainer";
import Header from "@/components/shared/Header/Header";

const SupervisorPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="المشرفين" returnState={true} />

      <SupervisorContainer />
    </main>
  );
};

export default SupervisorPage;

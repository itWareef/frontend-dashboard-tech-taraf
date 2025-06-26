import MaintenanceRequestsTable from "@/components/layout/OrdersPage/OrdersContainer";
import PerfectMaintenanceTable from "@/components/layout/OrdersPage/OrdersContainer";
import OrdersContainer from "@/components/layout/OrdersPage/OrdersContainer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const OrdersPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="الطلبات" returnState={true} />

      <OrdersContainer />
    </main>
  );
};

export default OrdersPage;

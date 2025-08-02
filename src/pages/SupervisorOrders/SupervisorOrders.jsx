import SupervisorOrdersContainer from "@/components/layout/SupervisorOrders/SupervisorOrdersContainer";
import Header from "@/components/shared/Header/Header";

const SupervisorOrders = () => {
  return (
    <>
      <Header PageName="طلبات المشرف" returnState={true} option="false" />

      <SupervisorOrdersContainer />
    </>
  );
};

export default SupervisorOrders;

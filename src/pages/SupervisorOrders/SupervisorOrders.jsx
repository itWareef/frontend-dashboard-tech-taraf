import SupervisorOrdersContainer from "@/components/layout/SupervisorOrders/SupervisorOrdersContainer";
import Header from "@/components/shared/Header/Header";
import { svgIcons } from "@/svgIcons";

const SupervisorOrders = () => {
  return (
    <>
      <Header PageName="طلبات المشرف" returnState={true}>
        {svgIcons.list}
      </Header>

      <SupervisorOrdersContainer />
    </>
  );
};

export default SupervisorOrders;

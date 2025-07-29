import SupervisorOrdersContainer from "@/components/layout/SupervisorOrders/SupervisorOrdersContainer";
import Header from "@/components/shared/Header/Header";
import { svgIcons } from "@/components/shared/svgIcons";

const SupervisorOrders = () => {
  return (
    <>
      <Header PageName="طلبات المشرف" returnState={true} option="false">
        {svgIcons.list}
      </Header>

      <SupervisorOrdersContainer />
    </>
  );
};

export default SupervisorOrders;

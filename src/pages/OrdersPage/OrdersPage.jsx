import OrdersContainer from "@/components/layout/OrdersPage/OrdersContainer";
import Header from "@/components/shared/Header/Header";

const OrdersPage = () => {
  return (
    <>
      <Header PageName="الطلبات" returnState={true} />

      <OrdersContainer />
    </>
  );
};

export default OrdersPage;

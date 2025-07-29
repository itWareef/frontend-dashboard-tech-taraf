import ServiceRequestsContainer from "@/components/layout/ServiceRequestsPage/ServiceRequestsContainer";
import Header from "@/components/shared/Header/Header";

const ServiceRequests = () => {
  return (
    <>
      <Header PageName="طلبات الخدمات" returnState={true} />
      <ServiceRequestsContainer />
    </>
  );
};

export default ServiceRequests;

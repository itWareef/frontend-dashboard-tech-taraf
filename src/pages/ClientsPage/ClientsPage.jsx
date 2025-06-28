import ClientsContainer from "@/components/layout/ClientsPage/ClientsContainer";
import Header from "@/components/shared/Header/Header";

const ClientsPage = () => {
  return (
    <>
      <Header PageName="العملاء" returnState={true} />

      <ClientsContainer />
    </>
  );
};

export default ClientsPage;

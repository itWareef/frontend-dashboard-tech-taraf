import CompletedRequestsContainer from "@/components/layout/CompletedRequestsPage/CompletedRequestsContainer";
import Header from "@/components/shared/Header/Header";

const CompletedRequestsPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="طلبات تم الانتهاء منها" returnState={true} />

      <CompletedRequestsContainer />
    </main>
  );
};

export default CompletedRequestsPage;

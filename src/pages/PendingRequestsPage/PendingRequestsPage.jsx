import PendingRequestsContainer from "@/components/layout/PendingRequestsPage/PendingRequestsContainer";
import Header from "@/components/shared/Header/Header";

const PendingRequestsPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="طلبات قيد المعالجة" returnState={true} />

      <PendingRequestsContainer />
    </main>
  );
};

export default PendingRequestsPage;

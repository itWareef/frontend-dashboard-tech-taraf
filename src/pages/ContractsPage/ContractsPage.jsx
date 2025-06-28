import ContractContainer from "@/components/layout/ContractsPage/ContractContainer";
import Header from "@/components/shared/Header/Header";

const ContractsPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="العقود" returnState={true} />
      <ContractContainer />
    </main>
  );
};

export default ContractsPage;

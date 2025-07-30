// components imports
import Header from "@/components/shared/Header/Header";
import TechnicalProposalsContainer from "@/components/layout/TechnicalProposalsPage/TechnicalProposalsContainer";
//======================================================

const TechnicalProposalsPage = () => {
  return (
    <main className="min-h-svh ">
      <Header PageName="العروض الفنية" returnState={true} />
      <TechnicalProposalsContainer />
    </main>
  );
};

export default TechnicalProposalsPage;

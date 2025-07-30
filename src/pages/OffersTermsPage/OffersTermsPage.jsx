// components imports
import Header from "@/components/shared/Header/Header";
import OffersTermsContainer from "@/components/layout/OffersTermsPage/OffersTermsContainer";
//======================================================

const OffersTermsPage = () => {
  return (
    <main className="min-h-svh ">
      <Header PageName="بنود العروض" returnState={true} />
      <OffersTermsContainer />
    </main>
  );
};

export default OffersTermsPage;

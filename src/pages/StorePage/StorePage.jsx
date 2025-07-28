// components imports
import Header from "@/components/shared/Header/Header";
import StorePageContainer from "@/components/layout/StorePage/StorePageContainer";

//======================================================

const StorePage = () => {
  return (
    <main className="min-h-svh ">
      <Header PageName="المتجر" returnState={true} />
      <StorePageContainer />
    </main>
  );
};

export default StorePage;

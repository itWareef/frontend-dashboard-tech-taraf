import UnitsContainer from "@/components/layout/UnitsPage/UnitsContainer";
import Header from "@/components/shared/Header/Header";

const UnitsPage = () => {
  return (
    <main className="min-h-svh">
      <Header PageName="الوحدات" returnState={true} />

      <UnitsContainer />
    </main>
  );
};

export default UnitsPage;

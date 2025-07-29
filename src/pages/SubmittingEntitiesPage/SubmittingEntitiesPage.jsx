// components imports
import Header from "@/components/shared/Header/Header";
import SubmittingEntitiesContainer from "@/components/layout/SubmittingEntitiesPage/SubmittingEntitiesContainer";
//======================================================

const SubmittingEntitiesPage = () => {
  return (
    <main className="min-h-svh ">
      <Header PageName="جهات التقديم" returnState={true} />
      <SubmittingEntitiesContainer />
    </main>
  );
};

export default SubmittingEntitiesPage;

import SupervisorContainer from "@/components/layout/SupervisorPage/SupervisorContainer";
import Header from "@/components/shared/Header/Header";

const SupervisorPage = () => {
  return (
    <>
      <Header PageName="المشرفين" returnState={true} />

      <SupervisorContainer />
    </>
  );
};

export default SupervisorPage;

import AddUnitRequestsContainer from "@/components/layout/AddUnitRequestsPage/AddUnitRequestsContainer";
import Header from "@/components/shared/Header/Header";
import { svgIcons } from "@/svgIcons";

const AddUnitRequestsPage = () => {
  return (
    <>
      <main
        style={{ zIndex: 99999 }}
        className="min-h-screen bg-background/40  backdrop-blur-sm  p-8 absolute left-0 right-0 bottom-0 top-0"
      >
        <div className="w-full md:w-[90%] mx-auto">
          <Header
            PageName="طلبات اضافه وحده للحسابات الحاليه"
            returnState={true}
          >
            {svgIcons.orders}
          </Header>
          <AddUnitRequestsContainer />
        </div>
      </main>
      ;
    </>
  );
};

export default AddUnitRequestsPage;

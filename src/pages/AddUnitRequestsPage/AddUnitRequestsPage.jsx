import AddUnitRequestsContainer from "@/components/layout/AddUnitRequestsPage/AddUnitRequestsContainer";
import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";

const AddUnitRequestsPage = () => {
  return (
    <>
      <section
        style={{ zIndex: 99999 }}
        className="min-h-screen bg-background/80  backdrop-blur-sm  p-8 absolute left-0 right-0 bottom-0 top-0"
      >
        <HeaderPopup PageName="طلبات اضافه وحده للحسابات الحاليه" />
        <AddUnitRequestsContainer />
      </section>
    </>
  );
};

export default AddUnitRequestsPage;

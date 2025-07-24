import AddQuotationRequest from "@/components/layout/ModelAddQuotationRequest/AddQuotationRequest";
import Header from "@/components/shared/Header/Header";
import { useState } from "react";

const ProposalsPage = () => {
  const [openModel, setOpenModel] = useState(false);

  const handleOpenModel = () => {
    console.log("open model");
    setOpenModel(!openModel);
  };
  return (
    <main className="min-h-svh">
      <Header PageName="العروض" returnState={true} />
      <button
        onClick={handleOpenModel}
        className="bg-secondary h-10 w-10  text-white px-4 py-2 rounded-2xl"
      >
        +
      </button>

      {openModel && (
        <div className="fixed bg-background  top-0 left-0 right-0 bottom-0 z-[999999]">
          <AddQuotationRequest />
        </div>
      )}
    </main>
  );
};

export default ProposalsPage;

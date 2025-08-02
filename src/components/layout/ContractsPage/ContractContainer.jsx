import { useState } from "react";
import Attachments from "./Attachments.jsx";
import ContractBody from "./ContractBody.jsx";
import ContractTH from "./ContractTH.jsx";
import ModelAddContract from "./ModelAddContract.jsx";
import { Search } from "lucide-react";
import { svgIcons } from "@/components/shared/svgIcons.jsx";
const ContractContainer = () => {
  const [activeTab, setActiveTab] = useState("currentContracts");
  const [openAttachments, setOpenAttachments] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const [contracts, setContracts] = useState(
    Array(20).fill({
      clientName: "عبدالرحمن علي",
      project: " ابا-ي-1 ",
      unitNumber: "11",
      maintenanceStart: "2024-01-01",
      maintenanceEnd: "2025-01-01",
      amount: 3025,
    })
  );

  const handleDelete = (contractId) => {
    console.log("Delete contract:", contractId);
  };

  const handleAdd = (values) => {
    const newContract = {
      id: Math.max(...contracts.map((u) => u.id), 0) + 1,
      ...values,
    };

    setContracts([...contracts, newContract]);
    setIsOpen(false);
  };

  const handleEditClick = (contract) => {
    setSelectedContract(contract);
    setIsOpen(true);
  };

  const handleEdit = (values, id) => {
    const updatedContract = {
      id,
      clientName: values.clientName,
      project: values.project,
      unitNumber: values.unitNumber,
      maintenanceStart: values.maintenanceStart,
      maintenanceEnd: values.maintenanceEnd,
    };

    setContracts(
      contracts.map((contract) =>
        contract.id === id ? updatedContract : contract
      )
    );
    setIsOpen(false);
  };

  const handleAttachments = () => {
    setOpenAttachments(!openAttachments);
  };

  return (
    <>
      {/* Model Add Contract */}
      {isOpen && (
        <ModelAddContract
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedContract={selectedContract}
          handleEdit={handleEdit}
        />
      )}
      {openAttachments && (
        <Attachments
          openAttachments={openAttachments}
          handleAttachments={handleAttachments}
        />
      )}

      <section className="bg-card p-3 rounded-[20px] my-3 space-y-4">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("currentContracts")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "currentContracts"
                  ? "border-b-2 border-white text-white font-bold"
                  : "opacity-60"
              }`}
            >
              عقود سارية{" "}
            </button>
            <button
              onClick={() => setActiveTab("endedContracts")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "endedContracts"
                  ? "border-b-2 border-white text-white font-bold"
                  : "opacity-60"
              }`}
            >
              عقود منتهية{" "}
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[250px]">
            <img src={svgIcons.filterIcon} className="w-6 h-6" alt="filter" />
            <div className="relative">
              <Search className="text-muted absolute top-1/2 right-2 transform -translate-y-1/2" />
              <input
                type="text"
                className="bg-white rounded-[6px] py-2 ps-10 pe-2 text-sm"
                placeholder="بحث"
              />
            </div>
          </div>
        </header>

        <div className="max-h-[calc(100vh-250px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              <img src={svgIcons.addContract} className="w-11 h-11" alt="add" />
            </button>
          </div>
          <table className="w-full border-separate border-spacing-y-6">
            <ContractTH />
            <ContractBody
              handleAttachments={handleAttachments}
              contracts={contracts}
              handleDelete={handleDelete}
              handleEdit={handleEditClick}
            />
          </table>
        </div>
      </section>
    </>
  );
};

export default ContractContainer;

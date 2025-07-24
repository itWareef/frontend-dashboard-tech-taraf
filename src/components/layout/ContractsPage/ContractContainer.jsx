import { svgIcons } from "@/svgIcons.jsx";
import { useState } from "react";
import Attachments from "./Attachments.jsx";
import ContractBody from "./ContractBody.jsx";
import ContractTH from "./ContractTH.jsx";
import ModelAddContract from "./ModelAddContract.jsx";
const ContractContainer = () => {
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
      {openAttachments && (
        <Attachments
          openAttachments={openAttachments}
          handleAttachments={handleAttachments}
        />
      )}
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Contract */}
        {isOpen && (
          <ModelAddContract
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedContract={selectedContract}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Contract */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              {svgIcons.addContract}
            </button>
          </div>
          {/* Table Container with scroll */}
          <div className="relative h-full">
            <div
              className="absolute inset-0 overflow-y-auto rounded-[6px] 
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
            >
              <table className="w-full border-separate border-spacing-y-6">
                {/* Table Header */}
                <ContractTH />

                {/* Table Body */}
                <ContractBody
                  handleAttachments={handleAttachments}
                  contracts={contracts}
                  handleDelete={handleDelete}
                  handleEdit={handleEditClick}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractContainer;

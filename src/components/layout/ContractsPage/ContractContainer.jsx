import { useState } from "react";
import ContractBody from "./ContractBody.jsx";
import ContractTH from "./ContractTH.jsx";
import ModelAddContract from "./ModelAddContract.jsx";
const ContractContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContrast, setSelectedContrast] = useState(null);
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
    setSelectedContrast(contract);
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

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Contract */}
        {isOpen && (
          <ModelAddContract
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedContrast={selectedContrast}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Contract */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              <svg
                width="40"
                height="50"
                viewBox="0 0 55 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.238281 0.238281V53.1346H33.2567L53.1346 33.2567V0.238281H0.238281ZM3.82447 3.82447H49.5484V28.0313H28.0313V49.5484H3.82447V3.82447ZM31.7713 49.5484H31.6174V31.6174H49.5484V31.7713L31.7713 49.5484Z"
                  fill="white"
                />
                <path
                  d="M20.747 29.7134V20.748H29.7125V17.1618H20.747V8.19629H17.1608V17.1618H8.19531V20.748H17.1608V29.7134H20.747Z"
                  fill="white"
                />
              </svg>
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

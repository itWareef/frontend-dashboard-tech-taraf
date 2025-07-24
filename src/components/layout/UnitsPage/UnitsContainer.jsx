import { useState } from "react";
import ModelAddUnits from "./ModelAddUnits.jsx";
import UnitTBody from "./UnitBody.jsx";
import UnitsTH from "./UnitsTH";
const UnitsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const [units, setUnits] = useState(
    Array(20).fill({
      developer: "شركة العمران",
      project: "مشروع الرياض السكني",
      villaNumber: "V-102",
      unitNumber: "UNIT-205",
      area: "150 م²",
      deedNumber: "DEED-2023-4567",
      deliveryDate: "2023-05-15",
      maintenanceStart: "2023-05-15",
      maintenanceEnd: "2024-05-15",
      clientName: "أحمد محمد",
      clientNumber: "0501234567",
    })
  );

  const handleDelete = (unitsId) => {
    console.log("Delete unit:", unitsId);
  };

  const handleAdd = (values) => {
    const newUnit = {
      id: Math.max(...units.map((u) => u.id), 0) + 1,
      ...values,
    };

    setUnits([...units, newUnit]);
    setIsOpen(false);
  };

  const handleEditClick = (unit) => {
    setSelectedUnit(unit);
    setIsOpen(true);
  };

  const handleEdit = (values, id) => {
    const updatedUnit = {
      id,
      developer: values.developer,
      project: values.project,
      villaNumber: values.villaNumber,
      unitNumber: values.unitNumber,
      area: values.area,
      deedNumber: values.deedNumber,
      deliveryDate: values.deliveryDate,
      maintenanceStart: values.maintenanceStart,
      maintenanceEnd: values.maintenanceEnd,
      clientName: values.clientName,
      clientNumber: values.clientNumber,
    };

    setUnits(units.map((unit) => (unit.id === id ? updatedUnit : unit)));
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Unit */}
        {isOpen && (
          <ModelAddUnits
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedUnit={selectedUnit}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Unit */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              <svg
                width="40"
                height="58"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7673 7.42727L41.5927 20.7964V23.7673C43.6724 23.7673 45.6629 24.0644 47.5345 24.6288V17.8255L23.7673 0L0 17.8255V53.4764H22.8166C21.9253 51.6344 21.3311 49.6439 21.034 47.5345H5.94182V20.7964L23.7673 7.42727Z"
                  fill="white"
                />
                <path
                  d="M41.5928 29.709C33.3931 29.709 26.7383 36.3638 26.7383 44.5635C26.7383 52.7632 33.3931 59.4181 41.5928 59.4181C49.7925 59.4181 56.4474 52.7632 56.4474 44.5635C56.4474 36.3638 49.7925 29.709 41.5928 29.709ZM50.5056 46.049H43.0783V53.4763H40.1074V46.049H32.6801V43.0781H40.1074V35.6508H43.0783V43.0781H50.5056V46.049Z"
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
                <UnitsTH />

                {/* Table Body */}
                <UnitTBody
                  units={units}
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

export default UnitsContainer;

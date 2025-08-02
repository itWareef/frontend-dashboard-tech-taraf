import { useState } from "react";
import ModelAddUnits from "./ModelAddUnits.jsx";
import UnitTBody from "./UnitBody.jsx";
import UnitsTH from "./UnitsTH";
import { Search } from "lucide-react";
import { svgIcons } from "@/components/shared/svgIcons.jsx";
const UnitsContainer = () => {
  const [activeTab, setActiveTab] = useState("inside");
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
      {/* Model Add Unit */}
      {isOpen && (
        <ModelAddUnits
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedUnit={selectedUnit}
          handleEdit={handleEdit}
        />
      )}

      <section className="bg-card p-5 rounded-[20px] my-2">
        {/* Header */}
        <header className="flex justify-between items-center mb-5">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("inside")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "inside"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              وحدات داخل العقد
            </button>
            <button
              onClick={() => setActiveTab("outside")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "outside"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              وحدات خارج العقد
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[300px]">
            <img src={svgIcons.filterIcon} className="w-6 h-6" alt="filter" />
            <div className="relative flex-1 ">
              <Search className="text-muted absolute top-1/2 right-2 transform -translate-y-1/2" />
              <input
                type="text"
                className="bg-white rounded-[6px] w-full py-2 ps-10 pe-2 text-sm"
                placeholder="بحث"
              />
            </div>
          </div>
        </header>

        <div className="h-[calc(100vh-260px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-[80px] fixed bottom-0 left-0 translate-x-0    z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              <img
                src={svgIcons.addUnitIconWhite}
                className="w-12 h-12"
                alt="add"
              />
            </button>
          </div>
          <table className="w-full">
            <UnitsTH />
            <UnitTBody
              units={units}
              handleDelete={handleDelete}
              handleEdit={handleEditClick}
            />
          </table>
        </div>
      </section>
    </>
  );
};

export default UnitsContainer;

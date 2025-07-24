import { svgIcons } from "@/svgIcons";
import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";
import ModelAddSupervisor from "./ModelAddSupervisor";
import SupervisorTBody from "./SupervisorTBody";
import SupervisorTH from "./SupervisorTH";
const SupervisorContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const [supervisors, setSupervisors] = useState([
    {
      id: 1,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 2,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 3,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 4,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 5,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 6,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
  ]);

  const handleDelete = (supervisorId) => {
    console.log("Delete supervisor:", supervisorId);
    // Add your delete logic here
  };

  const handleAdd = (formdata) => {
    const newSupervisor = {
      id: supervisors.length + 1,
      supervisorImage: formdata.get("image"),
      supervisorName: formdata.get("name"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      maintenanceNum: 30,
      avgRating: 4.5,
    };

    setSupervisors([...supervisors, newSupervisor]);
    setSelectedSupervisor(newSupervisor);
    setIsOpen(false);
  };

  const handleEditClick = (supervisor) => {
    setSelectedSupervisor(supervisor);
    setIsOpen(true);
  };

  const handleEdit = (formdata, id) => {
    const updatedSupervisor = {
      id,
      supervisorImage:
        formdata.get("image") && selectedSupervisor.supervisorImage,
      supervisorName: formdata.get("name"),
      type: formdata.get("type"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      maintenanceNum: selectedSupervisor.maintenanceNum || 0,
      avgRating: selectedSupervisor.avgRating || 0,
    };

    const updatedList = supervisors.map((sup) =>
      sup.id === id ? updatedSupervisor : sup
    );

    setSupervisors(updatedList);
    setSelectedSupervisor(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Supervisor */}
        {isOpen && (
          <ModelAddSupervisor
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedSupervisor={selectedSupervisor}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Supervisor */}
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2  translate-y-5  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              {svgIcons.addSupervisor}
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
                <SupervisorTH />

                {/* Table Body */}
                <SupervisorTBody
                  supervisors={supervisors}
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

export default SupervisorContainer;

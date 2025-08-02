import { svgIcons } from "@/components/shared/svgIcons";
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
    {
      id: 7,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 8,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 9,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 10,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 11,
      supervisorImage: superVisorImg,
      supervisorName: "عبدالرحمن علي",
      maintenanceNum: 30,
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
      avgRating: 4.5,
    },
    {
      id: 12,
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
      {/* Model Add Supervisor */}
      {isOpen && (
        <ModelAddSupervisor
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedSupervisor={selectedSupervisor}
          handleEdit={handleEdit}
        />
      )}
      <section className="bg-card p-4 relative rounded-[20px] my-2">
        <div className="h-[calc(100vh-200px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-[80px] fixed bottom-0 left-0 translate-x-0  -translate-y-1  z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              {svgIcons.addSupervisor}
            </button>
          </div>
          <table className="w-full  ">
            <SupervisorTH />

            <SupervisorTBody
              supervisors={supervisors}
              handleDelete={handleDelete}
              handleEdit={handleEditClick}
            />
          </table>
        </div>
      </section>
    </>
  );
};

export default SupervisorContainer;

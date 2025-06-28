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
              <svg
                width="40"
                height="58"
                viewBox="0 0 66 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.7937 14.5005C46.2833 21.3849 41.0643 27.0011 35.3349 27.0011C29.6055 27.0011 24.3774 21.3862 23.8761 14.5005C23.3552 7.33877 28.4336 2 35.3349 2C42.2362 2 47.3146 7.46898 46.7937 14.5005Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.3345 35.335C24.0059 35.335 12.508 41.5852 10.3803 53.3826C10.1199 54.8045 10.9285 56.1692 12.4182 56.1692H58.2521C59.7418 56.1692 60.5465 54.8045 60.29 53.3826C58.161 41.5852 46.6631 35.335 35.3345 35.335Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  d="M9.29197 18.6675V33.2514V18.6675ZM16.5839 25.9595H2H16.5839Z"
                  fill="white"
                />
                <path
                  d="M9.29197 18.6675V33.2514M16.5839 25.9595H2"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

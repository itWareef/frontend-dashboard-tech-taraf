import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";
import ClientsTBody from "./ClientsTBody";
import ClientsTH from "./ClientsTH";
import ModelAddClient from "./ModelAddClient";
const ClientsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const handleCloseModel = () => {
    setIsOpen(false);
  };
  const [clients, setClients] = useState([
    {
      id: 1,
      clientImage: superVisorImg,
      clientName: "عبدالرحمن علي",
      clientContract: "صيانه + زراعه",
      unitNumber: 30,
      projectName: "وريف 35",
      neighborhood: "حي الفيروران",
      phone: "0550000000",
      email: "abdalahm234@gmail.com",
    },
    {
      id: 2,
      clientImage: superVisorImg,
      clientName: "محمد سمير",
      clientContract: "تنظيف شامل",
      unitNumber: 12,
      projectName: "روابي الندى",
      neighborhood: "حي النهضة",
      phone: "0551234567",
      email: "mohsamir91@gmail.com",
    },
    {
      id: 3,
      clientImage: superVisorImg,
      clientName: "سارة أحمد",
      clientContract: "زراعة فقط",
      unitNumber: 21,
      projectName: "جنات الخُبر",
      neighborhood: "حي الإسكان",
      phone: "0557654321",
      email: "sara.a@gmail.com",
    },
    {
      id: 4,
      clientImage: superVisorImg,
      clientName: "عمرو عبدالعزيز",
      clientContract: "صيانة كهرباء",
      unitNumber: 8,
      projectName: "النسيم",
      neighborhood: "حي الشاطئ",
      phone: "0559988776",
      email: "amro.aziz@hotmail.com",
    },
    {
      id: 5,
      clientImage: superVisorImg,
      clientName: "ليلى خالد",
      clientContract: "تنسيق حدائق",
      unitNumber: 45,
      projectName: "الواحة 22",
      neighborhood: "حي النخيل",
      phone: "0553322110",
      email: "layla.khaled@yahoo.com",
    },
    {
      id: 6,
      clientImage: superVisorImg,
      clientName: "ليلى خالد",
      clientContract: "تنسيق حدائق",
      unitNumber: 45,
      projectName: "الواحة 22",
      neighborhood: "حي النخيل",
      phone: "0553322110",
      email: "layla.khaled@yahoo.com",
    },
    {
      id: 7,
      clientImage: superVisorImg,
      clientName: "ليلى خالد",
      clientContract: "تنسيق حدائق",
      unitNumber: 45,
      projectName: "الواحة 22",
      neighborhood: "حي النخيل",
      phone: "0553322110",
      email: "layla.khaled@yahoo.com",
    },
    {
      id: 8,
      clientImage: superVisorImg,
      clientName: "ليلى خالد",
      clientContract: "تنسيق حدائق",
      unitNumber: 45,
      projectName: "الواحة 22",
      neighborhood: "حي النخيل",
      phone: "0553322110",
      email: "layla.khaled@yahoo.com",
    },
  ]);

  const handleDelete = (clientId) => {
    console.log("Delete client:", clientId);
  };

  const handleAdd = (formdata) => {
    const newClient = {
      id: clients.length + 1,
      clientImage: formdata.get("image"),
      clientName: formdata.get("name"),
      clientContract: formdata.get("contract"),
      unitNumber: formdata.get("unitNumber"),
      projectName: formdata.get("projectName"),
      neighborhood: formdata.get("neighborhood"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
    };

    setClients([...clients, newClient]);
    setSelectedClient(newClient);
    setIsOpen(false);
  };

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setIsOpen(true);
  };

  const handleEdit = (formdata, id) => {
    const updatedClient = {
      id,
      clientImage: formdata.get("image") && selectedClient.clientImage,
      clientName: formdata.get("name"),
      clientContract: formdata.get("contract"),
      unitNumber: formdata.get("unitNumber"),
      projectName: formdata.get("projectName"),
      neighborhood: formdata.get("neighborhood"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
    };

    const updatedList = clients.map((client) =>
      client.id === id ? updatedClient : client
    );

    setClients(updatedList);
    setSelectedClient(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-4 relative z-50">
        {/* Table Card */}

        {/* Model Add Client */}
        {isOpen && (
          <ModelAddClient
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedClient={selectedClient}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
          {/* Button For Show Model Add Client */}
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
                <ClientsTH />

                {/* Table Body */}
                <ClientsTBody
                  clients={clients}
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

export default ClientsContainer;

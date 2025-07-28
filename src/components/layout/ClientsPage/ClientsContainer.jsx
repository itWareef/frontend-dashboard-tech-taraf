import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";
import ClientsTBody from "./ClientsTBody";
import ClientsTH from "./ClientsTH";
import ModelAddClient from "./ModelAddClient";

import { Search } from "lucide-react";
import ModeClientsOrder from "./ModelClientsOrder/ModeClientsOrder";

const ClientsContainer = () => {
  const [activeTab, setActiveTab] = useState("contracted");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [ordersModel, setOrdersModel] = useState(false);

  const handleCloseModel = () => {
    setIsOpen(false);
    setSelectedClient(null);
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
      isContracted: true,
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
      isContracted: false,
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
      isContracted: true,
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
      isContracted: false,
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
      isContracted: true,
    },
  ]);

  const handleDelete = (clientId) => {
    setClients(clients.filter((client) => client.id !== clientId));
  };

  const handleAdd = (formdata) => {
    const newClient = {
      id: clients.length + 1,
      clientImage: formdata.get("image") || superVisorImg,
      clientName: formdata.get("name"),
      clientContract: formdata.get("contract"),
      unitNumber: formdata.get("unitNumber"),
      projectName: formdata.get("projectName"),
      neighborhood: formdata.get("neighborhood"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      isContracted: true,
    };

    setClients([...clients, newClient]);
    setSelectedClient(null);
    setIsOpen(false);
  };

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setIsOpen(true);
  };

  const handleEdit = (formdata, id) => {
    const updatedClient = {
      id,
      clientImage: formdata.get("image") || selectedClient.clientImage,
      clientName: formdata.get("name"),
      clientContract: formdata.get("contract"),
      unitNumber: formdata.get("unitNumber"),
      projectName: formdata.get("projectName"),
      neighborhood: formdata.get("neighborhood"),
      phone: formdata.get("phone"),
      email: formdata.get("email"),
      isContracted: selectedClient?.isContracted || true,
    };

    const updatedList = clients.map((client) =>
      client.id === id ? updatedClient : client
    );

    setClients(updatedList);
    setSelectedClient(null);
    setIsOpen(false);
  };

  const filteredClients = clients.filter((client) =>
    activeTab === "contracted" ? client.isContracted : !client.isContracted
  );

  const handleOrdersModel = (client) => {
    setSelectedClient(client);
    setOrdersModel(true);
  };

  const handleCloseOrdersModel = () => {
    setOrdersModel(false);
    setSelectedClient(null);
  };

  return (
    <>
      {ordersModel && (
        <ModeClientsOrder
          handleCloseOrdersModel={handleCloseOrdersModel}
          client={selectedClient}
        />
      )}

      {isOpen && (
        <ModelAddClient
          handleAdd={handleAdd}
          handleCloseModel={handleCloseModel}
          selectedClient={selectedClient}
          handleEdit={handleEdit}
        />
      )}
      <section className="bg-card p-3 rounded-[20px] my-3 space-y-4">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="space-x-2 border-b border-muted flex flex-1">
            <button
              onClick={() => setActiveTab("contracted")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "contracted"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              عميل متعاقد
            </button>
            <button
              onClick={() => setActiveTab("nonContracted")}
              className={`text-xl py-3 px-4 text-white transition-all duration-150 ${
                activeTab === "nonContracted"
                  ? "border-b-2 border-white text-red-50 font-bold"
                  : "opacity-60"
              }`}
            >
              عميل غير متعاقد
            </button>
          </div>

          <div className="flex items-center space-x-2 w-[250px]">
            <img src="\Icons\filter.svg" className="w-6 h-6" alt="filter" />
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
          <table className="w-full border-separate border-spacing-y-6">
            <ClientsTH />
            <ClientsTBody
              handleOrdersModel={handleOrdersModel}
              clients={filteredClients}
              handleDelete={handleDelete}
              handleEdit={handleEditClick}
            />
          </table>
        </div>
      </section>
    </>
  );
};

export default ClientsContainer;

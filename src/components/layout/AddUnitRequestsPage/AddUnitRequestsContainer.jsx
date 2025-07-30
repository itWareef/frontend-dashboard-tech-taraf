import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";

import AddUnitRequestsTBody from "./AddUnitRequestsTBody";
import AddUnitRequestsTH from "./AddUnitRequestsTH";
import ModelAddUnitRequests from "./ModelAddUnitRequests";

const AddUnitRequestsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const handleAddUnit = () => {
    setIsOpen(true);
  };
  const [clients, setClients] = useState(
    Array(20)
      .fill()
      .map((_, i) => ({
        clientImage: superVisorImg,
        clientName: `عبدالرحمن علي ${i + 1}`,
        unitNumber: 30 + i,
        projectName: `وريف ${35 + i}`,
        neighborhood: "حي الفيروران",
        phone: `05500000${i.toString().padStart(2, "0")}`,
        email: `abdalahm${i}@gmail.com`,
        isContracted: i % 2 === 0 ? "تم التحقق" : "لم يتحقق",
      }))
  );
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
      isContracted: true,
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

  const contractedClients = clients.filter((c) => c.isContracted);

  return (
    <>
      <div className="px-4 relative z-50">
        {isOpen && (
          <ModelAddUnitRequests
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedClient={selectedClient}
            handleEdit={handleEdit}
          />
        )}

        <section className="bg-card px-8 py-6 rounded-[20px] my-3 space-y-4">
          <div className="max-h-[calc(100vh-250px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full border-separate border-spacing-y-6">
              <AddUnitRequestsTH />
              <AddUnitRequestsTBody
                clients={contractedClients}
                handleDelete={handleDelete}
                handleEdit={handleEditClick}
                handleAddUnit={handleAddUnit}
              />
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddUnitRequestsContainer;

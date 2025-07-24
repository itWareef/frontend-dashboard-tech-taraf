import { svgIcons } from "@/svgIcons";
import { useState } from "react";
import superVisorImg from "../../../assets/imgProfile.png";
import ClientsTBody from "./ClientsTBody";
import ClientsTH from "./ClientsTH";
import ModelAddClient from "./ModelAddClient";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
      isContracted: true, // افتراضيًا متعاقد
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
  const nonContractedClients = clients.filter((c) => !c.isContracted);

  return (
    <>
      <div className="px-4 relative z-50">
        {isOpen && (
          <ModelAddClient
            handleAdd={handleAdd}
            handleCloseModel={handleCloseModel}
            selectedClient={selectedClient}
            handleEdit={handleEdit}
          />
        )}

        <div className="bg-card h-[calc(100vh-165px)] relative p-3 rounded-2xl my-3">
          <div className="w-[80px] absolute bottom-0 left-0 -translate-x-1/2 translate-y-5 z-30 h-[80px] rounded-full bg-secondary flex items-center justify-center">
            <button onClick={() => setIsOpen(true)}>
              {svgIcons.addClient}
            </button>
          </div>

          <Tabs
            style={{ direction: "rtl" }}
            defaultValue="contracted"
            className={cn("w-full h-full")}
          >
            <TabsList className="bg-transparent pb-0 w-full flex justify-start  relative rounded-none border-b border-b-muted ">
              <div>
                <TabsTrigger
                  value="contracted"
                  className="
               
                relative  
                text-muted
                hover:text-foreground
                data-[state=active]:text-foreground
                data-[state=active]:border-b-2
                data-[state=active]:border-b-white
                data-[state=active]:rounded-none
                data-[state=active]:bg-transparent
                transition-colors
    "
                >
                  عميل متعاقد
                </TabsTrigger>
                <TabsTrigger
                  value="non-contracted"
                  className="
               

                relative  
                text-muted
                hover:text-foreground
                data-[state=active]:text-foreground
                data-[state=active]:border-b-2
                data-[state=active]:border-b-white
                data-[state=active]:rounded-none
                data-[state=active]:bg-transparent
                transition-colors
    "
                >
                  عميل غير متعاقد
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent
              style={{ direction: "rtl" }}
              value="contracted"
              className="h-full"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 overflow-y-auto rounded-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <table className="w-full border-separate border-spacing-y-6">
                    <ClientsTH />
                    <ClientsTBody
                      clients={contractedClients}
                      handleDelete={handleDelete}
                      handleEdit={handleEditClick}
                    />
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="non-contracted" className="h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 overflow-y-auto rounded-[6px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <table className="w-full border-separate border-spacing-y-6">
                    <ClientsTH />
                    <ClientsTBody
                      clients={nonContractedClients}
                      handleDelete={handleDelete}
                      handleEdit={handleEditClick}
                    />
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ClientsContainer;

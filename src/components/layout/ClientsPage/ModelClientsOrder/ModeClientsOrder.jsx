import React from "react";
import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import ClientsOrdersContainer from "./ClientsOrdersContainer";

const ModeClientsOrder = ({ client, handleCloseOrdersModel }) => {
  return (
    <>
      <section
        style={{ zIndex: 99999 }}
        className="min-h-screen bg-background  p-8 absolute left-0 right-0 bottom-0 top-0"
      >
        <HeaderPopup
          action={handleCloseOrdersModel}
          PageName={`طلبات عميل ${client.clientName}`}
        />
        <ClientsOrdersContainer client={client} />
      </section>
    </>
  );
};

export default ModeClientsOrder;

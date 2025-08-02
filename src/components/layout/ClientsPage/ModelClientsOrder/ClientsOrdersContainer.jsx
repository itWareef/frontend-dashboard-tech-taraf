import React from "react";
import ClientsOrderTH from "./ClientsOrderTH";
import ClientsOrderTBody from "./ClientsOrderTBody";

const ClientsOrdersContainer = () => {
  return (
    <section className="bg-card px-8 py-6 rounded-[20px] my-2">
      <div className="h-[calc(100vh-250px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full">
          <ClientsOrderTH />
          <ClientsOrderTBody />
        </table>
      </div>
    </section>
  );
};

export default ClientsOrdersContainer;

import { ArrowBigDown, Search, X } from "lucide-react";
import { useState } from "react";

const clients = [
  { id: 1, name: "أحمد علي" },
  { id: 2, name: "منى حسن" },
  { id: 3, name: "سعيد محمد" },
];

const ClientSelect = ({ formData, setFormData }) => {
  const [, setSelectedClient] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (client) => {
    setSelectedClient(client);
    setOpen(false);
    setFormData((prev) => ({ ...prev, recipientEntity: client.name }));
    console.log(formData);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedClient(null);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <h4 className="text-primary min-w-40 font- text-xl md:text-3xl mb-2">
          الجهة الموجهة :
        </h4>
        <button className="bg-secondary text-white px-4 py-2 w-32 rounded-[6px] shadow">
          عميل
        </button>
        <button className="bg-white  text-secondary px-4 py-2 w-32 rounded-[6px] shadow">
          مطور
        </button>
        <button className="bg-secondary  text-white px-4 py-2 rounded-[6px] shadow">
          +
        </button>
      </div>

      <div className="flex items-center gap-4 my-5">
        <h4 className="text-primary min-w-40 font- text-2xl mb-2">
          اختيار العميل :
        </h4>

        <div className="relative  text-primary">
          <div className="relative">
            <Search className="absolute right-2.5 top-1 -transform translate-y-1/2 h-5 w-5 text-secondary" />
            <input
              value={formData.recipientEntity}
              type="text"
              readOnly
              placeholder="اختر عميل"
              className={`w-full pl-2 pr-8   h-12 text-l  md:w-[350px] bg-white border border-muted ${
                open ? "rounded-t" : "rounded"
              } text-right`}
            />
            {!open ? (
              <ArrowBigDown
                onClick={() => setOpen(!open)}
                className="absolute left-2.5 top-1   -transform translate-y-1/2 h-5 w-5 text-secondary"
              />
            ) : (
              <X
                onClick={handleClose}
                className="absolute left-2.5 top-1   -transform translate-y-1/2 h-5 w-5 text-secondary"
              />
            )}
          </div>
          {open && (
            <div className="absolute z-10 w-full bg-white border border-muted rounded-b shadow">
              {clients.map((client, index) => (
                <button
                  key={client.id}
                  onClick={() => handleSelect(client)}
                  className={`px-4 block w-full py-2 cursor-pointer hover:bg-muted text-primary font-bold ${
                    index !== clients.length - 1 ? "border-b border-muted" : ""
                  }`}
                >
                  <span>
                    {client.id} - {client.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ClientSelect;

// #4A@2930516a$

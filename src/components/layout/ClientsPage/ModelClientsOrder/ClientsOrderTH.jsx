const orderTableHeaders = [
  { key: "orderNumber", label: "رقم الطلب" },
  { key: "clientName", label: "اسم العميل" },
  { key: "supervisorName", label: "اسم المشرف" },
  { key: "maintenanceItem", label: "بند الصيانة" },
  { key: "unitNumber", label: "رقم الوحدة" },
  { key: "time", label: "الوقت" },
  { key: "date", label: "التاريخ" },
  { key: "phone", label: "رقم الهاتف" },
  { key: "email", label: "البريد الاكتروني" },
  { key: "clientAttachments", label: "مرفقات العميل" },
  { key: "supervisorAttachments", label: "مرفقات المشرف" },
  { key: "invoices", label: "الفواتير" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const ClientsOrderTH = () => {
  return (
    <thead className="sticky top-0 z-10">
      <tr>
        {orderTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === orderTableHeaders.length - 1;
          const isBorder = index === 9 || index === 10 || index === 11;

          return (
            <th
              key={header.key}
              className={`${baseClasses} 
                ${isFirst ? "rounded-r-[6px]" : ""}
                ${isLast ? "rounded-l-[6px]" : ""}
                ${isBorder ? "border-r border-muted" : ""}
              `}
            >
              {header.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default ClientsOrderTH;

import TableTH from "@/components/shared/Table/TableTH";

const clientOrdesTableHeaders = [
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

const ClientsOrderTH = () => {
  return <TableTH headers={clientOrdesTableHeaders} />;
};

export default ClientsOrderTH;

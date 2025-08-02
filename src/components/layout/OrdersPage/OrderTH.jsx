import TableTH from "@/components/shared/Table/TableTH";

const ordertableHeader = [
  {
    key: "orderNumber",
    label: "رقم الطلب",
  },

  { key: "clientName", label: "اسم العميل" },
  { key: "maintenanceType", label: "بند الصيانة" },
  { key: "unitNumber", label: "رقم الوحدة" },
  { key: "project", label: "مشروع" },
  { key: "time", label: "الوقت المناسب" },
  { key: "date", label: "التاريخ" },
  { key: "phone", label: "رقم الهاتف" },
  { key: "email", label: "البريد الإلكتروني" },
  { key: "attachments", label: "مرفقات" },
];

const OrderTH = () => {
  return <TableTH headers={ordertableHeader}>اداره المهام</TableTH>;
};

export default OrderTH;

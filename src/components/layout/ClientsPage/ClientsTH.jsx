import TableTH from "@/components/shared/Table/TableTH";

const supervisorTableHeader = [
  { key: "clientImg", label: "صورة العميل" },
  { key: "clientName", label: "اسم العميل" },
  { key: "contracts", label: " عقود العميل" },
  { key: "unitNumber", label: "رقم الوحده" },
  { key: "project", label: "اسم المشروع" },
  { key: "neighborhood", label: "الحي" },
  { key: "phone", label: "رقم الهاتف" },
  { key: "email", label: "البريد الإلكتروني" },
  { key: "orders", label: "الطلبات" },
];
const ClientsTH = () => {
  return <TableTH headers={supervisorTableHeader}> العمليات </TableTH>;
};

export default ClientsTH;

import TableTH from "@/components/shared/Table/TableTH";

const supervisorTableHeader = [
  { key: "supervisorImg", label: "صورة المشرف" },
  { key: "supervisorName", label: "اسم المشرف" },
  { key: "maintenanceOps", label: "عمليات الصيانة" },
  { key: "phone", label: "رقم الهاتف" },
  { key: "email", label: "البريد الإلكتروني" },
  { key: "rating", label: "متوسط التقييم" },
  { key: "requests", label: "الطلبات" },
];
const SupervisorTH = () => {
  return <TableTH headers={supervisorTableHeader}> العمليات </TableTH>;
};

export default SupervisorTH;

import TableTH from "@/components/shared/Table/TableTH";

const developerTableHeaders = [
  { key: "developerLogo", label: " شعار المطور" },
  { key: "developerName", label: "اسم المطور" },
  { key: "projectsCount", label: "عدد المشاريع" },
  { key: "unitsCount", label: "عدد الوحدات" },
  { key: "taxNumber", label: "رقم الضريبة" },
  { key: "bankAccount", label: "الحساب البنكي" },
  { key: "email", label: "البريد الالكتروني" },
];

const DeveloperTH = () => {
  return <TableTH headers={developerTableHeaders}>العمليات </TableTH>;
};

export default DeveloperTH;

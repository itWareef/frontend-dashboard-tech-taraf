import TableTH from "@/components/shared/Table/TableTH";

const unitsTableHeaders = [
  { key: "developerName", label: "اسم المطور" },
  { key: "project", label: "مشروع" },
  { key: "villaNumber", label: "رقم الفيلا" },
  { key: "unitNumber", label: "رقم الوحدة" },
  { key: "area", label: "مساحة" },
  { key: "deedNumber", label: "رقم الصك" },
  { key: "deliveryDate", label: "تاريخ التسليم" },
  { key: "maintenanceStart", label: "بداية عقد الصيانة" },
  { key: "maintenanceEnd", label: "نهاية عقد الصيانة" },
  { key: "clientName", label: "اسم العميل" },
  { key: "clientNumber", label: "رقم العميل" },
];

const UnitsTH = () => {
  return <TableTH headers={unitsTableHeaders}>العمليات</TableTH>;
};

export default UnitsTH;

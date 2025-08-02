import TableTH from "@/components/shared/Table/TableTH";

const guaranteeTableHeaders = [
  { key: "#", label: "#" },
  { key: "guaranteeIcon", label: "ايقون الضمان" },
  { key: "guaranteeName", label: "اسم الضمان" },
  { key: "duration", label: "المدة" },
  { key: "supplier", label: "المورد" },
  { key: "projectsCount", label: "عدد المشاريع " },
];

const GuaranteesTH = () => {
  return <TableTH headers={guaranteeTableHeaders}>العمليات</TableTH>;
};

export default GuaranteesTH;

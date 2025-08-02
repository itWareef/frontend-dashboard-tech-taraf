import TableTH from "@/components/shared/Table/TableTH";

const projectsTableHeaders = [
  { key: "projectName", label: "اسم المشروع" },
  { key: "developerName", label: "اسم المطور" },
  { key: "neighborhood", label: "الحي" },
  { key: "unitsCount", label: "عدد الوحدات" },
  { key: "guarantees", label: "الضمانات " },
];

const ProjectsTH = () => {
  return <TableTH headers={projectsTableHeaders}>العمليات</TableTH>;
};

export default ProjectsTH;

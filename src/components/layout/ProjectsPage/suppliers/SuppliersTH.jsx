import TableTH from "@/components/shared/Table/TableTH";

const supplierTableHeaders = [
  { key: "supplierName", label: "اسم المورد" },
  { key: "supplierNumber", label: "رقم التواصل " },
  { key: "supplierEmail", label: "البريد الالكتروني" },
  { key: "supplierTaxNumber", label: "رقم السجل التجاري" },
];

const SuppliersTH = () => {
  return <TableTH headers={supplierTableHeaders}>العمليات</TableTH>;
};

export default SuppliersTH;

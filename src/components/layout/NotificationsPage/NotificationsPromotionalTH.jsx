import TableTH from "@/components/shared/Table/TableTH";

const notificationsPromotionalTableHeaders = [
  { key: "title", label: "العنوان" },
  { key: "content", label: "المحتوي" },
  { key: "targetAudience", label: "فئة الجمهور المستهدف" },
  { key: "targetTime", label: "الوقت المستهدف" },
  { key: "date", label: "التاريخ" },
];

const NotificationsPromotionalTH = () => {
  return (
    <TableTH headers={notificationsPromotionalTableHeaders}>العمليات</TableTH>
  );
};

export default NotificationsPromotionalTH;

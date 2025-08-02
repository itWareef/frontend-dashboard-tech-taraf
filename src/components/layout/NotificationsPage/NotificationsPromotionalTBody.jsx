import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const NotificationsPromotionalTBody = ({ notificationsPromotional }) => {
  return (
    <tbody>
      {notificationsPromotional.map((notificationPromotional, index) => (
        <tr key={index} className="group">
          <TableTd
            content={notificationPromotional.title}
            options={{ roundedR: true }}
          />
          <TableTd content={notificationPromotional.content} />
          <TableTd content={notificationPromotional.targetAudience} />
          <TableTd content={notificationPromotional.targetTime} />
          <TableTd content={notificationPromotional.date} />
          <TableTdActions>
            <button
              className="cursor-pointer  flex-1   transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              className="cursor-pointer  flex-1  transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="حذف"
            >
              {svgIcons.delete}
            </button>
          </TableTdActions>
        </tr>
      ))}
    </tbody>
  );
};

export default NotificationsPromotionalTBody;

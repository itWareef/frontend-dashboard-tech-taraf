import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const GuaranteesTBody = ({ guarantees }) => {
  return (
    <tbody>
      {guarantees.map((guarantee, index) => (
        <tr key={index} className="group">
          <TableTd content={guarantee.id} options={{ roundedR: true }} />

          <TableTd>
            <img
              src={guarantee.guaranteeIcon}
              className="w-12 h-12 mx-auto"
              alt=""
            />
          </TableTd>

          <TableTd content={guarantee.guaranteeName} />
          <TableTd content={guarantee.duration} />
          <TableTd content={guarantee.supplier} />
          <TableTd content={guarantee.projectsCount} />
          <TableTdActions>
            <button
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
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

export default GuaranteesTBody;

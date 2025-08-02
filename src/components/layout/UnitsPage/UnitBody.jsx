import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const UnitTBody = ({ units, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {units.map((unit, index) => (
        <tr key={index} className="group text-primary">
          <TableTd options={{ roundedR: true }} content={unit.developer} />
          <TableTd content={unit.project} />
          <TableTd content={unit.villaNumber} />
          <TableTd content={unit.unitNumber} />
          <TableTd content={unit.area} />
          <TableTd content={unit.deedNumber} />
          <TableTd content={unit.deliveryDate} />
          <TableTd content={unit.maintenanceStart} />
          <TableTd content={unit.maintenanceEnd} />
          <TableTd content={unit.clientName} />
          <TableTd content={unit.clientNumber} />
          <TableTdActions>
            <button
              onClick={() => handleEdit(unit)}
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              onClick={() => handleDelete(unit.id)}
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

export default UnitTBody;

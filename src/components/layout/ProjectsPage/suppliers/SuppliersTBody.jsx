import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const SuppliersTBody = ({ suppliers }) => {
  return (
    <tbody>
      {suppliers.map((supplier, index) => (
        <tr key={index} className="group">
          <TableTd
            content={supplier.supplierName}
            options={{ roundedR: true }}
          />
          <TableTd content={supplier.supplierNumber} />
          <TableTd content={supplier.supplierTaxNumber} />
          <TableTd content={supplier.supplierEmail} />
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

export default SuppliersTBody;

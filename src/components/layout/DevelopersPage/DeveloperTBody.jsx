import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const DeveloperTBody = ({ developers, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {developers.map((developer, index) => (
        <tr key={index} className="group">
          <TableTd options={{ roundedR: true }}>
            <img
              src={developer.developerLogo}
              alt={developer.developerName}
              className="w-12 h-12 rounded-full block mx-auto "
            />
          </TableTd>

          <TableTd content={developer.developerName} />
          <TableTd content={developer.projectsCount} />
          <TableTd content={developer.unitsCount} />
          <TableTd content={developer.taxNumber} />
          <TableTd content={developer.bankAccount} />
          <TableTd content={developer.email} />

          <TableTdActions>
            <button
              onClick={() => handleEdit(developer)}
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              onClick={() => handleDelete(developer.id)}
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

export default DeveloperTBody;

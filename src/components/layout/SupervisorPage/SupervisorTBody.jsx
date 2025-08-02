import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";
import { Link } from "react-router-dom";

const SupervisorTBody = ({ supervisors, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {supervisors.map((supervisor, index) => (
        <tr key={index} className="group">
          <TableTd options={{ roundedR: true }}>
            <img
              src={supervisor.supervisorImage}
              alt={supervisor.supervisorName}
              className="w-12 h-12 rounded-full mx-auto "
            />
          </TableTd>

          <TableTd content={supervisor.supervisorName} />
          <TableTd content={supervisor.maintenanceNum} />
          <TableTd content={supervisor.phone} />
          <TableTd content={supervisor.email} />
          <TableTd>
            <div className="flex items-center justify-center gap-4">
              {svgIcons.starFill}
              {svgIcons.starFill}
              {svgIcons.starFill}
              {svgIcons.starFill}
            </div>
          </TableTd>

          <TableTd>
            <div className="flex items-center justify-center h-full py-3">
              <Link to={`/supervisor-orders`}>{svgIcons.list}</Link>
            </div>
          </TableTd>

          <TableTdActions>
            <button
              onClick={() => handleEdit(supervisor)}
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              onClick={() => handleDelete(supervisor.id)}
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

export default SupervisorTBody;

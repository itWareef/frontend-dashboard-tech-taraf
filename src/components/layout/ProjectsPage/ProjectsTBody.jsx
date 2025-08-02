import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const ProjectsTBody = ({ projects, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {projects.map((project, index) => (
        <tr key={index} className="group">
          <TableTd content={project.projectName} options={{ roundedR: true }} />
          <TableTd content={project.developerName} />
          <TableTd content={project.neighborhood} />
          <TableTd content={project.unitNum} />
          <TableTd content={project.guarantees} />

          <TableTdActions>
            <button
              onClick={() => handleEdit(project)}
              className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
              aria-label="تعديل"
            >
              {svgIcons.update}
            </button>
            <button
              onClick={() => handleDelete(project.id)}
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

export default ProjectsTBody;

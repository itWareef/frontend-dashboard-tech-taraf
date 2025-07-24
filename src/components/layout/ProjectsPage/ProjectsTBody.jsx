import { svgIcons } from "@/svgIcons";

const ProjectsTBody = ({ projects, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {projects.map((project, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {project.projectName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {project.developerName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {project.neighborhood}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {project.unitNum}
          </td>

          <td className="w-[100px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(project)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="flex-1 cursor-pointer py-5 relative   flex justify-center items-center"
                aria-label="حذف"
              >
                <div className="absolute right-0 h-full w-[2px] bg-secondary" />
                {svgIcons.delete}
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProjectsTBody;

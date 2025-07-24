import { svgIcons } from "@/svgIcons";
import { Link } from "react-router-dom";

const SupervisorTBody = ({ supervisors, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {supervisors.map((supervisor, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3  bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={supervisor.supervisorImage}
              alt={supervisor.supervisorName}
              className="w-10 h-10 rounded-full "
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supervisor.supervisorName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supervisor.maintenanceNum}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supervisor.phone}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {supervisor.email}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <div className="flex items-center justify-center gap-4">
              {svgIcons.starFill}
              {svgIcons.starFill}
              {svgIcons.starFill}
              {svgIcons.starFill}
            </div>
          </td>

          <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <div className="flex items-center justify-center h-full py-3">
              <Link to={`/supervisor-orders`}>{svgIcons.list}</Link>
            </div>
          </td>

          <td className="w-[160px]">
            <div className="flex border-r-[1px] border-secondary rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(supervisor)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>
              <button
                onClick={() => handleDelete(supervisor.id)}
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

export default SupervisorTBody;

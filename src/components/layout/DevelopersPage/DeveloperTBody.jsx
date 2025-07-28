import { svgIcons } from "@/components/shared/svgIcons";

const DeveloperTBody = ({ developers, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {developers.map((developer, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3  bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={developer.developerLogo}
              alt={developer.developerName}
              className="w-12 h-12 rounded-full block mx-auto "
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.developerName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.projectsCount}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.unitsCount}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.taxNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.bankAccount}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {developer.email}
          </td>

          <td className=" py-0 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
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
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DeveloperTBody;

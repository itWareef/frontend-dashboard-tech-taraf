import { svgIcons } from "@/components/shared/svgIcons";

const GuaranteesTBody = ({ guarantees }) => {
  return (
    <tbody>
      {guarantees.map((guarantee, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {guarantee.id}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <img
              src={guarantee.guaranteeIcon}
              className="w-12 h-12 mx-auto"
              alt=""
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {guarantee.guaranteeName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {guarantee.duration}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {guarantee.supplier}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {guarantee.projectsCount}
          </td>

          <td className=" py-0 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
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
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default GuaranteesTBody;

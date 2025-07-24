import { svgIcons } from "@/svgIcons";

const ContractBody = ({
  contracts,
  handleEdit,
  handleDelete,
  handleAttachments,
}) => {
  return (
    <tbody>
      {contracts.map((contract, index) => (
        <tr key={index} className="group  text-primary">
          <td className="px-2  text-center   bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px]">
            {contract.clientName}
          </td>
          <td className="px-2  text-center  bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {contract.project}
          </td>
          <td className="px-2  text-center  bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {contract.unitNumber}
          </td>
          <td className="px-2  text-center  bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {contract.maintenanceStart}
          </td>
          <td className="px-2  text-center  bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 ">
            {contract.maintenanceEnd}
          </td>
          <td className="px-2  text-center  bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200  rounded-l-[6px]">
            {contract.amount}
          </td>

          {/* <td className="w-[160px]">
          </td> */}
          <td className=" h-[45px] flex gap-5 ps-5">
            <div className="w-[170px] bg-[#C8CCCC] flex justify-center items-center rounded-[6px] ">
              <button className="cursor-pointer" onClick={handleAttachments}>
                {svgIcons.attachmentIcon}
              </button>
            </div>
            <div className="flex flex-1  border-secondary rounded-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(contract)}
                className="flex-1 cursor-pointer py-5 transition-colors flex justify-center items-center "
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>

              <button
                onClick={() => handleDelete(contract.id)}
                className="flex-1 cursor-pointer py-5 relative flex justify-center items-center"
                aria-label="حذف"
              >
                {svgIcons.update}

                <div className="absolute right-0 h-full w-[2px] bg-secondary" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ContractBody;

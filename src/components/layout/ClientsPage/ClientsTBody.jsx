import { svgIcons } from "@/svgIcons";
import { Link } from "react-router-dom";

const ClientsTBody = ({
  clients,
  handleEdit,
  handleDelete,
  handleOrdersModel,
}) => {
  return (
    <tbody>
      {clients.map((client, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3  bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={client.clientImage}
              alt={client.clientName}
              className="w-12 h-12 rounded-full block mx-auto "
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.clientName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.clientContract}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.unitNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.projectName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.neighborhood}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.phone}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.email}
          </td>

          <td className="px-2 py-0 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <div className="flex items-center justify-center h-full py-3">
              <button onClick={() => handleOrdersModel(client)}>
                {svgIcons.list}
              </button>
            </div>
          </td>

          <td className=" py-0 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-l-[6px]">
            <div className="flex  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(client)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center  border-r-1 border-secondary"
                aria-label="تعديل"
              >
                {svgIcons.update}
              </button>
              <button
                onClick={() => handleDelete(client.id)}
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

export default ClientsTBody;

import { svgIcons } from "@/components/shared/svgIcons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chooseStatus = [
  {
    name: "لم يتحقق",
    value: "status-1",
  },
  {
    name: "تحت الاجراء",
    value: "status-2",
  },
  {
    name: "تحقق",
    value: "status-2",
  },
];

const AddUnitRequestsTBody = ({ clients }) => {
  return (
    <tbody>
      {clients.map((client, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3  bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={client.clientImage}
              alt={client.clientName}
              className="w-10 h-10 rounded-full "
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.clientName}
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
          <td className="px-5 py-3 w-[150px] text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <Select dir="rtl">
              <SelectTrigger
                iconClass={"text-primary  opacity-100"}
                className="w-full py-5 bg-secondary text-white border-0  font-bold"
              >
                <SelectValue placeholder={client.isContracted} />
              </SelectTrigger>
              <SelectContent>
                {chooseStatus.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </td>

          <td className="px-2 py-3 border-r-2 border-secondary  rounded-l-[6px] flex items-center justify-center text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            <span className="text-primary"> {svgIcons.addUnit}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddUnitRequestsTBody;

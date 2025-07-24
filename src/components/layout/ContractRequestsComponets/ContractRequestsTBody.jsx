import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContractRequestsTBody = ({ requests, chooseStatus }) => {
  return (
    <tbody>
      {requests.map((request, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap rounded-r-[6px] transition-colors duration-200">
            {request.clientName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.developer}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.projectName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.propertyAge}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.area}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.deedNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.unitNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.location}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.contractType}
          </td>

          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.contractType}
          </td>
          <td className="px-4 py-3 rounded-l-[6px] border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            <Select dir="rtl">
              <SelectTrigger
                iconClass={"text-muted opacity-100"}
                className="w-full py-5 bg-input  font-bold"
              >
                <SelectValue placeholder={request.requestStatus} />
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
        </tr>
      ))}
    </tbody>
  );
};

export default ContractRequestsTBody;

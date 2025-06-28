import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OrderTBody = ({ requests, chooseSupervisorOptions }) => {
  return (
    <tbody>
      {requests.map((request, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap rounded-r-[6px] transition-colors duration-200">
            {request.id}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.clientName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.requestType}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.unitNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.project}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.phone}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap rounded-l-[6px]  transition-colors duration-200">
            {request.email}
          </td>
          <td className="w-[160px] ps-4 me-auto">
            <Select dir="rtl">
              <SelectTrigger className="w-full py-5">
                <SelectValue placeholder="اختر مشرف" />
              </SelectTrigger>
              <SelectContent>
                {chooseSupervisorOptions.map((option) => (
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

export default OrderTBody;

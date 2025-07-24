import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrdersIcons } from "./OrdersIcons";

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
            {request.time}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.date}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.phone}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap transition-colors duration-200">
            {request.email}
          </td>
          <td className=" py-3 border-r border-r-muted text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-xl font-medium whitespace-nowrap rounded-l-[6px]  transition-colors duration-200">
            <div className="flex items-center justify-center gap-5">
              <div className="border-l border-l-muted px-2">
                {OrdersIcons.camera}
              </div>
              {OrdersIcons.doc}
            </div>
          </td>
          <td className=" w-[210px] ps-4 me-auto">
            <Select dir="rtl">
              <SelectTrigger
                iconClass={"text-muted opacity-100"}
                className="w-full py-5 bg-input  font-bold"
              >
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrdersIcons } from "./OrdersIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const OrderTBody = ({ requests, chooseSupervisorOptions }) => {
  return (
    <tbody>
      {requests.map((request, index) => (
        <tr key={index} className="group">
          <TableTd content={request.id} options={{ roundedR: true }} />
          <TableTd content={request.clientName} />
          <TableTd content={request.requestType} />
          <TableTd content={request.unitNumber} />
          <TableTd content={request.project} />
          <TableTd content={request.time} />
          <TableTd content={request.date} />
          <TableTd content={request.phone} />
          <TableTd content={request.email} />
          <TableTd options={{ roundedL: true }}>
            <div className="flex items-center justify-center gap-5">
              <div className="border-l border-l-muted px-2">
                {OrdersIcons.camera}
              </div>
              {OrdersIcons.doc}
            </div>
          </TableTd>

          <TableTdActions classes=" bg-transparent ps-2">
            <Select dir="rtl">
              <SelectTrigger
                iconClass={"text-muted opacity-100 "}
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
          </TableTdActions>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderTBody;

import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

const SuperOrderTBody = ({ requests }) => {
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

          <TableTdActions
            classes=" items-center gap-3 "
            options={{ roundedL: true }}
          >
            <div className="border-l border-l-muted px-2">
              {svgIcons.camera}
            </div>

            {svgIcons.doc}
          </TableTdActions>
        </tr>
      ))}
    </tbody>
  );
};

export default SuperOrderTBody;

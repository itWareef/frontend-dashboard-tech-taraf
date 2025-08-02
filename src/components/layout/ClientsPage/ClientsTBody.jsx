import { svgIcons } from "@/components/shared/svgIcons";
import TableTd, { TableTdActions } from "@/components/shared/Table/TableTd";

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
          <TableTd options={{ roundedR: true }}>
            <img
              src={client.clientImage}
              alt={client.clientName}
              className="w-12 h-12 rounded-full mx-auto "
            />
          </TableTd>

          <TableTd content={client.clientName} />
          <TableTd content={client.clientContract} />
          <TableTd content={client.unitNumber} />
          <TableTd content={client.projectName} />
          <TableTd content={client.neighborhood} />
          <TableTd content={client.phone} />
          <TableTd content={client.email} />

          <TableTd>
            <div className="flex items-center justify-center h-full py-3">
              <button onClick={() => handleOrdersModel(client)}>
                {svgIcons.list}
              </button>
            </div>
          </TableTd>

          <TableTdActions>
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
          </TableTdActions>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsTBody;

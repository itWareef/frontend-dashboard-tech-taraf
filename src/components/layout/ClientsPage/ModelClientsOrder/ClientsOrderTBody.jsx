import { svgIcons } from "@/components/shared/svgIcons";
import TableTd from "@/components/shared/Table/TableTd";

const mockOrders = [
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-001",
    clientName: "عبدالرحمن علي",
    supervisorName: "فهد الغامدي",
    maintenanceItem: "كهرباء",
    unitNumber: 30,
    time: "10:30 صباحًا",
    date: "2025-07-20",
    phone: "0550000000",
    email: "abdalahm234@gmail.com",
    clientAttachments: ["طلب.pdf", "صورة.jpeg"],
    supervisorAttachments: ["تقرير_المتابعة.pdf"],
    invoices: ["فاتورة1.pdf", "فاتورة2.pdf"],
  },
  {
    orderNumber: "ORD-002",
    clientName: "عبدالرحمن علي",
    supervisorName: "سلمان القحطاني",
    maintenanceItem: "سباكة",
    unitNumber: 12,
    time: "02:00 مساءً",
    date: "2025-07-18",
    phone: "0551122334",
    email: "sara.a@gmail.com",
    clientAttachments: [],
    supervisorAttachments: ["صورة_التصليح.jpg"],
    invoices: ["فاتورة_سباكة.pdf"],
  },
  {
    orderNumber: "ORD-003",
    clientName: "عبدالرحمن علي",
    supervisorName: "خالد الدوسري",
    maintenanceItem: "زراعة",
    unitNumber: 21,
    time: "04:45 مساءً",
    date: "2025-07-22",
    phone: "0556677889",
    email: "mohsamir91@gmail.com",
    clientAttachments: ["تفاصيل_الطلب.docx"],
    supervisorAttachments: [],
    invoices: [],
  },
  {
    orderNumber: "ORD-004",
    clientName: "عبدالرحمن علي",
    supervisorName: "خالد الدوسري",
    maintenanceItem: "زراعة",
    unitNumber: 21,
    time: "04:45 مساءً",
    date: "2025-07-22",
    phone: "0556677889",
    email: "mohsamir91@gmail.com",
    clientAttachments: ["تفاصيل_الطلب.docx"],
    supervisorAttachments: [],
    invoices: [],
  },
];

const ClientsOrderTBody = () => {
  return (
    <tbody>
      {mockOrders.map((order, index) => (
        <tr key={index} className="group">
          <TableTd content={order.orderNumber} options={{ roundedR: true }} />
          <TableTd content={order.clientName} />

          <TableTd content={order.supervisorName} />
          <TableTd content={order.maintenanceItem} />
          <TableTd content={order.unitNumber} />
          <TableTd content={order.time} />

          <TableTd content={order.date} />
          <TableTd content={order.phone} />
          <TableTd content={order.email} />
          <TableTd classes="border-r border-muted">
            <div className="flex items-center justify-center gap-4">
              <img src={svgIcons.iconFeatherCamera} alt="" />
              <img src={svgIcons.iconMaterialOutlineComment} alt="" />
            </div>
          </TableTd>
          <TableTd classes="border-r border-muted">
            <div className="flex items-center justify-center gap-4">
              <img src={svgIcons.iconFeatherCamera} alt="" />
              <img src={svgIcons.iconMaterialOutlineComment} alt="" />
            </div>
          </TableTd>
          <TableTd
            options={{ roundedL: true }}
            classes=" border-r border-muted"
          >
            <div className="flex items-center justify-center  gap-4">
              <img
                src={svgIcons.iconfileTrayFullOutline}
                className="mx-auto "
                alt=""
              />
            </div>
          </TableTd>

          {/* <td className={tdBaseClasses + " border-r border-muted"}>
            <div className="flex items-center justify-center gap-4">
              <img src={svgIcons.iconFeatherCamera} alt="" />
              <img src={svgIcons.iconMaterialOutlineComment} alt="" />
            </div>
          </td>
          <td
            className={`${tdBaseClasses} rounded-l-[6px]  border-r border-muted`}
          >
            <img
              src={svgIcons.iconfileTrayFullOutline}
              className="mx-auto "
              alt=""
            />
          </td> */}
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsOrderTBody;

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

const tdBaseClasses =
  "px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-base font-medium whitespace-nowrap transition-colors duration-200";

const ClientsOrderTBody = () => {
  return (
    <tbody>
      {mockOrders.map((order, index) => (
        <tr key={index} className="group">
          <td className={`${tdBaseClasses} rounded-r-[6px]`}>
            {order.orderNumber}
          </td>
          <td className={tdBaseClasses}>{order.clientName}</td>
          <td className={tdBaseClasses}>{order.supervisorName}</td>
          <td className={tdBaseClasses}>{order.maintenanceItem}</td>
          <td className={tdBaseClasses}>{order.unitNumber}</td>
          <td className={tdBaseClasses}>{order.time}</td>
          <td className={tdBaseClasses}>{order.date}</td>
          <td className={tdBaseClasses}>{order.phone}</td>
          <td className={tdBaseClasses}>{order.email}</td>
          <td className={tdBaseClasses + " border-r border-muted"}>
            <div className="flex items-center justify-center gap-4">
              <img src="/Icons/Icon feather-camera.svg" alt="" />
              <img src="/Icons/Icon material-outline-comment.svg" alt="" />
            </div>
          </td>
          <td className={tdBaseClasses + " border-r border-muted"}>
            <div className="flex items-center justify-center gap-4">
              <img src="/Icons/Icon feather-camera.svg" alt="" />
              <img src="/Icons/Icon material-outline-comment.svg" alt="" />
            </div>
          </td>
          <td
            className={`${tdBaseClasses} rounded-l-[6px]  border-r border-muted`}
          >
            <img
              src="/Icons/Icon ion-file-tray-full-outline.svg "
              className="mx-auto "
              alt=""
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsOrderTBody;

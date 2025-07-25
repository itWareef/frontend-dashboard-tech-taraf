import { svgIcons } from "@/svgIcons";
import React from "react";
const externalRequestsList = [
  {
    id: 1,
    orderNumber: "E 243",
    clientName: "عبدالرحمن علي",
    supervisorName: "أحمد حسن",
    location: "حي القيروان",
    phone: "0566677676",
    status: false,
  },
  {
    id: 2,
    orderNumber: "E 244",
    clientName: "فهد العتيبي",
    supervisorName: "سلمان السعيد",
    location: "اليرموك",
    phone: "0501234567",
    status: true,
  },
  {
    id: 3,
    orderNumber: "E 245",
    clientName: "نواف الجهني",
    supervisorName: "أحمد حسن",
    location: "النسيم",
    phone: "0542233445",
    status: false,
  },
  {
    id: 4,
    orderNumber: "E 246",
    clientName: "سعيد الغامدي",
    supervisorName: "عبدالله القحطاني",
    location: "الملز",
    phone: "0599988776",
    status: true,
  },
  {
    id: 5,
    orderNumber: "E 247",
    clientName: "محمد الشهراني",
    supervisorName: "أحمد حسن",
    location: "العقيق",
    phone: "0533344556",
    status: false,
  },
  {
    id: 6,
    orderNumber: "E 248",
    clientName: "خالد العمري",
    supervisorName: "سلمان السعيد",
    location: "النرجس",
    phone: "0588877665",
    status: true,
  },
  {
    id: 7,
    orderNumber: "E 249",
    clientName: "تركي العتيبي",
    supervisorName: "عبدالله القحطاني",
    location: "المروج",
    phone: "0505566778",
    status: false,
  },
  {
    id: 8,
    orderNumber: "E 250",
    clientName: "صالح الزهراني",
    supervisorName: "أحمد حسن",
    location: "الفيحاء",
    phone: "0560001122",
    status: true,
  },
  {
    id: 9,
    orderNumber: "E 251",
    clientName: "ياسر الدوسري",
    supervisorName: "سلمان السعيد",
    location: "الواحة",
    phone: "0511122233",
    status: false,
  },
  {
    id: 10,
    orderNumber: "E 252",
    clientName: "عبدالله المطيري",
    supervisorName: "أحمد حسن",
    location: "الشميسي",
    phone: "0577755443",
    status: true,
  },
  {
    id: 11,
    orderNumber: "E 253",
    clientName: "ماجد الحربي",
    supervisorName: "عبدالله القحطاني",
    location: "الازدهار",
    phone: "0521122334",
    status: false,
  },
  {
    id: 12,
    orderNumber: "E 254",
    clientName: "حسين القحطاني",
    supervisorName: "سلمان السعيد",
    location: "قرطبة",
    phone: "0591919191",
    status: true,
  },
  {
    id: 13,
    orderNumber: "E 255",
    clientName: "ناصر الشمري",
    supervisorName: "أحمد حسن",
    location: "الحمراء",
    phone: "0504040404",
    status: false,
  },
  {
    id: 14,
    orderNumber: "E 256",
    clientName: "بدر العجمي",
    supervisorName: "سلمان السعيد",
    location: "العريجاء",
    phone: "0562233445",
    status: true,
  },
  {
    id: 15,
    orderNumber: "E 257",
    clientName: "فواز العنزي",
    supervisorName: "عبدالله القحطاني",
    location: "النهضة",
    phone: "0581111222",
    status: false,
  },
  {
    id: 16,
    orderNumber: "E 258",
    clientName: "رائد السبيعي",
    supervisorName: "أحمد حسن",
    location: "الروابي",
    phone: "0573322110",
    status: true,
  },
  {
    id: 17,
    orderNumber: "E 259",
    clientName: "زياد التميمي",
    supervisorName: "سلمان السعيد",
    location: "النسيم الشرقي",
    phone: "0501111000",
    status: false,
  },
  {
    id: 18,
    orderNumber: "E 260",
    clientName: "سامي اليامي",
    supervisorName: "عبدالله القحطاني",
    location: "السليمانية",
    phone: "0557778899",
    status: true,
  },
  {
    id: 19,
    orderNumber: "E 261",
    clientName: "خالد الدوسري",
    supervisorName: "سلمان السعيد",
    location: "النخيل",
    phone: "0563333222",
    status: false,
  },
  {
    id: 20,
    orderNumber: "E 262",
    clientName: "عبدالعزيز الفوزان",
    supervisorName: "أحمد حسن",
    location: "الصحافة",
    phone: "0591122334",
    status: true,
  },
];

const ExternalRequestsItems = ({ type = "pending" }) => {
  const filteredList =
    type === "pending"
      ? externalRequestsList.filter((item) => !item.status)
      : externalRequestsList.filter((item) => item.status);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-3 border-muted  lg:grid-cols-4 xl:grid-cols-6 gap-8 p-5 rounded-[20px]">
      {filteredList.slice(0, 6).map((item) => (
        <div key={item.id} className="bg-background rounded-[6px] text-center">
          <div className="bg-secondary p-2 rounded-t-[6px]">
            <h6 className="text-base font-bold text-white">
              رقم الطلب {item.orderNumber}
            </h6>
          </div>

          <div className="p-2 space-y-3 font-bold text-right">
            <div className="flex items-center gap-2 shadow-md p-2 rounded-[6px]">
              <img src={svgIcons.userGroups} alt="" />
              <span>عميل:</span>
              <p className="text-secondary font-bold text-base">
                {item.clientName}
              </p>
            </div>
            <div className="flex items-center gap-2 shadow-md p-2 rounded-[6px]">
              <img src={svgIcons.userGroups2} alt="" />
              <span>مشرف:</span>
              <p className="text-secondary font-bold text-base">
                {item.supervisorName}
              </p>
            </div>
            <div className="flex items-center gap-2 shadow-md p-2 rounded-[6px]">
              <img src={svgIcons.locationIcon} alt="" />
              <span>موقع:</span>
              <p className="text-secondary font-bold text-base">
                {item.location}
              </p>
            </div>
            <div className="flex items-center gap-2 shadow-md p-2 rounded-[6px]">
              <img src={svgIcons.phone} alt="" />
              <span>هاتف:</span>
              <p className="text-secondary font-bold text-base">{item.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExternalRequestsItems;

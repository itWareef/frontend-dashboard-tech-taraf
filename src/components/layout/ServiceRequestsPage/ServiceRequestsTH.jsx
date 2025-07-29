const serviceRequestsTableHeaders = [
  { key: "clientName", label: "اسم العميل" },
  { key: "phoneNumber", label: "رقم الهاتف" },
  { key: "email", label: "البريد الاكتروني" },
  { key: "contractStatus", label: "حالة تعاقد العميل" },
  { key: "area", label: "المساحة" },
  { key: "totalArea", label: "الموقع الجغرافي" },
  { key: "requestType", label: "نوع الطلب" },
  { key: "requestContent", label: "محتوى الطلب" },
  { key: "attachments", label: "مرفقات الطلب" },
  { key: "actions", label: "الإجراء" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const ServiceRequestsTH = () => {
  return (
    <thead className="sticky top-0  z-10 bg-card ">
      <tr>
        {serviceRequestsTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === serviceRequestsTableHeaders.length - 1;

          return (
            <th
              key={header.key}
              className={`${baseClasses} 
                ${isFirst ? "rounded-r-[6px]" : ""}
                ${isLast ? "rounded-l-[6px]" : ""}
              `}
            >
              {header.label}
            </th>
          );
        })}

        <th className="px-4 py-3 ms-2 flex items-center justify-center h-auto  text-center text-white font-normal text-xl bg-secondary rounded-[6px]">
          حاله الطلب
        </th>
      </tr>
    </thead>
  );
};

export default ServiceRequestsTH;

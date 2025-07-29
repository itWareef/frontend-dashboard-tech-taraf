const contractRequestTableHeaders = [
  { key: "requestNumber", label: "رقم الطلب" },
  { key: "clientName", label: "اسم العميل" },
  { key: "deedNumber", label: "رقم الصك" },
  { key: "developerName", label: "اسم المطور" },
  { key: "projectName", label: "اسم المشروع" },
  { key: "unitType", label: "نوع الوحدة" },
  { key: "propertyAge", label: "عمر العقار" },
  { key: "area", label: "المساحة" },
  { key: "location", label: "الموقع الجغرافي" },
  { key: "paymentStatus", label: "حالة الدفع" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const ContractRequestsServiceTH = () => {
  return (
    <thead className="sticky top-0  z-10 bg-card ">
      <tr>
        {contractRequestTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === contractRequestTableHeaders.length - 1;

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

export default ContractRequestsServiceTH;

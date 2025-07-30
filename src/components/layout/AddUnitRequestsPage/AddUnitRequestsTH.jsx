const addUnitRequestsTableHeaders = [
  { key: "userImage", label: "صورة العميل" },
  { key: "userName", label: "اسم العميل" },
  { key: "userNumber", label: "رقم الوحده" },
  { key: "userProject", label: "اسم المشروع" },
  { key: "userArea", label: "الحي" },
  { key: "userPhone", label: "رقم الهاتف" },
  { key: "userEmail", label: "البريد الالكتروني" },
  { key: "orderStatus", label: "الحالة" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const AddUnitRequestsTH = () => {
  return (
    <thead className="sticky top-0 z-10 bg-card">
      <tr>
        {addUnitRequestsTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === addUnitRequestsTableHeaders.length - 1;

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
          العمليات
        </th>
      </tr>
    </thead>
  );
};

export default AddUnitRequestsTH;

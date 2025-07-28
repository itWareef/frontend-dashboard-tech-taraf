const developerTableHeaders = [
  { key: "developerLogo", label: " شعار المطور" },
  { key: "developerName", label: "اسم المطور" },
  { key: "projectsCount", label: "عدد المشاريع" },
  { key: "unitsCount", label: "عدد الوحدات" },
  { key: "taxNumber", label: "رقم الضريبة" },
  { key: "bankAccount", label: "الحساب البنكي" },
  { key: "email", label: "البريد الالكتروني" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const DeveloperTH = () => {
  return (
    <thead className="sticky top-0 z-10">
      <tr>
        {developerTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === developerTableHeaders.length - 1;

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

export default DeveloperTH;

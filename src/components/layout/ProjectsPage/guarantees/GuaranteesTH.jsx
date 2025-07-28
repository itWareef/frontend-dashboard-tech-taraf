const guaranteeTableHeaders = [
  { key: "#", label: "#" },
  { key: "guaranteeIcon", label: "ايقون الضمان" },
  { key: "guaranteeName", label: "اسم الضمان" },
  { key: "duration", label: "المدة" },
  { key: "supplier", label: "المورد" },
  { key: "projectsCount", label: "عدد المشاريع " },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const GuaranteesTH = () => {
  return (
    <thead className="sticky top-0  z-10 bg-card ">
      <tr>
        {guaranteeTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === guaranteeTableHeaders.length - 1;

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

export default GuaranteesTH;

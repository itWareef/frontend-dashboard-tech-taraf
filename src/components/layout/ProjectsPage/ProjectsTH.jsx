const developerTableHeaders = [
  { key: "projectName", label: "اسم المشروع" },
  { key: "developerName", label: "اسم المطور" },
  { key: "neighborhood", label: "الحي" },
  { key: "unitsCount", label: "عدد الوحدات" },
  { key: "guarantees", label: "الضمانات " },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const ProjectsTH = () => {
  return (
    <thead className="sticky top-0  z-10 bg-card ">
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

export default ProjectsTH;

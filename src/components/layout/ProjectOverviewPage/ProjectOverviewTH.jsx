const ProjectOverviewTableHeaders = [
  { key: "projectName", label: " اسم المشروع" },
  { key: "projectDescription", label: "وصف المشروع" },
  { key: "developerName", label: "المطور" },
  { key: "minPrice", label: "السعر الأدني " },
  { key: "maxPrice", label: "السعر الأعلي" },
  { key: "minArea", label: " مساحه الأقل" },
  { key: "unitsCount", label: "  عدد الوحدات" },
  { key: "salePercentage", label: "   نسبة البيع" },
  { key: "videoUrl", label: "   فيديو المشروع" },
  { key: "projectImage", label: "    صورة المشروع" },
];

const baseClasses =
  "px-4 text-center text-white font-normal text-xl bg-secondary h-[45px]";

const ProjectOverviewTH = () => {
  return (
    <thead className="sticky top-0 z-10 bg-card">
      <tr>
        {ProjectOverviewTableHeaders.map((header, index) => {
          const isFirst = index === 0;
          const isLast = index === ProjectOverviewTableHeaders.length - 1;

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

export default ProjectOverviewTH;

const summaryStatsItems = [
  { title: "إجمالي عدد الزيارات", value: 534 },
  { title: "عدد زيارات (تسليم)", value: 269 },
  { title: "عدد زيارات (عميل)", value: 265 },
  { title: "متوسط تقييم الخدمة", value: 4.5 },
  { title: "عدد التقييمات", value: 220 },
];

const SummaryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
      {summaryStatsItems.map((item, index) => (
        <div
          key={index}
          className="space-y-3 bg-muted/10 p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:bg-muted/20 hover:scale-105 cursor-pointer"
        >
          <p className="text-2xl lg:text-4xl font-bold ">{item.value}</p>
          <h3 className="text-muted text-base md:text-lg">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SummaryStats;

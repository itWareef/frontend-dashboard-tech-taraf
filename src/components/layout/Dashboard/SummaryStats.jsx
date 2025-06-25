const items = [
  {
    title: "اجمالي عدد الزيارات",
    value: 534,
  },
  {
    title: "(تسليم) عدد الزيارات",
    value: 269,
  },
  {
    title: "(عميل) عدد الزيارات",
    value: 265,
  },
  {
    title: "متوسط تقييم الخدمه",
    value: 4.5,
  },
  {
    title: "عدد التقيمات",
    value: 220,
  },
];

const SummaryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <div key={index} className="text-center space-y-5 ">
          <p className="lg:text-3xl ">{item.value}</p>
          <h3 className="  text-muted ">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SummaryStats;

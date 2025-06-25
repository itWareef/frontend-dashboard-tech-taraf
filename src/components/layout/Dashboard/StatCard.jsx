const StatCard = ({ title, subtitle }) => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex items-center w-fit bg-popover ">
        <div className="  px-4 py-2 text-sm h-8 flex items-center justify-center rounded-l whitespace-nowrap">
          {title}
        </div>
        <div className="bg-secondary relative -translate-x-[4px]  px-1 py-2 text-sm h-8 flex items-center justify-center w-2 skew-x-[14deg]"></div>
        <div className=" bg-chart-1 text-primary px-4 py-2 text-sm h-8 flex items-center justify-center  whitespace-nowrap">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default StatCard;

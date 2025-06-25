const StatCard = ({ title, subtitle }) => {
  return (
    <div class="max-w-md mx-auto mt-10">
      <div class="flex items-center w-fit bg-popover ">
        <div class="  px-4 py-2 text-sm h-8 flex items-center justify-center rounded-l whitespace-nowrap">
          {title}
        </div>
        <div class="bg-secondary relative -translate-x-[4px]  px-1 py-2 text-sm h-8 flex items-center justify-center w-2 skew-x-[14deg]"></div>
        <div class=" bg-chart-1 text-primary px-4 py-2 text-sm h-8 flex items-center justify-center  whitespace-nowrap">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default StatCard;

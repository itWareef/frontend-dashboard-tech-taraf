import ChartPanel from "./ChartsPanel";
import SummaryStats from "./SummaryStats";

const ReportsAnalytics = () => {
  return (
    <div
      className="
      bg-card rounded-lg p-4 md:p-6 shadow-md
      h-[440px] overflow-y-auto
      [-ms-overflow-style:none] [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
    >
      <SummaryStats />
      <ChartPanel />
    </div>
  );
};

export default ReportsAnalytics;

import ChartPanel from "./ChartsPanel";
import SummaryStats from "./SummaryStats";

const ReportsAnalytics = () => {
  return (
    <div
      className="bg-card rounded-lg p-4 md:p-6 shadow-md max-h-[430px] overflow-y-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

      <SummaryStats />
      <ChartPanel />
    </div>
  );
};

export default ReportsAnalytics;

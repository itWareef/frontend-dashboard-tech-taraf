import ChartPanel from "./ChartsPanel";
import SummaryStats from "./SummaryStats";

const ReportsAnalytics = () => {
  return (
    // <div
    //   className="overflow-y-auto rounded-[20px] p-4 md:px-10 py-6 shadow-md bg-card overflow-hidden"
    //   style={{
    //     maxHeight: "calc(100dvh - 500px)",
    //     scrollbarWidth: "none",
    //     msOverflowStyle: "none",
    //   }}
    // >
    <div className="col-span-10 row-span-3 row-start-3 bg-card rounded-[20px] p-5 overflow-x-hidden">
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

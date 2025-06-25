import { chartConfigs } from "@/mock-data/chartData";
import ChartCard from "./ChartCard";

const ChartsPanel = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chartConfigs.map((chart, index) => (
          <>
            <ChartCard
              key={index}
              title={chart.title}
              subtitle={chart.subtitle}
              data={chart.data}
              maxValue={chart.maxValue}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default ChartsPanel;

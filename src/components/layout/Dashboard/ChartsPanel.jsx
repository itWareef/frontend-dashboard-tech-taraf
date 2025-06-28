import { chartConfigs } from "@/mock-data/chartData";
import ChartCard from "./ChartCard";

const ChartsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {chartConfigs.map(({ title, subtitle, data, maxValue }, index) => (
        <ChartCard
          key={index}
          title={title}
          subtitle={subtitle}
          data={data}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default ChartsPanel;

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import StatCard from "./StatCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartCard = ({ title, subtitle, data, maxValue }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        borderColor: data.borderColors,
        borderWidth: 2,
        borderRadius: 0,
        borderSkipped: false,
        hoverBackgroundColor: data.colors.map((color) => color + "CC"),
        hoverBorderColor: data.borderColors,
        hoverBorderWidth: 3,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {},
      datalabels: {
        anchor: "end",
        align: "top",
        offset: 5,
        color: "#aaaa",
        font: {
          size: 10,
          weight: "bold",
        },
        textAlign: "center",
        clip: false,
        // formatter: (value) => value,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 11,
            weight: "500",
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        max: maxValue,
        grid: {
          color: "rgba(156, 163, 175, 0.3)",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
          },
          stepSize: 100,
          // stepSize: maxValue ? Math.ceil(maxValue / 5) : undefined,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="rounded-2xl p-4 flex flex-col gap-4  transition-all duration-300  hover:-translate-y-1">
      <StatCard title={title} subtitle={subtitle} />

      <div className="relative h-[220px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;

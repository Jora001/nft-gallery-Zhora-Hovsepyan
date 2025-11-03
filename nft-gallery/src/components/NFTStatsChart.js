import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const NFTStatsChart = ({ nfts }) => {
  if (!nfts || nfts.length === 0) return null;

  const data = {
    labels: nfts.map(nft => nft.name || "Unnamed"),
    datasets: [
      {
        label: "NFT Stats",
        data: nfts.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#f5f5f5"
        }
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        ticks: { color: "#f5f5f5" },
        grid: { color: "rgba(255,255,255,0.1)" }
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#f5f5f5" },
        grid: { color: "rgba(255,255,255,0.1)" }
      }
    }
  };

  return (
    <div style={{ width: "90%", maxWidth: "800px", height: "400px", margin: "30px auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default NFTStatsChart;

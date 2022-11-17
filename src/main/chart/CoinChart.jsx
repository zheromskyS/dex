import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const CoinChart = ({ chartData }) => {
  return (
    <Line
      data={{
        labels: chartData.map(({ date }, i) => i + 1),
        datasets: [
          {
            label: "Cryptocurrency prices",
            data: chartData.map(({ priceUsd }) => priceUsd),
            borderColor: "#1976d2",
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
            position: "bottom",
          },
        },
      }}
    />
  );
};

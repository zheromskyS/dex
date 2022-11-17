import React from "react";
import "./RateChange.scss";

export const RateChange = ({ timeRange, chartData }) => {
  const timeStr =
    timeRange === 1
      ? "day"
      : timeRange === 7
      ? "week"
      : timeRange === 30
      ? "month"
      : "";
  const dif =
    chartData[chartData.length - 1]?.priceUsd - chartData[0]?.priceUsd;

  return (
    <>
      <div className="change">
        <div className="change-rate">
          {dif > 0 ? "+" : ""}
          {dif.toFixed(6)} USD
        </div>

        <div className="change-time">Past {timeStr}</div>
      </div>
    </>
  );
};

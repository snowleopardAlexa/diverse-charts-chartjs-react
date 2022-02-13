import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return (
  <>
    <h3>Line Chart</h3>
    <Line data={chartData} />
  </>  
  )
}

export default LineChart;
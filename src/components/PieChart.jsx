import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([
    {
      id: 1,
      dunno: 25,
      imBoring: 25,
      money: 25,
      fun: 100,
    },
    {
      id: 2,
      dunno: 13,
      imBoring: 35,
      money: 80,
      fun: 10,
    },
    {
      id: 3,
      dunno: 2,
      imBoring: 44,
      money: 100,
      fun: 57,
    },
    {
      id: 4,
      dunno: 50,
      imBoring: 44,
      money: 100,
      fun: 57,
    },
  ]);

  const data = {
    labels: ["dunno", "I'm boring", "Money", "Fun"],
    datasets: [
      {
        label: "Employee Chart",
        data: pieChartData.map((item) => item.dunno),
        backgroundColor: ["#D8CAFC", "#9E7DF9", "#263238", "#DCDEDF"],
      },
    ],
  };

  const plugins = {
    legend: {
      display: true,
    },
  };
  const options = {};
  // ChartJS.overrides[type].plugins.legend = false;

  return (
    <div className="max-h-80" style={{ maxWidth: "320px" }}>
      <Pie data={data} plugins={plugins} />
    </div>
  );
};

export default PieChart;

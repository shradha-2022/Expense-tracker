// components/IncomeExpensesChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeExpensesChart = ({ income, expense }) => {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3 className="text-center mb-2 font-semibold">Income vs Expense</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default IncomeExpensesChart;

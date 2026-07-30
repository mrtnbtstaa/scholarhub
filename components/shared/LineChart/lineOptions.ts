import { ChartOptions } from "chart.js";

export const defaultOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    // tooltip: {
    //   enabled: true,
    // },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      display: false
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

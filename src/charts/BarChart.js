import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ data, selectedState }) => {
  const plotData = { ...data };
  delete plotData.loc;

  if (!data) {
    return null;
  }

  const xLabels = ["C.C Indian", "C.C Foreign", "Discharged", "Deaths", "T.C"];
  // Full labels for legends
  const fullLabels = [
    "Confirmed Cases Indian",
    "Confirmed Cases Foreign",
    "Discharged",
    "Deaths",
    "Total Confirmed",
  ];

  const values = Object.values(plotData);

  const chartData = xLabels.map((label, index) => ({
    x: [label],
    y: [values[index]],
    type: "bar",
    name: fullLabels[index],
  }));

  const layout = {
    barcornerradius: 15,
    title: {
      text: `Cases at ${selectedState}`,
    },
    xaxis: {
      title: {
        text: "Cases",
      },
      tickangle: -45,
      automargin: true,
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
    bargap: 0.2,
    showlegend: true,
    legend: {
      orientation: "h",
      y: -0.5,
    },
    margin: {
      b: 180,
    },
  };

  return (
    <Plot
      data={chartData}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default BarChart;

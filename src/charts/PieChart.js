import React from "react";
import Plot from "react-plotly.js";

const PieChart = ({ data, selectedState }) => {
  const plotData = { ...data };
  delete plotData.loc;

  if (!data) {
    return null;
  }

  var chartData = [
    {
      type: "pie",
      values: Object.values(plotData),
      labels: Object.keys(plotData),
      textinfo: "label+percent",
      insidetextorientation: "radial",
    },
  ];

  const layout = {
    title: {
      text: `Cases at ${selectedState}`,
    },
    legend: {
      x: 0,
      y: 0,
      orientation: "h",
    },
  };

  const config = {
    responsive: true,
  };

  return (
    <Plot
      data={chartData}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
      config={config}
    />
  );
};

export default PieChart;

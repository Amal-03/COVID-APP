import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ data, selectedState }) => {
  const plotData = { ...data };
  delete plotData.loc;

  if (!data) {
    return null;
  }

  var chartData = [
    {
      x: Object.keys(plotData),
      y: Object.values(plotData),
      type: "bar",
    },
  ];

  const layout = {
    title: {
      text: `Cases at ${selectedState}`,
    },
    barcornerradius: 15,
    xaxis: {
      title: {
        text: "Cases",
      },
      showticklabels: false,
    },

    yaxis: {
      title: {
        text: "Count",
      },
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

export default BarChart;

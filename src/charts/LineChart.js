import React from "react";
import Plot from "react-plotly.js";

const LineChart = ({ data }) => {
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
  };

  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: "lines",
  };

  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
  };

  var data = [trace1, trace2, trace3];

  var layout = {
    title: { text: "Line and Scatter Plot" },
  };

  const config = {
    responsive: true,
  };

  return (
    <div>
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
        config={config}
      />
    </div>
  );
};

export default LineChart;

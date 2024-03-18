import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

function Stats(props) {
  const stats = props.stats.map((value) => {
    return value.base_stat;
  });
  const CanvasJS = CanvasJSReact.CanvasJS;
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    title: {
      text: "Stats",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "HP", y: stats[0] || 0 },
          { label: "Attack", y: stats[1] || 0 },
          { label: "Defence", y: stats[2] || 0 },
          { label: "Special Attack", y: stats[3] || 0 },
          { label: "Special Defense", y: stats[4] || 0 },
          { label: "Speed", y: stats[5] || 0 },
        ],
      },
    ],
  };
  return (
    <div style={{}}>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Stats;

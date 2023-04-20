import React from "react";
import { Chart } from "react-google-charts";

const responseArr = [
  [
    "Name",
    "Percentage",
    { role: "annotation" },
    { role: "link" },
    { role: "style" },
  ],
  ["Google", 55, "55%", "https://www.google.com", "brightblue"],
  ["Facebook", 40, "40%", "https://www.facebook.com", "brightblue"],
  ["Amazon", 25, "25%", "https://www.amazon.com", "brightblue"],
  ["Microsoft", 30, "30%", "https://www.microsoft.com", "brightblue"],
];

export default function Charts() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={responseArr}
    />
  );
}

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "EA Games",
    uv: 4000,
    "кількість працівників": 2400,
    amt: 2400,
  },
  {
    name: "Activision",
    uv: 3000,
    "кількість працівників": 1398,
    amt: 2210,
  },
  {
    name: "Rockstar",
    uv: 2000,
    "кількість працівників": 9800,
    amt: 2290,
  },
  {
    name: "GSC Gameworld",
    uv: 2780,
    "кількість працівників": 9008,
    amt: 2000,
  },
  {
    name: "Ubisoft",
    uv: 1890,
    "кількість працівників": 4800,
    amt: 2181,
  },
  {
    name: "Naughty Dog",
    uv: 3490,
    "кількість працівників": 4300,
    amt: 2100,
  },
];

export default function BarInfo() {
  return (
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        dataKey="кількість працівників"
        fill="#8884d8"
        background={{ fill: "#eee" }}
      />
    </BarChart>
  );
}

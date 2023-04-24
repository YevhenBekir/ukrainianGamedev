import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { allCompaniesFetch } from "../infoSlice";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BarInfo() {
  const dispatch = useDispatch();
  const { allCityCompanies } = useSelector((state) => state.infographic);

  useEffect(() => {
    dispatch(allCompaniesFetch());
  }, []);

  const getBarInfographic = (allComp) => {
    if (!allComp) {
      return;
    }
    const data = allComp.map((item) => {
      return {
        name: item.name,
        "кількість працівників": item.employees,
      };
    });
    return data;
  };

  const data = getBarInfographic(allCityCompanies);

  return (
    <BarChart
      width={1100}
      height={400}
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

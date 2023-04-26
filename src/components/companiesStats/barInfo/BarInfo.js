import React from "react";
import { useState, useEffect } from "react";
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
  const [widthSize, setWidthSize] = useState(0);
  const dispatch = useDispatch();
  const { allCityCompanies } = useSelector((state) => state.infographic);

  useEffect(() => {
    dispatch(allCompaniesFetch());
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
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

  const sizeCondition = () => {
    if (widthSize >= 1200) return 1100;
    else if (widthSize >= 1100) return 1000;
    else if (widthSize >= 1000) return 900;
    else if (widthSize >= 900) return 800;
    else if (widthSize >= 800) return 700;
    else if (widthSize >= 700) return 600;
    else if (widthSize >= 600) return 500;
    else if (widthSize >= 500) return 400;
    else if (widthSize >= 400) return 300;
    else if (widthSize < 400) return 200;
  };

  return (
    <BarChart
      width={sizeCondition()}
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

import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Sector } from "recharts";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} п.`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      ></text>
    </g>
  );
};

export default function Infog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [widthSize, setWidthSize] = useState(0);
  const { cityCompanies, activeCompany } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countEmployees = (cityCompanies) => {
    const totalCount = cityCompanies.map((item) => item.employees);
    return [
      {
        name: `Решта`,
        value:
          totalCount.length > 0
            ? totalCount.reduce((acc, curr) => acc + curr) -
              activeCompany.employees
            : null,
      },
    ];
  };
  const totalEmp = countEmployees(cityCompanies);

  const data = [
    {
      name: activeCompany.shortname,
      value: activeCompany.employees,
    },
    ...totalEmp,
  ];

  const sizeCondition = () => {
    if (widthSize >= 1300) return 400;
    else if (widthSize >= 1200) return 350;
    else if (widthSize >= 1100) return 300;
    else if (widthSize >= 1000) return 250;
    else if (widthSize >= 900) return 200;
    else if (widthSize >= 800) return 150;
    else if (widthSize >= 700) return 100;
    else if (widthSize >= 600) return 50;
    else if (widthSize >= 400) return 50;
  };

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={sizeCondition()} height={sizeCondition()}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}

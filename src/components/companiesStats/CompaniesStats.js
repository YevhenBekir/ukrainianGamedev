import "./companiesStats.scss";

import BarInfo from "./barInfo/BarInfo";

const CompaniesStats = (props) => {
  return (
    <div className="stats">
      <div className="stats-left_title">
        <span>Р</span>
        <span>Е</span>
        <span>Й</span>
        <span>Т</span>
        <span>И</span>
        <span>Н</span>
        <span>Г</span>
      </div>
      {/* <div className="stats-stats"> */}
      <BarInfo />
      {/* </div>  */}
      <div className="stats-right_title">
        <span>К</span>
        <span>О</span>
        <span>М</span>
        <span>П</span>
        <span>А</span>
        <span>Н</span>
        <span>І</span>
        <span>Й</span>
      </div>
    </div>
  );
};

export default CompaniesStats;

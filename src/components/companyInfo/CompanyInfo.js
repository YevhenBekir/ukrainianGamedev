import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import Spinner from "../spinner/Spinner";
import SimpleSlider from "./slider/Slider";

import "./companyInfo.scss";

const CompanyInfo = (props) => {
  const { activeCompany, companiesLoadingStatus } = useSelector(
    (state) => state.companies
  );
  const { id, name, description, link, employees, projects } = activeCompany;

  const renderProjects = (activeCompanyProjects) => {
    if (!activeCompanyProjects) {
      return;
    }
    const projects = activeCompanyProjects.map((item) => {
      return (
        <li className="company-info-projects-item" key={nanoid()}>
          {item}
        </li>
      );
    });
    return <ul className="company-info-projects">{projects}</ul>;
  };

  const visionRender = () => {
    if (companiesLoadingStatus === "loading") {
      return <Spinner />;
    } else if (companiesLoadingStatus === "idle") {
      return <SimpleSlider />;
    } else {
      return <h5>Oops, something went wrong 0_o</h5>;
    }
  };

  const companyProjects = renderProjects(projects);
  return (
    <>
      <div className="company">
        {visionRender()}
        <div className="company-info">
          <div className="company-info-initials">
            <div className="company-info-initials-name">{name}</div>
            <div className="company-info-initials-desc">{description}</div>
          </div>

          {companyProjects}
        </div>
        <div className="company-details">
          <a href={link} target="_blank" className="company-details-link">
            {link}
          </a>
          <div className="company-details-employees">
            {employees ? "Кількість працівників:" : null}
            <span className="company-details-employees-total">{employees}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;

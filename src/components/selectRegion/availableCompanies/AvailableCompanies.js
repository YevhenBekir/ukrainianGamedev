import { useSelector, useDispatch } from "react-redux";

import { setActiveCompany } from "../regionSlice";

import "./availableCompanies.scss";

const AvailableCompanies = ({ cityCompanies }) => {
  const dispatch = useDispatch();
  const { activeCompany } = useSelector((state) => state.companies);

  const renderCompanies = (arr) => {
    return arr.map((item) => {
      const clazz = "companies-list-item";
      const active = "_active";
      return (
        <li
          key={item.id}
          className={item.name === activeCompany ? `${clazz}${active}` : clazz}
          style={{ marginLeft: cityCompanies.length > 10 ? "25px" : null }}
          onClick={() => dispatch(setActiveCompany(item.name))}
        >
          {item.name}
        </li>
      );
    });
  };

  const companiesList = renderCompanies(cityCompanies);
  return (
    <ul
      className="companies-list"
      style={{ flexWrap: cityCompanies.length > 7 ? "wrap" : null }}
    >
      {companiesList}
    </ul>
  );
};

export default AvailableCompanies;

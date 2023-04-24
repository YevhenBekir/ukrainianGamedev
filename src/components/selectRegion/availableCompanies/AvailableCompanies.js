import { useSelector, useDispatch } from "react-redux";

import { setActiveCompany } from "../regionSlice";

import "./availableCompanies.scss";

const AvailableCompanies = () => {
  const dispatch = useDispatch();
  const { activeCompany, cityCompanies } = useSelector(
    (state) => state.companies
  );

  const renderCompanies = (arr) => {
    return arr.map((item) => {
      const clazz = "companies-list-item";
      const active = "_active";
      return (
        <li
          key={item.id}
          className={
            item.name === activeCompany.name ? `${clazz}${active}` : clazz
          }
          style={{ marginLeft: cityCompanies.length > 10 ? "25px" : null }}
          onClick={() => dispatch(setActiveCompany(item))}
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

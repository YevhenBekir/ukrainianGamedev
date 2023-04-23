import { useDispatch, useSelector } from "react-redux";
import useCompaniesRequest from "../../services/useCompaniesRequest";

import AvailableCompanies from "./availableCompanies/AvailableCompanies";
import Selector from "../selector/Selector";
import Infog from "./pieInfo/PieInfo";

import ua from "../../assets/ua.svg";
import "./selectRegion.scss";
import { companiesFetch } from "./regionSlice";

const SelectRegion = (props) => {
  const dispatch = useDispatch();
  const { getCompanies } = useCompaniesRequest();

  const { cityCompanies, companiesLoadingStatus, activeCompany } = useSelector(
    (state) => state.companies
  );
  console.log(cityCompanies);
  return (
    <>
      <div className="select-title">БУДЬ ЛАСКА, ОБЕРІТЬ РЕГІОН</div>
      <div className="map-regions-stats">
        <div className="map">
          <img className="ua-map" src={ua} alt="ua_map.svg" />
          {/*selectors*/}
          <div
            className="kyiv-selector"
            style={{ position: "absolute", top: "23%", left: "45%" }}
          >
            <Selector
              key="kyiv"
              id="kyiv"
              className="kyiv-selector"
              size="30px"
              setCompaniesToState={(id) => dispatch(companiesFetch(id))}
            />
          </div>
          <div
            className="lviv-selector"
            style={{ position: "absolute", top: "31%", left: "8%" }}
          >
            <Selector
              key="lviv"
              id="lviv"
              className="lviv-selector"
              size="39px"
              setCompaniesToState={(id) => getCompanies(id)}
            />
          </div>
          <div
            className="rivne-selector"
            style={{ position: "absolute", top: "21%", left: "21%" }}
          >
            <Selector
              key="rivne"
              id="rivne"
              className="rivne-selector"
              size="29px"
            />
          </div>
          <div
            className="kharkiv-selector"
            style={{ position: "absolute", top: "33%", left: "77%" }}
          >
            <Selector
              key="kharkiv"
              id="kharkiv"
              className="kharkiv-selector"
              size="45px"
            />
          </div>
          <div
            className="dnipro-selector"
            style={{ position: "absolute", top: "49%", left: "69%" }}
          >
            <Selector
              key="dnipro"
              id="dnipro"
              className="dnipro-selector"
              size="35px"
            />
          </div>
          <div
            className="odesa-selector"
            style={{ position: "absolute", top: "70%", left: "45%" }}
          >
            <Selector
              key="odesa"
              id="odesa"
              className="odesa-selector"
              size="33px"
            />
          </div>
          <div
            className="vinnytsia-selector"
            style={{ position: "absolute", top: "41.7%", left: "36.7%" }}
          >
            <Selector
              key="vinnytsia"
              id="vinnytsia"
              className="vinnytsia-selector"
              size="33px"
            />
          </div>
          <div
            className="frankivsk-selector"
            style={{ position: "absolute", top: "41%", left: "11.7%" }}
          >
            <Selector
              key="frankivsk"
              id="frankivsk"
              className="frankivsk-selector"
              size="31px"
            />
          </div>
          {/*selectors*/}
        </div>
        <div className="vertical-line"></div>
        <div className="info">
          <Infog />
          <div className="info-subtitle" style={{ textAlign: "center" }}>
            співвідношення кількості працівників
          </div>
        </div>
      </div>
      <AvailableCompanies />
    </>
  );
};

export default SelectRegion;

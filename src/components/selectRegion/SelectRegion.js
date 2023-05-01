import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AvailableCompanies from "./availableCompanies/AvailableCompanies";
import Selector from "../selector/Selector";
import Infog from "./pieInfo/PieInfo";
import Spinner from "../spinner/Spinner";

import ua from "../../assets/ua.svg";
import "./selectRegion.scss";
import { companiesFetch } from "./regionSlice";

const SelectRegion = (props) => {
  const [city, setCity] = useState("");
  const [widthSize, setWidthSize] = useState(0);

  const dispatch = useDispatch();
  const { cityCompanies, companiesLoadingStatus, activeCompany } = useSelector(
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

  const selectCityTrigger = () => {
    if (city) {
      return `співвідношення кількості працівників в ${city.toUpperCase()}`;
    }
    return (
      <div className="select-city">
        <div className="arrow">←</div>
        <div className="title">ОБЕРІТЬ МІСТО</div>
      </div>
    );
  };

  const sizeCondition = () => {
    if (widthSize >= 1200) return "30px";
    else if (widthSize >= 1100) return "28px";
    else if (widthSize >= 1000) return "26px";
    else if (widthSize >= 900) return "24px";
    else if (widthSize >= 800) return "22px";
    else if (widthSize >= 700) return "20px";
    else if (widthSize >= 600) return "18px";
    else if (widthSize >= 500) return "16px";
    else if (widthSize >= 400) return "14px";
    else if (widthSize < 400) return "12px";
  };

  const renderInfog = () => {
    if (widthSize <= 1200) {
      return;
    }
    return (
      <>
        <div className="map_regions_stats-vertical_line"></div>
        <div className="map_regions_stats-info">
          <Infog cityCompanies={cityCompanies} />
          <div
            className="map_regions_stats-info-subtitle"
            style={{ textAlign: "center" }}
          >
            {selectCityTrigger()}
          </div>
        </div>
      </>
    );
  };

  const visionCompaniesList = () => {
    if (companiesLoadingStatus === "loading") {
      return <Spinner />;
    } else if (companiesLoadingStatus === "idle") {
      return <AvailableCompanies />;
    } else {
      return <h5>Opps... Something went wrong 0_o</h5>;
    }
  };

  return (
    <>
      <div className="select-title">БУДЬ ЛАСКА, ОБЕРІТЬ РЕГІОН</div>
      <div className="map_regions_stats">
        <div className="map_regions_stats-map">
          <img
            className="map_regions_stats-map-ua_map"
            src={ua}
            alt="ua_map.svg"
          />
          {/*selectors*/}
          <div className="kyiv-selector">
            <Selector
              key="kyiv"
              id="kyiv"
              className="kyiv-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="lviv-selector">
            <Selector
              key="lviv"
              id="lviv"
              className="lviv-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="rivne-selector">
            <Selector
              key="rivne"
              id="rivne"
              className="rivne-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="kharkiv-selector">
            <Selector
              key="kharkiv"
              id="kharkiv"
              className="kharkiv-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="dnipro-selector">
            <Selector
              key="dnipro"
              id="dnipro"
              className="dnipro-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="odesa-selector">
            <Selector
              key="odesa"
              id="odesa"
              className="odesa-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="vinnytsia-selector">
            <Selector
              key="vinnytsia"
              id="vinnytsia"
              className="vinnytsia-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          <div className="frankivsk-selector">
            <Selector
              key="frankivsk"
              id="frankivsk"
              className="frankivsk-selector"
              size={sizeCondition()}
              onSetCityCompaniesToState={(e) => dispatch(companiesFetch(e))}
              onSetCityNameToInfographic={(e) => setCity(e)}
            />
          </div>
          {/*selectors*/}
        </div>
        {renderInfog()}
      </div>
      {visionCompaniesList()}
    </>
  );
};

export default SelectRegion;

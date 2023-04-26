import { useSelector } from "react-redux";

import React from "react";
import RunLine from "../runLine/RunLine";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import SelectRegion from "../selectRegion/SelectRegion";
import CompanyInfo from "../companyInfo/CompanyInfo";
import CompaniesStats from "../companiesStats/CompaniesStats";
import SkeletonCompanyCard from "../skeletonCompanyCard/SkeletonCompanyCard";

import "../../styles/style.scss";

function App() {
  const { activeCompany } = useSelector((state) => state.companies);

  return (
    <div className="App">
      <RunLine />
      <AppHeader />
      <div className="app-body">
        <SelectRegion />
      </div>
      {activeCompany.id ? <CompanyInfo /> : <SkeletonCompanyCard />}
      <CompaniesStats />
      <AppFooter />
    </div>
  );
}

export default App;

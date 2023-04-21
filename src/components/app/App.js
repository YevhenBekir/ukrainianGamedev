import React from "react";
import RunLine from "../runLine/RunLine";
import AppHeader from "../appHeader/AppHeader";
import AppBasement from "../appBasement/AppBasement";
import SelectRegion from "../selectRegion/SelectRegion";
import CompanyInfo from "../companyInfo/CompanyInfo";
import CompaniesStats from "../companiesStats/CompaniesStats";

import "../../styles/style.scss";

function App() {
  return (
    <div className="App">
      <RunLine />
      <AppHeader />
      <div className="app-body">
        <SelectRegion />
      </div>
      <CompanyInfo />
      <CompaniesStats />
      <AppBasement />
    </div>
  );
}

export default App;

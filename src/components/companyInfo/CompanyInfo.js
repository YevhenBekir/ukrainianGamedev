import "./companyInfo.scss";

const CompanyInfo = (props) => {
  const renderProjects = () => {
    return;
  };

  return (
    <>
      <div className="company">
        <div className="company-carousel"></div>
        <div className="company-info">
          <div className="company-info-initials">
            <div className="company-info-initials-name">Rockstar Games</div>
            <div className="company-info-initials-desc">
              Rockstar Games - це відома американська компанія з виробництва
              відеоігор, заснована у 1998 році. Компанія спеціалізується на
              розробці та випуску ігор в жанрі action-adventure та шутерів.
              Найбільш відомі їхні проекти - Grand Theft Auto, Max Payne, Bully,
              L.A. Noire. Компанія має статус одного з лідерів галузі та відома
              своїми інноваційними технологіями та високою якістю геймплею.
            </div>
          </div>
          <ul className="company-info-projects">
            <li className="company-info-projects-item">GTA</li>
            <li className="company-info-projects-item">Max Payne</li>
            <li className="company-info-projects-item">L.A. Noire</li>
            <li className="company-info-projects-item">Bully</li>
            <li className="company-info-projects-item">Table Tennis</li>
          </ul>
        </div>
        <div className="company-details">
          <a
            href="https://www.rockstargames.com/"
            target="_blank"
            className="company-details-link"
          >
            https://www.rockstargames.com
          </a>
          <div className="company-details-employees">
            {" "}
            Кількість працівників:{" "}
            <span className="company-details-employees-total">300 000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;

import "./skeletonCompanyCard.scss";

const SkeletonCompanyCard = () => {
  return (
    <div className="skeleton_company">
      <div
        className="skeleton_company-title"
        style={{
          fontSize: "18px",
          fontWeight: 300,
          textAlign: "center",
          marginBottom: "15px",
          fontFamily: "Roboto Mono",
        }}
      >
        БУДЬ ЛАСКА, ОБЕРІТЬ МІСТО ТА КОМПАНІЮ
      </div>
      <div className="skeleton_company-carousel">
        <div className="skeleton_company-carousel-item"></div>
        <div className="skeleton_company-carousel-item-mid"></div>
        <div className="skeleton_company-carousel-item"></div>
      </div>
      <div className="skeleton_company-info">
        <div className="skeleton_company-info-initials">
          <div className="skeleton_company-info-initials-name"></div>
          <div className="skeleton_company-info-initials-desc"></div>
        </div>

        <div className="skeleton_company-info-projects">
          <div className="skeleton_company-info-projects-item"></div>
          <div className="skeleton_company-info-projects-item"></div>
          <div className="skeleton_company-info-projects-item"></div>
          <div className="skeleton_company-info-projects-item"></div>
          <div className="skeleton_company-info-projects-item"></div>
        </div>
      </div>
      <div className="skeleton_company-details">
        <div className="skeleton_company-details-link"></div>
        <div className="skeleton_company-details-employees"></div>
      </div>
    </div>
  );
};

export default SkeletonCompanyCard;

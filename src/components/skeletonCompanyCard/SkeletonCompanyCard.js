import "./skeletonCompanyCard.scss";

const SkeletonCompanyCard = () => {
  return (
    <div className="skeleton-company">
      <div
        className="skeleton-title"
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
      <div className="skeleton-company-carousel">
        <div className="skeleton-company-carousel-item"></div>
        <div className="skeleton-company-carousel-item-mid"></div>
        <div className="skeleton-company-carousel-item"></div>
      </div>
      <div className="skeleton-company-info">
        <div className="skeleton-company-info-initials">
          <div className="skeleton-company-info-initials-name"></div>
          <div className="skeleton-company-info-initials-desc"></div>
        </div>

        <div className="skeleton-company-info-projects">
          <div className="skeleton-company-info-projects-item"></div>
          <div className="skeleton-company-info-projects-item"></div>
          <div className="skeleton-company-info-projects-item"></div>
          <div className="skeleton-company-info-projects-item"></div>
          <div className="skeleton-company-info-projects-item"></div>
        </div>
      </div>
      <div className="skeleton-company-details">
        <div className="skeleton-company-details-link"></div>
        <div className="skeleton-company-details-employees"></div>
      </div>
    </div>
  );
};

export default SkeletonCompanyCard;

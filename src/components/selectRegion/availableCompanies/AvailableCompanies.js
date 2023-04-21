import "./availableCompanies.scss";

const AvailableCompanies = ({ data }) => {
  const renderCompanies = () => {};

  return (
    <ul className="companies-list">
      <li className="companies-list-item_active">Rockstar</li>
      <li className="companies-list-item">Ubisoft</li>
      <li className="companies-list-item">Microsoft</li>
      <li className="companies-list-item">Naughty Dog</li>
      <li className="companies-list-item">EA Games</li>
    </ul>
  );
};

export default AvailableCompanies;

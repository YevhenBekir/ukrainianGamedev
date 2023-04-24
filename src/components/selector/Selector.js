import "./selector.scss";

const Selector = ({
  id,
  className,
  size,
  onSetCityCompaniesToState,
  onSetCityNameToInfographic,
}) => {
  const setAction = (id) => {
    onSetCityCompaniesToState(id);
    onSetCityNameToInfographic(id);
  };
  return (
    <div
      id={id}
      className={`circle ${className}`}
      style={{
        width: `${size ? size : null}`,
        height: `${size ? size : null}`,
      }}
      onClick={(e) => setAction(e.target.id)}
    ></div>
  );
};

export default Selector;

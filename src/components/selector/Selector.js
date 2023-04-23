import "./selector.scss";

const Selector = ({ id, className, size, onSetCitiesToState }) => {
  return (
    <div
      id={id}
      className={`circle ${className}`}
      style={{
        width: `${size ? size : null}`,
        height: `${size ? size : null}`,
      }}
      onClick={(e) => onSetCitiesToState(e.target.id)}
    ></div>
  );
};

export default Selector;

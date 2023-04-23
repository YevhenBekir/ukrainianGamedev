import "./selector.scss";

const Selector = ({ id, className, size, setCompaniesToState }) => {
  return (
    <div
      id={id}
      className={`circle ${className}`}
      style={{
        width: `${size ? size : null}`,
        height: `${size ? size : null}`,
      }}
      onClick={(e) => setCompaniesToState(e.target.id)}
    ></div>
  );
};

export default Selector;

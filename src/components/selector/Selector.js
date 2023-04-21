import "./selector.scss";

const Selector = ({ id, className, size }) => {
  const onLog = (e) => {
    console.log(e);
  };
  return (
    <div
      id={id}
      className={`circle ${className}`}
      style={{
        width: `${size ? size : null}`,
        height: `${size ? size : null}`,
      }}
      onClick={(e) => onLog(e)}
    ></div>
  );
};

export default Selector;

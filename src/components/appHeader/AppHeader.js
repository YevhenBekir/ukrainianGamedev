import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <div className="greetings">
        <img
          className="snake"
          src="https://thumbs.gfycat.com/UnfoldedTameAntipodesgreenparakeet-max-1mb.gif"
          alt="snake.gif"
        />
        <div className="gamedev-label">
          <span className="ukraine">Ukraine</span>://gamedev_companies:...
          <span className="straight-line">|</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

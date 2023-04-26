import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <div className="header-greetings">
        <img
          className="header-greetings-snake"
          src="https://thumbs.gfycat.com/UnfoldedTameAntipodesgreenparakeet-max-1mb.gif"
          alt="snake.gif"
        />
        <div className="header-greetings-gamedev_label">
          <span className="header-greetings-gamedev_label-ukraine">
            Ukraine
          </span>
          ://gamedev_companies:...
          <span className="header-greetings-gamedev_label-straight_line">
            |
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

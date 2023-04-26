import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

import "./appFooter.scss";

const AppFooter = () => {
  return (
    <section className="footer">
      <div className="footer-copyright">
        <div className="footer-copyright-title">
          © Yevhen Bekir | April 2023
        </div>

        <div className="footer-copyright-social_me">
          <a href="https://www.linkedin.com/in/yevheniibekir/">
            <img src={linkedin} alt="linkedin_logo.svg" />
          </a>

          <a href="https://github.com/YevhenBekir">
            <img src={github} alt="github_logo.svg" />
          </a>

          <a href="https://www.instagram.com/yevheniibekir/">
            <img src={instagram} alt="insta_logo.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFooter;

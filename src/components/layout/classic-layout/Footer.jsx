import Docs from "./Docs";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <Docs />
        </div>
        <div className="footer__column">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

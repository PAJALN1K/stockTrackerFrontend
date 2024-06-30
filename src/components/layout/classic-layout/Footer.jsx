import FooterDocs from "./FooterDocs";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterDocs />
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;

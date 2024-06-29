import { Link } from "react-router-dom";
import logoImg from "../../images/logo--black.png";

const STLogo = () => {
  return (
    <div className="logo">
      <Link className="logo__link-container" to="/">
        <img
          className="logo__img"
          src={logoImg}
          alt="logo"
          height="45"
        />
      </Link>
    </div>
  );
};

export default STLogo;

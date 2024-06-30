import { Link } from "react-router-dom";
import logoImg from "../../images/st-logo.png";
import classNames from "classnames";

const STLogo = ({ isLink, divSecondaryClasses, imgSecondaryClasses }) => {
  const logoDivClass = classNames("st-logo", divSecondaryClasses);
  const logoImgClass = classNames("st-logo__img", imgSecondaryClasses);

  return (
    <div className={logoDivClass}>
      {isLink ? (
        <Link className="st-logo__link-container" to="/">
          <img className={logoImgClass} src={logoImg} alt="st-logo" />
        </Link>
      ) : (
        <img className={logoImgClass} src={logoImg} alt="st-logo" />
      )}
    </div>
  );
};

export default STLogo;

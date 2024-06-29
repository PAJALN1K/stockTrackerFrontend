import { Link } from "react-router-dom";

const STIconLink = ({
  hrefLink,
  linkSecondaryClassName,
  iconSecondaryClassName,
  iconSrc,
  iconAlt,
}) => {
  return (
    <Link className={`st-icon-link ${linkSecondaryClassName}`} to={hrefLink}>
      <img
        className={`st-icon-link__img ${iconSecondaryClassName}`}
        src={iconSrc}
        alt={iconAlt}
        width="32"
        height="32"
      />
    </Link>
  );
};

export default STIconLink;

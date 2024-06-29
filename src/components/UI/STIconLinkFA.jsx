import { Link } from "react-router-dom";

const STIconLinkFA = ({
  hrefLink,
  linkSecondaryClassName,
  iconSecondaryClassname,
}) => {
  return (
    <Link to={hrefLink} className={`st-icon-link-fa ${linkSecondaryClassName}`}>
      <i className={`st-icon-link-fa__img ${iconSecondaryClassname}`}></i>
    </Link>
  );
};

export default STIconLinkFA;

import { Link } from "react-router-dom";

const STLink = ({ hrefLink, textContent }) => {
  return (
    <Link className="st-link" to={hrefLink}>
      {textContent}
    </Link>
  );
};

export default STLink;

import { Link } from "react-router-dom";

const PageNav = ({ itemsContent }) => {
  const renderMod = (object) => {
    if (object === true) {
      return "page-nav__item--selected";
    } else {
      return "";
    }
  };

  const item = ({ text, isSelected, hrefLink, key }) => (
    <li key={key} className={`page-nav__item ${renderMod(isSelected)}`}>
      <Link className="page-nav__link" to={hrefLink}>
        {text}
      </Link>
    </li>
  );

  return (
    <nav className="page-nav left-adapt-column__page-nav">
        <span className="page-nav__headline">Навигация</span>
      <ul className="page-nav__list">
        {itemsContent.map((itemContent) => item(itemContent))}
      </ul>
    </nav>
  );
};

export default PageNav;

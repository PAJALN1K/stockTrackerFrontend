import { Link } from "react-router-dom";
import { HEADER_NAV_URL } from "../../../services/constants/URLs";

const HeaderNav = () => {
  const HeaderNavItem = ({ textContent, linkContent }) => {
    return (
      <li className="header-nav__item">
        <Link to={linkContent} className="header-nav__link">
          {textContent}
        </Link>
      </li>
    );
  };

  const headerNavItems = [
    { textContent: "Возможности", linkContent: HEADER_NAV_URL },
    { textContent: "Тарифы", linkContent: HEADER_NAV_URL },
    { textContent: "О нас", linkContent: HEADER_NAV_URL },
    { textContent: "Блог", linkContent: HEADER_NAV_URL },
    { textContent: "Контакты", linkContent: HEADER_NAV_URL },
  ];

  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        {headerNavItems.map(({ textContent, linkContent }) => (
          <HeaderNavItem
            key={textContent}
            textContent={textContent}
            linkContent={linkContent}
          />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

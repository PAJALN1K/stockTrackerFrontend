import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__item">
          <Link to="/nav" className="header-nav__link">
            Возможности
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/nav" className="header-nav__link">
            Тарифы
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/nav" className="header-nav__link">
            О нас
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/nav" className="header-nav__link">
            Блог
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/nav" className="header-nav__link">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

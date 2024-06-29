import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <ul className="footer-docs">
      <h3 className="footer-docs__header">Программы для бизнеса</h3>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа для учета продаж
        </Link>
      </li>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа для торговли
        </Link>
      </li>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа складского учета
        </Link>
      </li>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа для магазина продуктов
        </Link>
      </li>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа для учета товара в магазине
        </Link>
      </li>
      <li className="footer-docs__item">
        <Link to="/docs" className="footer-docs__link">
          Программа для учета в общепите
        </Link>
      </li>
    </ul>
  );
};

export default Docs;

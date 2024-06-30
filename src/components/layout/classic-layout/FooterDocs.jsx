import { Link } from "react-router-dom";
import { FOOTER_DOCS_URL } from "../../../services/constants/URLs";

const FooterDocs = () => {
  const FooterDocsItem = ({ textContent, linkContent }) => {
    return (
      <li className="footer-docs__item">
        <Link to={linkContent} className="footer-docs__link">
          {textContent}
        </Link>
      </li>
    );
  };

  const footerDocsItems = [
    { textContent: "Программа для учета продаж", linkContent: FOOTER_DOCS_URL },
    { textContent: "Программа для торговли", linkContent: FOOTER_DOCS_URL },
    { textContent: "Программа складского учета", linkContent: FOOTER_DOCS_URL },
    {
      textContent: "Программа для магазина продуктов",
      linkContent: FOOTER_DOCS_URL,
    },
    {
      textContent: "Программа для учета товара в магазине",
      linkContent: FOOTER_DOCS_URL,
    },
    {
      textContent: "Программа для учета в общепите",
      linkContent: FOOTER_DOCS_URL,
    },
  ];

  return (
    <ul className="footer-docs">
      <h3 className="footer-docs__header">Программы для бизнеса</h3>
      {footerDocsItems.map(({ textContent, linkContent }) => (
        <FooterDocsItem
          key={textContent}
          textContent={textContent}
          linkContent={linkContent}
        />
      ))}
    </ul>
  );
};

export default FooterDocs;

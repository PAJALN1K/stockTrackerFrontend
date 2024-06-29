import { Link } from "react-router-dom";
import STIconButtonFA from "../../../components/UI/STIconButtonFA";

const Company = ({ nameLabel, hrefLink, dateOfCreate, email }) => {
  const renderDesc = (object) => {
    if (object === null || object === "") {
      return (
        <dd className="company__description company__description--empty">
          Не указано
        </dd>
      );
    } else {
      return <dd className="company__description">{object}</dd>;
    }
  };

  return (
    <div className="company">
      <div className="company__row">
        <Link to={hrefLink} className="company__name-label-link">
          {nameLabel}
        </Link>
        <div className="company__buttons">
          <STIconButtonFA
            onClickFunction={() => console.log("icon button edit")}
            buttonSecondaryClassName="company__button company__edit-button"
            iconSecondaryClassname="fa-solid fa-ellipsis"
          />
          <STIconButtonFA
            onClickFunction={() => console.log("icon button delete")}
            buttonSecondaryClassName="company__button company__delete-button"
            iconSecondaryClassname="fa-solid fa-trash-can"
          />
        </div>
      </div>
      <div className="company__row">
        <dl className="company__list">
          <div className="company__pair">
            <dt className="company__term">Дата создания:</dt>
            {renderDesc(dateOfCreate)}
          </div>
          <div className="company__pair">
            <dt className="company__term">email:</dt>
            {renderDesc(email)}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Company;

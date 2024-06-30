import ClassicLayout from "../../../components/layout/classic-layout/ClassicLayout";
import { useForwarding } from "../../../hooks/useForwarding";
import { LOGIN_URL, REGISTRATION_URL } from "../../../services/constants/URLs";
import graph from "../../../images/graph--home-page.png";
import STButton from "../../../components/UI/STButton";

const HomePage = () => {
  const forwardToRegistrationPage = useForwarding(REGISTRATION_URL);
  const forwardToLoginPage = useForwarding(LOGIN_URL);

  const presentationBlock = (
    <div className="presentation-block">
      <div className="presentation-block__column">
        <h2 className="presentation-block__header">Система складского учёта</h2>
        <p className="presentation-block__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          corrupti consequatur, earum sunt quibusdam inventore pariatur atque.
          Voluptatibus tenetur quia iusto vitae eveniet a culpa iure voluptates!
        </p>
        <div className="presentation-block__buttons">
          <STButton
            onClick={forwardToLoginPage}
            textContent="Войти"
            secondaryClass=""
          />
          <STButton
            onClick={forwardToRegistrationPage}
            textContent="Регистрация"
            secondaryClass=""
          />
        </div>
      </div>
      <img className="presentation-block__img" src={graph} alt="График" />
    </div>
  );

  const main = <>{presentationBlock}</>;

  return <ClassicLayout mainContent={main} />;
};

export default HomePage;

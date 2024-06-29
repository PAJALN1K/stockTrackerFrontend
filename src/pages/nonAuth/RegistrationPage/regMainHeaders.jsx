import MainHeader from "../../../components/layout/classic-layout/MainHeader";

export const defaultMainHeader = (
  <div className="main__row">
    <MainHeader textContent="Регистрация" />
  </div>
);

export const successMainHeader = (
  <div className="main__row">
    <MainHeader textContent="Регистрация прошла успешно!" />
  </div>
);

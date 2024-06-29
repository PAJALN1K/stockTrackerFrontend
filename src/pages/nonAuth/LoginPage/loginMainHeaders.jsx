import MainHeader from "../../../components/layout/classic-layout/MainHeader";

export const defaultMainHeader = (
    <div className="main__row">
      <MainHeader textContent="Вход в аккаунт" />
    </div>
  );

export const successMainHeader = (
  <div className="main__row">
    <MainHeader textContent="Вход в аккаунт прошёл успешно!" />
  </div>
);

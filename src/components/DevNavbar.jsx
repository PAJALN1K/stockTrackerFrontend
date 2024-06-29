import { Link } from "react-router-dom";
import STButton from "./UI/STButton";
import { useContext } from "react";
import { AuthContext } from "../context";

const DevNavbar = () => {
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth({});
  };
  const login = () => {
    setAuth({ username: "gleb1000", password: "Gleb1000" });
  };

  return (
    <div className="navbar">
      <STButton onClick={logout} textContent="Выйти" />
      <STButton onClick={login} textContent="Войти" />
      <div className="navbar__links">
        <Link to="/"> Главная страница</Link>
        <Link to="/docs"> Документы</Link>
        <Link to="/nav"> Навы в хедере</Link>
        <Link to="/registration"> Регистрация</Link>
        <Link to="/login"> Логин</Link>
        <Link to="/companies"> Компании</Link>
        <Link to="/companies/company_1"> Компания 1</Link>
        <Link to="/profile"> Профиль</Link>
        <Link to="/profile/change_password">Поменять пароль</Link>
        <Link to="/settings"> Настройки</Link>
      </div>
    </div>
  );
};

export default DevNavbar;

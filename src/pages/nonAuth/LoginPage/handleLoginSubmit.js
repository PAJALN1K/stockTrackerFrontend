import { loginAPI } from "../../../api/axios";
import { LOGIN_URL } from "../../../services/constants/URLs";

export async function handleLoginSubmit(
  evt,
  user,
  setUser,
  setAuth,
  setSuccess,
  setErrMsg
) {
  evt.preventDefault();

  const username = user.username;
  const password = user.password;
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  try {
    const response = await loginAPI.post(LOGIN_URL, form);
    console.log(response);
    setSuccess(true);
    setUser({ username: "", password: "" });
    setAuth({ username, password });
  } catch (err) {
    if (!err?.response) {
        console.log(err);
      setErrMsg("Нет ответа от сервера");
      //   setAuth({ username, password });
      //   setSuccess(true);
      //   setUser({ username: "", password: "" });
    } else if (err.response?.status === 400) {
      setErrMsg("Отсутствует имя пользователя или пароль");
    } else if (err.response?.status === 401) {
      setErrMsg("Не авторизован");
    } else {
      setErrMsg("Вход в аккаунт окончился ошибкой");
    }
  }
}

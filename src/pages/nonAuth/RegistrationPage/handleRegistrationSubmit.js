import {
  USER_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../../services/constants/formRegexes";
import { REGISTRATION_URL } from "../../../services/constants/URLs";
import { registrationAPI } from "../../../api/axios";

export async function handleRegistrationSubmit(
  evt,
  user,
  setUser,
  setSuccess,
  setErrMsg
) {
  evt.preventDefault();

  // JS hack
  const v1 = USER_REGEX.test(user.username);
  const v2 = EMAIL_REGEX.test(user.email);
  const v3 = PASSWORD_REGEX.test(user.password);
  if (!v1 || !v2 || !v3) {
    setErrMsg("Invalid Entry");
    return;
  }

  try {
    await registrationAPI.post(
      REGISTRATION_URL,
      JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      })
    );
    setSuccess(true);
    setUser({
      username: "",
      email: "",
      password: "",
      // matchPassword: "",
    });
  } catch (err) {
    if (!err?.response) {
      setErrMsg("Нет ответа от сервера");
    } else if (err.response?.status === 409) {
      setErrMsg("Это имя пользователя уже занято");
    } else {
      setErrMsg("Регистрация окончилась ошибкой");
    }
  }
}

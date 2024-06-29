import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassicLayout from "../../../components/layout/classic-layout/ClassicLayout";
import STButton from "../../../components/UI/STButton";
import {
  USER_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../../services/constants/formRegexes";
import { defaultMainHeader, successMainHeader } from "./regMainHeaders";
import RegistrationForm from "./RegistrationForm";
import { handleRegistrationSubmit } from "./handleRegistrationSubmit";

const RegistrationPage = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    // matchPassword: "",
  });

  const [isValueValid, setIsValueValid] = useState({
    username: false,
    email: false,
    password: false,
    // matchPassword: false,
  });

  const [isValueFocused, setIsValueFocused] = useState({
    username: false,
    email: false,
    password: false,
    // matchPassword: false,
  });

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user.username);
    setIsValueValid({ ...isValueValid, username: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.username]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(user.email);
    setIsValueValid({ ...isValueValid, email: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(user.password);
    setIsValueValid({ ...isValueValid, password: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.password]);

  //   useEffect(() => {
  //     const result = PASSWORD_REGEX.test(password);
  //     console.log(result);
  //     console.log(password);
  //     setIsPasswordValid(result);
  //     const match = password === matchPassword;
  //     setIsMatchPasswordValid(match);
  //   }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const navigate = useNavigate();

  const forwardToLoginPage = () => {
    navigate("/login");
  };

  const main = (
    <>
      {success ? (
        <>
          {successMainHeader}
          <STButton onClick={forwardToLoginPage} textContent="Войти" />
        </>
      ) : (
        <>
          {defaultMainHeader}
          {
            <RegistrationForm
              user={user}
              setUser={setUser}
              isValueValid={isValueValid}
              isValueFocused={isValueFocused}
              setIsValueFocused={setIsValueFocused}
              handleRegistrationSubmit={(evt) =>
                handleRegistrationSubmit(
                  evt,
                  user,
                  setUser,
                  setSuccess,
                  setErrMsg
                )
              }
              errMsg={errMsg}
              ref={{ usernameRef: usernameRef, errRef: errRef }}
            />
          }
        </>
      )}
    </>
  );

  return <ClassicLayout mainContent={main} />;
};

export default RegistrationPage;

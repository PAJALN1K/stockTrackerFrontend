import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassicLayout from "../../../components/layout/classic-layout/ClassicLayout";
import STButton from "../../../components/UI/STButton";
import { defaultMainHeader, successMainHeader } from "./loginMainHeaders";
import LoginForm from "./LoginForm";
import { handleLoginSubmit } from "./handleLoginSubmit";
import { AuthContext } from "../../../context";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);
  const usernameRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState({
    username: "",
    // email: "",
    password: "",
  });

  const [isValueFocused, setIsValueFocused] = useState({
    username: false,
    // email: false,
    password: false,
  });

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const navigate = useNavigate();

  const forwardToCompaniesPage = () => {
    navigate("/companies");
  };

  const main = (
    <>
      {success ? (
        <>
          {successMainHeader}
          <STButton
            onClick={forwardToCompaniesPage}
            textContent="Перейти на страницу компаний"
          />
        </>
      ) : (
        <>
          {defaultMainHeader}
          {
            <LoginForm
              user={user}
              setUser={setUser}
              isValueFocused={isValueFocused}
              setIsValueFocused={setIsValueFocused}
              handleLoginSubmit={(evt) =>
                handleLoginSubmit(
                  evt,
                  user,
                  setUser,
                  setAuth,
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

export default LoginPage;

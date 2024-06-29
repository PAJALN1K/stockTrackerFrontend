import React from "react";
import STForm from "../../../components/UI/STForm";
import STFormField from "../../../components/UI/STFormField";
import STButton from "../../../components/UI/STButton";
import STLink from "../../../components/UI/STLink";
import STFormErrParagraph from "../../../components/UI/STFormErrParagraph";

const LoginForm = React.forwardRef(function (
  {
    user,
    setUser,
    isValueFocused,
    setIsValueFocused,
    handleLoginSubmit,
    errMsg,
  },
  ref
) {
  const { usernameRef, errRef } = ref;

  return (
    <div className="main__row">
      <STForm
        secondaryClass="st-form--login"
        onSubmit={handleLoginSubmit}
        errParagraph={<STFormErrParagraph errMsg={errMsg} ref={errRef} />}
        fields={
          <>
            <STFormField
              nameLabel="Имя пользователя"
              inputName="username"
              inputType="text"
              ref={usernameRef}
              isRequired={true}
              isAutoComplete={false}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              isValueFocused={isValueFocused.username}
              focusFunction={(statement) => {
                setIsValueFocused({ ...isValueFocused, username: statement });
              }}
            />
            <STFormField
              nameLabel="Пароль"
              inputName="password"
              inputType="password"
              isRequired={true}
              isAutoComplete={false}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              isValueFocused={isValueFocused.username}
              focusFunction={(statement) => {
                setIsValueFocused({ ...isValueFocused, username: statement });
              }}
            />
          </>
        }
        submitButton={
          <STButton
            textContent="Войти"
            secondaryClass="st-form__button"
          />
        }
        links={<STLink hrefLink="/registration" textContent="Нет аккаунта?" />}
      />
    </div>
  );
});

export default LoginForm;

import React from "react";
import STForm from "../../../components/UI/STForm";
import STFormErrParagraph from "../../../components/UI/STFormErrParagraph";
import STFormField from "../../../components/UI/STFormField";
import STButton from "../../../components/UI/STButton";
import STLink from "../../../components/UI/STLink";

const RegistrationForm = React.forwardRef(function (
  {
    user,
    setUser,
    isValueValid,
    isValueFocused,
    setIsValueFocused,
    errMsg,
    handleRegistrationSubmit,
  },
  ref
) {
  const { usernameRef, errRef } = ref;

  return (
    <div className="main__row">
      <STForm
        secondaryClass="st-form--registration"
        onSubmit={handleRegistrationSubmit}
        errParagraph={<STFormErrParagraph errMsg={errMsg} ref={errRef} />}
        fields={
          <>
            <STFormField
              nameLabel="Имя пользователя"
              inputName="username"
              inputType="text"
              ref={usernameRef}
              isRequired={true}
              isAutoComplete={true}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              isValueValid={isValueValid.username}
              isValueFocused={isValueFocused.username}
              focusFunction={(statement) => {
                setIsValueFocused({ ...isValueFocused, username: statement });
              }}
              errContent={`Имя пользователя может состоять из букв латинского алфавита, цифр, нижних подчёркиваний и дефиса и 
              должно начинаться с буквы, содержать от 4 до 24 символов`}
            />
            <STFormField
              nameLabel="Почта"
              inputName="email"
              inputType="email"
              isRequired={true}
              isAutoComplete={true}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              isValueValid={isValueValid.email}
              isValueFocused={isValueFocused.email}
              focusFunction={(statement) => {
                setIsValueFocused({ ...isValueFocused, email: statement });
              }}
              errContent={`Почта **`}
            />
            <STFormField
              nameLabel="Пароль"
              inputName="password"
              inputType="password"
              isRequired={true}
              isAutoComplete={true}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              isValueValid={isValueValid.password}
              isValueFocused={isValueFocused.password}
              focusFunction={(statement) => {
                setIsValueFocused({ ...isValueFocused, password: statement });
              }}
              errContent={`Пароль должен иметь длину от 8 до 24 символов и включать в себя прописные и заглавные буквы латинского алфавита, цифры 
              и специальные символы.\nДопустимые специальные символы: ! # @ $ % _ -`}
            />
            {/* <STFormField
              nameLabel="Подтвердите пароль"
              inputName="match-password"
              inputType="password"
              isRequired={true}
              value={matchPassword}
              onChange={(e) => setMatchPassword(e.target.value)}
              isValueValid={isMatchPasswordValid}
              isValueFocused={isMatchPasswordFocused}
              setIsValueFocused={setIsMatchPasswordFocused}
              errContent={`Значение должно совпадать со значением пароля.`}
            /> */}
          </>
        }
        submitButton={
          <STButton
            textContent="Зарегистрироваться"
            secondaryClass="st-form__button"
            isDisabled={
              !isValueValid.username ||
              !isValueValid.email ||
              !isValueValid.password
                ? true
                : false
            }
          />
        }
        links={<STLink hrefLink="/login" textContent="Уже есть аккаунт?" />}
      />
    </div>
  );
});

export default RegistrationForm;

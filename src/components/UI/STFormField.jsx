import React from "react";
import STFormInput from "./STFormInput";

const STFormField = React.forwardRef(function (
  {
    nameLabel,
    inputName,
    inputType,
    isRequired,
    isAutoComplete,
    value,
    onChange,
    isValueValid,
    isValueFocused,
    focusFunction,
    errContent,
  },
  ref
) {
  return (
    <div className="st-form__field">
      <label className="st-form__name-label">
        {nameLabel}
        {isValueValid === undefined ? (
          <></>
        ) : (
          <>
            <span className={isValueValid ? "st-form__valid-icon" : "hidden"}>
              Норм
            </span>
            <span
              className={
                isValueValid || !value ? "hidden" : "st-form__invalid-icon"
              }
            >
              Не норм
            </span>
          </>
        )}
      </label>
      <STFormInput
        inputName={inputName}
        inputType={inputType}
        isRequired={isRequired}
        isAutoComplete={isAutoComplete}
        value={value}
        onChange={onChange}
        isValueValid={isValueValid}
        focusFunction={focusFunction}
        ref={ref}
      />
      {isValueValid === undefined ? (
        <></>
      ) : (
        <p
          className={
            isValueFocused && value && !isValueValid
              ? "st-form__instructions"
              : "hidden"
          }
        >
          {errContent}
        </p>
      )}
    </div>
  );
});

export default STFormField;

// изменить required
// htmlFor ?

import React, { useState } from "react";

const STFormInput = React.forwardRef(function (
  {
    inputName,
    inputType,
    isRequired,
    isAutoComplete,
    value,
    onChange,
    isValueValid,
    focusFunction,
  },
  ref
) {
  const required = useState({ required: isRequired })[0];

  const renderRef = () => {
    if (ref === null) {
      return null;
    } else {
      return ref;
    }
  };

  const renderIsValueValid = () => {
    if (isValueValid === null) {
      return true;
    } else {
      return isValueValid;
    }
  };

  return (
    <input
      className="st-form__input"
      id={`st-form__${inputName}`}
      name={inputName}
      type={inputType}
      ref={renderRef()}
      {...required}
      autoComplete={isAutoComplete ? "on" : "off"}
      value={value}
      onChange={onChange}
      aria-invalid={renderIsValueValid ? "false" : "true"}
      onFocus={focusFunction}
      onBlur={focusFunction}
    />
  );
});

export default STFormInput;

// изменить required

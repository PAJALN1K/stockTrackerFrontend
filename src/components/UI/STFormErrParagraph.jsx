import React from "react";

const STFormErrParagraph = React.forwardRef(function ({ errMsg }, ref) {
  return (
    <p
      ref={ref}
      className={errMsg ? "st-form__error-msg" : "hidden"}
      aria-live="assertive"
    >
      {errMsg}
    </p>
  );
});

export default STFormErrParagraph;

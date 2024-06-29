import { useState } from "react";

const STForm = ({
  secondaryClass,
  action,
  fields,
  submitButton,
  links,
  onSubmit,
  errParagraph,
}) => {
  const renderLinks = () => {
    if (links === null) {
      return null;
    } else {
      return <>{links}</>;
    }
  };

  return (
    <form
      className={`st-form ${secondaryClass}`}
      action={action}
      method="post"
      onSubmit={onSubmit}
    >
      {errParagraph}
      {fields}
      {submitButton}
      {renderLinks()}
    </form>
  );
};

export default STForm;

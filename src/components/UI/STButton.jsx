import { useEffect, useState } from "react";

const STButton = ({
  textContent,
  secondaryClass,
  onClick,
  onSubmit,
  isDisabled
}) => {
  const renderIsDisabled = () => {
    if (isDisabled === null) {
      return false;
    }
    return isDisabled;
  };

  const [disabled, setDisabled] = useState(renderIsDisabled);

  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);

  const renderOnClick = () => {
    if (onClick === null) {
      return null;
    } else {
      return onClick;
    }
  };

  const renderOnSubmit = () => {
    if (onSubmit === null) {
      return null;
    } else {
      return onSubmit;
    }
  };

  return (
    <button
      className={`st-button ${secondaryClass}`}
      onClick={renderOnClick()}
      onSubmit={renderOnSubmit()}
      disabled={disabled}
    >
      {textContent}
    </button>
  );
};

export default STButton;

const STIconButtonFA = ({
  onClickFunction,
  buttonSecondaryClassName,
  iconSecondaryClassname,
}) => {
  return (
    <button
      className={`st-icon-button-fa ${buttonSecondaryClassName}`}
      onClick={onClickFunction}
    >
      <i className={`st-icon-button-fa__img ${iconSecondaryClassname}`}></i>
    </button>
  );
};

export default STIconButtonFA;

const MainHeader = ({ textContent }) => {
  return (
    <div className="main-header">
      <h2 className="main-header__headline">{textContent}</h2>
      {/* <hr className="main-header__hr main-header__hr--registration-page"></hr> */}
    </div>
  );
};

export default MainHeader;

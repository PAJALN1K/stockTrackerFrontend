import STLogo from "../../UI/STLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <STLogo isLink={true} divSecondaryClasses="header__st-logo" imgSecondaryClasses="st-logo__img--header" />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;

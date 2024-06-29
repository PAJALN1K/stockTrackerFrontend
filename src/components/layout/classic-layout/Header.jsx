import STLogo from "../../UI/STLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
    return (
      <header className="header">
          <div className="header__container">
            <div className="header__column">
              <STLogo />
            </div>
            <div className="header__column">
              <HeaderNav />
            </div>
          </div>
      </header>
    );
  };

export default Header;
  
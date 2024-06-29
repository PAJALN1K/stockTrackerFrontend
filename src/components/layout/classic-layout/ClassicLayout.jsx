import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const ClassicLayout = ({ mainContent }) => {
  return (
    <div className="stock-tracker-page stock-tracker-page--dark classic-layout">
      <Header />
      <Main mainContent={mainContent} />
      <Footer />
    </div>
  );
};

export default ClassicLayout;

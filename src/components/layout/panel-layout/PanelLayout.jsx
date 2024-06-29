import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

const PanelLayout = ({ leftAdaptColumnContent, mainContent }) => {
  return (
    <div className="stock-tracker-page stock-tracker-page--dark panel-layout">
      <LeftPanel adaptColumnContent={leftAdaptColumnContent} />
      <MainPanel mainContent={mainContent} />
      <RightPanel />
    </div>
  );
};

export default PanelLayout;

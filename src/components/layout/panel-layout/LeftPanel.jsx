import LeftAdaptColumn from "./LeftAdaptColumn";
import LeftConstColumn from "./LeftConstColumn";

const LeftPanel = ({adaptColumnContent}) => {
  return (
    <div className="left-panel">
      <LeftConstColumn />
      <LeftAdaptColumn adaptColumnContent={adaptColumnContent} />
    </div>
  );
};

export default LeftPanel;

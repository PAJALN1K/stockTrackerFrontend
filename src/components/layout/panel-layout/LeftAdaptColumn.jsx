const LeftAdaptColumn = ({ adaptColumnContent }) => {
  return (
    <div className="left-adapt-column left-panel__adapt-column left-panel__column">
        <div className="left-adapt-column__container">
        {adaptColumnContent}
        </div>
    </div>
  );
};

export default LeftAdaptColumn;

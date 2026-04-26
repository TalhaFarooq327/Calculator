import Buttons from "./Buttons";

const Calculator = ({
  buttons,
  getButtonClass,
  onButtonClick,
  currentValue,
  result,
}) => {
  return (
    <div className="calculator">
      <input
        className="display left"
        type="text"
        value={currentValue.replace(/([+\-×÷])/g, " $1 ")}
        readOnly
      />
      <input className="display" type="text" value={result} readOnly />

      <div className="keys">
        <Buttons
          buttons={buttons}
          getButtonClass={getButtonClass}
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default Calculator;

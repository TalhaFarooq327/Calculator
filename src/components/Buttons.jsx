const Buttons = ({ buttons, getButtonClass, onButtonClick }) => {
  return (
    <div className="keys">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={getButtonClass(btn)}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

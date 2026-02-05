import "./App.css";

function App() {
  const buttons = [
    "AC",
    "±",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "−",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input className="display left" type="text" />
        <input className="display" type="text" />
        <div className="keys">
          {buttons.map((btn, index) => (
            <button key={index} className="button">
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div class="history">
        <h2>History</h2>
        <textarea id="historyList"></textarea>
      </div>
    </div>
  );
}

export default App;

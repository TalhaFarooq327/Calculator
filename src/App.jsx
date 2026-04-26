import "./App.css";
import Calculator from "./components/Calculator";
import History from "./components/History";
import { useState } from "react";

function App() {
  const buttons = [
    "AC",
    "C",
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

  const getButtonClass = (btn) => {
    if (["AC", "C", "%"].includes(btn)) return "button lightgray";
    if (["+", "−", "×", "÷"].includes(btn)) return "button orange";
    if (btn === "=") return "button equal orange";
    return "button";
  };

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setExpression("");
      setResult("");
      return;
    }

    if (!isNaN(value) || value === ".") {
      setExpression((prev) => prev + value);
      return;
    }

    if (["+", "−", "×", "÷"].includes(value)) {
      if (result !== "") {
        setExpression(result + value);
        setResult("");
      } else {
        setExpression((prev) => prev + value);
      }
      return;
    }

    if (value === "=") {
      if (expression === "") return;

      let exp = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");

      try {
        const evalResult = eval(exp);
        setResult(evalResult.toString());

        const calculation = expression + " = " + evalResult;
        setHistory((prev) => [calculation, ...prev]);
      } catch {
        setResult("Error");
      }

      return;
    }

    if (value === "%") {
      if (expression === "") return;

      const parts = expression.split(/([+\-×÷])/);
      let last = parts.pop();

      if (!last) return;

      last = (parseFloat(last) / 100).toString();

      parts.push(last);
      setResult(parts.join(""));
      return;
    }

    if (value === "C") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }
  };

  return (
    <div className="container">
      <Calculator
        buttons={buttons}
        getButtonClass={getButtonClass}
        onButtonClick={handleButtonClick}
        currentValue={expression}
        result={result}
      />
      <History history={history} />
    </div>
  );
}

export default App;

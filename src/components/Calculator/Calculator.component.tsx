import { useState, useEffect } from "react";

import Button from "../Button/Button.component";

import { BUTTONS_DATA } from "../Button/BUTTONS_DATA";

import "./Calculator.styles.scss";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

  const Reset = () => {
    setResult("0");
    setDisplay("");
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  };

  const handleNumberClick = (number: string) => {
    if (operator === "=") {
      Reset();
      setFirstNumber(number);
      setDisplay(number);
    } else if (operator === "") {
      if (number === "." && firstNumber.includes(".")) {
      } else {
        setFirstNumber(firstNumber + number);
        setDisplay(display + number);
      }
    } else {
      if (number === "." && secondNumber.includes(".")) {
      } else {
        setSecondNumber(secondNumber + number);
        setDisplay(display + number);
      }
    }
  };

  const handleOperatorClick = (operator: string) => {
    firstNumber !== "" && setOperator(operator);
    result !== "0" && setFirstNumber(String(result));
    setSecondNumber("");

    if (operator === "=") {
      setDisplay("");
      setSecondNumber("");
    } else if (operator === "AC") {
      Reset();
    } else if (
      display[display.length - 1] !== "+" &&
      display[display.length - 1] !== "-" &&
      display[display.length - 1] !== "/" &&
      display[display.length - 1] !== "x"
    ) {
      setDisplay(display + operator);
    } else {
      setDisplay(display.slice(0, -1) + operator);
    }
  };

  useEffect(() => {
    switch (operator) {
      case "+":
        setResult(String(Number(firstNumber) + Number(secondNumber)));
        break;
      case "-":
        setResult(String(Number(firstNumber) - Number(secondNumber)));
        break;
      case "/":
        setResult(String(Number(firstNumber) / Number(secondNumber)));
        break;
      case "x":
        setResult(String(Number(firstNumber) * Number(secondNumber)));
        break;
    }
  }, [secondNumber]);

  const buttons = BUTTONS_DATA;

  return (
    <div className='calculator'>
      <div className='display'>{display}</div>
      <div className={`display ${display !== "" && "dim"}`}>{result}</div>
      <div className='buttons'>
        {buttons.map(({ id, ...otherProps }) => (
          <Button key={id} id={id} {...otherProps} handleOperatorClick={handleOperatorClick} handleNumberClick={handleNumberClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

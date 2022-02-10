import "./Button.styles.scss";

interface ButtonProps {
  id: string;
  number?: string;
  operator?: string;
  classList: string;
  handleOperatorClick: Function;
  handleNumberClick: Function;
}

const Button = ({ classList, number, operator, id, handleNumberClick, handleOperatorClick }: ButtonProps) => {
  const onButtonClick = () => {
    number !== undefined ? handleNumberClick(number) : handleOperatorClick(operator);
  };

  return (
    <div id={id} className={classList} onClick={onButtonClick}>
      {number !== undefined ? number : operator}
    </div>
  );
};

export default Button;

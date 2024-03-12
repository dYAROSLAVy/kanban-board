import "./button.css";

function Button({
  text,
  onClick,
  styles,
}: {
  text?: string;
  styles?: {};
  onClick?: (index: number | any) => void;
}) {
  return (
    <button className="button" onClick={onClick} style={styles}>
      <span className="buttons-wrapper__add-text">{text}</span>
    </button>
  );
}

export default Button;

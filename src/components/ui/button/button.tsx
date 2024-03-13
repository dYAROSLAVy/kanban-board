import { FC, MouseEvent } from "react";
import "./button.css";

export type ButtonProps = {
  text?: string;
  styles?: {};
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, styles, text } = props;
  return (
    <button className="button" onClick={onClick} style={styles}>
      <span className="buttons-wrapper__add-text">{text}</span>
    </button>
  );
};

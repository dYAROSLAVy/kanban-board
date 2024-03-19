import { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import "./button.css";

export type ButtonProps = {
  text?: string;
  styles?: {};
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, styles, text, type = "button" } = props;
  return (
    <button className="button" onClick={onClick} style={styles} type={type}>
      <span className="buttons-wrapper__add-text">{text}</span>
    </button>
  );
};

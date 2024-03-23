import { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import "./button.css";

export type ButtonProps = {
  text?: string;
  styles?: {};
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ onClick, styles, text, type = "button" }) => {
  return (
    <button className="button" onClick={onClick} style={styles} type={type}>
      <span className="buttons-wrapper__add-text">{text}</span>
    </button>
  );
};

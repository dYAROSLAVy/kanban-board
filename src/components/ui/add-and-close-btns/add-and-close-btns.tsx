import { Button } from "../button/button";
import { FC } from "react";
import { CloseBtn } from "../close-btn/close-btn";
import "./add-and-close-btns.css";

export type AddAndCloseBtnsProps = {
  close?: () => void;
  text?: string;
};

export const AddAndCloseBtns: FC<AddAndCloseBtnsProps> = (props) => {
  const { text, close } = props;
  return (
    <div className="buttons-wrapper">
      <Button text={text} type="submit" />
      <CloseBtn close={close} ariaLabel={"Close text field"} />
    </div>
  );
};

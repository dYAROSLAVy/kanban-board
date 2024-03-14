import { Button } from "../button/button";
import { FC } from "react";
import { CloseBtn } from "../close-btn/close-btn";
import "./add-and-close-btns.css";

export type AddAndCloseBtnsProps = {
  close?: () => void;
  add?: () => void;
  text?: string;
};

export const AddAndCloseBtns: FC<AddAndCloseBtnsProps> = (props) => {
  const { text, add, close } = props;
  return (
    <div className="buttons-wrapper">
      <Button onClick={add} text={text} />
      <CloseBtn close={close} />
    </div>
  );
};

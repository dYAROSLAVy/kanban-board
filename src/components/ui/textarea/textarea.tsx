import { AddAndCloseBtns } from "../add-and-close-btns/add-and-close-btns";
import "./textarea.css";
import { FC } from "react";

export type TextareaProps = {
  close?: () => void;
  add?: () => void;
  text?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  styles?: {};
  onChange?: React.FormEventHandler<HTMLTextAreaElement>;
};

export const Textarea: FC<TextareaProps> = (props) => {
  const {
    close,
    placeholder,
    value,
    onChange,
    textareaRef,
    defaultValue,
    styles,
    add,
    text,
  } = props;
  return (
    <>
      <textarea
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={textareaRef}
        defaultValue={defaultValue}
        style={styles}
        autoFocus
      />
      <AddAndCloseBtns text={text} close={close} add={add} />
    </>
  );
};

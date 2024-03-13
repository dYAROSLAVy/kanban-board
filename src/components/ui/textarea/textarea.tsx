import AddAndCloseBtns from "../add-and-close-btns/add-and-close-btns";
import "./textarea.css";
import {HTMLAttributes} from 'react';

function Textarea({
  close,
  add,
  text,
  placeholder,
  value,
  defaultValue,
  textareaRef,
  styles,
  onChange
}: {
  close?: () => void;
  add?: () => void;
  text?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  styles?: {};
} & HTMLAttributes<HTMLTextAreaElement>) {
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
}

export default Textarea;

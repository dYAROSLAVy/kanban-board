import AddAndCloseBtns from "../add-and-close-btns/add-and-close-btns";
import "./textarea.css";

function Textarea({
  close,
  add,
  text,
  placeholder,
  value,
  defaultValue,
  onChange,
  TextareaRef,
  styles,
}: {
  close?: () => void;
  add?: () => void;
  text?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  TextareaRef?: React.RefObject<HTMLTextAreaElement>;
  styles?: {};
}) {
  return (
    <>
      <textarea
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={TextareaRef}
        defaultValue={defaultValue}
        style={styles}
        autoFocus
      />
      <AddAndCloseBtns text={text} close={close} add={add} />
    </>
  );
}

export default Textarea;

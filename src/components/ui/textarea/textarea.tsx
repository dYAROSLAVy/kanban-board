import { AddAndCloseBtns } from "../add-and-close-btns/add-and-close-btns";
import "./textarea.css";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  textField: string;
};

export type TextareaProps = {
  close?: () => void;
  text?: string;
  placeholder?: string;
  defaultValue?: string;
  styles?: {};
  labelText?: string;
  callback: (text: string) => void;
};

export const Textarea: FC<TextareaProps> = (props) => {
  const {
    close,
    placeholder,
    defaultValue,
    styles,
    text,
    labelText,
    callback,
  } = props;

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    callback(data.textField);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className="label">{labelText}</span>
          <textarea
            className="textarea"
            placeholder={placeholder}
            defaultValue={defaultValue}
            style={styles}
            autoFocus
            {...register("textField")}
          />
        </label>
        <AddAndCloseBtns text={text} close={close} />
      </form>
    </>
  );
};

import { FC } from "react";
import "./close-btn.css";

export type CloseBtnProps = {
  close?: () => void;
  ariaLabel?: string;
};

export const CloseBtn: FC<CloseBtnProps> = ({ close, ariaLabel }) => {
  return (
    <button className="close-btn" onClick={close} aria-label={ariaLabel}>
      <span className="close-btn__decor"></span>
    </button>
  );
};

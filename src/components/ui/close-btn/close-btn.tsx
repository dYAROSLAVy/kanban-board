import "./close-btn.css";

export const CloseBtn = ({
  close,
  ariaLabel,
}: {
  close?: () => void;
  ariaLabel?: string;
}) => {
  return (
    <button className="close-btn" onClick={close} aria-label={ariaLabel}>
      <span className="close-btn__decor"></span>
    </button>
  );
};

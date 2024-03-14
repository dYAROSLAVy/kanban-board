import "./close-btn.css";

export const CloseBtn = ({ close }: { close?: () => void }) => {
  return (
    <button className="close-btn" onClick={close}>
      <span className="close-btn__decor"></span>
    </button>
  );
};

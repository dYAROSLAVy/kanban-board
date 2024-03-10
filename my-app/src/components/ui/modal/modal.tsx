import { PropsWithChildren } from "react";
import CloseBtn from "../close-btn/close-btn";
import "./modal.css";

function Modal({ closeModal, children }: PropsWithChildren<{ closeModal: () => void }>) {
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__close">
          <CloseBtn close={closeModal} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

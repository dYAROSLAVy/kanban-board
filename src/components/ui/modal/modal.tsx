import { FC, PropsWithChildren, useEffect } from "react";
import { CloseBtn } from "../close-btn/close-btn";
import "./modal.css";

export type ModalProps = {
  closeModal: () => void;
  ariaLabel?: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  closeModal,
  children,
  ariaLabel,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeModal();
        }
      });
    };
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__close">
          <CloseBtn close={closeModal} ariaLabel={ariaLabel} />
        </div>
        {children}
      </div>
    </div>
  );
};

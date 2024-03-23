import { FC } from "react";
import { Modal, ModalProps } from "../modal/modal";
import { Textarea } from "../textarea/textarea";
import "./name-modal.css";

export type NameModalProps = ModalProps & {
  callback: (name: string) => void;
};

export const NameModal: FC<NameModalProps> = ({ closeModal, callback }) => {
  return (
    <div className="name-modal">
      <Modal closeModal={closeModal} ariaLabel={"Close name modal"}>
        <h2>Enter your name</h2>
        <Textarea
          close={closeModal}
          text={"Add a name"}
          labelText={"Your name"}
          callback={callback}
        ></Textarea>
      </Modal>
    </div>
  );
};

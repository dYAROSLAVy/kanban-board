import { Modal } from "../modal/modal";
import {Textarea} from "../textarea/textarea";
import "./name-modal.css";

export const NameModal = ({
  closeModal,
  onAddNameClick,
  nameTextareaRef,
}: {
  closeModal: () => void;
  onAddNameClick: () => void;
  nameTextareaRef: React.RefObject<HTMLTextAreaElement>;
}) => {
  return (
    <div className="name-modal">
      <Modal closeModal={closeModal}>
        <h2>Enter your name</h2>
        <Textarea
          add={onAddNameClick}
          close={closeModal}
          text={"Add a name"}
          textareaRef={nameTextareaRef}
        ></Textarea>
      </Modal>
    </div>
  );
};

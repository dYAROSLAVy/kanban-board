import Modal from "../modal/modal";
import Textarea from "../textarea/textarea";
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
    <Modal closeModal={closeModal}>
      <Textarea add={onAddNameClick} textareaRef={nameTextareaRef}></Textarea>
    </Modal>
  );
};
export default NameModal;

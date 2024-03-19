import { Modal } from "../modal/modal";
import { Textarea } from "../textarea/textarea";
import "./name-modal.css";

export const NameModal = ({
  closeModal,
  callback,
}: {
  closeModal: () => void;
  callback: (name: string) => void;
}) => {
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

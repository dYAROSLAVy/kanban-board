import { useState, useRef, ElementRef } from "react";
import AddAndCloseBtns from "../add-and-close-btns/add-and-close-btns";
import Modal from "../modal/modal";
import "./card-modal.css";

function CardModal({
  closeModal,
  columnTitle,
  title,
}: {
  closeModal: () => void;
  columnTitle: string;
  title: string;
}) {
  const [showDescriptionArea, setShowDescriptionArea] = useState(false);
  const [showCommentsArea, setShowCommentsArea] = useState(false);

  const [descriptions, setDescriptions] = useState("");
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const author = 'Yaroslav';

  const openDescriptionArea = () => {
    setShowDescriptionArea(true);
  };

  const closeDescriptionArea = () => {
    setShowDescriptionArea(false);
  };

  const openCommentsArea = () => {
    setShowCommentsArea(true);
  };

  const closeCommentsArea = () => {
    setShowCommentsArea(false);
  };

  function handleAddDescriptionClick() {
    if (textareaRef.current) {
      const description = textareaRef.current.value;
      if (description.length !== 0) {
        setDescriptions(description);
        closeDescriptionArea();
      } else closeDescriptionArea();
    }
  }

  function handleAddCommentClick() {
    closeCommentsArea();
  }

  return (
    <>
      <Modal closeModal={closeModal}>
        <h3 className="card-modal__title">{title}</h3>
        <p className="card-modal__text">
          In the column: <span>{columnTitle}</span>
          <span>Card creator: {author}</span>
        </p>

        <div className="card-modal__description">
          <h4 className="card-modal__subtitle">Description</h4>
          {!showDescriptionArea && (
            <>
              <div
                className="card-modal__fake-textarea"
                onClick={openDescriptionArea}
                tabIndex={0}
              >
                <span className="card-modal__fake-description">
                  {descriptions.length === 0
                    ? "Enter the description"
                    : descriptions}
                </span>
              </div>
            </>
          )}

          {showDescriptionArea && (
            <>
              <textarea
                ref={textareaRef}
                className="card-modal__textarea"
                placeholder="Enter the description"
                value={descriptions}
                onChange={(e) => setDescriptions(e.target.value)}
              />
              <AddAndCloseBtns
                text="Add a description"
                add={handleAddDescriptionClick}
                close={closeDescriptionArea}
              />
            </>
          )}
        </div>

        <div className="card-modal__comments">
          <h4 className="card-modal__subtitle">Comments</h4>
          {!showCommentsArea && (
            <>
              <div
                className="card-modal__fake-textarea"
                onClick={openCommentsArea}
                tabIndex={0}
              >
                {descriptions.length === 0 ? "Enter the comment" : descriptions}
              </div>
            </>
          )}
          {showCommentsArea && (
            <>
              <textarea
                ref={textareaRef}
                className="card-modal__textarea"
                placeholder="Enter the comment"
              />
              <AddAndCloseBtns
                text="Add a comment"
                add={handleAddCommentClick}
                close={closeCommentsArea}
              />
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
export default CardModal;

import { useState, useRef, ElementRef } from "react";
import Modal from "../modal/modal";
import Comment from "../comment/comment";
import "./card-modal.css";
import Textarea from "../textarea/textarea";

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
  const [comments, setComments] = useState<string[]>([]);
  const descriptionTextareaRef = useRef<ElementRef<"textarea">>(null);
  const commentsTextareaRef = useRef<ElementRef<"textarea">>(null);

  const author = "Yaroslav";

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
    if (descriptionTextareaRef.current) {
      const description = descriptionTextareaRef.current.value;
      if (description.length !== 0) {
        setDescriptions(description);
      }
      closeDescriptionArea();
    }
  }

  const addComment = (comment: string) => {
    setComments([...comments, comment]);
  };

  function handleAddCommentClick() {
    if (commentsTextareaRef.current) {
      const comment = commentsTextareaRef.current.value;
      if (comment.length !== 0) {
        addComment(comment);
      }
      closeCommentsArea();
    }
  }

  const editComment = (index: number, newText: string) => {
    const newComments = [...comments];
    newComments[index] = newText;
    setComments(newComments);
  };

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
              <Textarea
                text={"Add a description"}
                add={handleAddDescriptionClick}
                close={closeDescriptionArea}
                placeholder={"Enter the description"}
                value={descriptions}
                onChange={(e) => setDescriptions(e.target.value)}
                TextareaRef={descriptionTextareaRef}
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
                <span className="card-modal__fake-description">
                  Enter the comment
                </span>
              </div>
            </>
          )}
          {showCommentsArea && (
            <>
              <Textarea
                text={"Add a comment"}
                add={handleAddCommentClick}
                close={closeCommentsArea}
                placeholder={"Enter the comment"}
                TextareaRef={commentsTextareaRef}
              />
            </>
          )}
          <div className="card-modal__comments-list">
            {comments.map((comment) => (
              <Comment text={comment} author={author} />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
export default CardModal;

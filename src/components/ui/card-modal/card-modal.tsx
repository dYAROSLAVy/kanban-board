import { useState, FC } from "react";
import { Modal } from "../modal/modal";
import { Comment } from "../comment/comment";
import "./card-modal.css";
import { Textarea } from "../textarea/textarea";
import { CardProps } from "../card/card";
import { Button } from "../button/button";
import { useAppDispatch } from "../../../store/hooks";
import {
  deleteCard,
  editCardTitle,
  addDescriptionToCard,
  addCommentToCard,
} from "../../../store/columns/columnSlice";

export type CardModalProps = CardProps & {
  closeModal: () => void;
};

export const CardModal: FC<CardModalProps> = ({
  cardTitle,
  closeModal,
  cardIndex,
  columnTitle,
  userName,
  comments,
  description,
  columnIndex,
}) => {
  const [showTitleArea, setShowTitleArea] = useState(false);
  const [showDescriptionArea, setShowDescriptionArea] = useState(false);
  const [showCommentsArea, setShowCommentsArea] = useState(false);

  const dispatch = useAppDispatch();

  const openTitleArea = () => {
    setShowTitleArea(true);
  };

  const closeTitleArea = () => {
    setShowTitleArea(false);
  };

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

  const onAddDescriptionClick = (description: string) => {
    dispatch(addDescriptionToCard({ columnIndex, cardIndex, description }));
    closeDescriptionArea();
  };

  const onAddCommentClick = (comment: string) => {
    if (comment.length !== 0) {
      dispatch(addCommentToCard({ columnIndex, cardIndex, comment }));
    }
    closeCommentsArea();
  };

  const onEditTitleClick = (cardTitle: string) => {
    dispatch(editCardTitle({ columnIndex, cardIndex, cardTitle }));
    closeTitleArea();
  };

  const onDeleteCardClick = () => {
    dispatch(deleteCard({ columnIndex, cardIndex }));
    closeModal();
  };

  const styles = {
    height: "50px",
    fontSize: "20px",
    fontWeight: "700",
  };

  return (
    <>
      <Modal closeModal={closeModal}>
        {!showTitleArea && (
          <h3
            className="card-modal__title"
            tabIndex={0}
            onClick={openTitleArea}
          >
            {cardTitle}
          </h3>
        )}
        {showTitleArea && (
          <Textarea
            close={closeTitleArea}
            defaultValue={cardTitle}
            styles={styles}
            text={"Edit a title"}
            callback={onEditTitleClick}
          />
        )}
        <p className="card-modal__text">
          In the column: <span>{columnTitle}</span>
          <span className="card-modal__text-creator">
            Card creator: {userName}
          </span>
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
                  {description && description.length > 0
                    ? description
                    : "Enter the description"}
                </span>
              </div>
            </>
          )}

          {showDescriptionArea && (
            <>
              <Textarea
                text={"Add a description"}
                callback={onAddDescriptionClick}
                close={closeDescriptionArea}
                placeholder={"Enter the description"}
                defaultValue={description}
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
                callback={onAddCommentClick}
                close={closeCommentsArea}
                placeholder={"Enter the comment"}
              />
            </>
          )}
          <div className="card-modal__comments-list">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                cardIndex={cardIndex}
                commentIndex={index}
                text={comment}
                userName={userName}
                columnIndex={columnIndex}
              />
            ))}
          </div>
        </div>
        <div className="card-modal__delete">
          <Button text={"Delete a card"} onClick={onDeleteCardClick} />
        </div>
      </Modal>
    </>
  );
};

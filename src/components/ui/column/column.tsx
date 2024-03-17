import "./column.css";
import { Card } from "../card/card";
import { AddCard } from "../add-card/add-card";
import { FC, useState, useRef, ElementRef } from "react";
import { ColumnType } from "./types";
import { Textarea } from "../textarea/textarea";
// import { setCardToLocalStorage } from "../../../utils/local-storage";

import { useDispatch } from "react-redux";
import {
  addCard,
  deleteCard,
  editCardTitle,
  addDescriptionToCard,
  addCommentToCard,
  deleteCommentFromCard,
  editCommentFromCard,
} from "../../../store/columns/columnSlice";

export type ColumnProps = ColumnType & {
  userName: string;
  columnIndex: number;
  addColumnTitle: (columnIndex: number, columnTitle: string) => void;
};

export const Column: FC<ColumnProps> = (props) => {
  const { cards, userName, columnTitle, columnIndex, addColumnTitle } = props;
  const [showColumnTitleArea, setShowColumnTextArea] = useState(false);
  const columnTitleTextareaRef = useRef<ElementRef<"textarea">>(null);
  const dispatch = useDispatch();

  const openColumnTitleArea = () => {
    setShowColumnTextArea(true);
  };

  const closeColumnTitleArea = () => {
    setShowColumnTextArea(false);
  };

  const onEditTitleClick = () => {
    if (columnTitleTextareaRef.current) {
      const newTitle = columnTitleTextareaRef.current.value;
      if (newTitle.length !== 0) {
        addColumnTitle(columnIndex, newTitle);
      }
      closeColumnTitleArea();
    }
  };

  const addCardAction = (cardTitle: string) => {
    dispatch(addCard({ columnIndex, cardTitle }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const deleteCardAction = (cardIndex: number) => {
    dispatch(deleteCard({ columnIndex, cardIndex }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const editCardTitleActions = (cardIndex: number, cardTitle: string) => {
    dispatch(editCardTitle({ columnIndex, cardIndex, cardTitle }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const addDescriptionToCardActions = (
    cardIndex: number,
    description: string
  ) => {
    dispatch(addDescriptionToCard({ columnIndex, cardIndex, description }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const addCommentToCardActions = (cardIndex: number, comment: string) => {
    dispatch(addCommentToCard({ columnIndex, cardIndex, comment }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const deleteCommentFromCardActions = (
    cardIndex: number,
    commentIndex: number
  ) => {
    dispatch(deleteCommentFromCard({ columnIndex, cardIndex, commentIndex }));
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const editCommentFromCardActions = (
    cardIndex: number,
    commentIndex: number,
    newCommentText: string
  ) => {
    dispatch(
      editCommentFromCard({
        columnIndex,
        cardIndex,
        commentIndex,
        newCommentText,
      })
    );
    // setCardToLocalStorage(columnIndex, newCards);
  };

  const styles = {
    height: "45px",
    fontWeight: "700",
  };

  return (
    <div className="column">
      {!showColumnTitleArea && (
        <h2
          className="column__title"
          tabIndex={0}
          onClick={openColumnTitleArea}
        >
          {columnTitle}
        </h2>
      )}

      {showColumnTitleArea && (
        <Textarea
          defaultValue={columnTitle}
          styles={styles}
          text={"Edit a title"}
          close={closeColumnTitleArea}
          textareaRef={columnTitleTextareaRef}
          add={onEditTitleClick}
        />
      )}
      {cards.length !== 0 && (
        <div className="column__card-list">
          {cards.map((card, index) => (
            <Card
              key={index}
              cardIndex={index}
              editCardTitle={editCardTitleActions}
              deleteCard={deleteCardAction}
              {...card}
              userName={userName}
              columnTitle={columnTitle}
              addCommentToCard={addCommentToCardActions}
              deleteCommentFromCard={deleteCommentFromCardActions}
              editCommentFromCard={editCommentFromCardActions}
              addDescriptionToCard={addDescriptionToCardActions}
            />
          ))}
        </div>
      )}

      <AddCard addCard={addCardAction} />
    </div>
  );
};

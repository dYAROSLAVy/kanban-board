import "./column.css";
import { Card } from "../card/card";
import { AddCard } from "../add-card/add-card";
import { FC, useState } from "react";
import { ColumnType } from "./types";
import { Textarea } from "../textarea/textarea";
import { useAppDispatch } from "../../../store/hooks";
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
  const dispatch = useAppDispatch();

  const openColumnTitleArea = () => {
    setShowColumnTextArea(true);
  };

  const closeColumnTitleArea = () => {
    setShowColumnTextArea(false);
  };

  const onEditTitleClick = (newTitle: string) => {
    if (newTitle.length !== 0) {
      addColumnTitle(columnIndex, newTitle);
    }
    closeColumnTitleArea();
  };

  const addCardAction = (cardTitle: string) => {
    dispatch(addCard({ columnIndex, cardTitle }));
  };

  const deleteCardAction = (cardIndex: number) => {
    dispatch(deleteCard({ columnIndex, cardIndex }));
  };

  const editCardTitleActions = (cardIndex: number, cardTitle: string) => {
    dispatch(editCardTitle({ columnIndex, cardIndex, cardTitle }));
  };

  const addDescriptionToCardActions = (
    cardIndex: number,
    description: string
  ) => {
    dispatch(addDescriptionToCard({ columnIndex, cardIndex, description }));
  };

  const addCommentToCardActions = (cardIndex: number, comment: string) => {
    dispatch(addCommentToCard({ columnIndex, cardIndex, comment }));
  };

  const deleteCommentFromCardActions = (
    cardIndex: number,
    commentIndex: number
  ) => {
    dispatch(deleteCommentFromCard({ columnIndex, cardIndex, commentIndex }));
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
          callback={onEditTitleClick}
          labelText={"Column title"}
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

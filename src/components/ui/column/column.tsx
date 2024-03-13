import "./column.css";
import { Card } from "../card/card";
import AddCard from "../add-card/add-card";
import { FC, useState, useRef, ElementRef } from "react";
import { ColumnType } from "./types";
import Textarea from "../textarea/textarea";

export type ColumnProps = ColumnType & {
  userName: string;
  columnIndex: number;
  addColumnTitle: (columnIndex: number, columnTitle: string) => void;
};

export const Column: FC<ColumnProps> = (props) => {
  const { cards, userName, columnTitle, columnIndex, addColumnTitle } = props;
  const [columnCards, setColumnCards] = useState(cards);
  const [showColumnTitleArea, setShowColumnTextArea] = useState(false);

  const columnTitleTextareaRef = useRef<ElementRef<"textarea">>(null);

  const openColumnTitleArea = () => {
    setShowColumnTextArea(true);
  };

  const closeColumnTitleArea = () => {
    setShowColumnTextArea(false);
  };

  function handleEditTitleClick() {
    if (columnTitleTextareaRef.current) {
      const newTitle = columnTitleTextareaRef.current.value;
      if (newTitle.length !== 0) {
        addColumnTitle(columnIndex, newTitle);
      }
      closeColumnTitleArea();
    }
  }

  const addCard = (cardTitle: string) => {
    setColumnCards([
      ...columnCards,
      {
        cardTitle,
        comments: [],
        description: "",
      },
    ]);
  };
  
  const deleteCard = (index: number) => {
    const newCards = [...columnCards];
    newCards.splice(index, 1);
    setColumnCards(newCards);
  };

  const editCardTitle = (cardIndex: number, cardTitle: string) => {
    const newCards = [...columnCards];
    newCards[cardIndex].cardTitle = cardTitle;
    setColumnCards(newCards);
  };

  const addDescriptionToCard = (cardIndex: number, text: string) => {
    const newCards = [...columnCards];
    newCards[cardIndex].description = text;
    setColumnCards(newCards);
  };

  const addCommentToCard = (cardIndex: number, text: string) => {
    const newCards = [...columnCards];
    newCards[cardIndex].comments.push(text);
    setColumnCards(newCards);
  };

  const deleteCommentFromCard = (cardIndex: number, commentIndex: number) => {
    const newCards = [...columnCards];
    newCards[cardIndex].comments.splice(commentIndex, 1);
    setColumnCards(newCards);
  };

  const editCommentFromCard = (
    cardIndex: number,
    commentIndex: number,
    newText: string
  ) => {
    const newCards = [...columnCards];
    newCards[cardIndex].comments[commentIndex] = newText;
    setColumnCards(newCards);
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
          add={handleEditTitleClick}
        />
      )}
      {columnCards.length !== 0 && (
        <div className="column__card-list">
          {columnCards.map((card, index) => (
            <Card
              key={index}
              cardIndex={index}
              editCardTitle={editCardTitle}
              deleteCard={deleteCard}
              {...card}
              userName={userName}
              columnTitle={columnTitle}
              addCommentToCard={addCommentToCard}
              deleteCommentFromCard={deleteCommentFromCard}
              editCommentFromCard={editCommentFromCard}
              addDescriptionToCard={addDescriptionToCard}
            />
          ))}
        </div>
      )}

      <AddCard addCard={addCard} />
    </div>
  );
};

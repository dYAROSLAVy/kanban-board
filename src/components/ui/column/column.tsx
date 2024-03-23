import "./column.css";
import { Card } from "../card/card";
import { AddCard } from "../add-card/add-card";
import { FC, useState } from "react";
import { ColumnType } from "../../../utils/types";
import { Textarea } from "../textarea/textarea";

export type ColumnProps = ColumnType & {
  userName: string;
  columnIndex: number;
  addColumnTitle: (columnIndex: number, columnTitle: string) => void;
};

export const Column: FC<ColumnProps> = ( { cards, userName, columnTitle, columnIndex, addColumnTitle }) => {
  const [showColumnTitleArea, setShowColumnTextArea] = useState(false);

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
              {...card}
              userName={userName}
              columnTitle={columnTitle}
              columnIndex={columnIndex}
            />
          ))}
        </div>
      )}

      <AddCard columnIndex={columnIndex} />
    </div>
  );
};

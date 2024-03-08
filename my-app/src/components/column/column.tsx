import "./column.css";
import Card from "../card/card";
import ColumnButton from "../button/column-button";
import { useState } from "react";

function Column({
  title,
  cards,
}: {
  title: string;
  cards: Array<{ cardTitle: string }>;
}) {
  const [columnCards, setColumnCards] = useState(cards);

  const addCard = (cardTitle: string) => {
    setColumnCards([...columnCards, { cardTitle }]);
  };

  return (
    <div className="column">
      <h2 className="column__title" tabIndex={0}>
        {title}
      </h2>
      <div className="column__card-list">
        {columnCards.map(({ cardTitle }) => (
          <Card title={cardTitle} />
        ))}
      </div>
      <ColumnButton addCard={addCard} />
    </div>
  );
}

export default Column;

import "./column.css";
import Card from "../card/card";
import AddCard from "../add-card/add-card";
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
      {columnCards.length !== 0 && (
        <div className="column__card-list">
          {columnCards.map(({ cardTitle }, index) => (
            <Card title={cardTitle} columnTitle={title} key={index} />
          ))}
        </div>
      )}

      <AddCard addCard={addCard} />
    </div>
  );
}

export default Column;

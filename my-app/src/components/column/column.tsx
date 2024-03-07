import "./column.css";
import Card from "../card/card";

function Column({
  title,
  cards,
}: {
  title: string;
  cards: Array<{ cardTitle: string }>;
}) {
  return (
    <div className="column">
      <h2 className="column__title" tabIndex={0}>
        {title}
      </h2>
      <div className="column__card-list">
        {cards.map(({ cardTitle }) => (
          <Card title={cardTitle} />
        ))}
      </div>
      <button className="column__add-btn">
        <span className="column__add-btn-text">Add a card</span>
      </button>
    </div>
  );
}

export default Column;

import "./column.css";

function Column(props: { title: string }) {
  return (
    <div className="column">
      <h2 className="column__title" tabIndex={0}>
        {props.title}
      </h2>
      <button className="column__add-btn">
        <span className="column__add-btn-text">Add a card</span>
      </button>
    </div>
  );
}

export default Column;

import "./main.css";
import COLUMNS from "../mocks/mocks";
import Column from "../column/column";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">My board</h1>
      <div className="main__board">
        {COLUMNS.map(({ title, cards }) => (
          <Column title={title} cards={cards} />
        ))}
      </div>
    </main>
  );
}

export default Main;

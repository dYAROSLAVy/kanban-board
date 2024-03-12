import "./main.css";
import COLUMNS from "../../mocks/mocks";
import Column from "../../ui/column/column";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">My board</h1>
      <div className="main__board">
        {COLUMNS.map(({ title, cards }, index) => (
          <Column title={title} cards={cards} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Main;

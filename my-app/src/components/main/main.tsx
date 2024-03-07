import "./main.css";
import COLUMNS from "../mocks/columns";
import Column from "../column/column";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">My board</h1>
      <div className="main__board">
        {COLUMNS.map(({ title }) => (
          <Column title={title} />
        ))}
      </div>
    </main>
  );
}

export default Main;

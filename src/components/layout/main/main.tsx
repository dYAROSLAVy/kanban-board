import "./main.css";
import { FC, useState } from "react";
import COLUMNS from "../../mocks/mocks";
import { Column } from "../../ui/column/column";

export type MainProps = {
  userName: string;
};

export const Main: FC<MainProps> = (props) => {
  const [columns, setColumns] = useState(COLUMNS);

  const addColumnTitle = (columnIndex: number, columnTitle: string) => {
    const newColumns = [...columns];
    newColumns[columnIndex].title = columnTitle;
    setColumns(newColumns);
  };

  return (
    <main className="main">
      <h1 className="main__title">My board</h1>
      <div className="main__board">
        {COLUMNS.map(({ title, cards }, index) => (
          <Column
            columnTitle={title}
            cards={cards}
            key={index}
            columnIndex={index}
            addColumnTitle={addColumnTitle}
            {...props}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;

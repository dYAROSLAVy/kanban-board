import "./main.css";
import { FC, useState } from "react";
import { Column } from "../../ui/column/column";
import { getData, saveDataToLocalStorage } from "../../utils/local-storage";

export type MainProps = {
  userName: string;
};

export const Main: FC<MainProps> = (props) => {
  const [columns, setColumns] = useState(() => getData());

  const addColumnTitle = (columnIndex: number, columnTitle: string) => {
    const newColumns = [...columns];
    newColumns[columnIndex].columnTitle = columnTitle;
    setColumns(newColumns);
    saveDataToLocalStorage(newColumns);
  };

  return (
    <main className="main">
      <h1 className="main__title">My board</h1>
      <div className="main__board">
        {columns.map(({ columnTitle, cards }, index: number) => (
          <Column
            columnTitle={columnTitle}
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
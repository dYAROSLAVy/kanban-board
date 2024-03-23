import "./main.css";
import { FC } from "react";
import { Column } from "../../ui/column/column";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { editColumnTitle } from "../../../store/columns/columnSlice";
import { getColumns } from "../../../store/columns/selectors";

export type MainProps = {
  userName: string;
};

export const Main: FC<MainProps> = (props) => {
  const columns = useAppSelector(getColumns);
  
  const dispatch = useAppDispatch();

  const addColumnTitle = (columnIndex: number, columnTitle: string) => {
    dispatch(editColumnTitle({ columnIndex, columnTitle }));
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

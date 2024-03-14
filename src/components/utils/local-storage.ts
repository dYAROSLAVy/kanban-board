import { CardType } from "../ui/card/types";
import { ColumnType } from "../ui/column/types";
import COLUMNS, { Columns } from "./mocks";

const LOCAL_STORAGE_KEY = "not-trello";

export const getData = () => {
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as Columns;
  }
  return COLUMNS;
};

export const saveDataToLocalStorage = (data: ColumnType[]) => {
  const dataString = JSON.stringify(data);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, dataString);
};

export const getColumn = (index: number) => {
  const data = getData();
  if (data) {
    return data[index];
  }
  return COLUMNS[index];
};

export const setColumnsToLocalStorage = (index: number, column: ColumnType) => {
  const data = getData();
  const prevColumns = data ? data : COLUMNS;
  const newData = [...prevColumns];
  newData[index] = column;
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
};

export const setCardToLocalStorage = (columnIndex: number, cards: CardType[]) => {
  const column = getColumn(columnIndex);
  column.cards = cards;
  setColumnsToLocalStorage(columnIndex, column);
};

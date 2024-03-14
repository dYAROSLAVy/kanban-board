import { ColumnType } from "../ui/column/types";

const COLUMNS: Columns = [
  { columnTitle: "To do", cards: [] },
  { columnTitle: "In Progress", cards: [] },
  { columnTitle: "Testing", cards: [] },
  { columnTitle: "Done", cards: [] },
];


export type Columns = ColumnType[];

export default COLUMNS;

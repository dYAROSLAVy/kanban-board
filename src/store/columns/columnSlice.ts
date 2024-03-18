import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColumnType } from "../../components/ui/column/types";
import COLUMNS from "../../utils/constants";

type ColumnsState = ColumnType[];

const initialState: ColumnsState = COLUMNS;

export const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    editColumnTitle: (
      state,
      action: PayloadAction<{ columnIndex: number; columnTitle: string }>
    ) => {
      const { columnIndex, columnTitle } = action.payload;
      state[columnIndex].columnTitle = columnTitle;
    },
    addCard: (
      state,
      action: PayloadAction<{ columnIndex: number; cardTitle: string }>
    ) => {
      const { columnIndex, cardTitle } = action.payload;
      state[columnIndex].cards.push({ cardTitle, comments: [] });
    },
    deleteCard: (
      state,
      action: PayloadAction<{ columnIndex: number; cardIndex: number }>
    ) => {
      const { columnIndex, cardIndex } = action.payload;
      state[columnIndex].cards.splice(cardIndex, 1);
    },
    editCardTitle: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        cardIndex: number;
        cardTitle: string;
      }>
    ) => {
      const { columnIndex, cardIndex, cardTitle } = action.payload;
      state[columnIndex].cards[cardIndex].cardTitle = cardTitle;
    },
    addDescriptionToCard: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        cardIndex: number;
        description: string;
      }>
    ) => {
      const { columnIndex, cardIndex, description } = action.payload;
      state[columnIndex].cards[cardIndex].description = description;
    },
    addCommentToCard: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        cardIndex: number;
        comment: string;
      }>
    ) => {
      const { columnIndex, cardIndex, comment } = action.payload;
      state[columnIndex].cards[cardIndex].comments.push(comment);
    },
    deleteCommentFromCard: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        cardIndex: number;
        commentIndex: number;
      }>
    ) => {
      const { columnIndex, cardIndex, commentIndex } = action.payload;
      state[columnIndex].cards[cardIndex].comments.splice(commentIndex, 1);
    },
    editCommentFromCard: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        cardIndex: number;
        commentIndex: number;
        newCommentText: string;
      }>
    ) => {
      const { columnIndex, cardIndex, commentIndex, newCommentText } =
        action.payload;
      state[columnIndex].cards[cardIndex].comments[commentIndex] =
        newCommentText;
    },
  },
});

export const {
  editColumnTitle,
  addCard,
  deleteCard,
  editCardTitle,
  addDescriptionToCard,
  addCommentToCard,
  deleteCommentFromCard,
  editCommentFromCard,
} = columnSlice.actions;

export default columnSlice.reducer;

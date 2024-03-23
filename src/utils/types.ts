export type CardType = {
  cardTitle: string;
  description?: string;
  comments: CommentType[];
};

export type ColumnType = {
  columnTitle: string;
  cards: CardType[];
};

export type CommentType = string;

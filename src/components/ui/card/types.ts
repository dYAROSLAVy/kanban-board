import { CommentType } from "../comment/types";

export type CardType = {
  cardTitle: string;
  description?: string;
  comments: CommentType[];
};

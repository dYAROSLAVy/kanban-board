import { FC, useState } from "react";
import {CardModal} from "../card-modal/card-modal";
import { Button } from "../button/button";
import { CardType } from "./types";
import "./card.css";

export type CardProps = CardType & {
  cardIndex: number;
  userName: string;
  columnTitle: string;
  editCommentFromCard: (
    cardIndex: number,
    commentIndex: number,
    newText: string
  ) => void;
  addDescriptionToCard: (cardIndex: number, text: string) => void;
  deleteCommentFromCard: (cardIndex: number, commentIndex: number) => void;
  addCommentToCard: (cardIndex: number, commentText: string) => void;
  editCardTitle: (cardIndex: number, cardTitle: string) => void;
  deleteCard: (index: number) => void;
};

export const Card: FC<CardProps> = (props) => {
  const { cardTitle, comments } = props;
  const [showModal, setShowCardModal] = useState(false);

  const openModal = () => {
    setShowCardModal(true);
  };

  const closeModal = () => {
    setShowCardModal(false);
  };

  const styles = {
    width: "100%",
    textAlign: "left",
  };

  return (
    <div className="card">
      <Button onClick={openModal} text={cardTitle} styles={styles} />
      {showModal && <CardModal closeModal={closeModal} {...props} />}
      <span className="card__comment-count">Comments: {comments.length} </span>
    </div>
  );
};

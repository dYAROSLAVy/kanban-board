import { useState, useRef, ElementRef, FC } from "react";
import "./comment.css";
import {Textarea} from "../textarea/textarea";
import { Button } from "../button/button";
import { CommentType } from "./types";

export type CommentProps = {
  cardIndex: number;
  commentIndex: number;
  userName: string;
  deleteCommentFromCard: (cardIndex: number, commentIndex: number) => void;
  editCommentFromCard: (
    cardIndex: number,
    commentIndex: number,
    newText: string
  ) => void;
  text: CommentType;
};

export const Comment: FC<CommentProps> = (props) => {
  const {
    deleteCommentFromCard,
    editCommentFromCard,
    cardIndex,
    commentIndex,
    userName,
    text,
  } = props;
  const [showCommentArea, setShowCommentArea] = useState(false);
  const commentTextareaRef = useRef<ElementRef<"textarea">>(null);

  const openCommentArea = () => {
    setShowCommentArea(true);
  };

  const closeCommentArea = () => {
    setShowCommentArea(false);
  };

  const onDeleteButtonClick = () => {
    deleteCommentFromCard(cardIndex, commentIndex);
  };

  const onEditButtonClick = () => {
    if (commentTextareaRef.current) {
      const newText = commentTextareaRef.current.value;
      editCommentFromCard(cardIndex, commentIndex, newText);
    }
    closeCommentArea();
  };

  return (
    <div className="comment">
      <span className="comment__author">{userName ? userName : "Anonymous"}</span>

      {!showCommentArea && (
        <>
          <span>{text}</span>
          <div className="comment__btns-wrapper">
            <Button onClick={openCommentArea} text={"Edit a comment"} />
            <Button onClick={onDeleteButtonClick} text={"Delete a comment"} />
          </div>
        </>
      )}
      {showCommentArea && (
        <Textarea
          close={closeCommentArea}
          text={"Save changes"}
          defaultValue={text}
          add={onEditButtonClick}
          textareaRef={commentTextareaRef}
        />
      )}
    </div>
  );
};

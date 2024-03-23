import { useState, FC } from "react";
import "./comment.css";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";
import { CommentType } from "../../../utils/types";
import { useAppDispatch } from "../../../store/hooks";
import {
  deleteCommentFromCard,
  editCommentFromCard,
} from "../../../store/columns/columnSlice";

export type CommentProps = {
  cardIndex: number;
  commentIndex: number;
  columnIndex: number;
  userName: string;
  text: CommentType;
};

export const Comment: FC<CommentProps> = ({ cardIndex, commentIndex, userName, columnIndex, text }) => {
  const [showCommentArea, setShowCommentArea] = useState(false);

  const dispatch = useAppDispatch();

  const openCommentArea = () => {
    setShowCommentArea(true);
  };

  const closeCommentArea = () => {
    setShowCommentArea(false);
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteCommentFromCard({ columnIndex, cardIndex, commentIndex }));
  };

  const onEditButtonClick = (newCommentText: string) => {
    dispatch(
      editCommentFromCard({
        columnIndex,
        cardIndex,
        commentIndex,
        newCommentText,
      })
    );
    closeCommentArea();
  };

  return (
    <div className="comment">
      <span className="comment__author">{userName}</span>

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
          callback={onEditButtonClick}
        />
      )}
    </div>
  );
};

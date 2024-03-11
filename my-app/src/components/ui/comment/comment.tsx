import { useState } from "react";
import "./comment.css";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

function Comment({ text, author }: { text: string; author: string }) {
  const [showCommentArea, setShowCommentArea] = useState(false);

  const openCommentArea = () => {
    setShowCommentArea(true);
  };

  const closeCommentArea = () => {
    setShowCommentArea(false);
  };

  return (
    <div className="comment">
      <span className="comment__author">{author}:</span>

      {!showCommentArea && (
        <>
          <span>{text}</span>
          <div className="comment__btns-wrapper">
            <Button onClick={openCommentArea} text={"Edit a comment"} />
            <Button text={"Delete a comment"} />
          </div>
        </>
      )}
      {showCommentArea && (
        <Textarea
          close={closeCommentArea}
          text={"Save changes"}
          defaultValue={text}
          add={closeCommentArea}
        />
      )}
    </div>
  );
}

export default Comment;

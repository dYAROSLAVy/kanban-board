import "./comment.css";

function Comment({text, author}: {text:string, author:string}) {
  return (
    <div className="comment">
        <span className="comment__author">{author}:</span>
        <span>{text}</span>
    </div>
  );
}

export default Comment;

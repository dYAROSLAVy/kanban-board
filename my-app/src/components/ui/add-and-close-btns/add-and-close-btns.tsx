import Button from "../button/button";
import CloseBtn from "../close-btn/close-btn";
import "./add-and-close-btns.css";

function AddAndCloseBtns({
  close,
  add,
  text,
}: {
  close: () => void;
  add: () => void;
  text: string;
}) {
  return (
    <div className="buttons-wrapper">
      <Button onClick={add} text={text} />
      <CloseBtn close={close} />
    </div>
  );
}

export default AddAndCloseBtns;

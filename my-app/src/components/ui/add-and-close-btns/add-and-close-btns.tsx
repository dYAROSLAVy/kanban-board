import CloseBtn from "../close-btn/close-btn";
import "./add-and-close-btns.css";

function AddAndCloseBtns({
  close,
  add,
  text
}: {
  close: () => void;
  add: () => void;
  text: string
}) {
  return (
    <div className="buttons-wrapper">
      <button className="buttons-wrapper__add" onClick={add}>
        <span className="buttons-wrapper__add-text">{text}</span>
      </button>
      <CloseBtn close={close} />
    </div>
  );
}

export default AddAndCloseBtns;

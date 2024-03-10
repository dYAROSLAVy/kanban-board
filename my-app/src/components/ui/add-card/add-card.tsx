import { useState, useRef, ElementRef } from "react";
import "./add-card.css";
import AddAndCloseBtns from "../add-and-close-btns/add-and-close-btns";

function AddCardBtn({ addCard }: { addCard?: (title: string) => void }) {
  const [showArea, setShowArea] = useState(false);
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const openTextArea = () => {
    setShowArea(true);
  };

  const closeTextArea = () => {
    setShowArea(false);
  };

  function handleAddCardClick() {
    if (textareaRef.current) {
      const cardTitle = textareaRef.current.value;
      if (cardTitle.length !== 0) {
        addCard?.(cardTitle);
        closeTextArea();
      } else closeTextArea();
    }
  }

  return (
    <div className="column-button">
      {!showArea && (
        <button className="column-button__button" onClick={openTextArea}>
          <span className="column-button__text">Add a card</span>
        </button>
      )}
      {showArea && (
        <>
          <textarea
            ref={textareaRef}
            className="column-button__textarea"
            placeholder="Enter the card title"
          />
          <AddAndCloseBtns text='Add a card' add={handleAddCardClick} close={closeTextArea} />
        </>
      )}
    </div>
  );
}

export default AddCardBtn;

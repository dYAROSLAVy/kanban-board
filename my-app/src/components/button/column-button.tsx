import { useState, useRef, ElementRef } from "react";
import "./column-button.css";

function ColumnButton({ addCard }: { addCard?: (title: string) => void }) {
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
      }
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
          <div className="column-button__buttons-wrapper">
            <button
              className="column-button__button"
              onClick={handleAddCardClick}
            >
              <span className="column-button__text">Add a card</span>
            </button>
            <button
              className="column-button__button-close"
              onClick={closeTextArea}
            >
              <span className="column-button__button-close-decor"></span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ColumnButton;

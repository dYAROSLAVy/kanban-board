import { useState, useRef, ElementRef } from "react";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

function AddCard({ addCard }: { addCard?: (title: string) => void }) {
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
    <>
      {!showArea && <Button onClick={openTextArea} text={"Add a card"} />}
      {showArea && (
        <Textarea
          placeholder={"Enter the card title"}
          add={handleAddCardClick}
          close={closeTextArea}
          TextareaRef={textareaRef}
          text={"Add a card"}
        />
      )}
    </>
  );
}

export default AddCard;

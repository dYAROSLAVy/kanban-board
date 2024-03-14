import { useState, useRef, ElementRef } from "react";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";

export const AddCard = ({ addCard }: { addCard?: (title: string) => void }) => {
  const [showArea, setShowArea] = useState(false);
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const openTextArea = () => {
    setShowArea(true);
  };

  const closeTextArea = () => {
    setShowArea(false);
  };

  const onAddCardClick = () => {
    if (textareaRef.current) {
      const cardTitle = textareaRef.current.value;
      if (cardTitle.length !== 0) {
        addCard?.(cardTitle);
        closeTextArea();
      } else closeTextArea();
    }
  };

  return (
    <>
      {!showArea && <Button onClick={openTextArea} text={"Add a card"} />}
      {showArea && (
        <Textarea
          placeholder={"Enter the card title"}
          add={onAddCardClick}
          close={closeTextArea}
          textareaRef={textareaRef}
          text={"Add a card"}
        />
      )}
    </>
  );
};

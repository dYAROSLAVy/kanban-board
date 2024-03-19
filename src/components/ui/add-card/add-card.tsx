import { useState } from "react";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";

export const AddCard = ({ addCard }: { addCard?: (title: string) => void }) => {
  const [showArea, setShowArea] = useState(false);

  const openTextArea = () => {
    setShowArea(true);
  };

  const closeTextArea = () => {
    setShowArea(false);
  };

  const onAddCardClick = (cardTitle: string) => {
    if (cardTitle.length !== 0) {
      addCard?.(cardTitle);
    }
    closeTextArea();
  };

  return (
    <>
      {!showArea && <Button onClick={openTextArea} text={"Add a card"} />}
      {showArea && (
        <Textarea
          placeholder={"Enter the card title"}
          callback={onAddCardClick}
          close={closeTextArea}
          text={"Add a card"}
          labelText={"Card title"}
        />
      )}
    </>
  );
};

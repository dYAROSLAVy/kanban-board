import { FC, useState } from "react";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";
import { useAppDispatch } from "../../../store/hooks";
import { addCard } from "../../../store/columns/columnSlice";

export type AddCardProps = {
  columnIndex: number;
};

export const AddCard: FC<AddCardProps> = ({ columnIndex }) => {
  const [showArea, setShowArea] = useState(false);

  const dispatch = useAppDispatch();

  const openTextArea = () => {
    setShowArea(true);
  };

  const closeTextArea = () => {
    setShowArea(false);
  };

  const onAddCardClick = (cardTitle: string) => {
    if (cardTitle.length !== 0) {
      dispatch(addCard({ columnIndex, cardTitle }));
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

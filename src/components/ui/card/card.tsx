import { useState } from "react";
import CardModal from "../card-modal/card-modal";
import Button from "../button/button";

function Card({ title, columnTitle }: { title: string; columnTitle: string }) {
  const [showModal, setShowCardModal] = useState(false);

  const openModal = () => {
    setShowCardModal(true);
  };

  const closeModal = () => {
    setShowCardModal(false);
  };

  const styles = {
    width: "100%",
    textAlign: "left",
  };

  return (
    <>
      <Button onClick={openModal} text={title} styles={styles} />
      {showModal && (
        <CardModal
          title={title}
          columnTitle={columnTitle}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Card;

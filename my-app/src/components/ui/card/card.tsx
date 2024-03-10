import { useState } from "react";
import "./card.css";
import CardModal from "../card-modal/card-modal";

function Card({ title, columnTitle }: { title: string; columnTitle: string }) {
  const [showModal, setShowCardModal] = useState(false);

  const openModal = () => {
    setShowCardModal(true);
  };

  const closeModal = () => {
    setShowCardModal(false);
  };

  return (
    <div className="card">
      <button className="card__button" onClick={openModal}>
        {title}
      </button>
      {showModal && (
        <CardModal
          title={title}
          columnTitle={columnTitle}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default Card;

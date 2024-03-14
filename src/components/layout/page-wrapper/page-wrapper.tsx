import "./page-wrapper.css";
import { MainHeader } from "../header/main-header";
import { Main } from "../main/main";
import {NameModal} from "../../ui/name-modal/name-modal";
import { ElementRef, useRef, useState } from "react";

export const PageWrapper = () => {
  const [showModal, setShowCardModal] = useState(true);
  const [userName, setUserName] = useState("");

  const nameTextareaRef = useRef<ElementRef<"textarea">>(null);

  const closeModal = () => {
    setShowCardModal(false);
  };

  const onAddNameClick = () => {
    if (nameTextareaRef.current) {
      let userNameValue = nameTextareaRef.current.value;
      setUserName(userNameValue);
      closeModal();
    }
  };

  return (
    <div className="page-wrapper">
      {showModal && (
        <NameModal
          closeModal={closeModal}
          onAddNameClick={onAddNameClick}
          nameTextareaRef={nameTextareaRef}
        />
      )}
      <MainHeader userName={userName} />
      <Main userName={userName} />
    </div>
  );
};

import "./page-wrapper.css";
import MainHeader from "../header/main-header";
import Main from "../main/main";
import NameModal from "../../ui/name-modal/name-modal";
import { ElementRef, useRef, useState } from "react";

function PageWrapper() {
  const [showModal, setShowCardModal] = useState(true);
  const [userName, setUserName] = useState("");

  const nameTextareaRef = useRef<ElementRef<"textarea">>(null);

  const closeModal = () => {
    setShowCardModal(false);
  };

  const onAddNameClick = () => {
    if (nameTextareaRef.current) {
      let userNameValue = nameTextareaRef.current.value;
      if (userNameValue.length === 0) {
        userNameValue = "Anonymous";
      }
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
      <MainHeader />
      <Main userName={userName} />
      <p>{userName}</p>
    </div>
  );
}

export default PageWrapper;

import "./page-wrapper.css";
import { MainHeader } from "../header/main-header";
import { Main } from "../main/main";
import { NameModal } from "../../ui/name-modal/name-modal";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getName } from "../../../store/name/selectors";
import { addName } from "../../../store/name/nameSlice";

export const PageWrapper = () => {
  const [showModal, setShowCardModal] = useState(true);

  const userName = useAppSelector(getName);

  const dispatch = useAppDispatch();

  const closeModal = () => {
    setShowCardModal(false);
  };

  const onAddNameClick = (user: string) => {
    if (user.length !== 0) {
      dispatch(addName({ user }));
    }
    closeModal();
  };

  return (
    <div className="page-wrapper">
      {showModal && userName === "Anonymous" && (
        <NameModal closeModal={closeModal} callback={onAddNameClick} />
      )}
      <MainHeader userName={userName} />
      <Main userName={userName} />
    </div>
  );
};

// import { useState } from "react";
import "./page-wrapper.css";
import MainHeader from "../header/main-header";
import Main from "../main/main";
// import Modal from "../modal/modal";

function PageWrapper() {
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className="page-wrapper">
      <MainHeader />
      <Main />
    </div>
  );
}

export default PageWrapper;

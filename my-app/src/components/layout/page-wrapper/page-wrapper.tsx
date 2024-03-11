import "./page-wrapper.css";
import MainHeader from "../header/main-header";
import Main from "../main/main";

function PageWrapper() {
  return (
    <div className="page-wrapper">
      <MainHeader />
      <Main />
    </div>
  );
}

export default PageWrapper;

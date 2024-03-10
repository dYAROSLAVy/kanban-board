import "./close-btn.css";

function CloseBtn({close}:{close:()=>void}) {
  return <button className="close-btn" onClick={close}>
    <span className="close-btn__decor"></span>
  </button>;
}

export default CloseBtn;
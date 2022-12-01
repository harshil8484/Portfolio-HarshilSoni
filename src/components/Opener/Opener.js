import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const OpenerBlock = () => {
  const [show, setShow] = useState(false);
  const [slideup, setSlideup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 400);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setSlideup(true);
    }, 1200);
  }, []);

  return (
    <div className={`opener ${slideup ? "slide-up" : ""}`}>
      <h3 className={show ? "visible" : ""}>Welcome</h3>
    </div>
  );
};

const Opener = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <OpenerBlock />,
        document.getElementById("modal-opener")
      )}
    </>
  );
};

export default Opener;

import { ReactNode } from "react";
import ReactDOM from "react-dom";
import "../../style/portal.sass";
type PopUpType = {
  open: boolean;
  handleOpen: () => void;
  children: ReactNode;
};

const portalElement = document.getElementById("portal");

export function Portal({ open = false, handleOpen, children }: PopUpType) {
  if (!open || !portalElement) return;
  return ReactDOM.createPortal(
    <>
      <div className="overlay-poratl" />
      <div className="nes-dialog is-rounded portal">
        <button onClick={handleOpen} className="nes-btn">
          close
        </button>
        <div>{children}</div>
      </div>
    </>,
    portalElement
  );
}

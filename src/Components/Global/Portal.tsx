import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Button } from ".";
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
        <Button click={handleOpen}>close</Button>
        <div>{children}</div>
      </div>
    </>,
    portalElement
  );
}

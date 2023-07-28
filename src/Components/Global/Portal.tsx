import { ReactNode } from "react";
import ReactDOM from "react-dom";
import "../../style/portal.sass";
type PopUpType = {
  open: boolean;
  children: ReactNode;
};

export default function Portal({ open = false, children }: PopUpType) {
  if (!open) return;
  return ReactDOM.createPortal(
    <>
      <div className="overlay-poratl" />
      <div className="portal">
        <button>close</button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

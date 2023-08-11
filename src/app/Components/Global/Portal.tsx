"use client";
import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import "@/style/portal.sass";

type PortalProps = {
  open: boolean;
  handleOpen: Void;
  children: ReactNode;
};

export const Portal = ({ open = false, handleOpen, children }: PortalProps) => {
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>("#portal");
  }, []);

  return open && portalRef.current
    ? createPortal(
        <div>
          {" "}
          <div className="overlay-poratl" />
          <div className="nes-dialog is-rounded portal">
            <Button click={handleOpen}>close</Button>
            <div>{children}</div>
          </div>
        </div>,
        portalRef.current
      )
    : null;
};

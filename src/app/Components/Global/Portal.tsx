"use client";
import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import "@/style/portal.sass";

interface PortalProps {
  open: boolean;
  handleOpen: () => void;
  children: ReactNode;
}

export const Portal = ({ open = false, handleOpen, children }: PortalProps) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
  }, []);

  return open && ref.current
    ? createPortal(
        <div>
          {" "}
          <div className="overlay-poratl" />
          <div className="nes-dialog is-rounded portal">
            <Button click={handleOpen}>close</Button>
            <div>{children}</div>
          </div>
        </div>,
        ref.current
      )
    : null;
};

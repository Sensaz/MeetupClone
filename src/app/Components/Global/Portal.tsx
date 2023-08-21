"use client";
import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import "@/style/portal.sass";
import { z } from "zod";

const portalPropsSchema = z.object({
  open: z.boolean(),
  handleClose: z.function().args().returns(z.void()),
  children: z.custom<ReactNode>(),
});

type PortalProps = z.infer<typeof portalPropsSchema>;

export const Portal = ({
  open = false,
  handleClose,
  children,
}: PortalProps) => {
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
            <Button click={handleClose}>zamknij</Button>
            <div>{children}</div>
          </div>
        </div>,
        portalRef.current
      )
    : null;
};

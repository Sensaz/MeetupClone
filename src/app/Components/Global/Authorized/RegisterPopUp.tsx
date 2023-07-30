"use client";
import { Portal } from "../Portal";
import { Button } from "..";
import { RegisterPopUpButtons } from "../../../../assets/data";
import "../../../../style/portal-children.sass";
import classNames from "classnames";
import { useContext, useMemo } from "react";
import { GlobalContext } from "@/app/GlobalContextProvider";

export const RegisterPopUp = () => {
  const {
    showRegisterPopUp,
    handleToggleLoginPopUp,
    handleToggleRegisterPopUp,
  } = useContext(GlobalContext);
  const buttonsSection = useMemo(
    () =>
      RegisterPopUpButtons.map(({ id, text, icon }) => (
        <Button key={id} className="portal-children__button">
          <i className={classNames("nes-icon is-medium", icon)}></i>
          {text}
        </Button>
      )),
    []
  );

  return (
    <Portal open={showRegisterPopUp} handleOpen={handleToggleRegisterPopUp}>
      <div className="portal-children">
        <header className="portal-children__header">
          <h2 className="portal-children__title">Zarejestruj się</h2>
          <p className="portal-children__message">
            Masz ju konto?{" "}
            <a
              href="#"
              onClick={() => {
                handleToggleRegisterPopUp();
                handleToggleLoginPopUp();
              }}
            >
              Zaloguj się
            </a>
          </p>
        </header>
        <div className="portal-children__buttons">{buttonsSection}</div>
      </div>
    </Portal>
  );
};

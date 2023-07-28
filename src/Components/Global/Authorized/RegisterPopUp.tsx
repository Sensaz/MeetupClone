import { Portal } from "../Portal";
import "../../../style/portal-children.sass";

export const RegisterPopUp = ({ open, handleOpen, handleOpenLogin }) => {
  return (
    <Portal open={open} handleOpen={handleOpen}>
      <div className="portal-children">
        <header className="portal-children__header">
          <h2 className="portal-children__title">Zarejestruj się</h2>
          <p className="portal-children__message">
            Masz ju konto?{" "}
            <a
              href="#"
              onClick={() => {
                handleOpen();
                handleOpenLogin();
              }}
            >
              Zaloguj się
            </a>
          </p>
        </header>
        <div className=" portal-children__buttons">
          <button className="nes-btn portal-children__button">
            <i className="nes-icon facebook is-medium"></i>
            Kontynuuj za pomocą facebooka
          </button>
          <button className="nes-btn portal-children__button">
            <i className="nes-icon google is-medium"></i>
            Kontynuuj za pomocą google
          </button>
          <button className="nes-btn portal-children__button">
            <i className="nes-icon is-medium star is-transparent"></i>
            Kontynuuj za pomocą apple
          </button>
          <button className="nes-btn portal-children__button">
            <i className="nes-icon gmail is-medium"></i>
            Kontynuuj za pomocą gmail
          </button>
        </div>
      </div>
    </Portal>
  );
};

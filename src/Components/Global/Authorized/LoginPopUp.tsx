import { Portal } from "../Portal";
import { Button } from "..";
import "../../../style/portal-children.sass";

type LoginPopUpType = {
  open: boolean;
  handleOpen: () => void;
  handleOpenRegister: () => void;
};

export const LoginPopUp = ({
  open,
  handleOpen,
  handleOpenRegister,
}: LoginPopUpType) => {
  return (
    <Portal open={open} handleOpen={handleOpen}>
      <div className="portal-children">
        <header className="portal-children__header">
          <h2 className="portal-children__title">Zaloguj się</h2>
          <p className="portal-children__message">
            Nie jesteś jeszcze członkiem?{" "}
            <a
              href="#"
              onClick={() => {
                handleOpen();
                handleOpenRegister();
              }}
            >
              Zapisz się
            </a>
          </p>
        </header>
        <form className="portal-children__form">
          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="name_field">
              E-mail
            </label>
            <input type="text" id="name_field" className="nes-input" />
          </div>
          <div className="nes-field portal-children__field">
            <label className="portal-children__label" htmlFor="name_field">
              Hasło
              <a className="portal-children__label--link" href="#">
                Zapomniałem hasła
              </a>
            </label>
            <input type="text" id="name_field" className="nes-input" />
          </div>
          <label>
            <input type="checkbox" className="nes-checkbox" />
            <span>Nie wylogowuj mnie</span>
          </label>
          <Button>Zaloguj</Button>
        </form>
        <div className="portal-children__or-wrapper">
          <div className="portal-children__line" />
          <span className="portal-children__or">lub</span>
          <div className="portal-children__line" />
        </div>
        <div className=" portal-children__buttons">
          <Button className="portal-children__button">
            <i className="nes-icon facebook is-medium"></i>
            Zaloguj za pomocą facebooka
          </Button>
          <Button className="portal-children__button">
            <i className="nes-icon google is-medium"></i>
            Zaloguj za pomocą google
          </Button>
          <Button className="portal-children__button">
            <i className="nes-icon is-medium star is-transparent"></i>
            Zaloguj za pomocą apple
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default LoginPopUp;

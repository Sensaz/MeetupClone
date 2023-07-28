import { useCallback, useState } from "react";
import classNames from "classnames";
import "../../style/navigation.sass";

export const Navigation = ({
  handleShowLoginPopUp,
  handleShowRegisterPopUp,
}) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setToggleModal((prev) => !prev);
  }, []);

  return (
    <nav className="nes-text is-primary navigation">
      <div className="navigation__wrapper">
        <h1 className="navigation__logo">Logo</h1>
        <main
          className={classNames("navigation__main", {
            "navigation__main--show": toggleModal,
          })}
        >
          <form className="navigation__form">
            <input
              className="navigation__input nes-field is-inline"
              type="text"
              placeholder="czego dusza szuka"
            />
            <input
              className="navigation__input  nes-field is-inline"
              type="text"
              placeholder="Okolica, miasto"
            />
            <button className="navigation__button  nes-btn">szukaj</button>
          </form>
          <section className="navigation__section">
            <a href="#" className="nes-text is-success">
              Nowa Grupa
            </a>
            <p>Polski</p>
            <button
              onClick={handleShowLoginPopUp}
              className="nes-btn navigation__button"
            >
              Zaloguj
            </button>
            <button
              onClick={handleShowRegisterPopUp}
              className="nes-btn navigation__button"
            >
              Zarejestruj
            </button>
          </section>
        </main>

        <button
          onClick={handleToggleModal}
          className="navigation__hamburger nes-btn"
        >
          <span className="navigation__hamburger-element"></span>
          <span className="navigation__hamburger-element"></span>
          <span className="navigation__hamburger-element"></span>
        </button>
      </div>
    </nav>
  );
};

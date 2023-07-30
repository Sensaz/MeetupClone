"use client";
import { useCallback, useState } from "react";
import { Button } from "../Global";
import classNames from "classnames";
import "../../../style/navigation.sass";

export const Navigation = () => {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  const handleToggleHamburger = useCallback(() => {
    setToggleHamburger((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="nes-text is-primary navigation">
        <div className="navigation__wrapper">
          <h1 className="navigation__logo">Logo</h1>
          <main
            className={classNames("navigation__main", {
              "navigation__main--show": toggleHamburger,
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
              <Button className="navigation__button">szukaj</Button>
            </form>
            <section className="navigation__section">
              <a href="#" className="nes-text is-success">
                Nowa Grupa
              </a>
              <p>Polski</p>
              <Button
                click={handleShowLoginPopUp}
                className="navigation__button"
              >
                Zaloguj
              </Button>
              <Button
                click={handleShowRegisterPopUp}
                className="navigation__button"
              >
                Zarejestruj
              </Button>
            </section>
          </main>

          <Button
            click={handleToggleHamburger}
            className="navigation__hamburger"
          >
            <span className="navigation__hamburger-element"></span>
            <span className="navigation__hamburger-element"></span>
            <span className="navigation__hamburger-element"></span>
          </Button>
        </div>
      </nav>
    </>
  );
};
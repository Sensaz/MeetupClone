"use client";
import { useCallback, useContext, useState } from "react";
import { Button } from "../Global";
import classNames from "classnames";
import "@/style/navigation.sass";
import { GlobalContext } from "@/app/GlobalContextProvider";
import Link from "next/link";

type Props = {
  sticky: boolean;
};

export const Navigation = ({ sticky }: Props) => {
  const { handleToggleLoginPopUp, handleToggleRegisterPopUp } =
    useContext(GlobalContext);
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  const handleToggleHamburger = useCallback(() => {
    setToggleHamburger((prev) => !prev);
  }, []);

  return (
    <>
      <nav
        className={classNames("nes-text", "is-primary", "navigation", {
          navigation__sticky: sticky,
        })}
      >
        <div className="navigation__wrapper">
          <Link href="/">
            <h1 className="navigation__logo">Logo</h1>
          </Link>
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
              {/* <p>Polski</p> */}
              <Button
                click={handleToggleLoginPopUp}
                className="navigation__button"
              >
                Zaloguj
              </Button>
              <Button
                click={handleToggleRegisterPopUp}
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

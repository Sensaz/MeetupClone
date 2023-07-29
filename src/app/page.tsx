"use client";
import { useCallback, useState } from "react";
import { Navigation } from "../components/Navigation";
import {
  CategoryCard,
  RegisterPopUp,
  LoginPopUp,
  Button,
} from "../components/Global";
import { MeetupWorkCard } from "../components/MeetupWorkCard";
import { NearGroups, NearEvents } from "../components/NearMeetup";
import { categoryCards, popularCategory, meetupWorkCards } from "../assets";
import Image from "next/image";

import online_events from "/public/online_events.svg";
import handsUp from "/public/handsUp.svg";
import joinGroup from "/public/joinGroup.svg";
import ticket from "/public/ticket.svg";
import category1 from "/public/category1.webp";
import category2 from "/public/category2.webp";
import category3 from "/public/category3.webp";
import "../style/content-page.sass";

type imgsObj = {
  [key: string]: string;
};

const imgsMeetupWorkCardsJSX: imgsObj = {
  handsUp,
  joinGroup,
  ticket,
};

const imgsForCategoryCardsJSX: imgsObj = {
  category1,
  category2,
  category3,
};

const meetupWorkCardsJSX = meetupWorkCards.map(
  ({ id, title, text, alt, src }) => (
    <MeetupWorkCard
      key={id}
      title={title}
      text={text}
      alt={alt}
      src={imgsMeetupWorkCardsJSX[src]}
    />
  )
);

const categoryCardsJSX = categoryCards.map(({ id, text, alt, src }) => (
  <CategoryCard
    key={id}
    text={text}
    alt={alt}
    src={imgsForCategoryCardsJSX[src]}
  />
));

export default function Home() {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState(false);

  const handleShowLoginPopUp = useCallback(() => {
    setShowLoginPopUp((prev) => !prev);
  }, []);
  const handleShowRegisterPopUp = useCallback(() => {
    setShowRegisterPopUp((prev) => !prev);
  }, []);

  return (
    <div className="content-page">
      <Navigation
        handleShowLoginPopUp={handleShowLoginPopUp}
        handleShowRegisterPopUp={handleShowRegisterPopUp}
      />
      <main className="content-page__main nes-text is-disabled">
        <article className="content-page__article">
          <section className="content-page__section">
            <h2 className="nes-text is-primary">
              Platforma dla ludzi
              <span className="nes-text is-error">
                {" "}
                - wyszukujemny najgorentsze spotkania w twojej okolicy!!!
              </span>
            </h2>
            <p>
              Niezależnie od tego, czym się interesujesz - czy są to piesze
              wycieczki, czytanie, nawiązywanie kontaktów czy wspólne rozwijanie
              umiejętności, w Logo znajdziesz tysiące osób, które podzielają
              Twoje hobby. Wydarzenia mają miejsce każdego dnia - zaloguj się i
              zacznij świetnie się bawić.
            </p>
            <Button click={handleShowRegisterPopUp} theme="primary">
              Dołącz
            </Button>
          </section>
          <section className="content-page__section">
            <Image
              className="content-page__img"
              src={online_events}
              alt="online_events"
            />
          </section>
        </article>
        <article className="content-page__article">
          <div className="content-page__article content-page__article--start">
            {categoryCardsJSX}
          </div>
        </article>
        <article className="content-page__article">
          <section className="content-page__section content-page__section--row-scroll">
            {popularCategory.map((category: string) => (
              <Button theme="primary" className="content-page__button">
                {category}
              </Button>
            ))}
          </section>
        </article>
        <article className="content-page__article content-page__article--column">
          <header>
            <h1>Jak działa Logo</h1>
            <p>
              Łączymy ludzi niezalenie od pasji czy praktykowanych kultów, to
              naprawde proste!!
            </p>
          </header>

          <div className="content-page__article content-page__article--start">
            {meetupWorkCardsJSX}
          </div>
        </article>
        <article className="content-page__article content-page__article--no-scroll">
          <NearEvents />
        </article>
        <article className="content-page__article">
          <NearGroups />
        </article>
      </main>
      <LoginPopUp
        handleOpenRegister={handleShowRegisterPopUp}
        handleOpen={handleShowLoginPopUp}
        open={showLoginPopUp}
      />
      <RegisterPopUp
        handleOpenLogin={handleShowLoginPopUp}
        handleOpen={handleShowRegisterPopUp}
        open={showRegisterPopUp}
      />
    </div>
  );
}

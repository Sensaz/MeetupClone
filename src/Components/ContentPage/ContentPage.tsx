import { Navigation } from "../Navigation/Navigation";
import { CategoryCard } from "../Global/Cards/CategoryCard";
import { MeetupWorkCard } from "./MeetupWorkCard";
import { NearGroups, NearEvents } from "../NearMeetup";
import { popularCategory } from "../../assets";
import online_events from "../../../public/online_events.svg";
import handsUp from "../../../public/handsUp.svg";
import joinGroup from "../../../public/joinGroup.svg";
import ticket from "../../../public/ticket.svg";
import category1 from "../../../public/category1.webp";
import category2 from "../../../public/category2.webp";
import category3 from "../../../public/category3.webp";
import "../../style/content-page.sass";

export const ContentPage = () => {
  return (
    <div className="content-page">
      <Navigation />
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
            <button type="button" className="nes-btn is-primary">
              Dołącz
            </button>
          </section>
          <section className="content-page__section">
            <img src={online_events} alt="online_events" />
          </section>
        </article>
        <article className="content-page__article">
          <div className="content-page__article content-page__article--start">
            <CategoryCard
              text="Nawiąż Nowe Znajomości"
              alt="Happy People"
              src={category1}
            />
            <CategoryCard
              text="Przeglądaj wydarzenia z kategorii aktywność na świeżym powietrzu"
              alt="Happy People"
              src={category2}
            />
            <CategoryCard
              text="Przyłącz się dzięki technologii"
              alt="Happy People"
              src={category3}
            />
          </div>
        </article>
        <article className="content-page__article">
          <section className="content-page__section content-page__section--row-scroll">
            {popularCategory.map((category: string) => (
              <button className="content-page__button nes-btn is-primary">
                {category}
              </button>
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
            <MeetupWorkCard
              title="Dołącz do grupy"
              text="Rób to, co kochasz, poznawaj innych, którzy również to kochają i odnajdź swą społeczność. Reszta przejdzie do historii!"
              alt="Hands Up"
              src={handsUp}
            />

            <MeetupWorkCard
              title="Utwórz grupę"
              text="Nie musisz byc ekspertem, aby zgromadzic osoby o wspolnych zainteresowaniach"
              alt="Hands Up"
              src={joinGroup}
            />
            <MeetupWorkCard
              title="Znajdź wydarzenie"
              text="Wydarzenia dotyczą niemal wszystkich możliwych tematów — od gier online po fotografię, jogę i wspinaczkę."
              alt="Hands Up"
              src={ticket}
            />
          </div>
        </article>
        <article className="content-page__article content-page__article--no-scroll">
          <NearEvents />
        </article>
        <article className="content-page__article">
          <NearGroups />
        </article>
      </main>
    </div>
  );
};

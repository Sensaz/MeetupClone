import React from "react";
import Image from "next/image";
import event from "/public/EventCardIMG/event.webp";
import "@/style/find/event-card.sass";

type Props = {};

export function EventCard({}: Props) {
  return (
    <div className="event-card nes-pointer">
      <main className="event-card__main">
        <div className="event-card__img-wrapper">
          <Image className="event-card__img" src={event} alt="elo" />
        </div>
        <section className="event-card__section">
          <strong className="event-card__date">08 SIE 2023 2:00 CEST</strong>
          <h3 className="event-card__title">
            Soccer Mondays @ SoFive Carlstadt
          </h3>
          <span className="event-card__group-name">
            The Soccer Meetup Group • Carlstadt, NJ
          </span>
          <span className="event-card__is-new-group nes-text is-primary">
            Nowa grupa
          </span>
        </section>
      </main>
      <div className="event-card__info">
        <div className="event-card__details">
          <span>13 uczestników</span>
          <span className="nes-text is-error"> • Zostało miejsc: 10</span>
        </div>
        <span className="event-card__share-icon nes-text is-primary">U</span>
      </div>
    </div>
  );
}

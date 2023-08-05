import React from "react";
import Image from "next/image";
import event from "@/../public/EventCardIMG/event.webp";
import "@/style/find/group-card.sass";

type Props = {};

export function GroupCard({}: Props) {
  return (
    <div className="group-card nes-pointer">
      <main className="group-card__main">
        <div className="group-card__img-wrapper">
          <Image className="group-card__img" src={event} alt="elo" />
        </div>
        <section className="group-card__section">
          <span className="group-card__is-new-group nes-text is-primary">
            Nowa grupa
          </span>
          <h3 className="group-card__group-name">
            New Milford Running Meetup Group
          </h3>
          <strong className="group-card__city">NEW MILFORD, NJ</strong>
          <p className="group-card__description">
            New Milford Running Group Welcome New Milford Runners! This group is
            {/* about gathering people who want to be active in running. This run
          group inspires people and challenges limits through the sport of
          running. Any paces and distances are welcome! I started this to find
          people who want to be in a running group—having a running group
          motivates others. The goal is to do a 5k race during the fall! A
          casual, supportive, and positive environment for running with
          opportunities every day of the week — and members represent all levels
          of the running spectrum, regardless of running pace. Beginner, casual,
          and experienced runners looking to meet new people and get some
          exercise! This group is casual, not competitive; we must respect other
          personal running time. We are always beginner friendly. */}
          </p>
        </section>
      </main>
      <div className="group-card__info">
        <div className="group-card__details">
          <span>13 uczestników</span>
          <span> • Publiczna</span>
        </div>
        <span className="group-card__share-icon nes-text is-primary">U</span>
      </div>
    </div>
  );
}

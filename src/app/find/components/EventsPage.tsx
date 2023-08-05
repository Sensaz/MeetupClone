"use client";
import React, { useState } from "react";
import DropDown from "./dropdown/DropDown";
import { eventsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { EventCard } from "./Cards";

type SortType = string;

type StateType = {
  [key in SortType]: boolean;
};

const initialState: StateType = eventsNearMeetupSortsSetup.reduce(
  (acc: StateType, current) => {
    acc[current.clickFunctionIsOpen] = false;
    return acc;
  },
  {}
);

export default function EventsPage() {
  const { initialState } = useInitialState(eventsNearMeetupSortsSetup);
  const [eventsSort, setEventsSort] = useState<StateType>(initialState);
  const { clickObj } = useClickObjectCreator(
    eventsNearMeetupSortsSetup,
    setEventsSort
  );

  return (
    <>
      <section className="near-meetups-page__section">
        <DropDown
          clickObj={clickObj}
          isOpenObj={eventsSort}
          nearMeetupSorts={eventsNearMeetupSortsSetup}
        />
      </section>
      <article className="near-meetups-page__article">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </article>
    </>
  );
}

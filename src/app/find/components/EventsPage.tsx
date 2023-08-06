"use client";
import React, { useState } from "react";
import DropDown from "./dropdown/DropDown";
import { eventsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { EventCard } from "./Cards";
import classNames from "classnames";

type SortType = string;

type StateType = {
  [key in SortType]: boolean;
};

export default function EventsPage() {
  const { initialState } = useInitialState(eventsNearMeetupSortsSetup);
  const [eventsSort, setEventsSort] = useState<StateType>(initialState);
  const { clickObj } = useClickObjectCreator(
    eventsNearMeetupSortsSetup,
    setEventsSort
  );

  const hasTrueValue = Object.values(eventsSort).some(
    (value) => value === true
  );

  return (
    <>
      <DropDown
        clickObj={clickObj}
        isOpenObj={eventsSort}
        nearMeetupSorts={eventsNearMeetupSortsSetup}
      />
      <article
        className={classNames("near-meetups-page__article", {
          "near-meetups-page__article--top": hasTrueValue,
        })}
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </article>
    </>
  );
}

"use client";
import React, { useState } from "react";
import DropDown from "./dropdown/DropDown";
import { eventsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { EventCard } from "./Cards";
import { handleSetDropdownValue } from "./handleSetDropdownValue";
import classNames from "classnames";

type SortType = string;

type StateType = {
  [key in SortType]: boolean | string;
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
        handleSetDropdownValue={(
          toChange: string,
          value: string,
          whichDropdownIsOpen: string
        ) =>
          handleSetDropdownValue(
            setEventsSort,
            toChange,
            value,
            whichDropdownIsOpen
          )
        }
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

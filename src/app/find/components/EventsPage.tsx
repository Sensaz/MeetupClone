"use client";
import React, { useCallback, useMemo, useState } from "react";
import DropDown from "./dropdown/DropDown";
import { eventsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { EventCard } from "./Cards";
import { handleSetDropdownValue } from "./handleSetDropdownValue";
import { generateSelectValueMap } from "./generateSelectValueMap";
import classNames from "classnames";

type SortType = string;

type StateType = {
  [key in SortType]: boolean | string;
};

export default function EventsPage() {
  const { initialState } = useMemo(
    () => useInitialState(eventsNearMeetupSortsSetup),
    []
  );
  const [eventsSort, setEventsSort] = useState<StateType>(initialState);
  const { clickObj } = useMemo(
    () => useClickObjectCreator(eventsNearMeetupSortsSetup, setEventsSort),
    []
  );

  const paramData = useMemo(
    () => generateSelectValueMap(eventsNearMeetupSortsSetup),
    []
  );

  const hasTrueValue = useMemo(
    () => Object.values(eventsSort).some((value) => value === true),
    [eventsSort]
  );

  const generateDropdownValueHandler = useCallback(
    (toChange: string, value: string, whichDropdownIsOpen: string) => {
      handleSetDropdownValue(
        setEventsSort,
        toChange,
        value,
        whichDropdownIsOpen
      );
    },
    []
  );

  return (
    <>
      <DropDown
        clickObj={clickObj}
        isOpenObj={eventsSort}
        nearMeetupSorts={eventsNearMeetupSortsSetup}
        paramData={paramData}
        handleSetDropdownValue={generateDropdownValueHandler}
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

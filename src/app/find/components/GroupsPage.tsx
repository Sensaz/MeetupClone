"use client";
import React, { useState } from "react";
import DropDown from "./dropdown/DropDown";
import { groupsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { GroupCard } from "./Cards";

type SortType = string;

type StateType = {
  [key in SortType]: boolean;
};

export default function GroupsPage() {
  const { initialState } = useInitialState(groupsNearMeetupSortsSetup);
  const [groupsSort, setGroupsSort] = useState<StateType>(initialState);
  const { clickObj } = useClickObjectCreator(
    groupsNearMeetupSortsSetup,
    setGroupsSort
  );

  return (
    <>
      <section className="near-meetups-page__section">
        <DropDown
          clickObj={clickObj}
          isOpenObj={groupsSort}
          nearMeetupSorts={groupsNearMeetupSortsSetup}
        />
      </section>
      <article className="near-meetups-page__article">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </article>
    </>
  );
}

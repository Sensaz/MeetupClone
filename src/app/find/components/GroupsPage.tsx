"use client";
import React, { useState } from "react";
import DropDown from "./dropdown/DropDown";
import { groupsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { GroupCard } from "./Cards";
import classNames from "classnames";

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
  const hasTrueValue = Object.values(groupsSort).some(
    (value) => value === true
  );
  return (
    <>
      <DropDown
        clickObj={clickObj}
        isOpenObj={groupsSort}
        nearMeetupSorts={groupsNearMeetupSortsSetup}
      />
      <article
        className={classNames("near-meetups-page__article", {
          "near-meetups-page__article--top": hasTrueValue,
        })}
      >
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </article>
    </>
  );
}

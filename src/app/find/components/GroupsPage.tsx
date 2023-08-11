"use client";
import React, { useCallback, useMemo, useState } from "react";
import { DropDown } from "./dropdown/DropDown";
import { groupsNearMeetupSortsSetup } from "@/assets";
import { useClickObjectCreator, useInitialState } from "@/hooks";
import { GroupCard } from "./Cards";
import classNames from "classnames";
import { handleSetDropdownValue } from "./handleSetDropdownValue";
import { generateSelectValueMap } from "./generateSelectValueMap";

export default function GroupsPage() {
  const { initialState } = useMemo(
    () => useInitialState(groupsNearMeetupSortsSetup),
    []
  );
  const [groupsSort, setGroupsSort] =
    useState<KeyValueMap<BooleanOrString>>(initialState);

  const { clickObj } = useMemo(
    () => useClickObjectCreator(groupsNearMeetupSortsSetup, setGroupsSort),
    []
  );

  const hasTrueValue = useMemo(
    () => Object.values(groupsSort).some((value) => value === true),
    [groupsSort]
  );

  const paramData = useMemo(
    () => generateSelectValueMap(groupsNearMeetupSortsSetup),
    []
  );

  const generateDropdownValueHandler = useCallback(
    (toChange: string, value: string, whichDropdownIsOpen: string) => {
      handleSetDropdownValue(
        setGroupsSort,
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
        isOpenObj={groupsSort}
        nearMeetupSorts={groupsNearMeetupSortsSetup}
        paramData={paramData}
        handleSetDropdownValue={generateDropdownValueHandler}
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

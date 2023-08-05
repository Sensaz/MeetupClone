"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { EventsPage, GroupsPage } from "./components";
import Link from "next/link";
import classNames from "classnames";
import "@/style/find/near-meetups-page.sass";

export default function FindPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("source");
  useEffect(() => {
    if (search !== "GROUPS") router.push("?source=EVENTS");
  }, []);

  return (
    <div className="near-meetups-page">
      <h1 className="near-meetups-page__header">
        {search === "GROUPS" ? "Grupy w pobliżu" : "Wydarzenia w pobliżu"}
      </h1>
      <div className="near-meetups-page__swap-links">
        <Link
          className={classNames("nes-text nes-pointer", {
            "is-disabled": search === "GROUPS",
          })}
          href="?source=EVENTS"
        >
          Wydarzenia
        </Link>
        <Link
          className={classNames("nes-text nes-pointer", {
            "is-disabled": search === "EVENTS",
          })}
          href="?source=GROUPS"
        >
          Grupy
        </Link>
      </div>
      <div className="near-meetups-page__main">
        {search === "GROUPS" ? <GroupsPage /> : <EventsPage />}
      </div>
    </div>
  );
}

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
    if (search !== "GROUPS") {
      const queryParams = new URLSearchParams(window.location.search);

      const existingParams: Record<string, string> = {};
      queryParams.forEach((value, key) => {
        existingParams[key] = value;
      });

      existingParams["source"] = "EVENTS";

      const newQueryParams = new URLSearchParams(existingParams);
      const newUrl = `${window.location.pathname}?${newQueryParams.toString()}`;

      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  }, [search, router]);

  return (
    <div className="near-meetups-page">
      <section className="near-meetups-page__section near-meetups-page__section--color">
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
      </section>
      {search === "GROUPS" ? <GroupsPage /> : <EventsPage />}
    </div>
  );
}

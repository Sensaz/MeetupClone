"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { EventsPage, GroupsPage } from "./components";
import Link from "next/link";

export default function SourcePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("source");
  useEffect(() => {
    if (search !== 'GROUPS') router.push("?source=EVENTS");
  }, []);

  return (
    <div>
      <h1>
        {search === "GROUPS" ? "Grupy w pobliżu" : "Wydarzenia w pobliżu"}
      </h1>
      <Link href="?source=EVENTS">Wydarzenia</Link>
      <Link href="?source=GROUPS">Grupy</Link>
      <main>{search === "GROUPS" ? <GroupsPage /> : <EventsPage />}</main>
    </div>
  );
}

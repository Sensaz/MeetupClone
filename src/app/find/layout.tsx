import type { Metadata } from "next";
import { Navigation } from "@/app/Components";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

type FindLayoutProp = {
  children: ReactNode;
};

export default function FindLayout({ children }: FindLayoutProp) {
  return (
    <div>
      <Navigation />
      elo
      {children}
    </div>
  );
}

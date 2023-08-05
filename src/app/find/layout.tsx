import type { Metadata } from "next";
import { Navigation } from "@/app/components";
import { ReactNode } from "react";
import "@/style/content-page.sass";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

type FindLayoutProp = {
  children: ReactNode;
};

export default async function FindLayout({ children }: FindLayoutProp) {
  return (
    <div className="content-page">
      <Navigation />
      <main className="content-page__main nes-text is-disabled">
        {children}
      </main>
    </div>
  );
}

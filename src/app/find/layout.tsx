import type { Metadata } from "next";
import { Navigation } from "@/app/components";
import { ReactNode } from "react";
import "@/style/content-page.sass";
import { z } from "zod";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

const findLayoutSchema = z.object({
  children: z.custom<ReactNode>(),
});

type FindLayoutProp = z.infer<typeof findLayoutSchema>;

export default async function FindLayout({ children }: FindLayoutProp) {
  return (
    <div className="content-page">
      <Navigation sticky={true} />
      <main className="content-page__main nes-text is-disabled">
        {children}
      </main>
    </div>
  );
}

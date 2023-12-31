import { ReactNode } from "react";
import type { Metadata } from "next";
import { LoginPopUp, RegisterPopUp } from "@/app/components";
import { GlobalContextProvider } from "./GlobalContextProvider";
import "@/style/index.sass";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <GlobalContextProvider>
          {children}
          <LoginPopUp />
          <RegisterPopUp />
        </GlobalContextProvider>
        <div id="portal" />
      </body>
    </html>
  );
}

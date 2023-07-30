import type { Metadata } from "next";
import "../style/index.sass";
import { LoginPopUp, RegisterPopUp } from "@/app/Components";
import { GlobalContextProvider } from "./GlobalContextProvider";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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

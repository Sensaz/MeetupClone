import { ReactNode } from "react";
import type { Metadata } from "next";
import {
  LoginPopUp,
  RegisterPopUp,
  ManualRegistrationPopUp,
} from "@/app/components";
import { GlobalContextProvider } from "./GlobalContextProvider";
import "@/style/index.sass";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

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
          <ReactQueryClientProvider>
            {children}
            <LoginPopUp />
            <RegisterPopUp />
            <ManualRegistrationPopUp />
          </ReactQueryClientProvider>
        </GlobalContextProvider>
        <div id="portal" />
      </body>
    </html>
  );
}

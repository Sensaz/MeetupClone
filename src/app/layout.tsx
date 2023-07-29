import type { Metadata } from "next";
import "../style/index.sass";

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
    <html lang="en">
      <body>
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}

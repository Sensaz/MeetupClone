import type { Metadata } from "next";
import "../style/index.sass";
import { LoginPopUp, RegisterPopUp } from "@/app/Components";

export const metadata: Metadata = {
  title: "Meetup Clone",
  description: "Created by Me ;D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState(false);

  const handleShowLoginPopUp = useCallback(() => {
    setShowLoginPopUp((prev) => !prev);
  }, []);
  const handleShowRegisterPopUp = useCallback(() => {
    setShowRegisterPopUp((prev) => !prev);
  }, []);

  return (
    <html lang="pl">
      <body>
        {children}
        <LoginPopUp
          handleOpenRegister={handleShowRegisterPopUp}
          handleOpen={handleShowLoginPopUp}
          open={showLoginPopUp}
        />
        <RegisterPopUp
          handleOpenLogin={handleShowLoginPopUp}
          handleOpen={handleShowRegisterPopUp}
          open={showRegisterPopUp}
        />
        <div id="portal" />
      </body>
    </html>
  );
}

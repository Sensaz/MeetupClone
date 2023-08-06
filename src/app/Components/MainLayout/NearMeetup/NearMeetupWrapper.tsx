import { ReactNode } from "react";
import "@/style/near-meetup-wrapper.sass";
import Link from "next/link";

type NearMeetupWrapperType = {
  title: string;
  linkText: string;
  path: string;
  children: ReactNode;
};

export const NearMeetupWrapper = ({
  title,
  linkText,
  path,
  children,
}: NearMeetupWrapperType) => {
  return (
    <div className="near-meetup-wrapper">
      <header className="near-meetup-wrapper__header">
        <h3 className="near-meetup-wrapper__title">{title}</h3>
        <Link className="near-meetup-wrapper__link" href={path}>
          {linkText}
        </Link>
      </header>
      <main className="near-meetup-wrapper__main">{children}</main>
    </div>
  );
};

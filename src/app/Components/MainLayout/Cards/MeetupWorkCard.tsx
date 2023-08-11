import Image, { StaticImageData } from "next/image";
import "@/style/meetup-work-card.sass";
import Link from "next/link";

export const MeetupWorkCard = ({
  title,
  text,
  src = "",
  alt = "",
  path = "/",
}: PartialMeetupWorkCardType<StaticImageData | string>) => {
  return (
    <Link href={path}>
      <div className="meetup-work-card">
        <div className="meetup-work-card__img-wrapper">
          <Image className="meetup-work-card__img" src={src} alt={alt} />
        </div>
        <h2 className="meetup-work-card__header nes-text is-primary">
          {title}
        </h2>
        <span className="nes-text is-disabled meetup-work-card__text">
          {text}
        </span>
      </div>
    </Link>
  );
};

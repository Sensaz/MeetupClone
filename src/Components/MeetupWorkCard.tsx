import Image from "next/image";
import "../style/meetup-work-card.sass";

type MeetupWorkCardType = {
  title: string;
  text: string;
  src: string;
  alt: string;
};

export const MeetupWorkCard = ({
  title,
  text,
  src,
  alt,
}: MeetupWorkCardType) => {
  return (
    <div className="meetup-work-card">
      <div className="meetup-work-card__img-wrapper">
        <Image className="meetup-work-card__img" src={src} alt={alt} />
      </div>
      <h2 className="meetup-work-card__header nes-text is-primary">{title}</h2>
      <span className="meetup-work-card__text">{text}</span>
    </div>
  );
};

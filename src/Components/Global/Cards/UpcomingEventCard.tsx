import Image from "next/image";
import "../../../style/upcomming-event-card.sass";

type UpcomingEventCardType = {
  src: string;
  alt: string;
  date: string;
  title: string;
  desc: string;
  isNewGroup: boolean;
};

export const UpcomingEventCard = ({
  src,
  alt,
  date,
  title,
  desc,
  isNewGroup = false,
}: UpcomingEventCardType) => {
  return (
    <div className="upcomming-event-card">
      <div className="upcomming-event-card__img-wrapper">
        <Image src={src} alt={alt} className="upcomming-event-card__img" />
      </div>
      <main className="upcomming-event-card__main">
        <header className="upcomming-event-card__section">
          <h3 className="upcomming-event-card__date nes-text is-success">
            {date}
          </h3>
          <h3 className="upcomming-event-card__event-title">{title}</h3>
        </header>
        <section className="upcomming-event-card__section">
          <span className="upcomming-event-card__event-description">
            {desc}
          </span>
          {isNewGroup && (
            <span className="upcomming-event-card__new-group nes-text is-primary">
              New Group
            </span>
          )}
        </section>
        <section className="upcomming-event-card__section upcomming-event-card__section--participant">
          <div className="upcomming-event-card__participant-icons">
            <span className="upcomming-event-card__participant-icon"></span>
            <span className="upcomming-event-card__participant-icon upcomming-event-card__participant-icon--left"></span>
            <span className="upcomming-event-card__participant-icon upcomming-event-card__participant-icon--left"></span>
            <span className="upcomming-event-card__participants-number">
              14
            </span>
          </div>
          <span className="upcomming-event-card__share-icon">U</span>
        </section>
      </main>
    </div>
  );
};

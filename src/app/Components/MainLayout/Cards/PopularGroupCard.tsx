import Image, { StaticImageData } from "next/image";
import "@/style/popular-group-card.sass";

export const PopularGroupCard = ({
  src = "",
  alt = "",
  isNewGroup = false,
  groupName,
  desc,
  upcommingEventDate = "",
}: PartialNearGroupsObjType<StaticImageData | string>) => {
  return (
    <div className="popular-group-card">
      <header className="popular-group-card__header">
        <div className="popular-group-card__img-wrapper">
          <Image className="popular-group-card__img" src={src} alt={alt} />
        </div>
        <div className="popular-group-card__group-info">
          {isNewGroup && (
            <span className="popular-group-card__new-group nes-text is-primary">
              new group
            </span>
          )}
          <h3 className="popular-group-card__group-name">{groupName}</h3>
        </div>
      </header>
      <div className="popular-group-card__hr"></div>
      <main className="popular-group-card__main">
        {upcommingEventDate !== "" ? (
          <>
            <span className="popular-group-card__event-date nes-text is-success">
              {upcommingEventDate}
            </span>
            <strong className="popular-group-card__event-desc">{desc}</strong>
          </>
        ) : (
          <h3 className="popular-group-card__lack-event">NO UPCOMING EVENTS</h3>
        )}
      </main>
    </div>
  );
};

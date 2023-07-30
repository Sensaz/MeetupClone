import { NearMeetupWrapper } from "./NearMeetupWrapper";
import { UpcomingEventCard } from "../Cards/UpcomingEventCard";
import { nearEventObj } from "../../../../assets";

import event1 from "/public/EventIMG/event1.webp";
import event2 from "/public/EventIMG/event2.webp";
import event3 from "/public/EventIMG/event3.webp";
import event4 from "/public/EventIMG/event4.webp";
import event5 from "/public/EventIMG/event5.webp";
import event6 from "/public/EventIMG/event6.webp";
import event7 from "/public/EventIMG/event7.webp";
import event8 from "/public/EventIMG/event8.webp";
import { StaticImageData } from "next/image";

const eventsImg: Record<string, StaticImageData> = {
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
  event8,
};

type NearEventObjType = {
  id: number;
  src: string;
  alt: string;
  date: string;
  title: string;
  desc: string;
  isNewGroup: boolean;
};

const nearEventsMap = nearEventObj.map(
  ({ id, src, alt, date, title, desc, isNewGroup }: NearEventObjType) => (
    <UpcomingEventCard
      key={id}
      src={eventsImg[src]}
      alt={alt}
      date={date}
      title={title}
      desc={desc}
      isNewGroup={isNewGroup}
    />
  )
);

export const NearEvents = () => {
  return (
    <NearMeetupWrapper
      title="Nadchodzące wydarzenia"
      linkText="Znajdź więcej spotkań"
      path="#"
    >
      {nearEventsMap}
    </NearMeetupWrapper>
  );
};

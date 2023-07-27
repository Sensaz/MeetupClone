import { NearMeetupWrapper } from "./NearMeetupWrapper";
import { UpcomingEventCard } from "../Global/Cards/UpcomingEventCard";
import { nearEventObj } from "../../assets";

import event1 from "/EventIMG/event1.webp";
import event2 from "/EventIMG/event2.webp";
import event3 from "/EventIMG/event3.webp";
import event4 from "/EventIMG/event4.webp";
import event5 from "/EventIMG/event5.webp";
import event6 from "/EventIMG/event6.webp";
import event7 from "/EventIMG/event7.webp";
import event8 from "/EventIMG/event8.webp";

const eventsImg: Record<string, string> = {
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

import { PopularGroupCard } from "../Global/Cards/PopularGroupCard";
import { NearMeetupWrapper } from "./NearMeetupWrapper";
import { nearGroupsObj } from "../../assets";
import g1 from "/GroupIMG/g1.jpg";
import g2 from "/GroupIMG/g2.jpg";
import g3 from "/GroupIMG/g3.jpg";
import g4 from "/GroupIMG/g4.jpg";
import g5 from "/GroupIMG/g5.jpg";
import g6 from "/GroupIMG/g6.jpg";

type ImgsType = {
  [key: string]: string;
};

const imgs: ImgsType = {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
};

const popularGroups = nearGroupsObj.map(
  ({ id, src, alt, isNewGroup, groupName, upcommingEventDate, eventDesc }) => (
    <PopularGroupCard
      key={id}
      src={imgs[src]}
      alt={alt}
      isNewGroup={isNewGroup}
      groupName={groupName}
      upcommingEventDate={upcommingEventDate}
      eventDesc={eventDesc}
    />
  )
);

export const NearGroups = () => {
  return (
    <div>
      <NearMeetupWrapper
        title="Popularne Grupy"
        linkText="Znajdź więcej grup"
        path="#"
      >
        {popularGroups}
      </NearMeetupWrapper>
    </div>
  );
};

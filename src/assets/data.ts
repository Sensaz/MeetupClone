export const categoryCards = [
  {
    id: 1,
    text: "Nawiąż Nowe Znajomości",
    alt: "Happy People",
    src: "category1",
  },
  {
    id: 2,
    text: "Przeglądaj wydarzenia z kategorii aktywność na świeżym powietrzu",
    alt: "Happy People",
    src: "category2",
  },
  {
    id: 3,
    text: "Przyłącz się dzięki technologii",
    alt: "Happy People",
    src: "category3",
  },
];

export const meetupWorkCards = [
  {
    id: 1,
    title: "Dołącz do grupy",
    text: "Rób to, co kochasz, poznawaj innych, którzy również to kochają i odnajdź swą społeczność. Reszta przejdzie do historii!",
    alt: "Hands Up",
    src: "handsUp",
    path: "/find?source=GROUPS",
  },
  {
    id: 2,
    title: "Utwórz grupę",
    text: "Nie musisz byc ekspertem, aby zgromadzic osoby o wspolnych zainteresowaniach",
    alt: "Join Group",
    src: "joinGroup",
  },
  {
    id: 3,
    title: "Znajdź wydarzenie",
    text: "Wydarzenia dotyczą niemal wszystkich możliwych tematów — od gier online po fotografię, jogę i wspinaczkę.",
    alt: "Hands Up",
    src: "ticket",
    path: "/find?source=EVENTS",
  },
];

export const popularCategory: string[] = [
  "Rozwiń swoją Kariere",
  "Znajdź Zen",
  "Bądź w ruchu",
  "Dziel się językiem i kulturą",
  "Czytaj w towarzystwie znajomych",
  "Wspólne pisanie",
  "Szlifuj swoje umiejętności",
];

export const nearGroupsObj = [
  {
    id: 1,
    src: "g1",
    alt: "something group",
    groupName: "Andover New Parents Meetup Group",
    upcommingEventDate: "",
    eventDesc: "",
    isNewGroup: true,
  },
  {
    id: 2,
    src: "g2",
    alt: "something group",
    groupName: "The Usual Suspects",
    upcommingEventDate: "29 LIP 2023 18:00 CEST",
    eventDesc: "Page Turners (book club) - First Gathering",
    isNewGroup: false,
  },
  {
    id: 3,
    src: "g3",
    alt: "something group",
    groupName: "Agile Warsaw",
    upcommingEventDate: "31 LIP 2023 18:00 CEST",
    eventDesc:
      '#278 A. Michalczyk "Na czym polega eksperymentowanie i po co nam facylitator?"',
    isNewGroup: false,
  },
  {
    id: 4,
    src: "g4",
    alt: "something group",
    groupName: "lablab.ai",
    upcommingEventDate: "28 LIP 2023 18:00 CEST",
    eventDesc: "ElevenLabs AI Hackathon",
    isNewGroup: false,
  },
  {
    id: 5,
    src: "g5",
    alt: "something group",
    groupName: "[Software] Modeling Evolution PL",
    upcommingEventDate: "26 LIP 2023 18:00 CEST",
    eventDesc:
      "[ONLINE] Event Storming & Event Modeling - Let's rock! [PL] - Show me some code!",
    isNewGroup: false,
  },
  {
    id: 6,
    src: "g6",
    alt: "something group",
    groupName: "The house of Agile",
    upcommingEventDate: "03 SIE 2023 17:30 CEST",
    eventDesc: "Agile Coffee - wymieńmy się doświadczeniami",
    isNewGroup: false,
  },
];

export const nearEventObj = [
  {
    id: 1,
    src: "event1",
    alt: "something event",
    date: "SAT, JUL 29 · 2:00 AM CEST",
    title: "Public Speaking Practice Online",
    desc: "Public Speaking Practice (online)",
    isNewGroup: true,
  },
  {
    id: 2,
    src: "event2",
    alt: "something event",
    date: "WED, AUG 2 · 2:00 AM CEST",
    title:
      "Reshaping Labels: Empowering Introverted Women to Craft Their Story",
    desc: "Radiant Introverted Women (20s and 30s) - Online",
    isNewGroup: true,
  },
  {
    id: 3,
    src: "event3",
    alt: "something event",
    date: "FRI, JUL 28 · 12:00 AM CEST",
    title: "Free 1:1 Life Coaching Session",
    desc: "Happiness is a Choice",
    isNewGroup: true,
  },
  {
    id: 4,
    src: "event4",
    alt: "something event",
    date: "FRI, JUL 28 · 1:30 AM CEST",
    title:
      "NYC Chronic Illness Support Group - Meet and Greet, (R, 7/27 @ 7:30)",
    desc: "NYC Chronic Illness Support Group",
    isNewGroup: false,
  },
  {
    id: 5,
    src: "event5",
    alt: "something event",
    date: "TUE, AUG 1 · 2:00 AM CEST",
    title: "Join the Bitcoin Gold Rush: Building Wealth with Bitcoin",
    desc: "Financial Freedom - Proven Ways to Make More Money",
    isNewGroup: false,
  },
  {
    id: 6,
    src: "event6",
    alt: "something event",
    date: "FRI, JUL 28 · 12:00 AM CEST",
    title: "Business Brainstorming",
    desc: "Online Women Entrepreneurs Meetup Group",
    isNewGroup: true,
  },
  {
    id: 7,
    src: "event7",
    alt: "something event",
    date: "FRI, AUG 11 · 10:00 PM CEST",
    title: "How to use AI to apply for Business Grants",
    desc: "Business Grants for Women Meetup Group",
    isNewGroup: true,
  },
  {
    id: 8,
    src: "event8",
    alt: "something event",
    date: "FRI, JUL 28 · 12:00 AM CEST",
    title: "Free 1:1 Life Coaching Session",
    desc: "Happiness is a Choice",
    isNewGroup: true,
  },
];

export const LoginPopUpButtons = [
  {
    id: 1,
    text: "Zaloguj za pomocą facebooka",
    icon: "facebook",
  },
  { id: 2, text: "Zaloguj za pomocą google", icon: "google" },
  { id: 3, text: "Zaloguj za pomocą apple", icon: "star is-transparent" },
];

export const RegisterPopUpButtons = [
  {
    id: 1,
    text: " Kontynuuj za pomocą facebooka",
    icon: "facebook",
  },
  { id: 2, text: "Kontynuuj za pomocą google", icon: "google" },
  { id: 3, text: "Kontynuuj za pomocą apple", icon: "star is-transparent" },
  { id: 4, text: "Kontynuuj za pomocą gmail", icon: "gmail" },
];

type SelectOption = {
  id: number;
  selectText: string;
  value: string;
};

type SortSetup = {
  id: string;
  title: string;
  clickFunctionName: string;
  clickFunctionIsOpen: string;
  clickFunctionIsValue: string;
  paramTitle: string;
  color?: boolean;
  content: SelectOption[];
};

export const groupsNearMeetupSortsSetup: SortSetup[] = [
  {
    id: "groupsNearMeetupSortsSetup1",
    title: "Dowolna odległość",
    clickFunctionName: "handleGroupsDistanceSort",
    clickFunctionIsOpen: "groupsDistanceSort",
    clickFunctionIsValue: "groupsDistanceValue",
    paramTitle: "distance",
    content: [
      { id: 1, selectText: "Dowolna odległość", value: "any-distance" },
      { id: 2, selectText: "5 kilometrów", value: "five-kilometers" },
      { id: 3, selectText: "10 kilometrów", value: "ten-kilometers" },
      { id: 4, selectText: "25 kilometrów", value: "twenty-five-kilometers" },
      { id: 5, selectText: "50 kilometrów", value: "fifty-kilometers" },
      { id: 6, selectText: "100 kilometrów", value: "hundred-100 kilometers" },
      {
        id: 7,
        selectText: "150 kilometrów",
        value: "hundred-fifty-kilometers",
      },
    ],
  },
  {
    id: "groupsNearMeetupSortsSetup2",
    title: "Dowolna kategoria",
    clickFunctionName: "handleGroupsCategorySort",
    clickFunctionIsOpen: "groupsCategorySort",
    clickFunctionIsValue: "groupsCategoryValue",
    paramTitle: "category",
    content: [
      { id: 1, selectText: "Dowolna kategoria", value: "any-category" },
      { id: 2, selectText: "Nowe grupy", value: "new-groups" },
      {
        id: 3,
        selectText: "Aktywizm i polityka",
        value: "activism-and-politics",
      },
      { id: 4, selectText: "Działania społeczne", value: "social-actions" },
      { id: 5, selectText: "Gry", value: "games" },
      { id: 6, selectText: "Hobby i pasje", value: "hobbies-and-interests" },
      {
        id: 7,
        selectText: "Język i tożsamość",
        value: "language-and-identity",
      },
      { id: 8, selectText: "Kariera i biznes", value: "career-and-business" },
      { id: 9, selectText: "Muzyka", value: "music" },
      {
        id: 10,
        selectText: "Nauki i edukacja",
        value: "science-an-education",
      },
      {
        id: 11,
        selectText: "Podróże i spędzanie czasu na świeżym powietrzu",
        value: "travel-and-outdoor-activities",
      },
      {
        id: 12,
        selectText: "Religia i duchowość",
        value: "religion-and-spirituality",
      },
      {
        id: 13,
        selectText: "Rodzicielstwo i rodzina",
        value: "parenting-and-family",
      },
      {
        id: 14,
        selectText: "Społeczność i środowisko",
        value: "community-and-environment",
      },
      { id: 15, selectText: "Sporty i fitness", value: "sports-and-fitness" },
      { id: 16, selectText: "Sztuka i kultura", value: "art-and-culture" },
      { id: 17, selectText: "Taniec", value: "dance" },
      { id: 18, selectText: "Technologia", value: "technology" },
      { id: 19, selectText: "Twórcze pisanie", value: "creative-writing" },
      {
        id: 20,
        selectText: "Wsparcie i coaching",
        value: "support-and-coaching",
      },
      {
        id: 21,
        selectText: "Zdrowie i dobre samopoczucie",
        value: "health-and-well-being",
      },
      { id: 22, selectText: "Zwierzęta", value: "animals" },
    ],
  },
];

export const eventsNearMeetupSortsSetup: SortSetup[] = [
  {
    id: "eventsNearMeetupSortsSetup1",
    title: "Wszystkie dni",
    clickFunctionName: "handleEventsDaySort",
    clickFunctionIsOpen: "eventsDaySort",
    clickFunctionIsValue: "eventsDayValue",
    paramTitle: "dateRange",
    content: [
      { id: 1, selectText: "Wszystkie dni", value: "all-day" },
      {
        id: 2,
        selectText: "Rozpoczynające się wkrótce",
        value: "starting-soon",
      },
      { id: 3, selectText: "Dzisiaj", value: "today" },
      { id: 4, selectText: "Jutro", value: "tomorrow" },
      { id: 5, selectText: "W tym tygodniu", value: "this-week" },
      { id: 6, selectText: "W ten weekend", value: "this-weekend" },
      { id: 7, selectText: "W następnym tygodniu", value: "next-week" },
      { id: 8, selectText: "Niestandardowe", value: "custom" },
    ],
  },
  {
    id: "eventsNearMeetupSortsSetup2",
    title: "Dowolny typ",
    clickFunctionName: "handleEventsTypeSort",
    clickFunctionIsOpen: "eventsTypeSort",
    clickFunctionIsValue: "eventsTypeValue",
    paramTitle: "eventType",
    content: [
      { id: 1, selectText: "Dowolny typ", value: "any-type" },
      { id: 2, selectText: "Online", value: "online" },
      {
        id: 3,
        selectText: "Z dowolnym udziałem osobistym",
        value: "in-person",
      },
      {
        id: 4,
        selectText: "Z udziałem osobistym tylko wewnątrz",
        value: "in-person-indoor",
      },
      {
        id: 5,
        selectText: "Z udziałem osobistym tylko na zewnątrz",
        value: "in-person-outdoor",
      },
    ],
  },
  {
    id: "eventsNearMeetupSortsSetup3",
    title: "Dowolna odległość",
    clickFunctionName: "handleEventsDistanceSort",
    clickFunctionIsOpen: "eventsDistanceSort",
    clickFunctionIsValue: "eventsDistanceValue",
    paramTitle: "distance",
    content: [
      { id: 1, selectText: "Dowolna odległość", value: "any-distance" },
      { id: 2, selectText: "5 kilometrów", value: "five-kilometers" },
      { id: 3, selectText: "10 kilometrów", value: "ten-kilometers" },
      { id: 4, selectText: "25 kilometrów", value: "twenty-five-kilometers" },
      { id: 5, selectText: "50 kilometrów", value: "fifty-kilometers" },
      { id: 6, selectText: "100 kilometrów", value: "hundred-100 kilometers" },
      {
        id: 7,
        selectText: "150 kilometrów",
        value: "hundred-fifty-kilometers",
      },
    ],
  },
  {
    id: "eventsNearMeetupSortsSetup4",
    title: "Dowolna kategoria",
    clickFunctionName: "handleEventsCategorySort",
    clickFunctionIsOpen: "eventsCategorySort",
    clickFunctionIsValue: "eventsCategoryValue",
    paramTitle: "category",
    content: [
      { id: 1, selectText: "Dowolna kategoria", value: "any-category" },
      { id: 2, selectText: "Nowe grupy", value: "new-groups" },
      {
        id: 3,
        selectText: "Aktywizm i polityka",
        value: "activism-and-politics",
      },
      { id: 4, selectText: "Działania społeczne", value: "social-actions" },
      { id: 5, selectText: "Gry", value: "games" },
      { id: 6, selectText: "Hobby i pasje", value: "hobbies-and-interests" },
      {
        id: 7,
        selectText: "Język i tożsamość",
        value: "language-and-identity",
      },
      { id: 8, selectText: "Kariera i biznes", value: "career-and-business" },
      { id: 9, selectText: "Muzyka", value: "music" },
      {
        id: 10,
        selectText: "Nauki i edukacja",
        value: "science-an-education",
      },
      {
        id: 11,
        selectText: "Podróże i spędzanie czasu na świeżym powietrzu",
        value: "travel-and-outdoor-activities",
      },
      {
        id: 12,
        selectText: "Religia i duchowość",
        value: "religion-and-spirituality",
      },
      {
        id: 13,
        selectText: "Rodzicielstwo i rodzina",
        value: "parenting-and-family",
      },
      {
        id: 14,
        selectText: "Społeczność i środowisko",
        value: "community-and-environment",
      },
      { id: 15, selectText: "Sporty i fitness", value: "sports-and-fitness" },
      { id: 16, selectText: "Sztuka i kultura", value: "art-and-culture" },
      { id: 17, selectText: "Taniec", value: "dance" },
      { id: 18, selectText: "Technologia", value: "technology" },
      { id: 19, selectText: "Twórcze pisanie", value: "creative-writing" },
      {
        id: 20,
        selectText: "Wsparcie i coaching",
        value: "support-and-coaching",
      },
      {
        id: 21,
        selectText: "Zdrowie i dobre samopoczucie",
        value: "health-and-well-being",
      },
      { id: 22, selectText: "Zwierzęta", value: "animals" },
    ],
  },
  {
    id: "eventsNearMeetupSortsSetup5",
    title: "Sortuj według: Trafność",
    color: true,
    clickFunctionName: "handleEventsSort",
    clickFunctionIsOpen: "eventsSort",
    clickFunctionIsValue: "eventsValue",
    paramTitle: "sortField",
    content: [
      {
        id: 1,
        selectText: "Sortuj według: Trafność",
        value: "sort-by-relevance",
      },
      { id: 2, selectText: "Sortuj według: Data", value: "sort-by-date" },
    ],
  },
];

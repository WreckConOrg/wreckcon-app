import { NavBarItemEnum, NavBarItemProps } from "./NavBarItem";

export const NAVBARCONFIG: NavBarItemProps[] = [
  // {
  //   itemEnum: NavBarItemEnum.PRETTY_DERBY,
  //   url: "/pretty-derby",
  //   displayText: "pretty derby",
  // },
  {
    itemEnum: NavBarItemEnum.ABOUT,
    url: "/about",
    displayText: "about",
  },
  {
    itemEnum: NavBarItemEnum.TICKETS,
    url: "https://gatech.universitytickets.com/w/event.aspx?id=2196",
    displayText: "tickets",
  },
  // {
  //   itemEnum: NavBarItemEnum.EVENTS,
  //   url: "/events",
  //   displayText: "events",
  // },
  // {
  //   itemEnum: NavBarItemEnum.SCHEDULE,
  //   url: "/schedule",
  //   displayText: "schedule",
  // },
  // {
  //   itemEnum: NavBarItemEnum.EVENT_INFO,
  //   url: "/info",
  //   displayText: "event info",
  // },
  // {
  //   itemEnum: NavBarItemEnum.GUESTS,
  //   url: "/guests",
  //   displayText: "guests",
  // },
  {
    itemEnum: NavBarItemEnum.DISCORD,
    url: "https://discord.gg/BY2hTWjz4s",
    displayText: "discord",
  },
  {
    itemEnum: NavBarItemEnum.EVENT_INFO,
    url: "/info",
    displayText: "event info",
    dropdown: true,
    dropdownLinks: [
      { href: "/info", label: "overview", gray: true },
      { href: "/schedule", label: "schedule", gray: false },
      { href: "/brochure", label: "brochure", gray: true },
      { href: "/events", label: "events", gray: false },
      { href: "/guests", label: "guests", gray: true },
      { href: "/artists", label: "artists", gray: false },
    ],
  },
  {
    itemEnum: NavBarItemEnum.GET_INVOLVED,
    url: "/sponsor-us",
    displayText: "get involved",
    dropdown: true,
    dropdownLinks: [
      { href: "/contact-us", label: "contact us", gray: true },
      { href: "/sponsors", label: "sponsors", gray: false },
      { href: "/involved", label: "participate", gray: true },
      { href: "https://ko-fi.com/wreckcon", label: "ko-fi", gray: false },
    ],
  },
];

import { NavBarItemEnum, NavBarItemProps } from "./NavBarItem";

export const NAVBARCONFIG: NavBarItemProps[] = [
  {
    itemEnum: NavBarItemEnum.ABOUT,
    url: "/about",
    displayText: "about",
  },
  {
    itemEnum: NavBarItemEnum.TICKETS,
    url: "https://gatech.universitytickets.com/w/event.aspx?id=2099",
    displayText: "tickets",
  },
  {
    itemEnum: NavBarItemEnum.EVENTS,
    url: "/events",
    displayText: "events",
  },
  {
    itemEnum: NavBarItemEnum.SCHEDULE,
    url: "/schedule",
    displayText: "schedule",
  },
  {
    itemEnum: NavBarItemEnum.DISCORD,
    url: "https://discord.gg/BY2hTWjz4s",
    displayText: "discord",
  },
  {
    itemEnum: NavBarItemEnum.SHOP,
    url: "https://wreckcon.bigcartel.com/",
    displayText: "shop",
  },
  {
    itemEnum: NavBarItemEnum.GET_INVOLVED,
    url: "/sponsor-us",
    displayText: "get involved",
    dropdown: true,
  },
];

import { NavBarItemEnum, NavBarItemProps } from "./NavBarItem"

export const NAVBARCONFIG: NavBarItemProps[] = [
        {
            itemEnum: NavBarItemEnum.ABOUT,
            url: "/about",
            displayText: "about",
        },
        {
            itemEnum: NavBarItemEnum.GET_INVOLVED,
            url: "/get-involved",
            displayText: "get involved",
        },
        {
            itemEnum: NavBarItemEnum.DISCORD,
            url: "https://discord.gg/BY2hTWjz4s",
            displayText: "discord",
        },
        {
            itemEnum: NavBarItemEnum.BIGCARTEL,
            url: "https://wreckcon.bigcartel.com/",
            displayText: "bigcartel",
        },
        {
            itemEnum: NavBarItemEnum.SPONSOR_US,
            url: "/sponsor-us",
            displayText: "sponsor us!",
        },

    ]


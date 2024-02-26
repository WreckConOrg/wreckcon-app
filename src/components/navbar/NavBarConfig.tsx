import { NavBarItemEnum, NavBarItemProps } from "./NavBarItem"

export const NAVBARCONFIG: NavBarItemProps[] = [
        {
            itemEnum: NavBarItemEnum.ABOUT,
            url: "/about",
            displayText: "about",
        },
        {
            itemEnum: NavBarItemEnum.DISCORD,
            url: "https://discord.gg/BY2hTWjz4s",
            displayText: "discord",
        },
        {
            itemEnum: NavBarItemEnum.TICKETS,
            url: "https://gatech.universitytickets.com/w/event.aspx?id=2002&p=1",
            displayText: "tickets",
        },
<<<<<<< HEAD
        {
            itemEnum: NavBarItemEnum.SCHEDULE,
            url: "/schedule",
            displayText: "schedule",
        },
=======
>>>>>>> 17a616c46ce67f5d8b810fd1d5e59eb1c9088f1d
        {
            itemEnum: NavBarItemEnum.SHOP,
            url: "https://wreckcon.bigcartel.com/",
            displayText: "shop",
        },
        {
            itemEnum: NavBarItemEnum.GET_INVOLVED,
            url: "/sponsor-us",
            displayText: "get involved",
            dropdown: true
        },

    ]


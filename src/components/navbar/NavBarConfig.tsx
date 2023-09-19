import { NavBarProps } from "./navbar"
import { NavBarItemEnum, NavBarItemProps } from "./NavBarItem"

export const NAVBARCONFIG: NavBarProps = {
    items: [
        {
            itemEnum: NavBarItemEnum.ABOUT,
            url: "\\about",
            displayText: "about",
        },
        {
            itemEnum: NavBarItemEnum.GET_INVOLVED,
            url: "\\about",
            displayText: "get involved!",
        },
        {
            itemEnum: NavBarItemEnum.SOCIALS,
            url: "\\about",
            displayText: "socials",
        },
        {
            itemEnum: NavBarItemEnum.SPONSER_US,
            url: "\\about",
            displayText: "sponser us!",
        },

    ],
    selectedItem: NavBarItemEnum.HOME
}

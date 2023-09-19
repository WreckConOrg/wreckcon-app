import React from "react";
import classNames from "classnames";

export enum NavBarItemEnum {
    HOME,
    ABOUT,
    GET_INVOLVED,
    SOCIALS,
    SPONSER_US,
}

export interface NavBarItemProps {
    itemEnum: NavBarItemEnum;
    url: string;
    displayText: string;
    selected?: boolean;
}

import { Link } from "react-router-dom";
export const NavBarItem = (props: NavBarItemProps) => {
    return (
        <div>
            <Link 
            to={props.url} 
            className={classNames( 
                "font-inter font-thin text-[2vw] ml-[7vw]",
                { "text-wc-yellow": props.selected},
                {"text-white": !props.selected}
            )}>
                {props.displayText}
            </Link>
        </div>
    )
}


import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export enum NavBarItemEnum {
    HOME,
    ABOUT,
    DISCORD,
    GET_INVOLVED,
    SPONSOR_US,
    BIGCARTEL
}

export interface NavBarItemProps {
    itemEnum: NavBarItemEnum;
    url: string;
    displayText: string;
    selected?: boolean;
}

export const NavBarItem = (props: NavBarItemProps) => {
    return (
        <div>
            <Link 
            to={props.url} 
            className={classNames( 
                "font-inter font-thin text-[2vw] ml-[5.5vw] ",
                {"text-[#FFC42D]": props.selected},
                {"text-white": !props.selected}
            )}>
                {props.displayText}
            </Link>
        </div>
    )
}


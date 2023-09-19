import React from "react";
import { NavBarItem, NavBarItemEnum, NavBarItemProps } from "./NavBarItem";
import { Link } from "react-router-dom";

export interface NavBarProps {
    items: NavBarItemProps[]
    selectedItem: NavBarItemEnum;
}

export const Navbar = (props: NavBarProps) => {

    const itemsList = props.items.map((item: NavBarItemProps) => {
        return NavBarItem(item); 
    });

    return (
    <div className="bg-wc-gray flex flex-row items-center h-[8vw]">
        <Link to={'/wreckcon-app'} className="font-coolvetica text-white font-thin text-[3vw] ml-[6vw]">
            WreckCon
        </Link>
        {itemsList}


        {/* <Link to={'/about'} className={"font-inter font-thin text-[2vw] ml-[7vw] " + "text-[#FFC42D] pointer-events-none" + "text-white"}>
            about
        </Link>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            get involved
        </div>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            socials
        </div>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            sponsor us!
        </div> */}
    </div>
    )
}
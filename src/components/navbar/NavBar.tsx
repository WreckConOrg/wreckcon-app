import React from "react";
import { NavBarItem, NavBarItemEnum, NavBarItemProps } from "./NavBarItem";
import { Link } from "react-router-dom";

export interface NavBarProps {
    items: NavBarItemProps[]
    selectedItem: NavBarItemEnum;
    dropdownSelect? : string;
}

export const Navbar = (props: NavBarProps) => {

    const itemsList = props.items.map((item: NavBarItemProps) => {
        return NavBarItem({
            ...item,
            selected: props.selectedItem === item.itemEnum,
            dropdownSelect: props.dropdownSelect
        }); 
    });

    return (
    <div className="bg-[#2e2f31] flex flex-row items-center h-[8vw]">
        <Link to={'/wreckcon-app'} className="font-coolvetica text-white font-thin text-[3vw] ml-[6vw]">
            WreckCon
        </Link>
        {itemsList}
    </div>
    )
}
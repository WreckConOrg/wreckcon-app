import React from "react";
import { NavBarItem, NavBarItemEnum, NavBarItemProps } from "./NavBarItem";
import { Link } from "react-router-dom";

export interface NavBarProps {
  items: NavBarItemProps[];
  selectedItem: NavBarItemEnum | null;
  dropdownSelect?: string;
}

export const Navbar = (props: NavBarProps) => {
  const itemsList = props.items.map((item: NavBarItemProps) => {
    return NavBarItem({
      ...item,
      selected: props.selectedItem ? props.selectedItem === item.itemEnum : false,
      dropdownSelect: props.dropdownSelect,
    });
  });

  return (
    <div id="nav-bar" className=" flex flex-nowrap justify-between items-center no-scrollbar py-4">
      <Link
        to={"/"}
        className="font-coolvetica text-white font-thin md:text-[3rem] lg:text-[4rem] md:ml-[2rem] lg:ml-[3rem]"
      >
        WreckCon
      </Link>
      <div className="flex items-center md:gap-[1.25rem] lg:gap-[2rem] md:mr-[2rem] lg:mr-[3rem]">
        {itemsList}
      </div>
    </div>
  );
};

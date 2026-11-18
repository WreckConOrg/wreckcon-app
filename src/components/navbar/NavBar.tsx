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
        className="font-coolvetica text-white font-thin text-[4rem] ml-[3rem]"
      >
        WreckCon
      </Link>
      <div className="flex items-center mr-[3rem]">
        {itemsList}
      </div>
    </div>
  );
};

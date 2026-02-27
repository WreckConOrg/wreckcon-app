import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { DiscordLogo } from "@phosphor-icons/react";

export enum NavBarItemEnum {
  HOME,
  ABOUT,
  DISCORD,
  TICKETS,
  GET_INVOLVED,
  SHOP,
  SCHEDULE,
  CONTACT,
  PARTICIPATE,
  SPONSOR,
  EVENTS,
  GUESTS,
  ARTISTS,
  EVENT_INFO,
  PRETTY_DERBY,
  BROCHURE
}

export interface NavBarItemProps {
  itemEnum: NavBarItemEnum;
  url: string;
  displayText: string;
  selected?: boolean;
  dropdown?: boolean;
  dropdownSelect?: string;
  dropdownLinks?: { href: string; label: string; gray?: boolean }[];
}

export const NavBarItem = (props: NavBarItemProps) => {
  // if (props.itemEnum === NavBarItemEnum.DISCORD) {
  //   return (
  //     <Link to={props.url} className="ml-[4vw]">
  //       <DiscordLogo size="3vw" className="text-white" weight="fill" />
  //     </Link>
  //   );
  // }
  if (!props.dropdown || !props.dropdownLinks) {
    return (
      <div>
        <Link
          to={props.url}
          className={`font-inter font-thin text-xl md:text-[2vw] ml-4 md:ml-[3vw] whitespace-nowrap ${
            props.selected ? "text-[#FFC42D]" : "text-white hover:text-gray-300"
          }`}
        >
          {props.displayText}
        </Link>
      </div>
    );
  } else {
    return (
      <Menu as="div" className="relative inline-block text-left ml-4 md:ml-[3vw]">
        <Menu.Button
          className={`bg-opacity-90 z-20 flex items-center space-x-2 md:space-x-4 font-inter font-thin text-xl md:text-[2vw] h-auto md:h-[3vw] my-2 md:my-[0.3vw] whitespace-nowrap transition-colors ${
            props.selected ? "text-[#FFC42D]" : "text-white hover:text-gray-300"
          }`}
        >
          <span>{props.displayText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 38 22"
            fill="none"
            className="w-4 h-4 md:w-[1.4vw] transform ui-open:rotate-180 transition-transform duration-200"
          >
            <path
              d="M17.3572 20.7526C18.3335 21.7289 19.9165 21.7289 20.8928 20.7526L36.8027 4.84273C37.779 3.86642 37.779 2.2835 36.8027 1.30719C35.8264 0.330883 34.2434 0.330883 33.2671 1.30719L19.125 15.4493L4.98286 1.30719C4.00655 0.330883 2.42364 0.330883 1.44733 1.30719C0.47102 2.2835 0.47102 3.86642 1.44733 4.84273L17.3572 20.7526Z"
              fill={props.selected ? "#FFC42D" : "#FFF"}
            />
          </svg>
        </Menu.Button>
  
        <Menu.Items className="absolute left-0 mt-1 w-auto min-w-full bg-[#131313] rounded-md shadow-lg z-[110]">
          {props.dropdownLinks.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <Link
                  to={link.href}
                  className={`block px-4 py-2 md:px-4 md:py-2 font-inter font-thin text-lg md:text-[1.5vw] transition-colors ${
                    props.dropdownSelect === link.label ? "text-[#FFC42D]" : "text-white"
                  } ${link.gray ? "bg-[#5A5454] bg-opacity-80" : "bg-[#131313] bg-opacity-90"} hover:bg-opacity-100`}
                >
                  {link.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    );
  }
};

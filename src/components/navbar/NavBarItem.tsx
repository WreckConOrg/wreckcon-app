import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

export enum NavBarItemEnum {
    HOME,
    ABOUT,
    DISCORD,
    TICKETS,
    GET_INVOLVED,
    SHOP
}

export interface NavBarItemProps {
    itemEnum: NavBarItemEnum;
    url: string;
    displayText: string;
    selected?: boolean;
    dropdown?: boolean;
    dropdownSelect? : string;
}

export const NavBarItem = (props: NavBarItemProps) => {

    if (!props.dropdown) {
        return (
            <div>
                <Link 
                to={props.url} 
                className={classNames( 
                    "font-inter font-thin text-[2vw] ml-[6vw]",
                    {"text-[#FFC42D]": props.selected},
                    {"text-white": !props.selected}
                )}>
                    {props.displayText}
                </Link>
            </div>
        )
    } else {

        const links = [
            {href: '/contact-us', label:'contact us', gray: true},
            {href: '/sponsors', label:'sponsors', gray: false},
            {href: '/involved', label:'vendors, volunteers, panelists', gray: true},
            {href: 'https://ko-fi.com/wreckcon', label:'ko-fi', gray: false}
        ]

        return (
            <Menu>
                <Menu.Button className="ml-[6vw] ui-open:bg-[#131313] bg-opacity-90">
                    <div className={classNames(
                        "font-inter font-thin text-[2vw] flex flex-row justify-center h-[3vw] w-[16vw] my-[0.3vw]",
                        {"text-[#FFC42D]": props.selected},
                        {"text-white": !props.selected}
                    )}>
                        <div className="flex flex-row">
                            get involved
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.7vw" viewBox="0 0 38 22" fill="none" className="ml-[0.6vw] ui-open:hidden">
                                <path d="M17.3572 20.7526C18.3335 21.7289 19.9165 21.7289 20.8928 20.7526L36.8027 4.84273C37.779 3.86642 37.779 2.2835 36.8027 1.30719C35.8264 0.330883 34.2434 0.330883 33.2671 1.30719L19.125 15.4493L4.98286 1.30719C4.00655 0.330883 2.42364 0.330883 1.44733 1.30719C0.47102 2.2835 0.47102 3.86642 1.44733 4.84273L17.3572 20.7526ZM16.625 17.9849V18.9849H21.625V17.9849H16.625Z" 
                                fill={props.selected ? "#FFC42D" : "#FFFF"}/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.7vw" viewBox="0 0 38 22" fill="none" className="ml-[0.6vw] ui-not-open:hidden">
                                <path d="M20.7678 1.23223C19.7915 0.255922 18.2085 0.255922 17.2322 1.23223L1.32233 17.1421C0.34602 18.1184 0.34602 19.7014 1.32233 20.6777C2.29864 21.654 3.88155 21.654 4.85786 20.6777L19 6.53553L33.1421 20.6777C34.1184 21.654 35.7014 21.654 36.6777 20.6777C37.654 19.7014 37.654 18.1184 36.6777 17.1421L20.7678 1.23223ZM21.5 4V3L16.5 3V4L21.5 4Z" 
                                fill={props.selected ? "#FFC42D" : "#FFFF"}/>
                            </svg>
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className="translate-y-[9.02vw] translate-x-[-16vw]">
                    {links.map((link => (

                        <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                                <div className={classNames("w-[16vw] h-fit flex items-center mx-[-0.03vw]",
                                    {"bg-[#5A5454] bg-opacity-80" : link.gray},
                                    {"bg-[#131313] bg-opacity-90" : !link.gray}
                                )}>
                                    <Link to={link.href} className={classNames(
                                        "font-inter font-thin text-[1.5vw] mx-[0.6vw] flex items-center my-[0.4vw]",
                                        {"text-white" : !(props.dropdownSelect == link.label)},
                                        {"text-[#FFC42D]" : (props.dropdownSelect == link.label)}
                                        )}>
                                        {link.label}
                                    </Link>
                                </div>
                            )}
                        </Menu.Item>

                    )))}
                </Menu.Items>
            </Menu>
        )
    }
}


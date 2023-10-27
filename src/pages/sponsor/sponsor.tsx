import React from "react"
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItem, NavBarItemEnum } from "../../components/navbar/NavBarItem";

export const Sponsor = (): JSX.Element => {
    return (
        <div className="h-fill bg-[#2e2f31]">
            <Navbar
                items={NAVBARCONFIG}
                selectedItem={NavBarItemEnum.GET_INVOLVED}
                dropdownSelect="sponsors"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
                    Sponsors
                </div>
                <div className="w-[70vw] font-inter text-[1.7vw] mb-[4vw] mt-[3vw] text-white text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    )
}
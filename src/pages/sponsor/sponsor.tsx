import React from "react"
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItem, NavBarItemEnum } from "../../components/navbar/NavBarItem";

export const Sponsor = (): JSX.Element => {
    return (
        <div className="h-fill bg-[#2e2f31]">
            <Navbar
                items={NAVBARCONFIG}
                selectedItem={NavBarItemEnum.SPONSOR_US}
            />
            <div className="flex flex-row items-center justify-center h-[6vw] font-coolvetica text-white text-[4vw]">
                Sponsors
            </div>
            <div className="flex flex-row justify-center items-center font-inter text-[1.7vw] mb-[4vw] mt-[3vw] text-white h-fit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
        </div>
    )
}
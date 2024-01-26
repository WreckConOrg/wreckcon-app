import React from "react";
import { Disclosure } from '@headlessui/react'
import ScheduleItem from "./scheduleItem";
import boardgames from './../../assets/club_logos/board games logo.png';
import sga from './../../assets/club_logos/sga logo.png';
import mtg from './../../assets/club_logos/mtg logo.png';
import vgdev from './../../assets/club_logos/vgdev logo.png';
import dnd from './../../assets/club_logos/dnd logo.png';
import anime from './../../assets/club_logos/anime logo.png';
import pokemon from './../../assets/club_logos/pokejackets logo.png';
import gtmn from './../../assets/club_logos/gtmn logo.png';
import { useCarousel } from "./../../hooks/aboutCarousel";
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";
import classNames from "classnames";
import Schedule from "./schedule";
import { SCHEDULECONFIG } from "./scheduleConfig";

export const SchedulePage = (): JSX.Element => {

    return (
        <div className="bg-[#2e2f31] h-screen overflow-x-hidden">
            <div className="h-fit bg-[#2e2f31] w-[100vw] overflow-hidden">
                <BrowserView>
                    <Navbar
                    items={NAVBARCONFIG}
                    selectedItem={NavBarItemEnum.SCHEDULE}/>
                </BrowserView>
                <MobileView>
                    <Hamburger about={true}/>
                </MobileView>
                <div className="py-10 px-40 items-center">
                    <Schedule items={SCHEDULECONFIG}/>
                </div>
            </div>
        </div>
    )
}
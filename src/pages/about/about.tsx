import React from "react";
import ClubLogo from "./clublogo";
import boardgames from './../../assets/club_logos/board games logo.png';
import sga from './../../assets/club_logos/sga logo.png';
import mtg from './../../assets/club_logos/mtg logo.png';
import vgdev from './../../assets/club_logos/vgdev logo.png';
import dnd from './../../assets/club_logos/dnd logo.png';
import anime from './../../assets/club_logos/anime logo.png';
import { useCarousel } from "./../../hooks/aboutCarousel";
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";

export const About = (): JSX.Element => {
    //const aboutImage = useCarousel()

    return (
        <div className="h-fill bg-[#2e2f31]">
            <Navbar
            items={NAVBARCONFIG}
            selectedItem={NavBarItemEnum.ABOUT}/>
            <div className="flex flex-row items-center justify-center h-[6vw] font-coolvetica text-white text-[4vw]">
                About WreckCon
            </div>
            <div className="flex flex-row h-fill">
                <div className="w-[30vw] h-fill bg-[#2e2f31] mb-[5vw] mt-[3vw] mx-[3vw]">
                    {useCarousel()}
                </div>
                <div className="font-inter text-[1.7vw] mb-[5vw] mt-[3vw] text-white w-[55vw]">
                    WreckCon is a student culture convention held at Georgia Tech (Main Atlanta Campus), fully organized and run by Georgia Tech students. Starting in 2022, the Dungeons & Dragons and Magic: the Gathering clubs ran a small convention with events such as open play and tournaments. Realizing that the major potential for a convention at Tech, we began reaching out to other clubs to make the event a celebration of student culture here at Tech, following in the footsteps of previous events such as Techwood Con. We're envisioning an event that showcases the best of what people at Georgia Tech have to offer, built by Tech, for Tech. Go jackets!                </div>
            </div>
            <div className="bg-[#FFC42D] flex flex-row items-center justify-center h-[7vw] font-coolvetica text-black text-[4vw]">
                Partnering Orgs
            </div>
            <div className="flex items-center justify-center font-inter text-white">
                <div className="my-[3vw] text-[1.7vw] w-[70vw] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className="flex items-center justify-center h-fit space-x-[8vw]">
                <ClubLogo logo={vgdev} clubLink="https://gtmtg.org/" clubTitle="VGDev" clubText="Magic: The Gathering" />
                <ClubLogo logo={dnd} clubLink='https://github.com/WreckConOrg/wreckcon-app' clubTitle='GTD&D' clubText='Student Government Association'/>
                <ClubLogo logo={mtg} clubLink="https://gtmtg.org/" clubTitle="GTMTG" clubText="Magic: The Gathering" />
            </div>
            <div className="flex items-center justify-center h-fit space-x-[4vw]">
                <ClubLogo logo={boardgames} clubLink='https://www.derivative-calculator.net/' clubTitle='Board Games' clubText="Georgia Tech's premiere board gaming club."/>
                <ClubLogo logo={sga} clubLink='https://github.com/WreckConOrg/wreckcon-app' clubTitle='SGA' clubText='Student Government Association'/>
            </div>
            <div className="flex items-center justify-center h-fit space-x-[4vw]">
                <ClubLogo logo={anime} clubLink='https://www.derivative-calculator.net/' clubTitle='Anime O-Tekku' clubText="Georgia Tech's premiere board gaming club."/>
            </div>
        </div>

    )
}
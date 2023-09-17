import React from "react";
import Navbar from "./navbar";

export const About = (): JSX.Element => {
    return (
        <div className="h-fill bg-[#2e2f31]">
            <Navbar about={true} involved={false} socials={false} sponsor={false}/>
            <div className="bg-[#D9D9D9] flex flex-row items-center justify-center h-[7vw] font-coolvetica text-white text-[4vw]">
                About WreckCon
            </div>
            <div className="flex flex-row h-fill">
                <div className="w-[25vw] h-fill bg-[#D9D9D9] my-[5vw] mx-[3vw]"/>
                <div className="font-inter text-[1.7vw] my-[5vw] text-white w-[55vw]">
                    WreckCon is a student culture convention held at Georgia Tech (Main Atlanta Campus), fully organized and run by Georgia Tech students. Starting in 2022, the Dungeons & Dragons and Magic: the Gathering clubs ran a small convention with events such as open play and tournaments. Realizing that the major potential for a convention at Tech, we began reaching out to other clubs to make the event a celebration of student culture here at Tech, following in the footsteps of previous events such as Techwood Con. We're envisioning an event that showcases the best of what people at Georgia Tech have to offer, built by Tech, for Tech. Go jackets!                </div>
            </div>  
            <div className="bg-[#D9D9D9] flex flex-row items-center justify-center h-[7vw] font-coolvetica text-white text-[4vw]">
                Partnering Orgs
            </div>
            <div className="flex items-center justify-center font-inter text-white">
                <div className="my-[3vw] text-[1.7vw] w-[70vw] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
        </div>

    )
}
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    about: boolean;
    involved: boolean;
    socials: boolean;
    sponsor: boolean;
}

function Navbar(props: NavbarProps) {
    return (
    <div className="bg-[#2e2f31] flex flex-row items-center h-[8vw]">
        <Link to={'/wreckcon-app'} className="font-coolvetica text-white font-thin text-[3vw] ml-[6vw]">
            WreckCon
        </Link>
        <Link to={'/about'} className={"font-inter font-thin text-[2vw] ml-[7vw] " + (props.about ? "text-[#FFC42D] pointer-events-none" : "text-white")}>
            about
        </Link>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            get involved
        </div>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            socials
        </div>
        <div className="font-inter text-white font-thin text-[2vw] ml-[7vw]">
            sponsor us!
        </div>
    </div>
    )
}

Navbar.propTypes = {}


export default Navbar;
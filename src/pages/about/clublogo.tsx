import React from "react";

interface LogoProps {
    logo: any;
    clubTitle: string;
    clubText: string;
    clubLink: string;
}

function ClubLogo(props: LogoProps) {

    return (
        <a href={props.clubLink}>
            <div>
                <div className="flex flex-col items-center h-[22vw] w-[18vw] bg-[#D9D9D9] my-[3vw]">
                    <img src={props.logo} alt='test' className="w-[9vw] translate-y-[-4vw]"/>
                    <div className="font-inter font-bold text-black text-[1.9vw] translate-y-[-3.7vw]">
                        {props.clubTitle}
                    </div>
                    <div className="font-inter text-[1.1vw] translate-y-[-3.5vw] w-[16vw]">
                        {props.clubText}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ClubLogo;
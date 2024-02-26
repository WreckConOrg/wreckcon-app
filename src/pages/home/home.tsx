import React from "react";
import { Link } from "react-router-dom";
import { useCountdown } from "../../hooks/countdownTimes";
import classNames from "classnames";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

interface HomeProps {
    phraseUsed: string;
}

export const Home = (props: HomeProps): JSX.Element => {

    const CONDATE = new Date("March 2, 2024 10:00:00").getTime()
    const [days, hours, minutes, seconds] = useCountdown(CONDATE)

  return (
    <div>
        <div className="h-screen bg-[#2e2f31] overflow-hidden">
            <div className={classNames(
                            {"bg-darktape bg-contain bg-repeat-x rotate-[-47.11deg] overflow-hidden w-[6000px] h-[10vw] translate-x-[-1540px] 3xl:translate-x-[-43vw] 3xl:translate-y-[-20vw] 4xl:translate-x-[-2vw]" : !isMobile})}/>
            <div className={classNames(
                            { "bg-tape bg-contain bg-repeat-x rotate-[18.55deg] overflow-hidden w-[6000px] h-[10vw] translate-x-[-2200px] 3xl:translate-x-[-55vw] 3xl:translate-y-[12vw] 4xl:translate-x-[-10vw]" : !isMobile},
                            { "hidden" : isMobile})}/>
            <div className={classNames(
                {"translate-x-[6vw] translate-y-[-1vw] leading-[4vw]" : !isMobile},
                {"h-[100vh] flex flex-col justify-center items-center text-center mt-[-10vh]" : isMobile})}>
                <span className={classNames(
                    "font-coolvetica",
                    { "text-[8vw]" : !isMobile},
                    { "text-[8.5vh]" : isMobile}
                )}>
                    <span className="text-[#ffc42d]">
                        Wreck
                    </span>
                    <span className="text-white">
                        Con
                    </span>
                </span>
                <br className={classNames({ "hidden" : isMobile })}/>
                <span className={classNames("font-interbold font-bold text-white",
                    { "text-[3vw]" : !isMobile},
                    { "text-[7vw] mt-[-2vh]" : isMobile}
                )}>
                    {days}:{hours}:{minutes}:{seconds} • 3/2/24
                </span>
                <br/>
                <div className={classNames("font-inter text-white leading-snug",
                    { "text-[2.3vw] w-[40vw]" : !isMobile},
                    { "text-[5vw] w-[90vw] mt-[-2vh]" : isMobile}
                )}>
                    {"WreckCon is " + props.phraseUsed + '.'}
                </div>
            </div>
            <BrowserView>
                <Link className="bg-[#D9D9D9] absolute left-[20vw] top-[82vh] w-fit h-[4vw] flex items-center justify-center" to={'/about'}>
                    <div className="font-inter font-bold text-[#2e2f31] text-[2vw] mx-[3vw]">
                        About WreckCon
                    </div> 
                </Link>
                <Link className="bg-[#FFC42D] absolute left-[6vw] top-[82vh] w-fit h-[4vw] flex items-center justify-center" to={'https://gatech.universitytickets.com/w/event.aspx?id=2002'}>
                    <div className="font-inter font-bold text-[#2e2f31] text-[2vw] mx-[3vw] ">
                        Tickets
                    </div> 
                </Link>
            </BrowserView>
            <MobileView className="flex flex-row items-center justify-center translate-y-[-33vh] space-x-[5vw]">
                <Link className="bg-[#FFC42D] w-[27vw] h-[4vh] flex items-center justify-center rounded-md" to={'https://gatech.universitytickets.com/w/event.aspx?id=2002'}>
                    <div className="font-inter font-bold text-[#2e2f31] text-[4vw] mx-[3vw] ">
                        Tickets
                    </div> 
                </Link>
                <Link className="bg-[#D9D9D9] w-fit h-[4vh] flex items-center justify-center rounded-md" to={'/about'}>
                    <div className="font-inter font-bold text-[#2e2f31] text-[4vw] mx-[3vw]">
                        About WreckCon
                    </div> 
                </Link>
            </MobileView>
        </div>
    </div>
  );
};

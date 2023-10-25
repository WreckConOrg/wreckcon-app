import React from "react";
import { Link } from "react-router-dom";
import { useCountdown } from "../../hooks/countdownTimes";

interface HomeProps {
    phraseUsed: string;
}

export const Home = (props: HomeProps): JSX.Element => {

    const CONDATE = new Date("March 2, 2024 10:00:00").getTime()
    const [days, hours, minutes, seconds] = useCountdown(CONDATE)

  return (
    <div>
        <div className="h-screen bg-[#2e2f31] overflow-hidden">
            <div className="bg-darktape bg-contain bg-repeat-x rotate-[-47.11deg] overflow-hidden
                            w-[6000px] h-[10vw] translate-x-[-1540px]
                            3xl:translate-x-[-43vw] 3xl:translate-y-[-20vw]
                            4xl:translate-x-[-2vw]"/>
            <div className="bg-tape bg-contain bg-repeat-x rotate-[18.55deg] overflow-hidden 
                            w-[6000px] h-[10vw] translate-x-[-2200px]
                            3xl:translate-x-[-55vw] 3xl:translate-y-[12vw]
                            4xl:translate-x-[-10vw]" />
            <div className="translate-x-[6vw] translate-y-[-1vw] leading-[4vw]">
                <span className="font-coolvetica text-[#ffc42d] text-[8vw]">
                    Wreck
                </span>
                <span className="font-coolvetica text-white text-[8vw]">
                    Con
                </span>
                <br/>
                <span className="font-interbold text-[3vw] font-bold text-white">
                    {days}:{hours}:{minutes}:{seconds} • 3/2/24
                </span>
                <br/>
                <div className="font-inter text-[2.3vw] text-white w-[40vw] leading-snug">
                    {"WreckCon is " + props.phraseUsed + '.'}
                </div>
            </div>
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
        </div>
    </div>
  );
};

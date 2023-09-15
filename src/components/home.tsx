import React from "react";

export const Home = (): JSX.Element => {

    const phrases = [
        "100% organic.",
        "the second best convention by Georgia Tech students.",
        "coming to movie theatres near YOU.",
        "NOT a construction company.",
        "trying really hard we swear.",
        "run by students, for students (and everyone else).",
        "for the people.",
        "totally, completely free.",
        "definitely NOT a money laundering scheme.",
        "funny on twitter @conwreck."
    ]

    const phraseUsed = phrases[Math.floor(Math.random() * phrases.length)]

  return (
    <div className="h-screen bg-[#2e2f31] overflow-hidden">
        <div className="bg-darktape bg-contain bg-repeat-x rotate-[-47.11deg] overflow-hidden
                        w-[6000px] h-[10vw] translate-x-[-1700px]"/>
        <div className="bg-tape bg-contain bg-repeat-x rotate-[18.55deg] overflow-hidden 
                        w-[4000px] h-[10vw] translate-x-[-1100px]" />
        <div className="translate-x-[70px] translate-y-[0px] leading-[4em]">
            <span className="font-coolvetica text-[#ffc42d] text-[9vw]">
                Wreck
            </span>
            <span className="font-coolvetica text-white text-[9vw]">
                Con
            </span>
            <br/>
            <span className="font-interbold text-[45px] font-bold text-white">
                00:00:00 • 3/2/24
            </span>
            <br/>
            <div className="font-inter text-[35px] text-white w-[600px] leading-snug">
                {"Wreckcon is " + phraseUsed}
            </div>
        </div>
    </div>
  );
};

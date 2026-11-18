import React from "react";

interface LogoProps {
  logo: any;
  clubTitle: string;
  clubText: string;
  clubLink: string;
}

function ClubLogo(props: LogoProps) {
  return (
    <a href={props.clubLink} target="_blank" rel="noreferrer">
      <div>
        <div className="flex flex-col items-center w-[200px] md:w-[250px] lg:w-[300px] bg-[#D9D9D9] h-[300px] md:h-[300px] lg:h-[350px] my-[2rem]">
          <img
            src={props.logo}
            alt="test"
            className="w-[100px] md:w-[120px] lg:w-[140px] translate-y-[-40px]"
          />
          <div className="font-inter font-bold text-black text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] translate-y-[-30px]">
            {props.clubTitle}
          </div>
          <div className="font-inter text-[.8rem] md:text-[.8rem] lg:text-[1rem] translate-y-[-20px] px-[1rem]">
            {props.clubText}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ClubLogo;

import React from "react";

interface SponsorProps {
  logo: any;
  tier: string;
  cost: string;
  perks: Array<string>;
}

function SponsorLogo(props: SponsorProps) {
  return (
    <div>
      <div className="items-center justify-center font-inter font-bold text-white text-[2.3vw] translate-y-[1.5vw]">
        {props.tier}
      </div>
      <div className="flex flex-col items-center h-[20vw] w-[17vw] bg-[#D9D9D9] my-[3vw]">
        <img
          src={props.logo}
          alt="test"
          className="w-[9vw] translate-y-[-3vw]"
        />
        <p>{props.cost}</p>
        {props.perks.map((txt) => (
          <p>{txt}</p>
        ))}
      </div>
    </div>
  );
}

export default SponsorLogo;

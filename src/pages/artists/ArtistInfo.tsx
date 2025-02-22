import { Desk, Globe, InstagramLogo } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import foxarcada from "./../../assets/guest_pictures/Foxarcada.png";
import { isScreenSizeMedium } from "../../utils/BrowserUtils";

export interface ArtistInfoProps {
  name: string;
  socialLink?: string;
  description?: string;
  instagram?: string;
  website?: string;
  table: string;
  index?: number;
}

export const ArtistInfo = (props: ArtistInfoProps) => {
  // const [hover, setHover] = useState(false);
  //   <div className="w-[150px] md:w-[300px] bg-[#D9D9D9] flex flex-col items-center rounded-lg">
  //   <div
  //     className={`h-12 md:h-20 w-[100%] text-center rounded-t-lg flex flex-col justify-center align-center flex-shrink-0 ${
  //       colors[(props.index ?? 0) % colors.length]
  //     }`}
  //   >
  //     <span className="font-coolvetica text-lg leading-none md:text-3xl px-4">
  //       {props.name}
  //     </span>
  //   </div>

  //   <div className="flex flex-col md:flex-row w-[100%] gap-1 md:gap-4 p-1 md:p-4">
  //     <div className="flex flex-row items-center md:px-4 gap-4 align-center">
  //       <Desk size={iconSize} />
  //       <span className="font-coolvetica text-lgmd:text-3xl mt-1"> A1</span>
  //     </div>
  //     {isScreenSizeMedium && <hr className="h-full w-[2px] bg-black" />}
  //     <div className="flex flex-row gap-2 md:gap-8 items-end">
  //       <Link to="https://instagram.com" target="_blank">
  //         <InstagramLogo size={iconSize} />
  //       </Link>
  //       <Globe size={iconSize} />
  //     </div>
  //   </div>
  // </div>

  {
    /* <div
        className={`h-12 md:h-20 w-[100%] text-center rounded-t-lg flex flex-col justify-center align-center flex-shrink-0 ${
          colors[(props.index ?? 0) % colors.length]
        }`}
      >
        <span className="font-coolvetica text-lg leading-none md:text-3xl px-4">
          {props.name}
        </span>
      </div>

      <div className="flex flex-col md:flex-row w-[100%] gap-1 md:gap-4 p-1 md:p-4">
        <div className="flex flex-row items-center md:px-4 gap-4 align-center">
          <Desk size={iconSize} />
          <span className="font-coolvetica text-lgmd:text-3xl mt-1"> A1</span>
        </div>
        {isScreenSizeMedium && <hr className="h-full w-[2px] bg-black" />}
        <div className="flex flex-row gap-2 md:gap-8 items-end">
          <Link to="https://instagram.com" target="_blank">
            <InstagramLogo size={iconSize} />
          </Link>
          <Globe size={iconSize} />
        </div>
      </div> */
  }

  const colors = [
    "bg-[#659470]",
    "bg-[#FFC42D]",
    "bg-[#64A2FF]",
    "bg-[#A880FF]",
    "bg-[#FF7F41]",
    "bg-[#F04924]",
  ];

  const iconSize = isScreenSizeMedium ? 40 : 20;

  const content = (
    <div className="w-[175px] md:w-[400px] bg-[#D9D9D9] flex flex-col md:flex-row items-center rounded-lg h-full md:h-[80px]">
      <div
        className={`flex flex-row justify-center items-center w-full md:w-[112px] md:px-3 gap-1 md:gap-4 align-center h-[28px] md:h-full ${
          isScreenSizeMedium ? "rounded-l-lg" : "rounded-t-lg"
        } ${colors[(props.index ?? 0) % colors.length]}`}
      >
        <Desk size={iconSize} />
        <div className="font-coolvetica text-lg md:text-3xl">{props.table}</div>
      </div>
      <div>
        <div className="font-coolvetica text-lg leading-none md:text-3xl px-4 py-2 md:py-0 text-wrap align-center">
          {props.name}
        </div>
      </div>
    </div>
  );
  return props.website ? <Link to={props.website}>{content}</Link> : content;
};

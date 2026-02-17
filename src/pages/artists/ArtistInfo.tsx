import { Desk, Globe, InstagramLogo } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  return props.socialLink ? <Link to={props.socialLink}>{content}</Link> : content;
};

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
  logo?: string;
  secondLogo?: string;
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
  const logo = (props.logo || props.secondLogo) && (
          <div className="flex shrink-0 ml-2 -mr-2 my-2 md:my-0">
            {props.logo && (
              <img 
                src={props.logo} 
                alt={`${props.name} logo`} 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white shadow-sm object-cover bg-gray-200"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
            {props.secondLogo && (
              <img 
                src={props.secondLogo} 
                alt={`${props.name} logo 2`} 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white shadow-sm object-cover bg-gray-200"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
          </div>
        );
  const content = (
    <div className="w-[175px] md:w-[400px] bg-[#D9D9D9] flex flex-col md:flex-row items-center rounded-lg h-full md:h-[80px] overflow-hidden">
      <div
        className={`flex flex-row justify-center items-center w-full md:w-[112px] md:px-3 gap-1 md:gap-4 align-center h-[44px] md:h-full ${
          isScreenSizeMedium ? "rounded-l-lg" : "rounded-t-lg"
        } ${colors[(props.index ?? 0) % colors.length]}`}
      >
        <Desk size={iconSize} />
        <div className="font-coolvetica text-lg md:text-3xl">{props.table}</div>
        {isScreenSizeMedium ? null : logo}
      </div>
      {isScreenSizeMedium ? logo : null}
      <div>
        <div className="font-coolvetica text-lg leading-tight md:leading-none md:text-2xl px-4 py-2 md:py-0 items-center text-center">
          {props.name}
        </div>
      </div>
    </div>
  );
  return props.socialLink ? <Link to={props.socialLink}>{content}</Link> : content;
};

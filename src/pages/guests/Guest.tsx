import React from "react";
import { isScreenSizeMedium } from "../../utils/BrowserUtils";

export interface GuestProps {
  name: string;
  role: string;
  bodyText: string;
  picture: string;
  pictureClasses?: string;
}

export const Guest = (props: GuestProps) => {
  return (
    <div className="flex flex-col gap-[0.5vw] w-full">
      <div className="flex flex-row gap-[4vw] items-center md:justify-between">
        {!isScreenSizeMedium && (
          <img
            src={props.picture}
            className={`min-w-[35vw] h-[35vw] rounded object-cover ${props.pictureClasses}`}
            alt={props.name}
          />
        )}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col h-full">
            <span className=" font-coolvetica text-[7vw] md:text-[4vw] text-white">
              {props.name}
            </span>
            <span className="text-[#FFC42D] font-coolvetica text-[5svw] md:text-[2.5vw] text-[#]">
              {props.role}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[1.5vw] md:min-h-[10vw]">
        {isScreenSizeMedium && (
          <img
            src={props.picture}
            className={`w-[24vw] h-[24vw] min-w-[24vw] rounded object-cover ${props.pictureClasses}`}
            alt={props.name}
          />
        )}
        <div className="flex flex-col justify-between gap-[2vw] md:gap-[1vw]">
          <div className="font-inter text-white text-[3vw] md:text-[1.5vw] grow mt-[1vw] md:mt-0 whitespace-pre-wrap">
            {props.bodyText}
          </div>
        </div>
      </div>
      <hr className="w-full mt-[3vw] md:mt-[1vw] mb-[2vw] md:mb-0 bg-[#FFC42D] border-0 h-px" />
    </div>
  );
};

import { MapPinLine } from "@phosphor-icons/react";
import React, { RefObject } from "react";
import { Link } from "react-router-dom";
import { isMobile, isScreenSizeMedium } from "../../utils/BrowserUtils";

export interface EventProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  bodyText: string;
  link?: string;
  buttonText?: string;
  picture: string;
  location?: string;
}

export const Event = React.forwardRef<HTMLDivElement, EventProps>(
  (props: EventProps, ref) => {
    const button = props.link ? (
      <Link
        to={props.link}
        className={`flex flex-col justify-center w-fit h-[6vw] md:h-[3vw] rounded bg-[#FFC42D] mb-[0.25vw] mt-[2vw] md:mt-0`}
      >
        <p className="font-inter w-fit p-[2vw] md:p-[1vw] items-center text-[4vw] md:text-[1.5vw]">
          {` ${props.buttonText} `}
        </p>
      </Link>
    ) : null;
    return (
      <div className="flex flex-col gap-[0.5vw] w-full">
        <div className="flex flex-row gap-[4vw] items-center md:justify-between">
          {!isScreenSizeMedium && (
            <img
              src={props.picture}
              className="w-[35vw] rounded object-cover"
            />
          )}
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div
              className="flex flex flex-row h-full font-coolvetica text-[6vw] md:text-[2.5vw] text-white"
              ref={ref}
            >
              {props.name}
            </div>
            {props.location && (
              <div className="flex flex-row gap-[0.5vw] items-center mb-[1vw] md:mb-0">
                <MapPinLine
                  className="text-white"
                  style={{
                    width: isMobile ? "3vw" : "1.5vw",
                    height: isMobile ? "3vw" : "1.5vw",
                  }}
                />
                <span className="text-[3vw] md:text-[1.5vw] text-white font-inter">
                  {props.location}
                </span>
              </div>
            )}
            {!isScreenSizeMedium && button}
          </div>
        </div>
        <div className="flex flex-row gap-[1.5vw] md:min-h-[10vw]">
          {isScreenSizeMedium && (
            <img
              src={props.picture}
              className="w-[24vw] rounded object-cover"
            />
          )}
          <div className="flex flex-col justify-between gap-[2vw] md:gap-[1vw]">
            <div className="font-inter text-white text-[3vw] md:text-[1.5vw] grow mt-[1vw] md:mt-0 whitespace-pre-wrap">
              {props.bodyText}
            </div>
            {isScreenSizeMedium && button}
          </div>
        </div>
        <hr className="w-full mt-[3vw] md:mt-[1vw] mb-[2vw] md:mb-0 bg-[#FFC42D] border-0 h-px" />
      </div>
    );
  }
);

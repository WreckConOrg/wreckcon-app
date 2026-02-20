import { MapPinLine } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

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
        className="inline-flex items-center justify-center px-5 py-2 rounded bg-[#FFC42D] w-fit mt-4 md:mt-0"
      >
        <span className="font-inter font-bold text-sm md:text-base">
          {props.buttonText}
        </span>
      </Link>
    ) : null;

    return (
      <div className="flex flex-col w-full mb-10 last:mb-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
          <div className="flex flex-col gap-1">
            <h2 
              ref={ref} 
              className="font-coolvetica text-3xl md:text-5xl text-white"
            >
              {props.name}
            </h2>
            
            {props.location && (
              <div className="flex items-center gap-2">
                <MapPinLine size={20} className="text-[#FFC42D]" weight="bold" />
                <span className="text-sm md:text-lg font-inter text-white opacity-90">
                  {props.location}
                </span>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            {button}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          <div className="w-full md:w-[30%] lg:w-[25%] shrink-0">
            <img
              src={props.picture}
              alt={props.name}
              className="w-full aspect-[16/9] md:aspect-[4/3] rounded-lg object-cover shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <p className="font-inter text-white text-base md:text-lg whitespace-pre-line">
              {props.bodyText}
            </p>
            
            <div className="md:hidden">
              {button}
            </div>
          </div>
        </div>

        <hr className="w-full mt-10 border-0 h-px bg-[#FFC42D] " />
      </div>
    );
  }
);
import React from "react";

export interface GuestProps {
  name: string;
  role: string;
  bodyText: string;
  picture: string;
  pictureClasses?: string;
}

export const Guest = (props: GuestProps) => {
  return (
    <div className="flex flex-col w-full group">
      <div className="flex flex-col gap-6 md:gap-10 items-center md:flex-row">
        <div className="w-full md:w-[30%] shrink-0">
          <img
            src={props.picture}
            className={`w-full aspect-square rounded-lg object-cover shadow-lg border border-white/10 ${props.pictureClasses}`}
            alt={props.name}
          />
        </div>
        <div className="flex flex-col flex-grow space-y-2 md:space-y-4">
          <div className="flex flex-col h-full">
            <span className=" font-coolvetica text-4xl md:text-6xl text-white tracking-tight">
              {props.name}
            </span>
            <span className="text-[#FFC42D] font-coolvetica text-xl md:text-3xl tracking-wider">
              {props.role}
            </span>
          </div>
          <div className="font-inter text-white text-base md:text-lg leading-relaxed whitespace-pre-wrap">
            {props.bodyText}
          </div>
        </div>
      </div>
      
      <hr className="w-full mt-8 mb-8 border-0 h-px md:mb-0 bg-[#FFC42D] border-0 h-px" />
    </div>
  );
};

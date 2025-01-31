import React from "react";
import { Link } from "react-router-dom";

export interface ParticipateBoxProps {
  name: string;
  bodyText: string;
  link: string;
  buttonText: string;
  color: string;
  isOpen: boolean;
}

export const ParticipateFormBox = (props: ParticipateBoxProps) => {
  return (
    <div className="h-[40vw] md:h-[22vw] w-[40vw] md:w-[22vw] bg-white flex flex-col items-center rounded-lg">
      <div
        style={{ backgroundColor: props.color }}
        className={`h=[10vw] md:h-[5vw] w-[100%] text-center rounded-t-lg`}
      >
        <p className="mt-[0.5vw] font-coolvetica text-[6vw] md:text-[3vw]">
          {" "}
          {props.name}{" "}
        </p>
      </div>
      <div className="font-inter font-white mt-[1.5vw] mx-[2vw] text-[2vw] md:text-[1.1vw]">
        {props.bodyText}
      </div>
      {props.isOpen ?
      <Link
        to={props.link}
        target="_blank"
        style={{ backgroundColor: props.color }}
        className={`flex flex-col justify-center w-fit h-[6vw] md:h-[3vw] rounded absolute translate-y-[30vw] md:translate-y-[18vw]`}
      >
        <p className="font-inter w-fit mx-[1vw] items-center text-[3vw] md:text-[1.5vw]">
          {` ${props.buttonText} `}
        </p>
      </Link> :
      <div className="font-inter w-fit mt-auto mb-[1vw] mx-[2vw] md:mx-[1vw] items-center text-[3vw] md:text-[1.5vw] text-center">
        Applications are now closed
      </div>
      }
    </div>
  );
};

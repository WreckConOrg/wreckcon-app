import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/contact_logos/instagramlogo.png";
import mail from "../../assets/contact_logos/maillogo.png";
import twitter from "../../assets/contact_logos/twitterlogo.png";
import campusMap from "../../assets/maps/CampusMap.png";
import EH1 from "../../assets/maps/ExhallFloor1Map.png";
import EH2 from "../../assets/maps/ExhallFloor2Map.png";
import IC1 from "../../assets/maps/ICFloor1Map.png";
import IC2 from "../../assets/maps/ICFloor2Map.png";

import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

export const EventInfoPage = (): JSX.Element => {
  const onButtonClick = () => {
    const pdfUrl = "WreckConAllMaps.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "maps.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.EVENT_INFO}
      dropdownSelect="overview"
    >
      <div className="flex flex-col justify-center items-center px-8">
        <div className="font-coolvetica text-white text-4xl md:text-6xl mb-[3rem]">
          Event Info
        </div>
        <div className="w-full flex flex-col gap-3">
          <div
            className={
              "font-inter text-white text-xl md:text-4xl text-left w-full mb-[1rem] grid grid-cols-[1fr_2fr] items-center gap-4"
            }
          >
            <span className="font-bold bg-[#FFC42D] text-black p-[0.5rem] justify-self-end">Venues</span>
            <span> Exhibition Hall, Instructional Center</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full mb-[1rem] grid grid-cols-[1fr_2fr] items-center gap-4"
            }
          >
            <span className="font-bold bg-[#FFC42D] text-black p-[0.5rem] justify-self-end">Date and Time</span>
            <span> February 28, 2026: 10am - 8pm</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full mb-[1rem] grid grid-cols-[1fr_2fr] items-center gap-4"
            }
          >
            <span className="font-bold bg-[#FFC42D] text-black p-[0.5rem] justify-self-end">Address</span>
            <span> 460 Fourth Street NW, Atlanta, GA 30318</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full mb-[2rem] grid grid-cols-[1fr_2fr] items-center gap-4"
            }
          >
            <span className="font-bold bg-[#FFC42D] text-black p-[0.5rem] justify-self-end">Recommended Parking</span>
            <span> 355 Ferst Drive NW, Atlanta, GA 30318 - $3/hr, $15/day</span>
          </div>
          <div
            className={
              "w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left"
            }
          >
            <span>
              More parking info and options, from as low as $5/day, can be viewed
              on the {" "}
            </span>
            <a
              href="https://www.pts.gatech.edu/parking/visitor-parking/"
              target="_blank"
              className="underline"
            >
            Georgia Tech PTS Website
            </a>
            <span>
              .
            </span>
          </div>
          <div
            className={
              "w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left"
            }
          >
            <span>
              If you are taking public transit, the closest MARTA bus stop is
              Marietta St/Means St on bus route 26. Routes 12, 50, 51, and 94
              also offer stops within walking distance.
            </span>
          </div>
          <div
            className={
              "w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left mb-[2rem]"
            }
          >
            <span>
              Regarding cosplays, no NSFW (18+) cosplays are allowed. In addition, regarding prop weapons, 
              live steel and orange tips on guns are both not allowed. 
            </span>
          </div>
        </div>
        <div className="font-coolvetica text-white text-4xl md:text-6xl mb-[4rem]">
          Maps
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 justify-center">
          <div className="col-span-3 flex justify-center">
            <img src={EH1} className="max-w-[30%] object-contain"/>
          </div>
        </div>
      </div>
    </BasePage>
  );
};

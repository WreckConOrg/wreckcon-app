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
      <div className="flex flex-col justify-center items-center px-4 md:px-8">
        <div className="font-coolvetica text-white text-5xl md:text-6xl mb-6 mt-8 md:mt-[2rem] md:mb-[1.5rem]">
          Event Info
        </div>
        <div className="w-full md:w-[90%] self-center h-1 bg-[#FFC42D] mb-6 md:mb-[1.5rem]" />
        <div className="w-full flex flex-col gap-8 md:gap-5">
          {[
            { label: "Venues", value: "Exhibition Hall, Instructional Center" },
            { label: "Date and Time", value: "February 28, 2026: 10am - 8pm" },
            { label: "Address", value: "460 Fourth Street NW, Atlanta, GA 30318" },
            { label: "Recommended Parking", value: "355 Ferst Drive NW, Atlanta, GA 30318 - $3/hr, $15/day" },
          ].map((item, index) => (
            <div
              key={index}
              className="group transition-all hover:bg-white/5 font-inter text-white text-lg md:text-3xl w-full flex flex-col md:grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-8 border-l-4 md:border-r-4 border-[#FFC42D] md:border-none pl-4 md:pl-0"
            >
              <div className="flex items-center md:justify-end md:border-r-4 md:border-[#FFC42D] md:pr-8">
                <span className="font-bold bg-[#FFC42D] tracking-widest text-black px-3 py-1 md:py-2 text-center w-fit">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center md:pl-8">
                <span className="leading-relaxed md:leading-normal">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
          <div className="w-full md:w-[90%] self-center h-1 bg-[#FFC42D] md:mt-[1.5rem] md:mb-[1.5rem]" />
          <div
            className={
              "w-full md:w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left"
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
              "w-full md:w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left"
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
              "w-full md:w-[85%] mx-auto font-inter text-white text-lg md:text-2xl text-left mb-[2rem]"
            }
          >
            <span>
              No NSFW (18+) cosplays are allowed. For prop weapons, 
              live steel is not allowed and prop guns are required to have orange tips. 
            </span>
          </div>
        </div>
        <div className="font-coolvetica text-white text-4xl md:text-6xl mb-[4rem]">
          Maps
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 justify-center">
          <div className="col-span-3 flex justify-center">
            <img src={EH1} className="w-[80%] md:max-w-[30%] object-contain"/>
          </div>
        </div>
      </div>
    </BasePage>
  );
};

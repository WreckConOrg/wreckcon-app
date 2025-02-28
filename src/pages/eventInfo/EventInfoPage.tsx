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
    >
      <div className="flex flex-col justify-center items-center px-8">
        <div className="font-coolvetica text-white text-4xl md:text-6xl mb-4">
          Event Info
        </div>
        <div className="w-full flex flex-col gap-3">
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full"
            }
          >
            <span className="font-bold underline">Venues</span>
            <span> Exhibition Hall, Instructional Center</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full"
            }
          >
            <span className="font-bold underline">Date and Time</span>
            <span> March 1, 2025: 10am - 8pm</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full"
            }
          >
            <span className="font-bold underline">Address</span>
            <span> 460 Fourth Street NW, Atlanta, GA 30318</span>
          </div>
          <div
            className={
              "font-inter text-white  text-xl md:text-4xl text-left w-full"
            }
          >
            <span className="font-bold underline">Recommended Parking</span>
            <span> 355 Ferst Drive NW, Atlanta, GA 30318 - $15/day</span>
          </div>
          <div
            className={
              "font-inter text-white text-lg md:text-2xl text-left w-full"
            }
          >
            <span>
              You can view more parking info and options, from as low as $5/day,
              on{" "}
            </span>
            <a
              href="https://www.pts.gatech.edu/parking/visitor-parking/"
              target="_blank"
              className="underline"
            >
              The Georgia Tech PTS Website
            </a>
          </div>
          <div
            className={
              "font-inter text-white text-lg md:text-2xl text-left w-full"
            }
          >
            <span>
              If you are taking public transit, the closest MARTA bus stop is
              Marietta St/Means St on bus route 26. Routes 12, 50, 51, and 94
              also offer stops within walking distance.
            </span>
          </div>
        </div>
        <div className="font-coolvetica text-white text-4xl md:text-6xl mt-2 mb-4">
          Maps
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <img src={campusMap} />
          <img src={EH1} />
          <img src={EH2} />
          <img src={IC1} />
          <img src={IC2} />
        </div>
      </div>
    </BasePage>
  );
};

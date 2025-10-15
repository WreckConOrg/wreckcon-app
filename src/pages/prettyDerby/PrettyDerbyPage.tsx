import classNames from "classnames";
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
import { isMobile } from "../../utils/BrowserUtils";

import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

export const PrettyDerbyPage = (): JSX.Element => {
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
      selectedItem={NavBarItemEnum.PRETTY_DERBY}
      mobileSelectedItem={NavBarItemEnum.PRETTY_DERBY}
    >
      <div className="flex flex-col justify-center items-center px-8">
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica text-white",
            { "h-[6vw] text-[4vw]": !isMobile },
            { "mt-[2vh] text-[8vw] mb-[-2vh]": isMobile }
          )}
        >
        WreckCon: Pretty Derby
        </div>
        <div
          className={classNames(
            "w-screen bg-[#FFC42D]",
            { "h-[1vw] mt-[3vh]": !isMobile },
            { "h-[1vw] mt-[4vh]": isMobile }
          )}
        />
        <div
          className={classNames(
            "font-inter mb-[1vw] mt-[3vw] text-white",
            { "w-[80vw] text-[1.7vw] mb-[1vw]": !isMobile },
            { "w-[90vw] text-[3.2vw] mt-[3vh] text-center": isMobile }
          )}
        >
        <span className="font-bold underline">Date and Time:</span> Sunday, October 26th 3:30pm - 5:00pm
        </div>
        <div
          className={classNames(
            "font-inter mb-[1vw] text-white",
            { "w-[80vw] text-[1.7vw] mb-[1vw]": !isMobile },
            { "w-[90vw] text-[3.2vw] mt-[1vh] text-center": isMobile }
          )}
        >
        <span className="font-bold underline">Location:</span> J. Allen Couch Park - 888 Hemphill Ave NW, Atlanta, GA, 30332
        </div>
        <div
          className={classNames(
            "w-screen bg-[#FFC42D]",
            { "h-[1vw] mt-[3vh]": !isMobile },
            { "h-[1vw] mt-[2vh]": isMobile }
          )}
        />
        <div
          className={classNames(
            "font-inter mb-[2vw] mt-[3vw] text-white",
            { "w-[80vw] text-[1.7vw] mb-[2vw] mt-[3vw]": !isMobile },
            { "w-[90vw] text-[3.2vw] mt-[3vh] text-center": isMobile }
          )}
        >
        WreckCon: Pretty Derby is a free photoshoot and racing event, in which participants are encouraged to 
        show off their cosplays in addition to their skills on the turf! Four races will be offered for prospective racers, and
        there will be space for spectators to hang out and watch the races. Racers and spectators are highly encouraged to show up in 
        costume/cosplay. 
        </div>
        <div
          className={classNames(
            "font-inter mb-[1vw] text-white",
            { "w-[80vw] text-[1.7vw] mb-[1vw]": !isMobile },
            { "w-[80vw] text-[3.2vw] mt-[3vh] text-center": isMobile }
          )}
        >
        If you would like to sign up as a racer, please fill out the sign up form in our participate page by <span className="font-bold">Wednesday, October 22nd</span>! In addition, if you are interested in cosplaying, 
        please view and follow our <a href="https://docs.google.com/document/d/1ZS0mTv2y7gCex6FFxeWn1rO_7HGixC9jM9oflfhB-fw/edit?tab=t.0" className="text-[#FFC42D] hover:text-[#C7921A] underline transition-colors duration-200">cosplay guidelines</a>.
        </div>
      </div>
    </BasePage>
  );
};

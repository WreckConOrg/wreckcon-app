import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";
import { Schedule } from "./schedule";
import { SCHEDULECONFIG } from "./scheduleConfig";
import classNames from "classnames";
import { BasePage } from "../BasePage";

export const SchedulePage = (): JSX.Element => {
  return (
    <BasePage selectedItem={NavBarItemEnum.SCHEDULE}>
      <>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica text-white",
            { "h-[6vw] text-[4vw]": !isMobile },
            { "mt-[4vh] text-[9vw] mb-[-6vh]": isMobile }
          )}
        >
          Schedule
        </div>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-inter text-white text-center",
            { "h-[3vw] text-[1.7vw]": !isMobile },
            { "mt-[6vh] text-[3vw] mb-[-6vh]": isMobile }
          )}
        >
          WreckCon 2025's schedule is coming soon! Meanwhile, view WreckCon
          2024's schedule below.
        </div>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-inter text-white text-center",
            { "h-[3vw] text-[1.7vw]": !isMobile },
            { "mt-[-6vh] text-[3vw] mb-[6vh]": isMobile }
          )}
        ></div>
        <div className="p-6 md:mb-10 md:px-40 items-center">
          <Schedule items={SCHEDULECONFIG} />
        </div>
      </>
    </BasePage>
  );
};

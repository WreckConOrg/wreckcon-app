import classNames from "classnames";
import { isMobile } from "react-device-detect";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
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
          The schedule for WreckCon 2025 will be available soon!
        </div>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-inter text-white text-center",
            { "h-[3vw] text-[1.7vw]": !isMobile },
            { "mt-[-6vh] text-[3vw] mb-[6vh]": isMobile }
          )}
        ></div>
        <div className="p-6 md:mb-10 md:px-40 items-center">
          {/* <Schedule items={SCHEDULECONFIG} /> */}
        </div>
      </>
    </BasePage>
  );
};

import classNames from "classnames";
import { isMobile } from "react-device-detect";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import Schedule from "./schedule";
import { SCHEDULECONFIG } from "./scheduleConfig2026";

export const SchedulePage = (): JSX.Element => {
  return (
    <BasePage selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.SCHEDULE}
      dropdownSelect="schedule"
    >
      <>
        <div
          className="flex flex-row items-center justify-center font-coolvetica text-white text-5xl mt-10 mb-4 md:text-7xl md:mt-0 md:mb-0 md:h-[120px]"
        >
          Schedule
        </div>
        <div className="flex flex-row">
          <div className="px-4 py-2 md:px-20 lg:px-40 w-full flex flex-col items-center">
            <Schedule items={SCHEDULECONFIG} />
          </div>
        </div>
      </>
    </BasePage>
  );
};

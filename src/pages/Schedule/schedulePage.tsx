import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";
import { Schedule } from "./schedule";
import { SCHEDULECONFIG } from "./scheduleConfig";
import classNames from "classnames";

export const SchedulePage = (): JSX.Element => {

    return (
        <div className="bg-[#2e2f31] h-screen overflow-x-hidden">
            <div className="h-fit bg-[#2e2f31] w-[100vw] overflow-hidden">
                <BrowserView>
                    <Navbar
                    items={NAVBARCONFIG}
                    selectedItem={NavBarItemEnum.SCHEDULE}/>
                </BrowserView>
                <MobileView>
                    <Hamburger selectedItem={NavBarItemEnum.SCHEDULE}/>
                </MobileView>
                <div className={classNames("flex flex-row items-center justify-center font-coolvetica text-white",
                    { "h-[6vw] text-[4vw]" : !isMobile},
                    { "mt-[4vh] text-[9vw] mb-[-6vh]" : isMobile}
                )}>
                    Schedule
                </div>
                <div className={classNames("flex flex-row items-center justify-center font-inter text-white text-center",
                    { "h-[3vw] text-[1.7vw]" : !isMobile},
                    { "mt-[6vh] text-[3vw] mb-[-6vh]" : isMobile}
                )}>
                    WreckCon 2025's schedule is coming soon! Meanwhile, view WreckCon 2024's schedule below.
                </div>
                <div className={classNames("flex flex-row items-center justify-center font-inter text-white text-center",
                    { "h-[3vw] text-[1.7vw]" : !isMobile},
                    { "mt-[-6vh] text-[3vw] mb-[6vh]" : isMobile}
                )}>
                </div>
                <div className="p-6 md:mb-10 md:px-40 items-center">
                    <Schedule items={SCHEDULECONFIG}/>
                </div>
            </div>
        </div>
    )
}
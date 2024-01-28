
import { Navbar } from "../../components/navbar/NavBar";
import { NAVBARCONFIG } from "../../components/navbar/NavBarConfig";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Hamburger } from "../../components/hamburger/hamburger";
import Schedule from "./schedule";
import { SCHEDULECONFIG } from "./scheduleConfig";

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
                <div className="p-6 md:py-10 md:px-40 items-center">
                    <Schedule items={SCHEDULECONFIG}/>
                </div>
            </div>
        </div>
    )
}
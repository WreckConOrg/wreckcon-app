import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { INVOLVEDCONFIG } from "./InvolvedConfig";
import { ParticipateBoxProps, ParticipateFormBox } from "./ParticipateFormBox";
import classNames from "classnames";
import { BrowserView, isMobile, MobileView } from "../../utils/BrowserUtils";


export const Involved = (): JSX.Element => {
  const participateBoxes = INVOLVEDCONFIG.map(
    (item: ParticipateBoxProps, index: number) => {
      return ParticipateFormBox(item);
    }
  );
  return (
    <BasePage
      selectedItem={NavBarItemEnum.GET_INVOLVED}
      mobileSelectedItem={NavBarItemEnum.PARTICIPATE}
      dropdownSelect="participate"
    >
      <div className="flex flex-col justify-center items-center mb-[3vw]">
        <div className={classNames("font-coolvetica text-white", 
          {
            "h-[6vw] text-[4vw]": !isMobile, 
            "w-[90vw] h-fit text-[8vw] mt-[2vw] text-center": isMobile
          }
        )}
        >
          Participate in WreckCon 2026!
        </div>
        {/* <div className="w-[75vw] font-inter text-[1.7vw] mb-[4vw] mt-[2vw] text-white text-center">
                        WreckCon wouldn't be possible without the involvement of countless people, and we're currently looking
                       for to make WreckCon 2024 the best it can be. If you're interested, 
                        check out the tabs below. Perks include free tabling space/paneling spots, and free meals and merch!
                    </div> */}
        {/* <div className="w-[75vw] font-inter text-[1.7vw] mb-[4vw] mt-[2vw] text-white text-center">
                        WreckCon wouldn't be possible without the involvement of countless people, but we are no longer looking
                       for artists, vendors, volunteers, and panelists for WreckCon 2024. However, if you're interested in joining our 
                       <b> cosplay competition</b> or our <b>Smash competition</b>, check out the links below!
                       WreckCon wouldn't be possible without the involvement of countless 
                      people, and we're currently looking for prospective and current students 
                      to join our Registered Student Organization to help organize future 
                      installments of WreckCon over the course of the year. If you're interested, 
                      check out the link below!
                    </div> */}
        <div className={classNames("font-inter text-white text-center", 
          {
            "w-[75vw] text-[1.7vw] mt-[2vw]": !isMobile, 
            "w-[75vw] text-[3.2vw] mt-[4vw]": isMobile
          }
        )}
        // "w-[75vw] font-inter text-[2.5vw] md:text-[1.7vw] mt-[2vw] text-white text-center"
        >
          WreckCon wouldn't be possible without the involvement of countless 
          people, and we're currently looking for <b>artists</b>, <b>vendors</b>, <b>panelists</b>, 
          and <b>volunteers</b> to make WreckCon 2026 the best it can be. In addition, we're looking 
          for prospective or current students to join our Registered Student Organization to help 
          organize future installments of WreckCon. If you're interested, check out the links below!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-[4vw] md:gap-x-[2vw] gap-y-[3vw] md:gap-y-[1.5vw] mt-[4vw]">
          {participateBoxes}
        </div>
      </div>
    </BasePage>
  );
};

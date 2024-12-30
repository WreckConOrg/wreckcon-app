import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { INVOLVEDCONFIG } from "./InvolvedConfig";
import { ParticipateBoxProps, ParticipateFormBox } from "./ParticipateFormBox";

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
        <div className="h-[6vw] font-coolvetica text-white text-[4vw]">
          Participate in WreckCon 2025!
        </div>
        {/* <div className="w-[75vw] font-inter text-[1.7vw] mb-[4vw] mt-[2vw] text-white text-center">
                        WreckCon wouldn't be possible without the involvement of countless people, and we're currently looking
                       for <b>artists</b>, <b>vendors</b>, <b>volunteers</b>, and <b>panelists</b> to make WreckCon 2024 the best it can be. If you're interested, 
                        check out the tabs below. Perks include free tabling space/paneling spots, and free meals and merch!
                    </div> */}
        {/* <div className="w-[75vw] font-inter text-[1.7vw] mb-[4vw] mt-[2vw] text-white text-center">
                        WreckCon wouldn't be possible without the involvement of countless people, but we are no longer looking
                       for artists, vendors, volunteers, and panelists for WreckCon 2024. However, if you're interested in joining our 
                       <b> cosplay competition</b> or our <b>Smash competition</b>, check out the links below!
                    </div> */}
        <div className="w-[75vw] font-inter text-[1.7vw] mt-[2vw] text-white text-center">
          WreckCon wouldn't be possible without the involvement of countless
          people, and we're currently looking for <b>artists</b>, <b>vendors</b>
          , <b>volunteers</b>, <b>indie games</b>, and <b>panelists</b> to make
          WreckCon 2025 the best it can be. Perks include free tabling space and
          free meals/merch! In addition, we're looking for prospective and
          current students to join our Registered Student Organization to help
          organize future installments of Wreckcon over the course of the year.
          If you're interested, check out the links below!
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-x-[2vw] gap-y-[1.5vw] mt-[1.5vw]">
          {participateBoxes}
        </div>
      </div>
    </BasePage>
  );
};

import { createRef, RefObject } from "react";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

import { isMobile } from "../../utils/BrowserUtils";
import { GUESTSCONFIG } from "./GuestsConfig";
import { Guest, GuestProps } from "./Guest";

export const GuestsPage = (): JSX.Element => {
  const guests = GUESTSCONFIG.map((item: GuestProps) => {
    return <Guest {...item} />;
  });
  return (
    <BasePage
      selectedItem={NavBarItemEnum.GUESTS}
      mobileSelectedItem={NavBarItemEnum.GUESTS}
    >
      <div className="flex flex-col justify-center items-center mb-[3vw]">
        <div className="h-[10vw] md:h-[6vw] font-coolvetica text-white text-[6vw] md:text-[4vw]">
          Guests
        </div>
        <div className="flex flex-col gap-[3vw] md:gap-[1.5vw] pt-[3vw] md:pt-[1.5vw] pb-[1.5vw] items-start w-full px-[6vw]">
          {guests}
        </div>
      </div>
    </BasePage>
  );
};

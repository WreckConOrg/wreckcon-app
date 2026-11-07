import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

import { GUESTSCONFIG } from "./GuestsConfig";
import { Guest, GuestProps } from "./Guest";

export const GuestsPage = (): JSX.Element => {
  const guests = GUESTSCONFIG.map((item: GuestProps) => {
    return <Guest {...item} />;
  });
  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.GUESTS}
      dropdownSelect="guests"
    >
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="font-coolvetica text-white text-5xl md:text-7xl mt-10 mb-8 text-center">
          Guests
          <div className="flex pr-4 py-100 font-inter font-thin text-xl md:text-2xl text-white content-center h-dvh">
           Check out our Guests from 2026!
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-16 px-6 md:px-[10vw] items-start w-full">
          {guests}
        </div>
      </div>
    </BasePage>
  );
};

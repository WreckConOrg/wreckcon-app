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
        <div className="font-coolvetica text-white text-5xl md:text-7xl mt-10 mb-8">
          Guests
        </div>
        <div className="flex flex-col gap-8 md:gap-16 px-6 md:px-[10vw] items-start w-full">
          {guests}
        </div>
      </div>
    </BasePage>
  );
};

import BP1 from "../../assets/brochure_pictures/BrochurePageOne.png";
import BP2 from "../../assets/brochure_pictures/BrochurePageTwo.png";

import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

export const BrochurePage = (): JSX.Element => {
  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.BROCHURE}
      dropdownSelect="brochure"
    >
      <div className="flex flex-col justify-center items-center px-4 md:px-8">
        <div className="font-coolvetica text-white text-5xl md:text-6xl mb-6 mt-8">
          Online Brochure
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 bg-white p-2 rounded-sm shadow-2xl">
            <img src={BP1} alt="WreckCon 2026 main stage schedule and overview." className="object-contain"/>
            <img src={BP2} alt="WreckCon 2026 panel schedule and maps." className="object-contain"/>
        </div>
      </div>
    </BasePage>
  );
};
